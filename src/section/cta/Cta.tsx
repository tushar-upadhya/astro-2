import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Circle from "../../components/circle/Circle";
import CommanButton from "../../components/commanButton/CommanButton";
import Hexagon from "../../components/hexagon/Hexagon";

const Cta = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden">
      <div className="container">
        <div className="relative">
          {/* Hexagon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px] " />
          </div>
          {/* Hexagon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" />
          </div>

          {/* Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]">
              <motion.img
                src="/assets/images/cuboid.png"
                alt="cube image"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>
          {/* Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]">
              <motion.img
                src="/assets/images/cylinder.png"
                alt="cube image"
                className="size-[140px]"
                style={{
                  rotate: rotate,
                }}
              />
            </Circle>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to
            <span className="block">get Started ?</span>
          </h2>
          <p className="text-xl max-w-sm  lg:text-2xl mx-auto text-zinc-400 text-center mt-8">
            Start building using blockchain technology with blockForge
          </p>
          <div className="flex justify-center mt-12">
            <CommanButton>Get Started</CommanButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
