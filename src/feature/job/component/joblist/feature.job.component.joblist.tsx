import React, { useEffect, useRef } from "react";
import { Button, Card, List } from "antd";
import { useInViewport } from "ahooks";

export interface FeatureJobComponentJoblistProps {
  isFiltered?: boolean;
  data?: Array<{
    id?: string;
    title?: string;
    company?: string;
    job_placement?: string;
    location?: string;
    date?: string;
  }>;
  onRowClick?: (e: {
    id?: string;
    title?: string;
    company?: string;
    job_placement?: string;
    location?: string;
    date?: string;
  }) => void;
  isLoading?: boolean;
  onLoadMore?: () => void;
}

export const FeatureJobComponentJoblist: React.FC<
  FeatureJobComponentJoblistProps
> = ({ data, isFiltered, onRowClick, isLoading, onLoadMore }) => {
  const refRoot = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLElement>(null);
  const [inViewport, ratio] = useInViewport(() => ref.current, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: () => refRoot.current,
  });

  useEffect(() => {
    if (inViewport && (ratio || 0) > 0.75) {
      onLoadMore && onLoadMore();
    }
  }, [inViewport, ratio]);

  return (
    <Card
      title={isFiltered ? `Showing ${data?.length ?? 0} jobs` : "Job List"}
      style={{ marginBottom: "3rem" }}
    >
      <div
        style={{
          maxHeight: "512px",
          overflowY: "scroll",
        }}
        ref={refRoot}
      >
        <List
          loading={isLoading}
          dataSource={data}
          style={{ marginBottom: "2rem" }}
          renderItem={(r) => (
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid rgba(50, 62, 80, 0.10)",
                cursor: "pointer",
              }}
              onClick={() => onRowClick && onRowClick(r)}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ fontSize: 16, fontWeight: 500, color: "#1677ff" }}
                >
                  {r.title}
                </div>
                <div style={{ color: "#8ba0bf", fontSize: 14 }}>
                  {r.company} - {r.job_placement}
                </div>
              </div>
              <div style={{ textAlign: "right", paddingRight: "0.5rem" }}>
                <div style={{ fontWeight: 600 }}>{r.location}</div>
                <div style={{ color: "#8ba0bf", fontSize: 14 }}>{r.date}</div>
              </div>
            </div>
          )}
        />
        <div
          style={{
            width: "100%",
            display: "block",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          {!isLoading && data && data?.length > 5 && (
            <Button type="primary" ref={ref}>
              Load More
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
