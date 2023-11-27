import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { DefaultEditor } from "react-simple-wysiwyg";

import "../../../index.css";

const Compose = () => {
  const [html, setHtml] = React.useState("my <b>HTML</b>");

  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <>
      <div className="page-wrapper">
        <Helmet>
          <title>Compose - HRMS Admin Template</title>
          <meta name="description" content="Compose" />
        </Helmet>
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Compose</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/app/main/dashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Compose</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="input-block">
                      <input
                        type="email"
                        placeholder="To"
                        className="form-control"
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block">
                          <input
                            type="email"
                            placeholder="Cc"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <input
                            type="email"
                            placeholder="Bcc"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                      />
                    </div>

                    <div className="input-block">
                      {/* <ReactSummernote
                        value="Default value"
                        options={{
                          lang: 'ru-RU',
                          height: 350,
                          dialogsInBody: true,
                          toolbar: [
                            ['style', ['style']],
                            ['font', ['bold', 'underline', 'clear']],
                            ['fontname', ['fontname']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['table', ['table']],
                            ['insert', ['link', 'picture', 'video']],
                            ['view', ['fullscreen', 'codeview']]
                          ]
                        }}
                        // onChange={this.onChange}
                        onImageUpload={onImageUpload}
                      /> */}
                      <DefaultEditor value={html} onChange={onChange} />
                    </div>
                    <div className="input-block mb-0">
                      <div className="text-center">
                        <button className="btn btn-primary draft me-1">
                          <span>Send</span>{" "}
                          <i className="fa-solid fa-paper-plane m-l-5" />
                        </button>
                        <button
                          className="btn btn-success draft m-l-5 me-1"
                          type="button">
                          <span>Draft</span>{" "}
                          <i className="fa-regular fa-floppy-disk m-l-5" />
                        </button>
                        <button
                          className="btn btn-success m-l-5 me-1"
                          type="button">
                          <span>Delete</span>{" "}
                          <i className="fa-regular fa-trash-can m-l-5" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
    </>
  );
};

export default Compose;
