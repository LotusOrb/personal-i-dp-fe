import React from "react";
import { useNavigate } from "react-router";

import { SharedComponentNavbar } from "@shared/component/navbar";
import { FeatureLandingComponentHero } from "@feature/landing/component/hero";
import { FeatureLandingComponentStat } from "@feature/landing/component/stat";
import { SharedComponentFooter } from "@shared/component/footer";
import { SharedComponentResponsiveContainer } from "@shared/component/responsivecontainer";

export const FeatureLandingHOCMain = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <SharedComponentNavbar
        menus={[
          { label: "Home", key: "/", type: "link" },
          { label: "Job Listing", key: "/app/job-listing", type: "link" },
          { label: "Login", key: "/auth/login", type: "button" },
        ]}
        onMenuClick={(e) => navigate(e)}
      />
      <SharedComponentResponsiveContainer minHeight={'97vh'}>
        <FeatureLandingComponentHero
          onJobListing={() => navigate("/app/job-listing")}
          onSearchJob={(e) => navigate(`/app/job-listing?q=${e}`)}
          onLogin={() => navigate("/auth/login")}
          heading={
            <>
              Find the job that <b style={{ color: "#ff4d4f" }}>suits you</b>{" "}
              the mosts.
            </>
          }
          subHeading={
            "Explore the diverse range of jobs we offer, from various engineering positions to nursery roles. Start searching now or log in to make the most out of your job search experience."
          }
        />
        <FeatureLandingComponentStat
          jobListing={1}
          userRegisterd={1}
          newJob={1}
        />
      </SharedComponentResponsiveContainer>
      <SharedComponentFooter />
    </React.Fragment>
  );
};
