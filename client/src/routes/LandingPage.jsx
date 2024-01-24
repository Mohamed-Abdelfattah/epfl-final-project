import { Link } from "react-router-dom";

function App() {
  //

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
      <div className="text-center mb-6">
        <p className="text-4xl md:text-5xl font-extrabold">
          Training Progress Tracker
        </p>
      </div>

      <div className="mb-8 px-4">
        <p className="text-xl md:text-2xl font-semibold">
          Where trainers and trainees can track their progress through different
          tracks
        </p>
      </div>

      <div>
        <a
          href="login"
          className="inline-block bg-white text-indigo-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Get started
        </a>
      </div>
    </div>
  );
}

export default App;
