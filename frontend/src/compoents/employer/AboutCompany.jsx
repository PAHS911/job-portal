import React, { useEffect, useState } from "react";
import axios from "axios";

const AboutCompany = () => {
  const [companyInfo, setCompanyInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get("/api/employer/profile"); // Adjust endpoint
        setCompanyInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching company info:", error);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (loading) return <div>Loading Company Info...</div>;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-2">{companyInfo.companyName}</h2>
      <p>
        <strong>Industry:</strong> {companyInfo.industry}
      </p>
      <p>
        <strong>Designation:</strong> {companyInfo.designation}
      </p>
      <p>
        <strong>Website:</strong> {companyInfo.website}
      </p>
      <p>
        <strong>Profile:</strong> {companyInfo.companyProfile}
      </p>
    </div>
  );
};

export default AboutCompany;
