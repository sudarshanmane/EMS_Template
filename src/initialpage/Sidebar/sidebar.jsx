/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "./header";

const Sidebar = () => {
  const MenuMore = () => {
    document.getElementById("more-menu-hidden").classList.toggle("hidden");
  };

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenunew, setSideMenuNew] = useState("dashboard");
  const [level2Menu, setLevel2Menu] = useState("");
  const [level3Menu, setLevel3Menu] = useState("");
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);

  const toggleSidebar = (value) => {
    setSideMenu(value);
    setSideMenuNew(value);
  };

  const toggleLvelTwo = (value) => {
    setLevel2Menu(value);
  };
  const toggleLevelThree = (value) => {
    setLevel3Menu(value);
  };

  useEffect(() => {
    if (
      isMouseOverSidebar &&
      document.body.classList.contains("mini-sidebar")
    ) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);

  const handleMouseEnter = () => {
    setMouseOverSidebar(true);
  };
  const handleMouseLeave = () => {
    setMouseOverSidebar(false);
  };
  let pathname = "main/dashboard";
  return (
    <div
      className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
      id="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Header />
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul className="list-inline-item list-unstyled links">
              <li className="menu-title">
                <span>Management</span>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "user" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "user" ? "" : "user")
                  }
                >
                  <i className="la la-user" /> <span>User Management</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "user" ? (
                  <ul
                    style={{
                      display: isSideMenu == "user" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={
                          pathname.includes("role-add") ? "active" : ""
                        }
                        to="/home/role-add"
                      >
                        Add Role
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("userpanel") ? "active" : ""
                        }
                        to="/home/userpanel"
                      >
                        Add User
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "company" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "company" ? "" : "company")
                  }
                >
                  <i className="la la-building" />
                  <span>Company Management</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "company" ? (
                  <ul
                    style={{
                      display: isSideMenu == "company" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        className={pathname.includes("company") ? "active" : ""}
                        to="/home/companypanel"
                      >
                        Company List
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "expense" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "expense" ? "" : "expense")
                  }
                >
                  <i className="la la-money" /> <span>Expense Management</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "expense" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("add-expense") ? "active" : ""
                        }
                        to="/home/expensepanel"
                      >
                        Add Expense{" "}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "card" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "card" ? "" : "card")
                  }
                >
                  <i className="la la-credit-card" />{" "}
                  <span>Card Management</span> <span className="menu-arrow" />
                </Link>
                {isSideMenu == "card" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("card-apply") ? "active" : ""
                        }
                        to="/home/applyforcard"
                      >
                        Apply For Card{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("card-approval") ? "active" : ""
                        }
                        to="/home/cardapproval"
                      >
                        Card Approvals{" "}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "reports" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                  }
                >
                  <i className="la la-file-text" /> <span> Reports </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "reports" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("expense-") ? "active" : ""
                        }
                        to="/home/Reports"
                      >
                        {" "}
                        Expense Report{" "}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              {/* ============================================== */}

              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "settings" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "settings" ? "" : "settings")
                  }
                >
                  <i className="la la-gear" /> <span> Settings </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "settings" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("companyPolicies-") ? "active" : ""
                        }
                        to="/home/companyPolicies"
                      >
                        {" "}
                        Company Policies{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("mileage-") ? "active" : ""
                        }
                        to="/home/mileage"
                      >
                        {" "}
                        Mileage{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("expenses-") ? "active" : ""
                        }
                        to="/home/expenses"
                      >
                        {" "}
                        Expenses{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("add-expenseCategory")
                            ? "active"
                            : ""
                        }
                        to="/home/expensecategorypanel"
                      >
                        Category{" "}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "profile" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(isSideMenu == "profile" ? "" : "profile")
                  }
                >
                  <i className="la la-user" /> <span> Profile </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "profile" ? (
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("profile/employee-") ? "active" : ""
                        }
                        to="/home/employee-profile"
                      >
                        {" "}
                        Employee Profile{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("client-") ? "active" : ""}
                        to="/home/client-profile"
                      >
                        {" "}
                        Client Profile{" "}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li>
                <Link to="#">
                  <i className="la la-file-text" /> <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="la la-info" /> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ms-auto">v3.4</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  className={isSideMenu == "multi Level" ? "subdrop" : ""}
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "multi Level" ? "" : "multi Level"
                    )
                  }
                >
                  <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                {isSideMenu == "multi Level" ? (
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "level 1" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(
                            level2Menu == "level 1" ? "" : "level 1"
                          )
                        }
                      >
                        {" "}
                        <span>Level 1</span> <span className="menu-arrow" />
                      </Link>
                      {level2Menu == "level 1" ? (
                        <ul>
                          <li>
                            <Link to="#">
                              <span>Level 2</span>
                            </Link>
                          </li>
                          <li className="submenu">
                            <Link
                              to="#"
                              className={
                                level3Menu == "level 2" ? "subdrop" : ""
                              }
                              onClick={() =>
                                toggleLevelThree(
                                  level3Menu == "level 2" ? "" : "level 2"
                                )
                              }
                            >
                              {" "}
                              <span> Level 2</span>{" "}
                              <span className="menu-arrow" />
                            </Link>
                            {level3Menu == "level 2" ? (
                              <ul>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              <span>Level 2</span>
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </Scrollbars>
      <div className="two-col-bar" id="two-col-bar">
        <div className="sidebar sidebar-twocol">
          <div className="sidebar-left slimscroll">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <Link
                className="nav-link"
                id="v-pills-dashboard-tab"
                title="Dashboard"
                data-bs-toggle="pill"
                to="#v-pills-dashboard"
                role="tab"
                aria-controls="v-pills-dashboard"
                aria-selected="true"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    setSideMenuNew(
                      isSideMenunew == "dashboard" ? "" : "dashboard"
                    )
                  }
                >
                  home
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-apps-tab"
                title="Apps"
                data-bs-toggle="pill"
                to="#v-pills-apps"
                role="tab"
                aria-controls="v-pills-apps"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "apps" ? "" : "apps")
                  }
                >
                  dashboard
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-employees-tab"
                title="Employees"
                data-bs-toggle="pill"
                to="#v-pills-employees"
                role="tab"
                aria-controls="v-pills-employees"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "employee" ? "" : "employee")
                  }
                >
                  people
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-clients-tab"
                title="Clients"
                data-bs-toggle="pill"
                to="#v-pills-clients"
                role="tab"
                aria-controls="v-pills-clients"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "clients" ? "" : "clients")
                  }
                >
                  person
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-projects-tab"
                title="Projects"
                data-bs-toggle="pill"
                to="#v-pills-projects"
                role="tab"
                aria-controls="v-pills-projects"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "projects" ? "" : "projects")
                  }
                >
                  topic
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-leads-tab"
                title="Leads"
                data-bs-toggle="pill"
                to="#v-pills-leads"
                role="tab"
                aria-controls="v-pills-leads"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "leads" ? "" : "leads")
                  }
                >
                  leaderboard
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-tickets-tab"
                title="Tickets"
                data-bs-toggle="pill"
                to="#v-pills-tickets"
                role="tab"
                aria-controls="v-pills-tickets"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "tickets" ? "" : "tickets")
                  }
                >
                  confirmation_number
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-sales-tab"
                title="Sales"
                data-bs-toggle="pill"
                to="#v-pills-sales"
                role="tab"
                aria-controls="v-pills-sales"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "sales" ? "" : "sales")
                  }
                >
                  shopping_bag
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-accounting-tab"
                title="Accounting"
                data-bs-toggle="pill"
                to="#v-pills-accounting"
                role="tab"
                aria-controls="v-pills-accounting"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "accounting" ? "" : "accounting"
                    )
                  }
                >
                  account_balance_wallet
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-payroll-tab"
                title="Payroll"
                data-bs-toggle="pill"
                to="#v-pills-payroll"
                role="tab"
                aria-controls="v-pills-payroll"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "payroll" ? "" : "payroll")
                  }
                >
                  request_quote
                </span>
              </Link>
              {/* <Link class="nav-link" id="v-pills-policies-tab" title="Policies" data-bs-toggle="pill" to="#v-pills-policies" role="tab" aria-controls="v-pills-policies" aria-selected="false">
								<span class="material-icons-outlined">
									request_quote
								</span>
							</Link> */}
              <Link
                className="nav-link"
                id="v-pills-policies-tab"
                title="Policies"
                data-bs-toggle="pill"
                to="#v-pills-policies"
                role="tab"
                aria-controls="v-pills-policies"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "policies" ? "" : "policies")
                  }
                >
                  verified_user
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-reports-tab"
                title="Reports"
                data-bs-toggle="pill"
                to="#v-pills-reports"
                role="tab"
                aria-controls="v-pills-reports"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                  }
                >
                  report_gmailerrorred
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-performance-tab"
                title="Performance"
                data-bs-toggle="pill"
                to="#v-pills-performance"
                role="tab"
                aria-controls="v-pills-performance"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "performance" ? "" : "performance"
                    )
                  }
                >
                  shutter_speed
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-goals-tab"
                title="Goals"
                data-bs-toggle="pill"
                to="#v-pills-goals"
                role="tab"
                aria-controls="v-pills-goals"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "goals" ? "" : "goals")
                  }
                >
                  track_changes
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-training-tab"
                title="Training"
                data-bs-toggle="pill"
                to="#v-pills-training"
                role="tab"
                aria-controls="v-pills-training"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "training" ? "" : "training")
                  }
                >
                  checklist_rtl
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-promotion-tab"
                title="Promotions"
                data-bs-toggle="pill"
                to="#v-pills-promotion"
                role="tab"
                aria-controls="v-pills-promotion"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "promotion" ? "" : "promotion")
                  }
                >
                  auto_graph
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-resignation-tab"
                title="Resignation"
                data-bs-toggle="pill"
                to="#v-pills-resignation"
                role="tab"
                aria-controls="v-pills-resignation"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "resignation" ? "" : "resignation"
                    )
                  }
                >
                  do_not_disturb_alt
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-termination-tab"
                title="Termination"
                data-bs-toggle="pill"
                to="#v-pills-termination"
                role="tab"
                aria-controls="v-pills-termination"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "termination" ? "" : "termination"
                    )
                  }
                >
                  indeterminate_check_box
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-assets-tab"
                title="Assets"
                data-bs-toggle="pill"
                to="#v-pills-assets"
                role="tab"
                aria-controls="v-pills-assets"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "assets" ? "" : "assets")
                  }
                >
                  web_asset
                </span>
              </Link>
              <Link
                className="nav-link active"
                id="v-pills-jobs-tab"
                title="Jobs"
                data-bs-toggle="pill"
                to="#v-pills-jobs"
                role="tab"
                aria-controls="v-pills-jobs"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "jobs" ? "" : "jobs")
                  }
                >
                  work_outline
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-knowledgebase-tab"
                title="Knowledgebase"
                data-bs-toggle="pill"
                to="#v-pills-knowledgebase"
                role="tab"
                aria-controls="v-pills-knowledgebase"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "knowledgebase" ? "" : "knowledgebase"
                    )
                  }
                >
                  school
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-activities-tab"
                title="Activities"
                data-bs-toggle="pill"
                to="#v-pills-activities"
                role="tab"
                aria-controls="v-pills-activities"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "activities" ? "" : "activities"
                    )
                  }
                >
                  toggle_off
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-users-tab"
                title="Users"
                data-bs-toggle="pill"
                to="#v-pills-users"
                role="tab"
                aria-controls="v-pills-users"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "administrator/users"
                        ? ""
                        : "administrator/users"
                    )
                  }
                >
                  group_add
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-settings-tab"
                title="Settings"
                data-bs-toggle="pill"
                to="#v-pills-settings"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "settings" ? "" : "settings")
                  }
                >
                  settings
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-profile-tab"
                title="Profile"
                data-bs-toggle="pill"
                to="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "profile" ? "" : "profile")
                  }
                >
                  manage_accounts
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-authentication-tab"
                title="Authentication"
                data-bs-toggle="pill"
                to="#v-pills-authentication"
                role="tab"
                aria-controls="v-pills-authentication"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "authentication" ? "" : "authentication"
                    )
                  }
                >
                  perm_contact_calendar
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-errorpages-tab"
                title="Error Pages"
                data-bs-toggle="pill"
                to="#v-pills-errorpages"
                role="tab"
                aria-controls="v-pills-errorpages"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "error pages" ? "" : "error pages"
                    )
                  }
                >
                  announcement
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-subscriptions-tab"
                title="Subscriptions"
                data-bs-toggle="pill"
                to="#v-pills-subscriptions"
                role="tab"
                aria-controls="v-pills-subscriptions"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "subscriptions" ? "" : "subscriptions"
                    )
                  }
                >
                  loyalty
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-pages-tab"
                title="Pages"
                data-bs-toggle="pill"
                to="#v-pills-pages"
                role="tab"
                aria-controls="v-pills-pages"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "pages" ? "" : "pages")
                  }
                >
                  layers
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-forms-tab"
                title="Forms"
                data-bs-toggle="pill"
                to="#v-pills-forms"
                role="tab"
                aria-controls="v-pills-forms"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "forms" ? "" : "forms")
                  }
                >
                  view_day
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-tables-tab"
                title="Tables"
                data-bs-toggle="pill"
                to="#v-pills-tables"
                role="tab"
                aria-controls="v-pills-tables"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "tables" ? "" : "tables")
                  }
                >
                  table_rows
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-documentation-tab"
                title="Documentation"
                data-bs-toggle="pill"
                to="#v-pills-documentation"
                role="tab"
                aria-controls="v-pills-documentation"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "documentation" ? "" : "documentation"
                    )
                  }
                >
                  description
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-changelog-tab"
                title="Changelog"
                data-bs-toggle="pill"
                to="#v-pills-changelog"
                role="tab"
                aria-controls="v-pills-changelog"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(isSideMenu == "Changelog" ? "" : "Changelog")
                  }
                >
                  sync_alt
                </span>
              </Link>
              <Link
                className="nav-link"
                id="v-pills-multilevel-tab"
                title="Multilevel"
                data-bs-toggle="pill"
                to="#v-pills-multilevel"
                role="tab"
                aria-controls="v-pills-multilevel"
                aria-selected="false"
              >
                <span
                  className="material-icons-outlined"
                  onClick={() =>
                    toggleSidebar(
                      isSideMenu == "multi Level" ? "" : "multi Level"
                    )
                  }
                >
                  library_add_check
                </span>
              </Link>
            </div>
          </div>
          <div className="sidebar-right">
            <div className="tab-content" id="v-pills-tabContent">
              {isSideMenunew == "dashboard" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-dashboard"
                  role="tabpanel"
                  aria-labelledby="v-pills-dashboard-tab"
                >
                  <p>Dashboard</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("main/dashboard") ? "active" : ""
                        }
                        to="/app/main/dashboard"
                      >
                        Admin Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("main/employee-") ? "active" : ""
                        }
                        to="/app/main/employee-dashboard"
                      >
                        Employee Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "apps" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-apps"
                  role="tabpanel"
                  aria-labelledby="v-pills-apps-tab"
                >
                  <p>App</p>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "calls" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(level2Menu == "calls" ? "" : "calls")
                        }
                      >
                        <span> Calls </span>
                      </Link>
                      {level2Menu == "calls" ? (
                        <ul>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to=""
                            >
                              Voice Call
                            </Link>
                          </li>
                          <li></li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/conversation/outgoing-call"
                            >
                              Outgoing Call
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() =>
                                localStorage.setItem("minheight", "true")
                              }
                              to="/conversation/incoming-call"
                            >
                              Incoming Call
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("apps/calendar") ? "active" : ""
                        }
                        to="/app/apps/calendar"
                      >
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        className={
                          pathname.includes("contacts") ? "active" : ""
                        }
                        to="/app/apps/contacts"
                      >
                        Contacts
                      </Link>
                    </li>
                    <li>
                      <Link to="/email/inbox">Email</Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("file-manager") ? "active" : ""
                        }
                        to="/app/apps/file-manager"
                      >
                        File Manager
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "employee" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-employees"
                  role="tabpanel"
                  aria-labelledby="v-pills-employees-tab"
                >
                  <p>Employees</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("allemployees")
                            ? "active"
                            : pathname.includes("employees-list")
                            ? "active"
                            : ""
                        }
                        to="/app/employee/allemployees"
                      >
                        All Employees
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("holidays") ? "active" : ""
                        }
                        to="/app/employee/holidays"
                      >
                        Holidays
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("es-admin") ? "active" : ""
                        }
                        to="/app/employee/leaves-admin"
                      >
                        Leaves (Admin){" "}
                        <span className="badge badge-pill bg-primary float-end">
                          1
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("ves-employee") ? "active" : ""
                        }
                        to="/app/employee/leaves-employee"
                      >
                        Leaves (Employee)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("e-settings") ? "active" : ""
                        }
                        to="/app/employee/leave-settings"
                      >
                        Leave Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("nce-admin") ? "active" : ""
                        }
                        to="/app/employee/attendance-admin"
                      >
                        Attendance (Admin)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("ce-employee") ? "active" : ""
                        }
                        to="/app/employee/attendance-employee"
                      >
                        Attendance (Employee)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("departments") ? "active" : ""
                        }
                        to="/app/employee/departments"
                      >
                        Departments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("designations") ? "active" : ""
                        }
                        to="/app/employee/designations"
                      >
                        Designations
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("timesheet") ? "active" : ""
                        }
                        to="/app/employee/timesheet"
                      >
                        Timesheet
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("shift-scheduling") ||
                          pathname.includes("shift-list")
                            ? "active"
                            : ""
                        }
                        to="/app/employee/shift-scheduling"
                      >
                        Shift &amp; Schedule
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("overtime") ? "active" : ""
                        }
                        to="/app/employee/overtime"
                      >
                        Overtime
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "clients" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-clients"
                  role="tabpanel"
                  aria-labelledby="v-pills-clients-tab"
                >
                  <p>Clients</p>
                  <ul>
                    <li
                      className={pathname.includes("clients") ? "active" : ""}
                    >
                      <Link to="/app/employees/clients">
                        <i className="la la-users" /> <span>Clients</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "projects" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-projects"
                  role="tabpanel"
                  aria-labelledby="v-pills-projects-tab"
                >
                  <p>Projects</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("t_dashboard")
                            ? "active"
                            : pathname.includes("projects-list")
                            ? "active"
                            : pathname.includes("cts-view")
                            ? "active"
                            : ""
                        }
                        to="/app/projects/project_dashboard"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() =>
                          localStorage.setItem("minheight", "true")
                        }
                        to="/tasks/tasks"
                      >
                        Tasks
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("task-board") ? "active" : ""
                        }
                        to="/app/projects/task-board"
                      >
                        Task Board
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "leads" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-leads"
                  role="tabpanel"
                  aria-labelledby="v-pills-leads-tab"
                >
                  <p>Leads</p>
                  <ul>
                    <li className={pathname.includes("leads") ? "active" : ""}>
                      <Link to="/app/employees/leads">
                        <i className="la la-user-secret" /> <span>Leads</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "tickets" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-tickets"
                  role="tabpanel"
                  aria-labelledby="v-pills-tickets-tab"
                >
                  <p>Tickets</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("tickets")
                          ? "active"
                          : pathname.includes("ticket-view")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/app/employees/tickets">
                        <i className="la la-ticket" /> <span>Tickets</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "sales" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-sales"
                  role="tabpanel"
                  aria-labelledby="v-pills-sales-tab"
                >
                  <p>Sales</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("estimates") ? "active" : ""
                        }
                        to="/app/sales/estimates"
                      >
                        Estimates
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("invoices") ? "active" : ""
                        }
                        to="/app/sales/invoices"
                      >
                        Invoices
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments") ? "active" : ""
                        }
                        to="/app/sales/payments"
                      >
                        Payments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("expenses") ? "active" : ""
                        }
                        to="/app/sales/expenses"
                      >
                        Expenses
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("provident-fund") ? "active" : ""
                        }
                        to="/app/sales/provident-fund"
                      >
                        Provident Fund
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("taxes") ? "active" : ""}
                        to="/app/sales/taxes"
                      >
                        Taxes
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "accounting" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-accounting"
                  role="tabpanel"
                  aria-labelledby="v-pills-accounting-tab"
                >
                  <p>Accounting</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("categories") ||
                          pathname.includes("sub-category")
                            ? "active"
                            : ""
                        }
                        to="/app/accounts/categories"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("budgets") ? "active" : ""}
                        to="/app/accounts/budgets"
                      >
                        Budgets
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("budget-expenses") ? "active" : ""
                        }
                        to="/app/accounts/budget-expenses"
                      >
                        Budget Expenses
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("budget-revenues") ? "active" : ""
                        }
                        to="/app/accounts/budget-revenues"
                      >
                        Budget Revenues
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "payroll" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-payroll"
                  role="tabpanel"
                  aria-labelledby="v-pills-payroll-tab"
                >
                  <p>Payroll</p>
                  <ul>
                    <li>
                      <Link
                        className={pathname.includes("_salary") ? "active" : ""}
                        to="/app/payroll/_salary"
                      >
                        {" "}
                        Employee Salary{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("y-view") ? "active" : ""}
                        to="/app/payroll/salary-view"
                      >
                        {" "}
                        Payslip{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payroll-items") ? "active" : ""
                        }
                        to="/app/payroll/payroll-items"
                      >
                        {" "}
                        Payroll Items{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "policies" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-policies"
                  role="tabpanel"
                  aria-labelledby="v-pills-policies-tab"
                >
                  <p>Policies</p>
                  <ul>
                    <li
                      className={pathname.includes("policies") ? "active" : ""}
                    >
                      <Link to="/app/hr/policies">
                        <i className="la la-file-pdf-o" /> <span>Policies</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "reports" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-reports"
                  role="tabpanel"
                  aria-labelledby="v-pills-reports-tab"
                >
                  <p>Reports</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("expense-") ? "active" : ""
                        }
                        to="/app/reports/expense-reports"
                      >
                        {" "}
                        Expense Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("invoice-") ? "active" : ""
                        }
                        to="/app/reports/invoice-reports"
                      >
                        {" "}
                        Invoice Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payments-") ? "active" : ""
                        }
                        to="/app/reports/payments-reports"
                      >
                        {" "}
                        Payments Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("project-") ? "active" : ""
                        }
                        to="/app/reports/project-reports"
                      >
                        {" "}
                        Project Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("task-") ? "active" : ""}
                        to="/app/reports/task-reports"
                      >
                        {" "}
                        Task Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("user-") ? "active" : ""}
                        to="/app/reports/user-reports"
                      >
                        {" "}
                        User Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("employee-") ? "active" : ""
                        }
                        to="/app/reports/employee-reports"
                      >
                        {" "}
                        Employee Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("payslip-") ? "active" : ""
                        }
                        to="/app/reports/payslip-reports"
                      >
                        {" "}
                        Payslip Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("attendance-") ? "active" : ""
                        }
                        to="/app/reports/attendance-reports"
                      >
                        {" "}
                        Attendance Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("leave-") ? "active" : ""}
                        to="/app/reports/leave-reports"
                      >
                        {" "}
                        Leave Report{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("daily-") ? "active" : ""}
                        to="/app/reports/daily-reports"
                      >
                        {" "}
                        Daily Report{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "performance" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-performance"
                  role="tabpanel"
                  aria-labelledby="v-pills-performance-tab"
                >
                  <p>Performance</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("-indicator") ? "active" : ""
                        }
                        to="/app/performances/performance-indicator"
                      >
                        {" "}
                        Performance Indicator{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("-review") ? "active" : ""}
                        to="/app/performances/performance-review"
                      >
                        {" "}
                        Performance Review{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("-appraisal") ? "active" : ""
                        }
                        to="/app/performances/performance-appraisal"
                      >
                        {" "}
                        Performance Appraisal{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "goals" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-goals"
                  role="tabpanel"
                  aria-labelledby="v-pills-goals-tab"
                >
                  <p>Goals</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("-tracking") ? "active" : ""
                        }
                        to="/app/goals/goal-tracking"
                      >
                        {" "}
                        Goal List{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("l-type") ? "active" : ""}
                        to="/app/goals/goal-type"
                      >
                        {" "}
                        Goal Type{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "training" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-training"
                  role="tabpanel"
                  aria-labelledby="v-pills-training-tab"
                >
                  <p>Training</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("training-list") ? "active" : ""
                        }
                        to="/app/training/training-list"
                      >
                        {" "}
                        Training List{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("trainer") ? "active" : ""}
                        to="/app/training/trainer"
                      >
                        {" "}
                        Trainers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("training-type") ? "active" : ""
                        }
                        to="/app/training/training-type"
                      >
                        {" "}
                        Training Type{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "promotion" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-promotion"
                  role="tabpanel"
                  aria-labelledby="v-pills-promotion-tab"
                >
                  <p>Promotion</p>
                  <ul>
                    <li
                      className={pathname.includes("promotion") ? "active" : ""}
                    >
                      <Link to="/app/performance/promotion">
                        <i className="la la-bullhorn" /> <span>Promotion</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "resignation" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-resignation"
                  role="tabpanel"
                  aria-labelledby="v-pills-resignation-tab"
                >
                  <p>Resignation</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("resignation") ? "active" : ""
                      }
                    >
                      <Link to="/app/performance/resignation">
                        <i className="la la-external-link-square" />{" "}
                        <span>Resignation</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "termination" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-termination"
                  role="tabpanel"
                  aria-labelledby="v-pills-termination-tab"
                >
                  <p>Termination</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("termination") ? "active" : ""
                      }
                    >
                      <Link to="/app/performance/termination">
                        <i className="la la-times-circle" />{" "}
                        <span>Termination</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "assets" ? (
                <div
                  className="tab-pane fade active show"
                  id="v-pills-assets"
                  role="tabpanel"
                  aria-labelledby="v-pills-assets-tab"
                >
                  <p>Assets</p>
                  <ul>
                    <li className={pathname.includes("assets") ? "active" : ""}>
                      <Link to="/app/administrator/assets">
                        <i className="la la-object-ungroup" />{" "}
                        <span>Assets</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "jobs" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-jobs"
                  role="tabpanel"
                  aria-labelledby="v-pills-jobs-tab"
                >
                  <p>Jobs</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("user-dashboard") ||
                          pathname.includes("user-all-jobs") ||
                          pathname.includes("saved-jobs") ||
                          pathname.includes("applied-jobs") ||
                          pathname.includes("interviewing") ||
                          pathname.includes("offered-jobs") ||
                          pathname.includes("visited-jobs") ||
                          pathname.includes("archived-jobs") ||
                          pathname.includes("job-aptitude") ||
                          pathname.includes("questions")
                            ? "active"
                            : ""
                        }
                        to="/app/administrator/user-dashboard"
                      >
                        {" "}
                        User Dasboard{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("jobs-dashboard") ? "active" : ""
                        }
                        to="/app/administrator/jobs-dashboard"
                      >
                        {" "}
                        Jobs Dasboard{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/app/administrator/jobs" ? "active" : ""
                        }
                        to="/app/administrator/jobs"
                      >
                        {" "}
                        Manage Jobs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("manage-resumes") ? "active" : ""
                        }
                        to="/app/administrator/manage-resumes"
                      >
                        {" "}
                        Manage Resumes{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("shortlist-candidates")
                            ? "active"
                            : ""
                        }
                        to="/app/administrator/shortlist-candidates"
                      >
                        {" "}
                        Shortlist Candidates{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/app/administrator/interview-questions"
                            ? "active"
                            : ""
                        }
                        to="/app/administrator/interview-questions"
                      >
                        {" "}
                        Interview Questions{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("offer_approvals") ? "active" : ""
                        }
                        to="/app/administrator/offer_approvals"
                      >
                        {" "}
                        Offer Approvals{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("experiance-level") ? "active" : ""
                        }
                        to="/app/administrator/experiance-level"
                      >
                        {" "}
                        Experience Level{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname === "/app/administrator/candidates"
                            ? "active"
                            : ""
                        }
                        to="/app/administrator/candidates"
                      >
                        {" "}
                        Candidates List{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("schedule-timing") ? "active" : ""
                        }
                        to="/app/administrator/schedule-timing"
                      >
                        {" "}
                        Schedule timing{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("apptitude-result") ? "active" : ""
                        }
                        to="/app/administrator/apptitude-result"
                      >
                        {" "}
                        Aptitude Results{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "knowledgebase" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-knowledgebase"
                  role="tabpanel"
                  aria-labelledby="v-pills-knowledgebase-tab"
                >
                  <p>Knowledgebase</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("knowledgebase") ? "active" : ""
                      }
                    >
                      <Link to="/app/administrator/knowledgebase">
                        <i className="la la-question" />{" "}
                        <span>Knowledgebase</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "activities" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-activities"
                  role="tabpanel"
                  aria-labelledby="v-pills-activities-tab"
                >
                  <p>Activities</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("activities") ? "active" : ""
                      }
                    >
                      <Link to="/app/administrator/activities">
                        <i className="la la-bell" /> <span>Activities</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "administrator/users" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-users"
                  role="tabpanel"
                  aria-labelledby="v-pills-activities-tab"
                >
                  <p>Users</p>
                  <ul>
                    <li
                      className={
                        pathname.includes("administrator/users") ? "active" : ""
                      }
                    >
                      <Link to="/app/administrator/users">
                        <i className="la la-user-plus" /> <span>Users</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "settings" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <p>Settings</p>
                  <ul>
                    <li>
                      <Link to="/settings/companysetting">
                        <i className="la la-cog" /> <span>Settings</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "profile" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <p>Profile</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("profile/employee-") ? "active" : ""
                        }
                        to="/app/profile/employee-profile"
                      >
                        {" "}
                        Employee Profile{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={pathname.includes("client-") ? "active" : ""}
                        to="/app/profile/client-profile"
                      >
                        {" "}
                        Client Profile{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "authentication" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-authentication"
                  role="tabpanel"
                  aria-labelledby="v-pills-authentication-tab"
                >
                  <p>Authentication</p>
                  <ul>
                    <li>
                      <Link to="/login"> Login </Link>
                    </li>
                    <li>
                      <Link to="/register"> Register </Link>
                    </li>
                    <li>
                      <Link to="/forgotpassword"> Forgot Password </Link>
                    </li>
                    <li>
                      <Link to="/otp"> OTP </Link>
                    </li>
                    <li>
                      <Link to="/lockscreen"> Lock Screen </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "error pages" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-errorpages"
                  role="tabpanel"
                  aria-labelledby="v-pills-errorpages-tab"
                >
                  <p>Error Pages</p>
                  <ul>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "subscriptions" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-subscriptions"
                  role="tabpanel"
                  aria-labelledby="v-pills-subscriptions-tab"
                >
                  <p>Subscriptions</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscriptionadmin") ? "active" : ""
                        }
                        to="/app/subscription/subscriptionadmin"
                      >
                        Subscriptions (Admin){" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscriptioncompany")
                            ? "active"
                            : ""
                        }
                        to="/app/subscription/subscriptioncompany"
                      >
                        Subscriptions (Company){" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("subscribedcompanies")
                            ? "active"
                            : ""
                        }
                        to="/app/subscription/subscribedcompanies"
                      >
                        Subscribed Companies
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "pages" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-pages"
                  role="tabpanel"
                  aria-labelledby="v-pills-pages-tab"
                >
                  <p>Pages</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("pages/search") ? "active" : ""
                        }
                        to="/app/pages/search"
                      >
                        {" "}
                        Search{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("pages/faq") ? "active" : ""
                        }
                        to="/app/pages/faq"
                      >
                        {" "}
                        FAQ{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("pages/terms") ? "active" : ""
                        }
                        to="/app/pages/terms"
                      >
                        {" "}
                        Terms{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("privacypolicy") ? "active" : ""
                        }
                        to="/app/pages/privacypolicy"
                      >
                        {" "}
                        Privacy Policy{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("pages/blank") ? "active" : ""
                        }
                        to="/app/pages/blank"
                      >
                        {" "}
                        Blank Page{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "forms" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-forms"
                  role="tabpanel"
                  aria-labelledby="v-pills-forms-tab"
                >
                  <p>Forms</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("basicinputs") ? "active" : ""
                        }
                        to="/app/ui-interface/forms/basicinputs"
                      >
                        Basic Inputs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("inputgroups") ? "active" : ""
                        }
                        to="/app/ui-interface/forms/inputgroups"
                      >
                        Input Groups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("horizontalform") ? "active" : ""
                        }
                        to="/app/ui-interface/forms/horizontalform"
                      >
                        Horizontal Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("verticalform") ? "active" : ""
                        }
                        to="/app/ui-interface/forms/verticalform"
                      >
                        {" "}
                        Vertical Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("formmask") ? "active" : ""
                        }
                        to="/app/ui-interface/forms/formmask"
                      >
                        {" "}
                        Form Mask{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("formvalidation") ? "active" : ""
                        }
                        to="/app/ui-interface/forms/formvalidation"
                      >
                        {" "}
                        Form Validation{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "tables" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-tables"
                  role="tabpanel"
                  aria-labelledby="v-pills-tables-tab"
                >
                  <p>Tables</p>
                  <ul>
                    <li>
                      <Link
                        className={
                          pathname.includes("tables/basic") ? "active" : ""
                        }
                        to="/app/ui-interface/tables/basic"
                      >
                        Basic Tables{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={
                          pathname.includes("tables/data-table") ? "active" : ""
                        }
                        to="/app/ui-interface/tables/data-table"
                      >
                        Data Table{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "documentation" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-documentation"
                  role="tabpanel"
                  aria-labelledby="v-pills-documentation-tab"
                >
                  <p>Documentation</p>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="la la-file-text" />{" "}
                        <span>Documentation</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "Changelog" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-changelog"
                  role="tabpanel"
                  aria-labelledby="v-pills-changelog-tab"
                >
                  <p>Change Log</p>
                  <ul>
                    <li>
                      <Link to="#">
                        <span>Change Log</span>{" "}
                        <span className="badge badge-primary ms-auto">
                          v3.4
                        </span>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              {isSideMenu == "multi Level" ? (
                <div
                  className="tab-pane fade show active"
                  id="v-pills-multilevel"
                  role="tabpanel"
                  aria-labelledby="v-pills-multilevel-tab"
                >
                  <p>Multi Level</p>
                  <ul>
                    <li className="submenu">
                      <Link
                        to="#"
                        className={level2Menu == "level 1" ? "subdrop" : ""}
                        onClick={() =>
                          toggleLvelTwo(
                            level2Menu == "level 1" ? "" : "level 1"
                          )
                        }
                      >
                        {" "}
                        <span>Level 1</span>{" "}
                      </Link>
                      {level2Menu == "level 1" ? (
                        <ul>
                          <li>
                            <Link to="#">
                              <span>Level 2</span>
                            </Link>
                          </li>
                          <li className="submenu">
                            <Link
                              to="#"
                              className={
                                level3Menu == "level 2" ? "subdrop" : ""
                              }
                              onClick={() =>
                                toggleLevelThree(
                                  level3Menu == "level 2" ? "" : "level 2"
                                )
                              }
                            >
                              {" "}
                              <span> Level 2</span>{" "}
                              <span className="menu-arrow" />
                            </Link>
                            {level3Menu == "level 2" ? (
                              <ul>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                                <li>
                                  <Link to="#">Level 3</Link>
                                </li>
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                          <li>
                            <Link to="#">
                              {" "}
                              <span>Level 2</span>
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
