import React from "react";
import { ConfigProvider, App } from "antd";
import "antd/dist/reset.css";
import { configTheme } from "@config/config.theme";

export interface CoreProviderThemeProps {
  children: React.ReactNode;
}

export const CoreProviderTheme: React.FC<CoreProviderThemeProps> = ({
  children,
}) => {
  return (
    <ConfigProvider theme={configTheme} prefixCls="IDPFE">
      <App>{children}</App>
    </ConfigProvider>
  );
};
