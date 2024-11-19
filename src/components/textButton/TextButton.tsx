import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
  const { className, children, color } = props;

  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wide text-fuchsia-500",
        color === "lime" && "text-lime-500",
        className
      )}
    >
      {children}
    </button>
  );
};

export default TextButton;
