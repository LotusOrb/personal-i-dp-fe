import React from "react";
import { configRoute } from "@config/config.route";
import { BrowserRouter, useRoutes } from "react-router-dom";

const InternalRoutes = () => {
  const routes = useRoutes(configRoute);
  return routes;
};

export const CoreProviderRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <InternalRoutes />
    </BrowserRouter>
  );
};
