import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { FeatureJobSchemaList } from "../schema/feature.job.schema.list";
import { FeatureJobSchemaStore } from "../schema/feature.job.schema.store";
import { featureJobAsyncAction } from "./feature.job.asyncAction";

const initialState: FeatureJobSchemaStore = {
  entities: {},
  ids: [],
  message: "",
  meta: {},
  status: {
    LIST: "IDLE",
    DETAIL: "IDLE",
  },
};

const adapter = createEntityAdapter<FeatureJobSchemaList>({
  selectId: (v) => v?.id || "",
});

export const { actions: featureJobAction, reducer: featureJobreducer } =
  createSlice({
    name: "app/job",
    initialState,
    reducers: {
      resetData: (state) => {
        adapter.removeAll(state);
      },
      resetStatus: (state) => {
        state.message = "";
        state.status = {
          LIST: "IDLE",
          DETAIL: "IDLE",
        };
      },
    },
    extraReducers(builder) {
      builder.addCase(
        featureJobAsyncAction.getList.pending,
        (state, { meta }) => {
          state.status.LIST = "LOADING";
          state.meta = meta.arg;
        }
      );
      builder.addCase(
        featureJobAsyncAction.getList.rejected,
        (state, { error }) => {
          state.status.LIST = "FAILED";
          state.message = error.message || "";
        }
      );
      builder.addCase(
        featureJobAsyncAction.getList.fulfilled,
        (state, { payload }) => {
          state.status.LIST = "SUCCESS";

          if (payload.isLoadMore) {
            adapter.upsertMany(state, payload.data);
          } else {
            adapter.setAll(state, payload.data);
          }
        }
      );

      builder.addCase(featureJobAsyncAction.getDetail.pending, (state) => {
        state.status.DETAIL = "LOADING";
      });
      builder.addCase(
        featureJobAsyncAction.getDetail.rejected,
        (state, { error }) => {
          state.status.DETAIL = "FAILED";
          state.message = error.message || "";
        }
      );
      builder.addCase(
        featureJobAsyncAction.getDetail.fulfilled,
        (state, { payload }) => {
          state.status.DETAIL = "SUCCESS";

          adapter.upsertMany(state, [payload.data]);
        }
      );
    },
  });
