import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Circle from "../../components/circle/Circle";
import CommanButton from "../../components/commanButton/CommanButton";
import Hexagon from "../../components/hexagon/Hexagon";

const Hero = () => {
  const motionRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress } = useScroll({
    target: motionRef,
    offset: ["start end", "end start"],
  });

  const motionScrollYProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -45]
  );

  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wide">
          Introducing BlockForge
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl">
          The Future of Blockchain is here
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
          BlockForge is pioneering smart contract integrity with cutting edge
          data solution
        </p>

        <div className="flex justify-center mt-10">
          <CommanButton className="" children="Get Started" />
        </div>

        <div className="flex justify-center mt-24">
          <div className="inline-flex mt-24 relative z-0">
            {/* HEXAGON.SVG */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>

            {/* CUBE IMAGE */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[270px] -top-[900px]" animate>
                <motion.img
                  src="/assets/images/cube.png"
                  alt="cube image"
                  className="size-[140px]"
                  ref={cubeRef}
                  style={{
                    rotate: cubeRotate,
                  }}
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] top-[270px]" animate>
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="cube image"
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{
                    rotate: cuboidRotate,
                  }}
                />
              </Circle>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]" animate>
                <motion.img
                  src="/assets/images/torus.png"
                  alt="cube image"
                  className="size-[140px]"
                  ref={torusRef}
                  style={{
                    rotate: torusRotate,
                  }}
                />
              </Circle>
            </div>

            {/* IMAGES */}
            <motion.div
              className="inline-flex"
              ref={motionRef}
              style={{
                rotate: motionScrollYProgress,
              }}
            >
              <img
                src="/assets/images/icosahedron.png"
                alt=""
                className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="image"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>

        {/* SCROLL TO LEARN MORE */}
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-[6px] justify-center pt-2 outline-fuchsia-500/10 inline-flex rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wide">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
