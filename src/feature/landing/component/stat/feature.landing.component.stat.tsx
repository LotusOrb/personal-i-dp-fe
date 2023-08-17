import React from "react";
import { Card, Col, Row, Space, Statistic, Typography } from "antd";

export interface FeatureLandingComponentStatProps {
  userRegisterd?: number;
  jobListing?: number;
  newJob?: number;
}

export const FeatureLandingComponentStat: React.FC<
  FeatureLandingComponentStatProps
> = ({ jobListing, newJob, userRegisterd }) => {
  return (
    <Row gutter={[16, 16]} style={{ paddingBottom: 32 }}>
      <Col xs={24}>
        <Space direction="vertical">
          <Typography.Title level={4} style={{ marginBlockEnd: 0 }}>
            Statistic
          </Typography.Title>
          <Typography.Paragraph>
            Some statistics you might be interested in
          </Typography.Paragraph>
        </Space>
      </Col>
      <Col xs={24} md={8}>
        <Card bordered={false}>
          <Statistic title="User Registered" value={userRegisterd} />
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card bordered={false}>
          <Statistic title="Job Listing" value={jobListing} />
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card bordered={false}>
          <Statistic title="New Job" value={newJob} />
        </Card>
      </Col>
    </Row>
  );
};
