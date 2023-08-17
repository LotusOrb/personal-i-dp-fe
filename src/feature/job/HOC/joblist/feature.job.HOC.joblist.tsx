import React, { useEffect, useMemo } from "react";
import { Col, Row } from "antd";
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.extend(relativeTime)

import { FeatureJobComponentOmnisearch } from "@feature/job/component/omnisearch";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FeatureJobComponentJoblist } from "@feature/job/component/joblist";
import { useCoreStoreDispatch } from "@core/hooks/useCoreStoreDispatch";
import { featureJobAsyncAction } from "@feature/job/slice/feature.job.asyncAction";
import { useCoreStoreSelector } from "@core/hooks/useCoreStoreSelector";
import _ from "lodash";

export const FeatureJobHOCJoblist = () => {
  const store = useCoreStoreSelector((state) => state.job);
  const list = useMemo(
    () => _.compact(store.ids.map((v) => store.entities[v])),
    [store.entities, store.ids]
  );

  const dispatch = useCoreStoreDispatch();
  const navigate = useNavigate();
  const [q, qSet] = useSearchParams();

  const p = q.get("q")?.toString();

  useEffect(() => {
    if (p) {
      dispatch(
        featureJobAsyncAction.getList({
          page: 1,
          filter: [{ key: "description", value: [p] }],
        })
      );
    } else {
      dispatch(
        featureJobAsyncAction.getList({
          page: 1,
        })
      );
    }
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24}>
        <FeatureJobComponentOmnisearch
          value={p ? { description: p } : undefined}
          onSubmit={(e) => {
            qSet();
            const tmp: Array<{ key: string; value: Array<string> }> = [];
            if (e.description) {
              tmp.push({ key: "description", value: [e.description] });
            }
            if (e.full_time) {
              tmp.push({ key: "full_time", value: [String(e.full_time)] });
            }
            if (e.location) {
              tmp.push({ key: "location", value: [e.location] });
            }
            dispatch(featureJobAsyncAction.getList({ filter: tmp }));
          }}
        />
      </Col>
      <Col xs={24}>
        <FeatureJobComponentJoblist
          data={list.map((v) => ({
            id: v.id,
            company: v.company,
            title: v.title,
            date: dayjs(v.created_at).fromNow(),
            job_placement: v.type,
            location: v.location,
          }))}
          onRowClick={(e) => navigate(`/app/job-listing/${e.id}`)}
          isLoading={store.status.LIST === "LOADING"}
          onLoadMore={() =>
            dispatch(
              featureJobAsyncAction.getList({
                filter: store.meta.filter,
                page: (store.meta.page || 0) + 1,
                isLoadMore: true,
              })
            )
          }
        />
      </Col>
    </Row>
  );
};
