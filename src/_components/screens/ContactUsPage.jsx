import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactUsPage } from "../../../../store/Actions/Actions";
import { URLS } from "../../../../Globals/URLS";

export default function ContactUsPage() {
  const dispatch = useDispatch();
  const [contactUsData, setContactUsData] = useState(null);

  const contactUsSelector = useSelector((state) => state.contactUsPage);
  const url = URLS.GET_CONTACTUS_URL;

  const fetchContactUsData = (url) => {
    dispatch(contactUsPage({ payload: {}, URL: url }));
  };

  useEffect(() => {
    fetchContactUsData();
  }, []);

  useEffect(() => {
    console.log("contactUsSelector:", contactUsSelector);

    if (contactUsSelector) {
      setContactUsData(contactUsSelector.data);
      console.log("contactUsData:", contactUsSelector.data);
    }
  }, [contactUsSelector]);

  return (
    <div>
      <h1>Contact Us</h1>
      {contactUsData ? (
        <div>
          <p>{contactUsData.title}</p>
          <p>{contactUsData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

