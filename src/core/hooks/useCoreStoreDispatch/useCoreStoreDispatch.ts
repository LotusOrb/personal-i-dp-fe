import { coreStore } from "@core/store/core.store";
import { useDispatch } from "react-redux";

export const useCoreStoreDispatch = () =>
  useDispatch<typeof coreStore.dispatch>();
