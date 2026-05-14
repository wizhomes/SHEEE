import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Impact() {
  const stats = [
    { label: "Communities reached", value: 124, suffix: "+" },
    { label: "Volunteers active", value: 50, suffix: "+" },
    { label: "Programs Done", value: 50, suffix: "+" },
  ];

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Background visual motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-3">
                <CountUp end={stat.value} />
                {stat.suffix}
              </h3>
              <p className="text-white/80 font-medium uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
