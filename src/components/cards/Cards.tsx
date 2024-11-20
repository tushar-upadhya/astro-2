import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import TextButton from "../textButton/TextButton";

const Cards = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  }
) => {
  const { color, children, className, buttonText } = props;

  return (
    <div
      className={twMerge(
        "relative z-0 p-8 md:p-10 max-w-xs group md:max-w-md group",
        className
      )}
    >
      <div
        className={twMerge(
          "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
          color === "lime" && "bg-lime-500"
        )}
      />
      <div
        className={twMerge(
          "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 group-hover:bg-fuchsia-400 transition duration-300",
          color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400"
        )}
      />
      <div>{children}</div>
      <div
        className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl"
        style={{
          maskImage:
            "linear-gradient(225deg, transparent, transparent 40px, black 40px)",
          WebkitMaskImage:
            "linear-gradient(225deg, transparent, transparent 40px, black 40px)", // For WebKit browsers
        }}
      />

      <div className="flex justify-between mt-12">
        {/* text button */}
        <TextButton color={color}>{buttonText}</TextButton>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cards;
