import React, { useEffect } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateCompanyList } from "../../store/Action/Actions";
import { getUser, setUser } from "../../utils/sessionStorage";
import { URLS } from "../../Globals/URLS";

const Company = ({ initialData }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.resetFields();
    if (initialData) {
      form.setFieldsValue(initialData);
    }
  }, [initialData]);

  const onFinish = (values) => {
    if (initialData && initialData.id) {
      dispatch(
        updateCompanyList({
          URL: URLS.UPDATE_COMPANY_LIST_URL + initialData.id + "/",
          payload: { id: initialData.id, ...values },
        })
      );
    } else {
      dispatch(updateCompanyList(values));
    }
  };

  const selector = useSelector((state) => state.companyDetails);

  useEffect(() => {
    if (selector) {
      setUser(selector);
    }
  }, [selector]);

  const userDetails = getUser();

  return (
    <>
      <div className="add_user_form_container">
        <div className="add_user_form custom-form">
          <form action="#" name="complex-form" onFinish={onFinish} form={form}>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Company Name</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Address Line-1</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Address Line-2</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">State</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Country</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>
            <div className="input-block row">
              <label className="col-lg-3 col-form-label">Postal Code</label>
              <div className="col-lg-9">
                <Input size="large" />
              </div>
            </div>

            <div className="text-end">
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
              <Button type="" size="large" htmlType="reset">
                Clear Entries
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Company;
