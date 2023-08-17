import React from "react";
import { PullRequests } from "@icon-park/react";
import { Button, Typography } from "antd";

import { SharedComponentResponsiveContainer } from "@shared/component/responsivecontainer";
import "./shared.component.navbar.scss";

export interface SharedComponentNavbarProps {
  menus: Array<{
    type: "link" | "button";
    key: string;
    label: string;
  }>;
  onMenuClick: (e: string) => void;
  onLogoClick?: () => void;
}

export const SharedComponentNavbar: React.FC<SharedComponentNavbarProps> = ({
  menus,
  onMenuClick,
  onLogoClick
}) => {
  return (
    <div className="SharedComponentNavbar">
      <SharedComponentResponsiveContainer className="SharedComponentNavbar__wrapper">
        <div className="SharedComponentNavbar__title-wrap" onClick={onLogoClick}>
          <PullRequests
            theme="two-tone"
            size="24"
            fill={["#1677ff", "#ffffff"]}
            strokeWidth={4}
            strokeLinejoin="miter"
          />
          <Typography.Text>
            <b>Github</b>
            <span> Jobs</span>
          </Typography.Text>
        </div>
        <div className="SharedComponentNavbar__menu-wrap">
          {menus.map((v) => (
            <Typography.Text
              key={v.key}
              className="SharedComponentNavbar__menu-item"
              onClick={() => onMenuClick(v.key)}
            >
              {v.type === "link" && v.label}
              {v.type === "button" && <Button type="primary">{v.label}</Button>}
            </Typography.Text>
          ))}
        </div>
      </SharedComponentResponsiveContainer>
    </div>
  );
};
