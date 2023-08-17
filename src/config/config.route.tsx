import { Button } from "antd";
import { Navigate, RouteObject } from "react-router";

export const configRoute: RouteObject[] = [
  {
    path: "/",
    element: (
      <div>
        <Button>click me</Button>
      </div>
    ),
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
