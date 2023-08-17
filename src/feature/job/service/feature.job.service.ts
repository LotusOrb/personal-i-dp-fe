import {
  CoreServiceBase,
  CoreServiceBaseMeta,
} from "@core/service/core.service.base";
import { FeatureJobSchemaList } from "../schema/feature.job.schema.list";

export class FeatureJobService extends CoreServiceBase {
  constructor() {
    super("DEFAULT", "/recruitment");
  }

  public getList(param: CoreServiceBaseMeta) {
    return this.HTTP<Array<FeatureJobSchemaList>>({
      method: "get",
      uri: "/positions.json",
      meta: param,
      useAuth: true,
    });
  }
  public getDetail(id?: string) {
    return this.HTTP<FeatureJobSchemaList>({
      method: "get",
      uri: `/positions/${id}`,
      meta: {},
      useAuth: true,
    });
  }
}
