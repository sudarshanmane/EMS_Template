import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

const Error404 = () => {

  useEffect(() => {
    document.body.classList.add("error-page");

    return () => document.body.classList.remove("error-page");
  }, []);
  return (
    <>
      <div className='main-wrapper'>
        <Helmet>
          <title>Error 404 - HRMS Admin Template</title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="error-box">
          <h1>404</h1>
          <h3><i className="fa fa-warning" /> Oops! Page not found!</h3>
          <p>The page you requested was not found.</p>
          <Link onClick={() => localStorage.setItem("firstload", "true")} to="/app/main/dashboard" className="btn btn-custom">Back to Home</Link >
        </div>
      </div>
    </>

  );

}

export default Error404;
