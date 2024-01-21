export default function Header() {
  return (
    <>
      {/* <!-- Mobile header with hamburger menu --> */}
      <header className="bg-gray-100 shadow p-4 flex items-center justify-between md:hidden">
        <button id="menuButton" className="text-gray-500 focus:outline-none">
          {/* <!-- Hamburger icon SVG --> */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-center flex-1">
          Current View
        </h1>
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full object-cover mr-2"
            src="https://gravatar.com/avatar/e58c00bb45a80aff0bbe6c27c05e17d8?s=400&d=mp&r=x"
            alt="User Avatar"
          />
          {/* <!-- Logout icon for mobile view --> */}
          <button className="text-gray-800 focus:outline-none">
            {/* <!-- Logout icon SVG --> */}
            <svg
              className="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M17.707 10.707l-5.314 5.314-1.414-1.414L14.586 12H8V8h6.586l-3.607-3.607 1.414-1.414 5.314 5.314zM16 0H4C1.791 0 0 1.791 0 4v12c0 2.209 1.791 4 4 4h12c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zm0 16H4V4h12v12z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* <!-- Main header (visible on medium and larger screens) --> */}
      <header className="bg-gray-100 shadow p-4 hidden md:flex md:items-center md:justify-between">
        <h1 className="text-xl font-semibold">Current View</h1>
        {/* <!-- Logout button for larger screens --> */}
        <button className="border border-gray-800 text-gray-800 rounded-full px-4 py-1 flex items-center focus:outline-none">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            {/* <!-- Logout icon SVG --> */}
            <svg
              className="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M17.707 10.707l-5.314 5.314-1.414-1.414L14.586 12H8V8h6.586l-3.607-3.607 1.414-1.414 5.314 5.314zM16 0H4C1.791 0 0 1.791 0 4v12c0 2.209 1.791 4 4 4h12c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4zm0 16H4V4h12v12z"></path>
            </svg>
          </svg>
          Logout
        </button>
      </header>
    </>
  );
}
