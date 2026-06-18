import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-carbon grain overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.12) 0%, transparent 65%)", filter: "blur(60px)" }}
      />
      <div className="text-center relative z-10 px-6">
        <p className="eyebrow mb-6">Page Not Found</p>
        <h1 className="font-display font-semibold text-[8rem] md:text-[12rem] leading-none tracking-[-0.05em] text-bone mb-2 select-none">
          4<span className="accent-serif text-ember-gradient">0</span>4
        </h1>
        <p className="font-serif text-xl md:text-2xl text-bone-dim mb-10">
          This page got pressure-washed away.
        </p>
        <a
          href="/"
          className="group inline-flex items-center gap-2.5 bg-ember text-carbon px-8 py-4 rounded-full font-display font-semibold text-base hover:bg-ember-bright glow-ember-sm transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
