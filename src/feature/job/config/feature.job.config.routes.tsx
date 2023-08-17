import { RouteObject } from "react-router";
import { FeatureJobHOCJoblist } from "../HOC/joblist";
import { FeatureJobHOCJobDetail } from "../HOC/jobdetail";

export const featureJobConfigRoutes: RouteObject[] = [
  {
    path: "job-listing",
    element: <FeatureJobHOCJoblist />,
  },
  {
    path: "job-listing/:id",
    element: <FeatureJobHOCJobDetail />,
  },
];
