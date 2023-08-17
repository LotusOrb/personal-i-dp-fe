import { SharedSchemaBaseStore } from "@shared/schema/shared.schema.store";
import { FeatureJobSchemaList } from "./feature.job.schema.list";

export interface FeatureJobSchemaStore
  extends SharedSchemaBaseStore<FeatureJobSchemaList, "LIST" | "DETAIL"> {}
