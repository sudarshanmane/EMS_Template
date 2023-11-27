import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Offcanvas from '../../Entryfile/offcanvance';

const Knowledgebase = () => {
  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Knowledgebase - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Knowledgebase</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                  <li className="breadcrumb-item active">Knowledgebase</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Installation &amp; Activation <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Premium Members Features <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> API Usage &amp; Guide lines <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Getting Started <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Lorem ipsum dolor <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Lorem ipsum dolor <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Lorem ipsum dolor <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" /> Lorem ipsum dolor <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 ">
              <div className="topics">
                <h3 className="topic-title"><Link to="#"><i className="fa-regular fa-folder" />Lorem ipsum dolor <span>11</span></Link></h3>
                <ul className="topics-list">
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                  <li><Link to="/app/administrator/knowledgebase-view"> Sed ut perspiciatis unde omnis? </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <Offcanvas />

    </>


  );
}

export default Knowledgebase;
