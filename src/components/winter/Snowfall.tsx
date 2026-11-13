import { useEffect, useRef, useState } from "react";

// Lightweight canvas snowfall. No dependencies.
// Fixed to the viewport, never takes pointer events, hidden from screen readers.
// Layered above page content (z-40) but below the header/banner/floating CTA (z-50),
// modals (z-50) and toasts. Starts after first paint, pauses in background tabs,
// and renders nothing at all for prefers-reduced-motion.

type Flake = {
  x: number; // base x, drifts with the wind
  y: number;
  r: number; // core radius in CSS px
  vy: number; // fall speed, px/s
  sway: number; // sideways sway amplitude, px
  freq: number; // sway frequency, rad/s
  phase: number;
  alpha: number;
  sprite: number; // 0 frost white, 1 ice
};

const DESKTOP_COUNT = 70;
const MOBILE_COUNT = 35;
const WIND = 7; // px/s, gentle constant drift to the right
const SPRITE_SIZE = 32;

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const prefersReducedMotion = () =>
  typeof window !== "undefined" && !!window.matchMedia?.(reducedMotionQuery).matches;

function makeSprite(rgb: string) {
  const c = document.createElement("canvas");
  c.width = c.height = SPRITE_SIZE;
  const g = c.getContext("2d")!;
  const h = SPRITE_SIZE / 2;
  const grad = g.createRadialGradient(h, h, 0, h, h, h);
  grad.addColorStop(0, `rgba(${rgb},1)`);
  grad.addColorStop(0.35, `rgba(${rgb},0.85)`);
  grad.addColorStop(0.6, `rgba(${rgb},0.25)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
  return c;
}

function makeFlake(w: number, h: number, anywhere: boolean): Flake {
  const depth = Math.random(); // 0 far, 1 near: near flakes are bigger and faster
  return {
    x: Math.random() * w,
    y: anywhere ? Math.random() * h : -10 - Math.random() * 40,
    r: 0.7 + depth * 1.9,
    vy: 16 + depth * 34 + Math.random() * 8,
    sway: 6 + Math.random() * 16,
    freq: 0.35 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.35 + depth * 0.45,
    sprite: Math.random() < 0.55 ? 0 : 1,
  };
}

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(() => !prefersReducedMotion());
  const [started, setStarted] = useState(false);

  // Follow live changes to the reduced-motion setting
  useEffect(() => {
    const mq = window.matchMedia?.(reducedMotionQuery);
    if (!mq) return;
    const onChange = () => setEnabled(!mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let t = 0;
    let running = false;
    const flakes: Flake[] = [];
    const sprites = [makeSprite("238,246,251"), makeSprite("207,231,244")]; // --frost, --ice

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = w < 768 ? MOBILE_COUNT : DESKTOP_COUNT;
      if (flakes.length > target) flakes.length = target;
      while (flakes.length < target) flakes.push(makeFlake(w, h, true));
      for (const f of flakes) {
        if (f.x > w) f.x = Math.random() * w;
        if (f.y > h) f.y = Math.random() * h;
      }
    };

    const frame = (now: number) => {
      const dt = Math.min((now - (last || now)) / 1000, 0.05); // clamp after jank
      last = now;
      t += dt;
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        f.y += f.vy * dt;
        f.x += WIND * dt;
        if (f.y - f.r * 2 > h) {
          Object.assign(f, makeFlake(w, h, false));
        }
        if (f.x > w + 20) f.x -= w + 40;
        const x = f.x + Math.sin(t * f.freq + f.phase) * f.sway;
        const s = f.r * 4; // sprite includes the soft halo
        ctx.globalAlpha = f.alpha;
        ctx.drawImage(sprites[f.sprite], x - s / 2, f.y - s / 2, s, s);
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(resize);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    // Wait until the browser is idle after first paint so snow never competes with load
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    const boot = () => {
      resize();
      setStarted(true);
      start();
      window.addEventListener("resize", onResize, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    };
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(boot, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(boot, 600);
    }

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      stop();
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`fixed inset-0 z-40 w-full h-full pointer-events-none transition-opacity duration-1000 ${
        started ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default Snowfall;
