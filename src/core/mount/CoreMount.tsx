import React from "react";
import { Button, Typography } from "antd";

import { CoreProviderTheme } from "@core/provider/theme";
import { config } from "@config/config";
import { CoreProviderStore } from "@core/provider/store";

export const CoreMount = () => {
  return (
    <CoreProviderStore>
      <CoreProviderTheme>
        <Typography.Title>{config.TITLE}</Typography.Title>
        <Button type='primary'>Click me</Button>
      </CoreProviderTheme>
    </CoreProviderStore>
  );
};
