import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import Dashboard from "./routes/dashboard";
import Overview from "./routes/dashboard/overview";
import Tracks from "./routes/dashboard/tracks";
import TrackDetails from "./routes/dashboard/tracks/trackDetails";
import Trainees from "./routes/dashboard/trainees";
import TraineeDetails from "./routes/dashboard/trainees/traineeDetails";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route index element={<LandingPage />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        // loader={contactLoader}
        // action={contactAction}
      >
        <Route errorElement={<ErrorPage />}>
          {/* 
          <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
          <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
          />
        <Route path="contacts/:contactId/destroy" action={destroyAction} /> */}
          <Route index path="overview" element={<Overview />} />
          <Route path="tracks" element={<Tracks />} />
          <Route path="tracks/:trackId" element={<TrackDetails />} />
          <Route path="trainees" element={<Trainees />} />
          <Route path="trainees/:traineeId" element={<TraineeDetails />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
