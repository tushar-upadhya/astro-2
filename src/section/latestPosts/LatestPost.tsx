import type { CollectionEntry } from "astro:content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Cards from "../../components/cards/Cards";
import CommanButton from "../../components/commanButton/CommanButton";
import Tag from "../../components/tag/Tag";
import { getPostColorFromCategory } from "../../utils/postUtils";

const LatestPost = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
  const { latestPosts } = props;

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 61]);

  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Your Portal to everything blockchain
          </h2>
          <p className="text-xl  lg:text-2xltext-center text-zinc-400 mt-8">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly
          </p>
        </div>

        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* odd */}
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, index) => {
                return (
                  <div>
                    <Cards
                      key={index}
                      buttonText="Read More"
                      color={getPostColorFromCategory(category)}
                      className={twMerge(
                        (index === 1 || index === 3) && "md:hidden"
                      )}
                    >
                      <Tag color={getPostColorFromCategory(category)}>
                        {category}
                      </Tag>
                      <h3 className="font-heading font-black text-3xl mt-3">
                        {title}
                      </h3>
                      <p className="text-lg text-zinc-400 mt-6">
                        {description}
                      </p>
                    </Cards>
                  </div>
                );
              }
            )}
          </div>
          {/* even */}
          <motion.div
            className="hidden md:flex flex-col gap-8 mt-16"
            ref={targetRef}
            style={{
              marginTop: 0,
            }}
          >
            {latestPosts.map(
              ({ data: { title, description, category } }, index) => {
                return (
                  <div>
                    <Cards
                      key={index}
                      buttonText="Read More"
                      color={getPostColorFromCategory(category)}
                      className={twMerge(
                        (index === 0 || index === 2) && "md:hidden"
                      )}
                    >
                      <Tag color={getPostColorFromCategory(category)}>
                        {category}
                      </Tag>
                      <h3 className="font-heading font-black text-3xl mt-3">
                        {title}
                      </h3>
                      <p className="text-lg text-zinc-400 mt-6">
                        {description}
                      </p>
                    </Cards>
                  </div>
                );
              }
            )}
          </motion.div>
        </div>

        <div className="flex justify-center mt-48 md:mt-32">
          <CommanButton>Read the Blog</CommanButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
