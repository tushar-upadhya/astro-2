import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
const Circle = (
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) => {
  const { className, children, animate } = props;

  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] relative inline-flex items-center justify-center rounded-full",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 22,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-red-500 border-transparent ",

          animate && "border-t-fuchsia-500/30"
        )}
      />
      {children}
    </div>
  );
};

export default Circle;
