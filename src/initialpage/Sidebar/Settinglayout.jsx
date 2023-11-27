/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { Route } from "react-router-dom";

// router service

import Header from "./header";
import SettingsSidebar from "./settingsidebar";

const SettingsLayout = (props) => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const { match } = props;
  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <div></div>
        <SettingsSidebar />
      </div>
    </>
  );
};
export default SettingsLayout;
