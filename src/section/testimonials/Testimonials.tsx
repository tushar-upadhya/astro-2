import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "The User experience, and the support team is always there to help.",
    name: " Erica wyatt",
    title: "Product Manager - unknown",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "The User experience, and the support team is always there to help.",
    name: " Erica wyatt",
    title: "Product Manager - unknown",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The User experience, and the support team is always there to help.",
    name: " Erica wyatt",
    title: "Product Manager - unknown",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((item, index) => {
            return (
              <motion.blockquote
                key={index}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.5,
                  ease: "easeInOut",
                  duration: 1,
                }}
                className={twMerge(index === 2 && "md:hidden lg:block")}
              >
                <p className="font-heading text-3xl lg:text-4xl font-black">
                  &ldquo;{item.text} &rdquo;
                </p>
                <cite className="mt-8 block ">
                  <div className="flex gap-3 items-center ">
                    <div>
                      <div
                        className="size-16 bg-zinc-700 rounded-full bg-cover"
                        style={{
                          backgroundImage: `url(${item.avatarImage}`,
                        }}
                      />
                    </div>
                    <div className="text-lg not-italic font-black">
                      {item.name}
                    </div>
                    <div className="text-zinc-400 not-italic">{item.title}</div>
                  </div>
                </cite>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
