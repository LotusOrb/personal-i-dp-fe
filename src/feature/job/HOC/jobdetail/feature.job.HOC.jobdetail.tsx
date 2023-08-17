import { Left } from "@icon-park/react";
import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const FeatureJobHOCJobDetail = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginLeft: "-1rem",
        marginRight: "-1rem",
        paddingBottom: 32,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <div
            style={{
              position: "relative",
              height: "16rem",
              backgroundImage:
                "url('https://placehold.co/1235x338/EEE/31343C')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width:'100%'
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
              }}
            >
              <Button
                onClick={() => navigate(-1)}
                icon={
                  <span className="anticon">
                    <Left />
                  </span>
                }
              >
                Back
              </Button>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "128px",
                zIndex: 1,
                background:
                  "linear-gradient(0deg, rgba(1,16,23,1) 0%, rgba(0,212,255,0) 100%)",
                padding: "1rem",
                paddingTop: "2rem",
                backgroundPosition: "center",
              }}
            >
              <Typography.Title
                level={2}
                style={{ marginBlockEnd: 0, color: "#fff" }}
              >
                Data Engineer
              </Typography.Title>
              <Typography.Text style={{ marginBlockEnd: 0, color: "#fff" }}>
                Full Time / Jakarta
              </Typography.Text>
            </div>
          </div>
        </Col>
        <Col xs={24} md={16}>
          <Card title="About Company">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, officia. Soluta, odit vero? Facere quibusdam animi
            provident fugit, veritatis deleniti optio mollitia quo voluptatem
            unde? Quis amet molestias itaque debitis.
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="How To Apply">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, officia. Soluta, odit vero? Facere quibusdam animi
            provident fugit, veritatis deleniti optio mollitia quo voluptatem
            unde? Quis amet molestias itaque debitis.
          </Card>
        </Col>
      </Row>
    </div>
  );
};
