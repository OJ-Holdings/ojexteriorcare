import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
// TODO: Replace beforeSrc values below with actual "before" photos once available.
// Currently using the two result images as stand-ins for the slider demo.
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";

interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
  label: string;
}

const BeforeAfterSlider = ({ beforeSrc, afterSrc, label }: SliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, raw)));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return;
      updateSlider(e.clientX);
    },
    [updateSlider]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateSlider(e.touches[0].clientX);
    },
    [updateSlider]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden border border-border select-none cursor-ew-resize"
      ref={containerRef}
      onTouchMove={handleTouchMove}
    >
      {/* After image — full width, base layer */}
      <img
        src={afterSrc}
        alt={`After — ${label}`}
        draggable={false}
        width={1280}
        height={768}
        className="w-full aspect-[16/10] object-cover block pointer-events-none"
      />

      {/* Before image — clipped to the left of the slider */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={`Before — ${label}`}
          draggable={false}
          width={1280}
          height={768}
          className="w-full h-full object-cover"
        />
        {/* Subtle dark tint on the "before" side to emphasize the contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none z-10">
        <span className="bg-black/70 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none z-10">
        <span className="bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Divider line + drag handle */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={() => { isDragging.current = true; }}
        onTouchEnd={() => { isDragging.current = false; }}
      >
        {/* Vertical line */}
        <div className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)]" />
        {/* Handle pill */}
        <div className="relative w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-white/80">
          <MoveHorizontal className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      {/* Bottom gradient + label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-10">
        <p className="font-heading font-bold text-white text-xl">{label}</p>
        <p className="text-white/60 text-xs mt-0.5">Drag to compare</p>
      </div>
    </motion.div>
  );
};

const pairs: SliderProps[] = [
  {
    beforeSrc: beforeAfter2, // TODO: swap for actual before photo
    afterSrc: beforeAfter1,
    label: "Patio Restoration",
  },
  {
    beforeSrc: beforeAfter1, // TODO: swap for actual before photo
    afterSrc: beforeAfter2,
    label: "Driveway Oil Stain Removal",
  },
];

const BeforeAfter = () => {
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            See the Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Drag the slider to reveal the transformation. Real results from real homes in Kenosha and Racine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pairs.map((pair) => (
            <BeforeAfterSlider key={pair.label} {...pair} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
