import CommanButton from "../commanButton/CommanButton";

const Header = () => {
  return (
    <header className="sticky z-40 top-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex md:h-28 justify-between items-center h-24 ">
          <div>
            <img src="../../../public/assets/images/logo.svg" alt="logo" />
          </div>

          {/* button */}
          <div className="flex gap-4 items-center"></div>
          <CommanButton
            children={"Get Started"}
            className="hidden md:inline-flex"
          />
          {/* Hamburger */}
          <div>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
