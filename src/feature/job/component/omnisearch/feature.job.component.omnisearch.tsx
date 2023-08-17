import React, { useEffect } from "react";
import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { useFormik } from "formik";
import { ViewList, World } from "@icon-park/react";

import { FeatureJobSchemaOmniSearchForm } from "@feature/job/schema/feature.job.schema.omnisearchform";

export interface FeatureJobComponentOmnisearchProps {
  onSubmit?: (e: FeatureJobSchemaOmniSearchForm) => void;
  isSubmitting?: boolean;
  value?: FeatureJobSchemaOmniSearchForm;
}

export const FeatureJobComponentOmnisearch: React.FC<
  FeatureJobComponentOmnisearchProps
> = ({ isSubmitting, onSubmit, value }) => {
  const formik = useFormik<FeatureJobSchemaOmniSearchForm>({
    initialValues: {
      description: undefined,
      full_time: undefined,
      location: undefined,
    },
    onSubmit: (e) => onSubmit && onSubmit(e),
  });
  useEffect(() => {
    if (value) {
      (
        Object.keys(value ?? {}) as unknown as Array<
          keyof FeatureJobSchemaOmniSearchForm
        >
      ).forEach((v) => {
        formik.setFieldValue(v, value[v]);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
  return (
    <Card style={{ marginTop: '1rem' }}>
      <Form layout="vertical" onSubmitCapture={formik.handleSubmit}>
        <Row gutter={[16, 0]} align={"bottom"}>
          <Col xs={24} md={8}>
            <Form.Item label="Job Description">
              <Input
                placeholder="Filter by title, benefit, companies, epxerties"
                value={formik.values.description}
                prefix={
                  <span className="anticon">
                    <ViewList size="16" strokeLinejoin="miter" />
                  </span>
                }
                onChange={(e) =>
                  formik.setFieldValue("description", e.target.value)
                }
                allowClear
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item label="Location">
              <Input
                prefix={
                  <span className="anticon">
                    <World size="16" strokeLinejoin="miter" />
                  </span>
                }
                allowClear
                value={formik.values.location}
                onChange={(e) =>
                  formik.setFieldValue("location", e.target.value)
                }
                placeholder="Filter by title, benefit, companies, epxerties"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={3}>
            <Form.Item>
              <Checkbox
                checked={formik.values.full_time}
                onChange={(e) =>
                  formik.setFieldValue("full_time", e.target.checked)
                }
              >
                <b>Full Time Only</b>
              </Checkbox>
            </Form.Item>
          </Col>
          <Col xs={24} md={4}>
            <Form.Item>
              <Button
                block
                htmlType="submit"
                type="primary"
                loading={isSubmitting}
              >
                Search
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
