import React, { useEffect, useState } from "react";
import { PullRequests } from "@icon-park/react";
import { Avatar, Button, Dropdown, Space, Typography } from "antd";
import { NavLink } from "react-router-dom";

import { SharedComponentResponsiveContainer } from "@shared/component/responsivecontainer";
import "./shared.component.navbar.scss";
import { CoreServiceFirbaseInstance } from "@core/service/core.service.firebase";

export interface SharedComponentNavbarProps {
  menus: Array<{
    type: "link" | "button";
    key: string;
    label: string;
  }>;
  onMenuClick?: (e: string) => void;
  onLogoClick?: () => void;
}

export const SharedComponentNavbar: React.FC<SharedComponentNavbarProps> = ({
  menus,
  onMenuClick,
  onLogoClick,
}) => {
  // TODO: Refactor this :)
  const [state, setState] = useState<{
    isLoggedIn: boolean;
    photo?: string;
    name?: string;
  }>({ isLoggedIn: false });

  // TODO: Refactor this :)
  useEffect(() => {
    const $subs = CoreServiceFirbaseInstance.auth.onAuthStateChanged((x) => {
      if (x) {
        setState({
          ...state,
          isLoggedIn: true,
          photo: x.photoURL || "",
          name: x.displayName || "",
        });
        console.log(x);
      }
    });
    return () => {
      $subs();
    };
  }, []);

  return (
    <div className="SharedComponentNavbar">
      <SharedComponentResponsiveContainer className="SharedComponentNavbar__wrapper">
        <div
          className="SharedComponentNavbar__title-wrap"
          onClick={onLogoClick}
        >
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
          {!state.isLoggedIn && (
            <>
              {menus.map((v) => (
                <NavLink
                  to={v.key}
                  className={(p) =>
                    p.isActive
                      ? "SharedComponentNavbar__menu-item SharedComponentNavbar__menu-item--active"
                      : "SharedComponentNavbar__menu-item"
                  }
                  key={v.key}
                  onClick={() => onMenuClick && onMenuClick(v.key)}
                  style={{}}
                >
                  {v.type === "link" && v.label}
                  {v.type === "button" && (
                    <Button type="primary">{v.label}</Button>
                  )}
                </NavLink>
              ))}
            </>
          )}
        </div>
        {state.isLoggedIn && (
          <Dropdown
            menu={{
              items: [
                {
                  label: "Job List",
                  key: "a",
                  onClick: () => onMenuClick && onMenuClick("/app/job-listing"),
                },
                {
                  label: "logout",
                  style: { color: "red" },
                  key: "b",
                  onClick: () => {
                    CoreServiceFirbaseInstance.logOut()
                      .then(() => window.location.reload())
                      .catch(() => window.location.reload());
                  },
                },
              ],
            }}
            placement="bottomRight"
          >
            <Space style={{ cursor: "pointer" }}>
              <Typography.Text>{state.name}</Typography.Text>
              <Avatar src={state.photo} />
            </Space>
          </Dropdown>
        )}
      </SharedComponentResponsiveContainer>
    </div>
  );
};
