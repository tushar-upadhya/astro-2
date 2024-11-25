import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CommanButton from "../../components/commanButton/CommanButton";
import TextButton from "../../components/textButton/TextButton";

const listItem = [
  "Experience unparalleled security and scalability",
  "Fully benefits from scalability network effects",
  "Experience unparalleled security and scalability",
  "Fully benefits from scalability network effects",
];
const FeaturedGrid = () => {
  const torusKnotRef = useRef(null);
  const firstHemisphereRef = useRef(null);

  const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });

  const torusKnotTranslateY = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [100, -100]
  );

  const torusKnotRotate = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [30, -30]
  );

  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });

  const firstHemisphereTranslateY = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );

  const firstHemisphereRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-20, 10]
  );

  const coneRef = useRef(null);

  const { scrollYProgress: conScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });

  const coneTranslateY = useTransform(
    firstHemisphereScrollYProgress,
    [100, -100],
    [50, -50]
  );

  const coneRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [180, 45]
  );

  return (
    <section className="py-24 overflow-x-clip ">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                BlockForge provides robust and secure infrastructure to support
                next generation or decentralized applications
              </p>

              <ul className="flex flex-col gap-8 mt-12">
                {listItem.map((item) => {
                  return (
                    <li key={item} className="flex items-center gap-3">
                      <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full ">
                        <div className="size-1.5 bg-fuchsia-500 rounded-full" />
                      </div>
                      <span className="text-xl font-bold">{item}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex gap-8 mt-12">
                <CommanButton children={"Get Started"} />
                <TextButton children={"Learn More"} />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <motion.img
                  src="/assets/images/torus-knot.png"
                  alt="image"
                  className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                    translateY: torusKnotTranslateY,
                    rotate: torusKnotRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="image"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                    translateY: firstHemisphereTranslateY,
                    rotate: firstHemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>

          {/* second */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0 ">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="image"
                  className="size-96 max-w-none rotate-12"
                  ref={coneRef}
                  style={{
                    translateY: coneTranslateY,
                    rotate: coneRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="image"
                  className="absolute top-3/4 -z-10 right-0 "
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                BlockForge leads the way
              </h2>

              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  BlockForge is dedicated to supporting the evolution of web3
                  applications by delivering the necessary infrastructure and
                  security for web3
                </p>

                <p>
                  BlockForge champtions web3 for everyone. As a decentralized
                  blockchain scaling platform, BlockForge enables developers to
                  create scalable, user-friendly Apps with low transaction
                  costs, all while ensuring robust security
                </p>
              </div>

              <div className="flex gap-8 mt-12 ">
                <CommanButton children={"Get Started"} />
                <TextButton children={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
