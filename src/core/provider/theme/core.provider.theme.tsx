import React from "react";
import { ConfigProvider, App } from "antd";
import "antd/dist/reset.css";

export interface CoreProviderThemeProps {
  children: React.ReactNode;
}

export const CoreProviderTheme: React.FC<CoreProviderThemeProps> = ({
  children,
}) => {
  return (
    <ConfigProvider prefixCls="IDPFE">
      <App>{children}</App>
    </ConfigProvider>
  );
};
