import React, { useState } from "react";
import {
  Boxed,
  Close,
  compact,
  dark,
  Detached,
  Horizontal,
  small_hover,
  Two_col,
  Veritical,
} from "../imagepath";
import {Link} from "react-router-dom"


const Offcanvas = () => {
  const [input1Checked, setInput1Checked] = useState(true);
  const [input2Checked, setInput2Checked] = useState(false);
  const [input2Value, setInput2Value] = useState("");
  const [input3Checked, setInput3Checked] = useState(false);

  const handleInput1Change = () => {
    setInput1Checked(!input1Checked);
    setInput3Checked(false);
    setInput2Checked(false);
  };

  const handleInput2Click = () => {
    setInput2Checked(!input2Checked);
    setInput1Checked(false);
    setInput3Checked(false);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleInput3Change = () => {
    setInput1Checked(false);
    setInput2Checked(false);
    setInput2Value("");
    setInput3Checked(!input3Checked);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  const changes = () => {
    const Themes = document.querySelector("html");
    document.querySelector("#horizantal-sidebar").style.display = "block";
    document.querySelector("#veritical-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "none";
    document.querySelector(".sidebar").classList.remove("sidebar-verticalset");
    console.log(Themes.setAttribute("data-layout", "horizontal"));
  };
  const Vertical = () => {
    const VeriticalLayout = document.querySelector("html");
    document.querySelector("#horizantal-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "none";
    document.querySelector("#veritical-sidebar").style.display = "block";
    document.querySelector("#sidebar").classList.add("sidebar-verticalset");
    console.log(VeriticalLayout.setAttribute("data-layout", "vertical"));
  };
  const TwoColumn = () => {
    const TwoColumnLayout = document.querySelector("html");
    document.querySelector("#horizantal-sidebar").style.display = "none";
    document.querySelector("#veritical-sidebar").style.display = "none";
    document.querySelector(".two-col-bar").style.display = "block";
    console.log(TwoColumnLayout.setAttribute("data-layout", "twocolumn"));
  };
  const OrangeThemes = () => {
    const OrangesThemes = document.querySelector("html");
    console.log(OrangesThemes.setAttribute("data-layout-mode", "orange"));
  };
  const DarkThemes = () => {
    const DarksThemes = document.querySelector("html");
    console.log(DarksThemes.setAttribute("data-layout-mode", "dark"));
  };
  const LightThemes = () => {
    const LightsThemes = document.querySelector("html");
    console.log(LightsThemes.setAttribute("data-layout-mode", "light"));
  };
  const BlueThemes = () => {
    const BluesThemes = document.querySelector("html");
    console.log(
      BluesThemes.setAttribute(
        "data-layout-mode",
        "blue",
        "data-topbar",
        "blue"
      )
    );
    console.log(BluesThemes.setAttribute("data-topbar", "blue"));
  };
  const MaroonThemes = () => {
    const MaroonsThemes = document.querySelector("html");
    console.log(MaroonsThemes.setAttribute("data-layout-mode", "maroon"));
    console.log(MaroonsThemes.setAttribute("data-topbar", "maroon"));
  };
  const ScrollBar = () => {
    const ScrollBarThemes = document.querySelector("html");
    console.log(
      ScrollBarThemes.setAttribute("data-layout-position", "scrollable")
    );
  };
  const Fixed = () => {
    const FixedThemes = document.querySelector("html");
    console.log(FixedThemes.setAttribute("data-layout-position", "fixed"));
  };
  const PurpleThemes = () => {
    const PurplesThemes = document.querySelector("html");
    console.log(PurplesThemes.setAttribute("data-layout-mode", "purple"));
    console.log(PurplesThemes.setAttribute("data-topbar", "purple"));
  };
  const LightBarThemes = () => {
    const LightBarsThemes = document.querySelector("html");
    console.log(LightBarsThemes.setAttribute("data-topbar", "light"));
    console.log(LightBarsThemes.setAttribute("data-sidebar", "light"));
  };
  const DarkBarThemes = () => {
    const DarkBarsThemes = document.querySelector("html");
    console.log(DarkBarsThemes.setAttribute("data-topbar", "dark"));
    console.log(DarkBarsThemes.setAttribute("data-sidebar", "light"));
  };
  const BoxThemes = () => {
    const BoxsThemes = document.querySelector("html");
    console.log(BoxsThemes.setAttribute("data-layout-width", "boxed"));
    console.log(BoxsThemes.setAttribute("data-sidebar-size", "sm-hover"));
  };
  const Fluid = () => {
    const FluidThemes = document.querySelector("html");
    console.log(FluidThemes.setAttribute("data-layout-width", "fluid"));
    console.log(FluidThemes.setAttribute("data-sidebar-size", "lg"));
  };
  const Default = () => {
    const DefaultThemes = document.querySelector("html");
    console.log(DefaultThemes.setAttribute("data-sidebar-size", "lg"));
  };
  const Compact = () => {
    const CompactThemes = document.querySelector("html");
    console.log(CompactThemes.setAttribute("data-sidebar-size", "md"));
  };
  const SmallHoverView = () => {
    const SmallHoverViewThemes = document.querySelector("html");
    console.log(
      SmallHoverViewThemes.setAttribute("data-sidebar-size", "sm-hover")
    );
  };
  const DefaultStyle = () => {
    const DefaultStylesThemes = document.querySelector("html");
    console.log(
      DefaultStylesThemes.setAttribute("data-layout-style", "default")
    );
  };
  const DetachedStyle = () => {
    const DetachedStylesThemes = document.querySelector("html");
    DetachedStyle;
    console.log(
      DetachedStylesThemes.setAttribute("data-layout-style", "detached")
    );
  };
  const LightStyle = () => {
    const LightStylesThemes = document.querySelector("html");
    DetachedStyle;
    console.log(LightStylesThemes.setAttribute("data-sidebar", "light"));
  };
  const DarkStyle = () => {
    const DarkStylesThemes = document.querySelector("html");
    DetachedStyle;
    console.log(DarkStylesThemes.setAttribute("data-sidebar", "dark"));
  };
  const GradientStyle = () => {
    const GradientsThemes = document.querySelector("html");
    DetachedStyle;
    console.log(GradientsThemes.setAttribute("data-sidebar", "gradient"));
  };
  return (
    <>
      <div>
        <div className="settings-icon">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#theme-settings-offcanvas"
            aria-controls="theme-settings-offcanvas">
            <i className="las la-cog" />
          </span>
        </div>
        <div
          className="offcanvas offcanvas-end border-0 "
          tabIndex={-1}
          id="theme-settings-offcanvas">
          <div className="sidebar-headerset">
            <div className="sidebar-headersets">
              <h2>Customizer</h2>
              <h3>Customize your overview Page layout</h3>
            </div>
            <div className="sidebar-headerclose">
              <a data-bs-dismiss="offcanvas" aria-label="Close">
                <img src={Close} alt="img" />
              </a>
            </div>
          </div>
          <div className="offcanvas-body p-0">
            <div data-simplebar className="h-100">
              <div className="settings-mains">
                <div className="layout-head">
                  <h5>Layout</h5>
                  <h6>Choose your layout</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout01"
                        name="data-layout"
                        type="radio"
                        defaultValue="vertical"
                        className="form-check-input"
                        checked={input1Checked}
                        onClick={handleInput1Change}
                        onChange={() => {}}
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="customizer-layout01">
                        <img src={Veritical} alt="img" onClick={Vertical} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Vertical</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout02"
                        name="data-layout"
                        type="radio"
                        defaultValue="horizontal"
                        className="form-check-input"
                        onClick={handleInput2Click}
                        // onChange={handleInput2Change}
                        onChange={() => {}}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="customizer-layout02">
                        <img
                          src={Horizontal}
                          alt="img"
                          onClick={changes}
                          onChange={refreshPage}
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        id="customizer-layout03"
                        name="data-layout"
                        type="radio"
                        defaultValue="twocolumn"
                        className="form-check-input"
                        checked={input3Checked}
                        onChange={handleInput3Change}
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="customizer-layout03">
                        <img src={Two_col} alt="img" onClick={TwoColumn} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Two Column</h5>
                  </div>
                </div>
                <div className="layout-head pt-3">
                  <h5>Color Scheme</h5>
                  <h6>Choose Light or Dark Scheme.</h6>
                </div>
                <div className="colorscheme-cardradio">
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-orange"
                          defaultValue="orange"
                        />
                        <label
                          className="form-check-label  avatar-md w-100 "
                          htmlFor="layout-mode-orange">
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={OrangeThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Orange</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-light"
                          defaultValue="light"
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="layout-mode-light">
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={LightThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Light</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio dark  p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-dark"
                          defaultValue="dark"
                        />
                        <label
                          className="form-check-label avatar-md w-100 "
                          htmlFor="layout-mode-dark">
                          <img src={Veritical} alt="img" onClick={DarkThemes} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Dark</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio blue  p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-blue"
                          defaultValue="blue"
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="layout-mode-blue">
                          <img src={Veritical} alt="img" onClick={BlueThemes} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Blue</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio maroon p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-maroon"
                          defaultValue="maroon"
                        />
                        <label
                          className="form-check-label  avatar-md w-100 "
                          htmlFor="layout-mode-maroon">
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={MaroonThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Maroon</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio purple p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-mode"
                          id="layout-mode-purple"
                          defaultValue="purple"
                        />
                        <label
                          className="form-check-label  avatar-md w-100 "
                          htmlFor="layout-mode-purple">
                          <img
                            src={Veritical}
                            alt="img"
                            onClick={PurpleThemes}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Purple</h5>
                    </div>
                  </div>
                </div>
                <div id="layout-width">
                  <div className="layout-head pt-3">
                    <h5>Layout Width</h5>
                    <h6>Choose Fluid or Boxed layout.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-width"
                          id="layout-width-fluid"
                          defaultValue="fluid"
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="layout-width-fluid">
                          <img src={Veritical} alt="img" onClick={Fluid} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Fluid</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-width"
                          id="layout-width-boxed"
                          defaultValue="boxed"
                        />
                        <label
                          className="form-check-label avatar-md w-100 px-2"
                          htmlFor="layout-width-boxed">
                          <img src={Boxed} alt="img" onClick={BoxThemes} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Boxed</h5>
                    </div>
                  </div>
                </div>
                <div id="layout-position">
                  <div className="layout-head pt-3">
                    <h5>Layout Position</h5>
                    <h6>Choose Fixed or Scrollable Layout Position.</h6>
                  </div>
                  <div
                    className="btn-group bor-rad-50 overflow-hidden radio"
                    role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="data-layout-position"
                      id="layout-position-fixed"
                      defaultValue="fixed"
                    />
                    <label
                      className="btn btn-light w-sm"
                      htmlFor="layout-position-fixed"
                      onClick={Fixed}>
                      Fixed
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="data-layout-position"
                      id="layout-position-scrollable"
                      defaultValue="scrollable"
                    />
                    <label
                      className="btn btn-light w-sm ms-0"
                      htmlFor="layout-position-scrollable"
                      onClick={ScrollBar}>
                      Scrollable
                    </label>
                  </div>
                </div>
                <div className="layout-head pt-3">
                  <h5>Topbar Color</h5>
                  <h6>Choose Light or Dark Topbar Color.</h6>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check card-radio  p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-topbar"
                        id="topbar-color-light"
                        defaultValue="light"
                      />
                      <label
                        className="form-check-label avatar-md w-100"
                        htmlFor="topbar-color-light">
                        <img
                          src={Veritical}
                          alt="img"
                          onClick={LightBarThemes}
                        />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Light</h5>
                  </div>
                  <div className="col-4">
                    <div className="form-check card-radio p-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="data-topbar"
                        id="topbar-color-dark"
                        defaultValue="dark"
                      />
                      <label
                        className="form-check-label  avatar-md w-100"
                        htmlFor="topbar-color-dark">
                        <img src={dark} alt="img" onClick={DarkBarThemes} />
                      </label>
                    </div>
                    <h5 className="fs-13 text-center mt-2">Dark</h5>
                  </div>
                </div>
                <div id="sidebar-size">
                  <div className="layout-head pt-3">
                    <h5>Sidebar Size</h5>
                    <h6>Choose a size of Sidebar.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio  p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar-size"
                          id="sidebar-size-default"
                          defaultValue="lg"
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-size-default">
                          <img src={Veritical} alt="img" onClick={Default} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Default</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar-size"
                          id="sidebar-size-compact"
                          defaultValue="md"
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-size-compact">
                          <img src={compact} alt="img" onClick={Compact} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Compact</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0 ">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar-size"
                          id="sidebar-size-small-hover"
                          defaultValue="sm-hover"
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-size-small-hover">
                          <img
                            src={small_hover}
                            alt="img"
                            onClick={SmallHoverView}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">
                        Small Hover View
                      </h5>
                    </div>
                  </div>
                </div>
                <div id="sidebar-view">
                  <div className="layout-head pt-3">
                    <h5>Sidebar View</h5>
                    <h6>Choose Default or Detached Sidebar view.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio  p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-style"
                          id="sidebar-view-default"
                          defaultValue="default"
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-view-default">
                          <img src={compact} alt="img" onClick={DefaultStyle} />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Default</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-layout-style"
                          id="sidebar-view-detached"
                          defaultValue="detached"
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-view-detached">
                          <img
                            src={Detached}
                            alt="img"
                            onClick={DetachedStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Detached</h5>
                    </div>
                  </div>
                </div>
                <div id="sidebar-color">
                  <div className="layout-head pt-3">
                    <h5>Sidebar Color</h5>
                    <h6>Choose a color of Sidebar.</h6>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div
                        className="form-check sidebar-setting card-radio p-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBgGradient.show">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-light"
                          defaultValue="light"
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-color-light">
                          <span
                            className="bg-light bg-sidebarcolor"
                            onClick={LightStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Light</h5>
                    </div>
                    <div className="col-4">
                      <div
                        className="form-check sidebar-setting card-radio p-0"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBgGradient.show">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-dark"
                          defaultValue="dark"
                        />
                        <label
                          className="form-check-label  avatar-md w-100"
                          htmlFor="sidebar-color-dark">
                          <span
                            className="bg-darks bg-sidebarcolor"
                            onClick={DarkStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Dark</h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check sidebar-setting card-radio p-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient"
                          defaultValue="gradient"
                        />
                        <label
                          className="form-check-label avatar-md w-100"
                          htmlFor="sidebar-color-gradient">
                          <span
                            className="bg-gradients bg-sidebarcolor"
                            onClick={GradientStyle}
                          />
                        </label>
                      </div>
                      <h5 className="fs-13 text-center mt-2">Gradient</h5>
                    </div>
                    <div className="col-4 d-none">
                      <button
                        className="btn btn-link avatar-md w-100 p-0 overflow-hidden border collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBgGradient"
                        aria-expanded="false"
                        aria-controls="collapseBgGradient">
                        <span className="d-flex gap-1 h-100">
                          <span className="flex-shrink-0">
                            <span className="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1">
                              <span className="d-block p-1 px-2 bg-soft-light rounded mb-2" />
                              <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                              <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                              <span className="d-block p-1 px-2 pb-0 bg-soft-light" />
                            </span>
                          </span>
                          <span className="flex-grow-1">
                            <span className="d-flex h-100 flex-column">
                              <span className="bg-light d-block p-1" />
                              <span className="bg-light d-block p-1 mt-auto" />
                            </span>
                          </span>
                        </span>
                      </button>
                      <h5 className="fs-13 text-center mt-2">Gradient</h5>
                    </div>
                  </div>
                  <div className="collapse d-none" id="collapseBgGradient">
                    <div className="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded">
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient"
                          defaultValue="gradient"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient">
                          <span className="avatar-title rounded-circle bg-vertical-gradient" />
                        </label>
                      </div>
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient-2"
                          defaultValue="gradient-2"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient-2">
                          <span className="avatar-title rounded-circle bg-vertical-gradient-2" />
                        </label>
                      </div>
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient-3"
                          defaultValue="gradient-3"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient-3">
                          <span className="avatar-title rounded-circle bg-vertical-gradient-3" />
                        </label>
                      </div>
                      <div className="form-check sidebar-setting card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-sidebar"
                          id="sidebar-color-gradient-4"
                          defaultValue="gradient-4"
                        />
                        <label
                          className="form-check-label p-0 avatar-xs rounded-circle"
                          htmlFor="sidebar-color-gradient-4">
                          <span className="avatar-title rounded-circle bg-vertical-gradient-4" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer border-top p-3 text-center">
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-light w-100 bor-rad-50"
                  id="reset-layout">
                  Reset
                </button>
              </div>
              <div className="col-6">
                <Link
                  to="https://themeforest.net/item/smarthr-bootstrap-admin-panel-template/21153150"
                  target="_blank"
                  className="btn btn-primary w-100 bor-rad-50">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Offcanvas;
