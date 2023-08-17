import { CoreServiceBaseMeta } from "@core/service/core.service.base";
import { SharedSchemaStoreStatus } from "./shared.schema.store.status";
import { EntityState } from "@reduxjs/toolkit";

export interface SharedSchemaBaseStore<T, V extends string | number | symbol> extends EntityState<T> {
	message: string;
	meta: CoreServiceBaseMeta;
	status: Record<V, SharedSchemaStoreStatus>;
}