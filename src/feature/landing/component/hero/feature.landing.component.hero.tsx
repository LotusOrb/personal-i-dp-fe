import React from "react";
import { Search } from "@icon-park/react";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import { useFormik } from "formik";

import "./feature.landing.component.hero.scss";

export interface FeatureLandingComponentHeroProps {
  onJobListing: () => void;
  onSearchJob: (e: string) => void;
  onLogin: () => void;
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
}

export const FeatureLandingComponentHero: React.FC<
  FeatureLandingComponentHeroProps
> = ({ onJobListing, onSearchJob, onLogin, heading, subHeading }) => {
  const formik = useFormik({
    initialValues: {
      q: "",
    },
    onSubmit: (e) => onSearchJob(e.q),
  });
  return (
    <div className="FeatureLandingComponentHero__wrap">
      <Row gutter={[16, 16]} align={"middle"}>
        <Col xs={24} md={12}>
          <div className="FeatureLandingComponentHero__left-side">
            <Space direction="vertical">
              <Typography.Title>{heading}</Typography.Title>
              <Typography.Text className="FeatureLandingComponentHero__heading">
                {subHeading}
              </Typography.Text>
              <Form onSubmitCapture={formik.handleSubmit}>
                <Space>
                  <Input
                    size="large"
                    placeholder="Search For Job Title"
                    value={formik.values.q}
                    onChange={(e) => formik.setFieldValue("q", e.target.value)}
                  />
                  <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    icon={<Search size="24" strokeLinejoin="miter" />}
                  />
                </Space>
              </Form>
              <Divider
                orientation="left"
                className="FeatureLandingComponentHero__divider"
                plain
              >
                or explore yourself
              </Divider>
              <div className="FeatureLandingComponentHero__button-group">
                <Button
                  size="large"
                  type="primary"
                  onClick={onJobListing}
                  className="FeatureLandingComponentHero__button"
                >
                  Find Avalaible Jobs
                </Button>
                <Button
                  size="large"
                  type="default"
                  onClick={onLogin}
                  className="FeatureLandingComponentHero__button"
                >
                  Login
                </Button>
              </div>
            </Space>
          </div>
        </Col>
        <Col xs={24} md={10}>
          <div className="FeatureLandingComponentHero__right-side">
            <img src="/asset-landing-1.svg" alt="" />
          </div>
        </Col>
        <Col xs={24}>
          <Divider />
        </Col>
      </Row>
    </div>
  );
};
