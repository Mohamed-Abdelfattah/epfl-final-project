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
        loader={dashboardLoader}

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
          <Route path="overview" element={<Overview />} />
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
