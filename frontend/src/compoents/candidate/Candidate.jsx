import React from "react";
import AboutCandidate from "./AboutCandidate.jsx";
import ApplyJob from "./ApplyJob.jsx";
import ReplyEmployer from "./ReplyEmployer.jsx";
import SearchJob from "./SearchJob.jsx";

const Candidate = ({ candidate }) => {
  return (
    <>
      <AboutCandidate candidate={candidate} />
      <ApplyJob jobId={"someJobId"} /> {/* Pass actual jobId */}
      <ReplyEmployer applicationId={"someApplicationId"} /> {/* Pass actual applicationId */}
      <SearchJob />
    </>
  );
};

export default Candidate;
