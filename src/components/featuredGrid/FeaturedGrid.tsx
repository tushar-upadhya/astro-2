import CommanButton from "../commanButton/CommanButton";
import TextButton from "../textButton/TextButton";

const listItem = [
  "Experience unparalleled security and scalability",
  "Fully benefits from scalability network effects",
  "Experience unparalleled security and scalability",
  "Fully benefits from scalability network effects",
];
const FeaturedGrid = () => {
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
                <img
                  src="/assets/images/torus-knot.png"
                  alt="image"
                  className="size-96 max-w-none"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="image"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          {/* second */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0 ">
                <img
                  src="/assets/images/cone.png"
                  alt="image"
                  className="size-96 max-w-none rotate-12"
                />
                <img
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