import { CoreServiceFirbaseInstance } from "@core/service/core.service.firebase";
import { Google } from "@icon-park/react";
import { Button, Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FeatureAuthHOCLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const subs = CoreServiceFirbaseInstance.auth.onAuthStateChanged((x) => {
      if (x) {
        navigate("/");
      }
    });

    return () => {
      subs();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Card title="Signin" style={{ maxWidth: "100%"}}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Button
                block
                icon={
                  <span className="anticon">
                    <Google />
                  </span>
                }
                onClick={() => CoreServiceFirbaseInstance.GoogleSignIn()}
              >
                Sign in with Google
              </Button>
            </Col>
            <Col xs={24}>
              <Button block onClick={()=>navigate(-1)}>Back</Button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};
