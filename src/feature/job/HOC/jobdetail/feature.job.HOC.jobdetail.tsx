import { useCoreStoreDispatch } from "@core/hooks/useCoreStoreDispatch";
import { useCoreStoreSelector } from "@core/hooks/useCoreStoreSelector";
import { featureJobAsyncAction } from "@feature/job/slice/feature.job.asyncAction";
import { Left } from "@icon-park/react";
import { Button, Card, Col, Row, Skeleton, Typography } from "antd";
import _ from "lodash";
import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const FeatureJobHOCJobDetail = () => {
  const param = useParams();
  const navigate = useNavigate();

  const dispatch = useCoreStoreDispatch();
  const store = useCoreStoreSelector((state) => state.job);
  const listone = useMemo(
    () => _.compact(store.ids.map(() => store.entities[param.id || ""]))[0],
    [store.entities, store.ids]
  );

  useEffect(() => {
    if (!listone) {
      dispatch(featureJobAsyncAction.getDetail(param.id));
    }
  }, []);

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
              backgroundImage: `url("${listone?.company_logo}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
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
                height: "8rem",
                overflow: "hidden",
                zIndex: 4,
                background:
                  "linear-gradient(0deg, rgba(1,16,23,1) 0%, rgba(0,212,255,0) 100%)",
                padding: "1rem",
                paddingTop: "2rem",
                backgroundPosition: "center",
              }}
            >
              <Skeleton active={false} loading={store.status.DETAIL === 'LOADING'}>
                <Typography.Title
                  level={2}
                  style={{ marginBlockEnd: 0, color: "#fff" }}
                >
                  {listone?.title}
                </Typography.Title>
                <Typography.Text style={{ marginBlockEnd: 0, color: "#fff" }}>
                  {listone?.type} / {listone?.location}
                </Typography.Text>
              </Skeleton>
            </div>
          </div>
        </Col>
        <Col xs={24} md={16}>
          <Card title="About Company" loading={store.status.DETAIL === 'LOADING'}>
            <div
              dangerouslySetInnerHTML={{ __html: listone?.description || "" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="How To Apply" loading={store.status.DETAIL === 'LOADING'}>
            <img src={listone?.company_logo} style={{width:'100%',height:'auto'}} alt="broken image" />
            <div
              dangerouslySetInnerHTML={{ __html: listone?.how_to_apply || "" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
