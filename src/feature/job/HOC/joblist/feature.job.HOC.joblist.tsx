import React from "react";
import { Col, Row } from "antd";

import { FeatureJobComponentOmnisearch } from "@feature/job/component/omnisearch";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FeatureJobComponentJoblist } from "@feature/job/component/joblist";

export const FeatureJobHOCJoblist = () => {
  const navigate = useNavigate();
  const [q, qSet] = useSearchParams();

  const p = q.get("q")?.toString();

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24}>
        <FeatureJobComponentOmnisearch
          value={p ? { description: p } : undefined}
          onSubmit={() => qSet()}
        />
      </Col>
      <Col xs={24}>
        <FeatureJobComponentJoblist
          data={new Array(10).fill("").map((v, idx) => ({
            id: `${idx}`,
            company: "company" + v,
            title: "Software Engineer",
            date: "1 Day Ago",
            job_placement: "Remote",
            location: "Berlin",
          }))}
          onRowClick={(e) => navigate(`/app/job-listing/${e.id}`)}
        />
      </Col>
    </Row>
  );
};
