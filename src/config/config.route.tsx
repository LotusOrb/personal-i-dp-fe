import { FeatureAppLayoutMain } from "@feature/app/layout/main";
import { featureLandingconfigRoutes } from "@feature/landing/config/feature.landing.config.routes";
import { Navigate, Outlet, RouteObject } from "react-router";

export const configRoute: RouteObject[] = [
  ...featureLandingconfigRoutes,
  {
    path: "/404",
    element: <div>Page not found</div>,
  },
  {
    path: "/app",
    element: <FeatureAppLayoutMain />,
    children: [
      {
        path: "*",
        element: "a",
      },
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
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
];
