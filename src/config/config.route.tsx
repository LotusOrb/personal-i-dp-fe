import { FeatureAppLayoutMain } from "@feature/app/layout/main";
import { featureJobConfigRoutes } from "@feature/job/config/feature.job.config.routes";
import { featureLandingconfigRoutes } from "@feature/landing/config/feature.landing.config.routes";
import { Navigate, Outlet, RouteObject } from "react-router";

export const configRoute: RouteObject[] = [
  ...featureLandingconfigRoutes,
  {
    path: "/app",
    element: <FeatureAppLayoutMain />,
    children: [
      ...featureJobConfigRoutes
    ],
  },
  {
    path: "/auth",
    element: <Outlet />,
    children: [
      {
        path: "*",
        element: "a",
      },
    ],
  },
  {
    path: "/404",
    element: <div>Page not found</div>,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
];
