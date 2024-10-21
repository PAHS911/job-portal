import React, { useState } from "react";
import axios from "axios";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    experienceRequired: "",
    jobType: "",
    jobCategory: "",
    jobDescription: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/employer/jobs", jobData);
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <input
        type="text"
        name="jobType"
        placeholder="Job Type"
        value={jobData.jobType}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="text"
        name="jobCategory"
        placeholder="Job Category"
        value={jobData.jobCategory}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
      />
      <textarea
        name="jobDescription"
        placeholder="Job Description"
        value={jobData.jobDescription}
        onChange={handleChange}
        className="border p-2 mb-2 w-full rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Post Job
      </button>
    </form>
  );
};

export default PostJob;
