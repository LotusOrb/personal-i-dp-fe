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
        onMenuClick={(e) => alert(e)}
        menus={[]}
        onLogoClick={() => navigate("/")}
      />
      <SharedComponentResponsiveContainer className="FeatureAppLayoutMain" minHeight={'98vh'}>
        <Outlet />
      </SharedComponentResponsiveContainer>
      <SharedComponentFooter />
    </React.Fragment>
  );
};
