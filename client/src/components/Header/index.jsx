import ThemeSelector from "./ThemeSelector";

export default function Header() {
  return (
    <>
      <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
        <nav className="navbar w-full">
          {/* <div className="flex flex-1 md:gap-1 lg:gap-2"> */}
          <div className="flex flex-1 justify-between">
            <label
              htmlFor="drawer"
              aria-label="open menu"
              className="btn btn-square btn-ghost drawer-button lg:hidden "
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>

            <div className="flex flex-1 justify-center">
              <span className="font-title text-base-content text-2xl">
                {"{{Current View}}"}
              </span>
            </div>

            <ThemeSelector />

            <div className="flex items-center gap-2">
              <div className=" w-full max-w-sm flex">
                <button className="btn">
                  <span className="hidden lg:inline-block transition-all">
                    Logout
                  </span>
                  <img
                    className="w-5"
                    src="../../../public/logout-svgrepo-com.svg"
                    alt="logout icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
