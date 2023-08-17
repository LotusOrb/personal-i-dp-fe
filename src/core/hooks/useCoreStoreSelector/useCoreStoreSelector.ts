import { coreStore } from "@core/store/core.store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useCoreStoreSelector: TypedUseSelectorHook<
  ReturnType<typeof coreStore.getState>
> = useSelector;
