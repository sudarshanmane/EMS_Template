import React, { useEffect, useState } from "react";
import PersonalInfo from "./personalinfo";
import EmergencyContact from "./emergencycontact";
import BankInfo from "./bankinfo";
import CertificateInfo from "./certificateinfo";
import EducationProfile from "./educationprofile";
import ExperienceProfile from "./experienceprofile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DocumentProfile from "./documentprofile";

export default function ProfilePage({ userId }) {
  const userRoles = useSelector((state) => state.getcurrentrole);
  const navigate = useNavigate();

  const canViewPersonalInfo =
    userRoles?.data[0]?.user_role_permissions?.includes("View") ?? false;
  const canViewCertificate =
    userRoles?.data[0]?.certificate?.includes("View") ?? false;
  const canViewEducation =
    userRoles?.data[0]?.education?.includes("View") ?? false;
  const canViewExperience =
    userRoles?.data[0]?.user_experience?.includes("View") ?? false;
  const canViewDocument =
    userRoles?.data[0]?.user_personal_document?.includes("View") ?? false;

  useEffect(() => {
    // Ensure userRoles is defined and has data
    if (userRoles && userRoles.data && userRoles.data.length > 0) {
      navigate(`/home/viewEmployee/${userId}`);
    }
  }, [userRoles]);

  return (
    <>
      <div className="row">
        {canViewPersonalInfo && <PersonalInfo userId={userId} />}
        {canViewPersonalInfo && <EmergencyContact userId={userId} />}
      </div>

      <div className="row">
        {canViewPersonalInfo && <BankInfo userId={userId} />}
        {canViewCertificate && <CertificateInfo userId={userId} />}
      </div>

      <div className="row">
        {canViewEducation && <EducationProfile userId={userId} />}
        {canViewExperience && <ExperienceProfile userId={userId} />}
      </div>

      <div className="row">
        {canViewDocument && <DocumentProfile userId={userId} />}
      </div>
    </>
  );
}
