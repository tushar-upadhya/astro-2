import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CommanButton from "../commanButton/CommanButton";
import Hexagon from "../hexagon/Hexagon";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky z-40 top-0 bg-zinc-900/50 backdrop-blur-lg">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            {/* Logo */}
            <div>
              <img src="/assets/images/logo.svg" alt="logo" className="h-10" />
            </div>

            {/* Button for large screens */}
            <CommanButton
              children="Get Started"
              className="hidden md:inline-flex"
            />

            {/* Hamburger Menu */}
            <div
              className="md:hidden size-10 relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {/* Hamburger Lines */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-1">
                <div
                  className={`w-5 h-0.5 bg-zinc-300 transform transition-transform ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></div>
                <div
                  className={`w-5 h-0.5 bg-zinc-300 transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-5 h-0.5 bg-zinc-300 transform transition-transform ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-zinc-900"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 z-0">
              {/* Hexagon Backgrounds */}
              <motion.div
                className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hexagon className="size-[700px]" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Hexagon className="size-[1100px]" />
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                className="h-full flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <nav className="flex flex-col items-center gap-12">
                  {navLinks.map(({ title, href }) => (
                    <a
                      href={href}
                      key={title}
                      className="text-4xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300"
                    >
                      {title}
                    </a>
                  ))}
                </nav>

                {/* Get Started Button */}
                <div className="mt-8">
                  <CommanButton>Get Started</CommanButton>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
