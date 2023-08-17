import { RouteObject } from "react-router";
import { FeatureJobHOCJoblist } from "../HOC/joblist";

export const featureJobConfigRoutes: RouteObject[] = [
  {
    path: "job-listing",
    element: <FeatureJobHOCJoblist />,
  },
  {
    path: "job-listing/:id",
    element:<div>detail</div>,
  },
];
