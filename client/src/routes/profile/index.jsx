import { Form } from "react-router-dom";
import { useState } from "react";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("@action ---- formData =", updates);
  const res = await fetch(`${import.meta.env.VITE_API_URL_NUM}/api/profile`, {
    method: "POST",
  }).then((res) => res.json());
  console.log(res);
  // should check for errors and only redirect user to the dashboard if there aren't any
  // if(!res.ok || res.error){
  //   // show feedback to the user like a banner asking user to refresh and try again
  // }
}

export default function Profile() {
  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Dummy image array if none provided
  const imagePathArray = Array.from(
    { length: 8 },
    (_, i) => `/flask_assets/imagesDB/avatar-${i + 1}.jpg`
  );

  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-base-200">
      <h2 className="text-2xl font-bold p-6 ">
        First, Let&apos;s know you better!
      </h2>

      <form className="w-4/5" method="post" action="/api/profile">
        <div className="flex flex-col sm:flex-row justify-between items-center space-x-4 space-y-4 sm:space-y-0">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <div className="flex-1">
            <input
              required
              type="text"
              name="first_name"
              id="first_name"
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="First"
            />
          </div>
          <div className="flex-1">
            <input
              required
              type="text"
              name="last_name"
              id="last_name"
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Last"
            />
          </div>
        </div>

        {/* <div className="flex flex-row justify-start space-x-6 w-full mt-4 mb-4">
          <label className="label ">
            <span className="label-text font-medium">Role:</span>
          </label>
          <select
            className="select select-bordered w-1/2"
            name="role"
            id="role"
            required
          >
            <option disabled selected>
              Pick one
            </option>
            <option value="trainer">Trainer</option>
            <option value="trainee">Trainee</option>
          </select>
        </div> */}

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-medium">Choose an image:</span>
          </label>
          <div className="grid grid-cols-4 gap-2 max-w-fit">
            <input
              type="text"
              name="photo_path"
              id="photo_path"
              className="hidden"
              value={selectedImage}
            />
            {imagePathArray.map((imgPath, index) => (
              <img
                key={index}
                src={imgPath}
                alt={`Avatar ${index}`}
                className={`cursor-pointer w-32 md:w-44 transition-all ${
                  selectedImage === imgPath
                    ? "ring-2 ring-offset-2 ring-blue-500"
                    : "ring-1 ring-gray-300"
                }`}
                onClick={() => setSelectedImage(imgPath)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-center  w-full mt-6">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!selectedImage}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
