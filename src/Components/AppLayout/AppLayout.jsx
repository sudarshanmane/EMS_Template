import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../initialpage/Sidebar/sidebar";

const AppLayout = () => {
  return (
    <div>
      <span>
        <Sidebar></Sidebar>
      </span>
      <div style={{ marginTop: "100px" }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AppLayout;
