import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>();
  const isHovering = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { isHovering.current = true; };
    const onLeave = () => { isHovering.current = false; };

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }

      // Ring follows with lag
      ring.current.x += (pos.current.x - ring.current.x) * 0.28;
      ring.current.y += (pos.current.y - ring.current.y) * 0.28;

      if (ringRef.current) {
        const scale = isHovering.current ? 1.6 : 1;
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px) scale(${scale})`;
        ringRef.current.style.opacity = isHovering.current ? "0.5" : "0.3";
      }

      raf.current = requestAnimationFrame(animate);
    };

    // Add listeners to interactive elements
    const interactiveEls = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    document.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary z-[9998] pointer-events-none transition-[opacity,transform] duration-200"
        style={{ willChange: "transform", opacity: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
