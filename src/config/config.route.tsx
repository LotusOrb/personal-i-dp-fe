import { FeatureAppLayoutMain } from "@feature/app/layout/main";
import { FeatureAuthHOCLogin } from "@feature/auth/HOC/login";
import { featureJobConfigRoutes } from "@feature/job/config/feature.job.config.routes";
import { featureLandingconfigRoutes } from "@feature/landing/config/feature.landing.config.routes";
import { Navigate, Outlet, RouteObject } from "react-router";

export const configRoute: RouteObject[] = [
  ...featureLandingconfigRoutes,
  {
    path: "/app",
    element: <FeatureAppLayoutMain />,
    children: [...featureJobConfigRoutes],
  },
  {
    path: "/auth",
    element: <Outlet />,
    children: [
      {
        path: "login",
        element: <FeatureAuthHOCLogin />,
      },
      {
        path: "*",
        element: <Navigate to={"/auth/login"} />,
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
