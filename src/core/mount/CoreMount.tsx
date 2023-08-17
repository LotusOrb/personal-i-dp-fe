import React from "react";

import { CoreProviderTheme } from "@core/provider/theme";
import { CoreProviderStore } from "@core/provider/store";
import { CoreProviderRoute } from "@core/provider/route";

export const CoreMount = () => {
  return (
    <CoreProviderStore>
      <CoreProviderTheme>
        <CoreProviderRoute />
      </CoreProviderTheme>
    </CoreProviderStore>
  );
};
