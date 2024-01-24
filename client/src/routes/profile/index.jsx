import { Form } from "react-router-dom";

export default function Profile({ images = [] } = {}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col  justify-center items-center h-screen bg-base-100 ">
        <Form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <div className="flex-1">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="First"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Last"
            />
          </div>
        </Form>

        <p>Profile</p>
      </div>
    </div>
  );
}
