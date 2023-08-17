import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { SharedComponentNavbar } from "@shared/component/navbar";
import { SharedComponentResponsiveContainer } from "@shared/component/responsivecontainer";
import { SharedComponentFooter } from "@shared/component/footer";
import "./feature.app.layout.main.scss";

export const FeatureAppLayoutMain = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <SharedComponentNavbar
        menus={[
          { label: "Home", key: "/", type: "link" },
          { label: "Job Listing", key: "/app/job-listing", type: "link" },
          { label: "Login", key: "/auth/login", type: "button" },
        ]}
        onLogoClick={() => navigate("/")}
      />
      <SharedComponentResponsiveContainer className="FeatureAppLayoutMain">
        <Outlet />
      </SharedComponentResponsiveContainer>
      <SharedComponentFooter />
    </React.Fragment>
  );
};
