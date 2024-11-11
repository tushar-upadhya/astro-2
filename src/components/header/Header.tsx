const Header = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <img src="../../../public/assets/images/logo.svg" alt="logo" />
          </div>
          <div>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300">setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
