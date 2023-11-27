
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutUsPage } from "../../../../store/Actions/Actions";
import { URLS } from "../../../../Globals/URLS";

const AboutUsPage = () => {
  const dispatch = useDispatch();
  const [aboutUsData, setAboutUsData] = useState(null);

  const aboutUsSelector = useSelector((state) => state.aboutUsPage);
  const url = URLS.UPDATE_ABOUTUS_URL;

  const fetchAboutUsData = (url) => {
    dispatch(aboutUsPage({ payload: {}, URL: url }));
  };

  useEffect(() => {
    fetchAboutUsData();
  }, []);

  useEffect(() => {
    console.log("aboutUsSelector:", aboutUsSelector);

    if (aboutUsSelector) {
      setAboutUsData(aboutUsSelector.data);
      console.log("aboutUsData:", aboutUsSelector.data);
    }
  }, [aboutUsSelector]);

  return (
    <div>
      <h1>About Us</h1>
      {aboutUsData ? (
        <div>
          <p>{aboutUsData.title}</p>
          <p>{aboutUsData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AboutUsPage;
