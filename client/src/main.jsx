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
import Overview from "./routes/dashboard/overview";
import Tracks, { loader as tracksLoader } from "./routes/dashboard/tracks";
import TrackDetails from "./routes/dashboard/tracks/trackDetails";
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
      // loader={rootLoader}
      // action={rootAction}
      errorElement={
        <ErrorPage
          message="you will be redirected soon..."
          redirectPath={"/"}
        />
      }
    >
      <Route index element={<LandingPage />} />

      {/* for now profile page will only be accessed once, when the user signs up or logs in without filing in the profile info */}
      <Route path="profile" element={<Profile />} />

      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={dashboardLoader}

        // action={contactAction}
      >
        <Route
          errorElement={
            <ErrorPage message="you can reload the page or navigate back" />
          }
        >
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
          <Route index caseSensitive element={<Overview />} />
          <Route path="tracks" element={<Tracks />} loader={tracksLoader} />
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
