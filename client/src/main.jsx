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
import Dashboard, { loader as dashboardLoader } from "./routes/dashboard";
import Overview, {
  loader as overviewLoader,
} from "./routes/dashboard/overview";
import Tracks, {
  loader as tracksLoader,
  action as tracksAction,
} from "./routes/dashboard/tracks";
import TrackDetails from "./routes/dashboard/tracks/trackDetails";
import AddTrack, {
  action as addTrackAction,
  loader as addTrackLoader,
} from "./routes/dashboard/tracks/AddTrack";
import Trainees, {
  loader as traineesLoader,
} from "./routes/dashboard/trainees";
import TraineeDetails from "./routes/dashboard/trainees/traineeDetails";
import "./index.css";
import { PageTitleProvider } from "./state/pageTitle/PageTitleContext";
import Profile from "./routes/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={
        <ErrorPage
          message="you will be redirected soon..."
          redirectPath={"/"}
        />
      }
    >
      <Route index element={<LandingPage />} />

      <Route path="profile" element={<Profile />} />

      <Route path="dashboard" element={<Dashboard />} loader={dashboardLoader}>
        <Route
          errorElement={
            <ErrorPage message="you can reload the page or navigate back" />
          }
        >
          <Route index element={<Overview />} loader={overviewLoader} />
          <Route
            path="tracks"
            element={<Tracks />}
            loader={tracksLoader}
            action={tracksAction}
          />
          <Route
            path="tracks/add"
            element={<AddTrack />}
            loader={addTrackLoader}
            action={addTrackAction}
          />
          <Route path="tracks/:trackId" element={<TrackDetails />} />

          <Route
            path="trainees"
            element={<Trainees />}
            loader={traineesLoader}
          />
          <Route path="trainees/:traineeId" element={<TraineeDetails />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageTitleProvider>
      <RouterProvider router={router} />
    </PageTitleProvider>
  </React.StrictMode>
);
