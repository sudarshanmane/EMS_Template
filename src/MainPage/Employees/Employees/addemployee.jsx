import React, { useState, useEffect } from "react";
import Sidebar from "../../../initialpage/Sidebar/sidebar";
import Header from "../../../initialpage/Sidebar/header";
import Offcanvas from "../../../Entryfile/offcanvance";
import { Helmet } from "react-helmet";
import Card from "antd/lib/card/Card";
import {
  Row,
  Col,
  ProgressBar,
  ListGroup,
  Badge,
  Button,
} from "react-bootstrap";

import { BsCheck } from "react-icons/bs";
import Educationform from "./educationform";
import Experience from "./experience";
import Salary from "./salary";
import Certification from "./certification";
import UserRegistrationSetting from "./userRegistrationSetting";
import UserRegistration from "./userRegistration";
import PersonalInformation from "./PersonalInformation";
import { getUserRegistrationId } from "../../../utils/sessionStorage";

const steps = [
  "User Registration",
  "Personal Information",
  "Education Information",
  "Experience Information",
  "Salary Rivision",
  "Certification Information",
  "settings",
];

const Addemployees = () => {
  const [menu, setMenu] = useState(false);
  const [userId, setUserId] = useState();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (!userId) {
      if (getUserRegistrationId()) {
        setCurrentStep(1);
        setUserId(getUserRegistrationId().id);
      } else {
      }
    }
  }, []); //

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert("Form Submitted!");
  };

  const isLastStep = currentStep === steps.length;

  const handleButtonClick = isLastStep ? handleSubmit : handleNext;
  const buttonText = isLastStep ? "Submit" : "Next";

  const AllDataSubmit = () => {
    alert("Form Submitted!");
    setCurrentStep(1);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <Helmet>
            <title>Workforce Management System</title>
            <meta name="description" content="Login page" />
          </Helmet>
          <section>
            {" "}
            <div id="comp_wizard">
              <Card className="step-wizard">
                <Row>
                  <Col md={3}>
                    <ListGroup>
                      {steps.map((step, index) => (
                        <ListGroup.Item
                          key={index}
                          className={`${
                            currentStep > index + 1 ? "completed-step" : ""
                          }`}
                          onClick={() => setCurrentStep(index + 1)}
                          action
                        >
                          {currentStep > index + 1 ? (
                            <Badge pill bg="success" className="me-2">
                              <BsCheck className="" />
                            </Badge>
                          ) : (
                            <Badge pill bg="primary" className="me-2">
                              {index + 1}
                            </Badge>
                          )}
                          {step}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                  <Col md={9}>
                    <ProgressBar
                      now={(currentStep / steps.length) * 100}
                      label={`${currentStep}/${steps.length}`}
                    />
                    {currentStep == 1 && (
                      <UserRegistration
                        nextcall={handleButtonClick}
                        setUserId={setUserId}
                      />
                    )}
                    {currentStep == 2 && (
                      <PersonalInformation
                        nextcall={handleButtonClick}
                        userId={userId}
                      />
                    )}
                    {currentStep == 3 && (
                      <Educationform
                        nextcall={handleButtonClick}
                        userId={userId}
                      />
                    )}
                    {currentStep == 4 && (
                      <Experience
                        nextcall={handleButtonClick}
                        userId={userId}
                      />
                    )}
                    {currentStep == 5 && (
                      <Salary nextcall={handleButtonClick} userId={userId} />
                    )}
                    {currentStep == 6 && (
                      <Certification
                        nextcall={handleButtonClick}
                        userId={userId}
                      />
                    )}
                    {currentStep == 7 && (
                      <UserRegistrationSetting
                        nextcall={AllDataSubmit}
                        // nextcall={handleButtonClick}
                        userId={userId}
                      />
                    )}

                    <div className="d-flex justify-content-between">
                      <Button
                        variant="secondary"
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                      >
                        Previous
                      </Button>{" "}
                      <Button variant="primary" onClick={handleButtonClick}>
                        {buttonText}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <Offcanvas />
    </>
  );
};
export default Addemployees;
