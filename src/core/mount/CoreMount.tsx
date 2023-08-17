import React from "react";
import { Button, Typography } from "antd";

import { CoreProviderTheme } from "@core/provider/theme";
import { coreConfig } from "@core/config/core.config";


export const CoreMount = () => {
  return (
    <CoreProviderTheme>
      <Typography.Title>{coreConfig.TITLE}</Typography.Title>
      <Button>Click me</Button>
    </CoreProviderTheme>
  );
};
