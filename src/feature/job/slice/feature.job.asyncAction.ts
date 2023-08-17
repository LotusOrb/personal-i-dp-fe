import { createAsyncThunk } from "@reduxjs/toolkit";
import { FeatureJobService } from "../service/feature.job.service";

const svc = new FeatureJobService();

export const featureJobAsyncAction = {
  getList: createAsyncThunk(
    "app/job/async-action/getList",
    async (
      arg: Parameters<typeof svc.getList>[0] & { isLoadMore?: boolean }
    ) => {
      const data = await svc.getList(arg);
      return { ...data, isLoadMore: arg.isLoadMore };
    }
  ),
  getDetail: createAsyncThunk(
    "app/job/async-action/getDetail",
    async (arg: Parameters<typeof svc.getDetail>[0]) => {
      return svc.getDetail(arg);
    }
  ),
};
