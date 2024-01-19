import React, { useEffect, useState } from "react";
import PersonalInfo from "./personalinfo";
import EmergencyContact from "./emergencycontact";
import BankInfo from "./bankinfo";
import CertificateInfo from "./certificateinfo";
import EducationProfile from "./educationprofile";
import ExperienceProfile from "./experienceprofile";
import { useSelector } from "react-redux";
import DocumentProfile from "./documentprofile";

export default function ProfilePage({ userId }) {
  const userRoles = useSelector((state) => state.getcurrentrole?.data);
  

  return (
    <>
      <div className="row">
        {userRoles?.users?.user_personal_information?.includes(
          "View"
        ) && <PersonalInfo userId={userId} />}
        {userRoles?.users?.user_personal_information?.includes(
          "View"
        ) && <EmergencyContact userId={userId} />}
      </div>

      <div className="row">
        {userRoles?.users?.user_personal_information?.includes(
          "View"
        ) && <BankInfo userId={userId} />}
        {userRoles?.users?.certificate?.includes("View") && (
          <CertificateInfo userId={userId} />
        )}
      </div>

      <div className="row">
        {userRoles?.users?.education?.includes("View") && (
          <EducationProfile userId={userId} />
        )}
        {userRoles?.users?.user_experience?.includes("View") && (
          <ExperienceProfile userId={userId} />
        )}
      </div>

      <div className="row">
        {userRoles?.users?.user_personal_document?.includes("View") && (
          <DocumentProfile userId={userId} />
        )}
      </div>
    </>
  );
}
