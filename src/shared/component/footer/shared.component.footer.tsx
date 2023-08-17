import React from "react";
import { SharedComponentResponsiveContainer } from "../responsivecontainer";

export const SharedComponentFooter = () => {
  return (
    <div
      style={{ background: "#1677ff", display: "flex", alignItems: "center" }}
    >
      <SharedComponentResponsiveContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <div style={{ color: "#fff" }}>Ⓒ Copyright Github Jobs 2023</div>
        <small style={{ color: "#fff" }}>
          Disclaimer this project not afiliated with github or what so ever. the
          propose of this project only for interview project.
        </small>
      </SharedComponentResponsiveContainer>
    </div>
  );
};
