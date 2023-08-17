import { coreStore } from "@core/store/core.store";
import React from "react";
import { Provider } from "react-redux";

export interface CoreProviderStoreProps {
  children: React.ReactNode;
}

export const CoreProviderStore: React.FC<CoreProviderStoreProps> = ({
  children,
}) => {
  return <Provider store={coreStore}>{children}</Provider>;
};
