import React from "react";
// import { savedTheme } from "../../../dist/themeHandler";

export default function ThemeSelector() {
  // script will be added after the component get mounted so that the script can find the elements to manipulate to change theme
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "/themeHandler.js";
    // script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1 transition-all">
        <img className="w-5" src="/themes-svgrepo-com.svg" alt="theme icon" />
        <span className="hidden lg:inline-block transition-all">Theme</span>
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="light"
            id="light-theme-input"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="dark"
            id="dark-theme-input"
          />
        </li>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Nord"
            value="nord"
            id="nord-theme-input"
          />
        </li>
      </ul>
      <script src="./themeHandler.js"></script>
    </div>
  );
}
