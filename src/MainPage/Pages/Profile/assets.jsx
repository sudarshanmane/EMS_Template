import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
  Avatar_21,
  eye,
} from "../../../Entryfile/imagepath";
import { keyboard, mouse, laptop } from "../../../Entryfile/imagepath";

export default function Assets() {
  return (
    <>
      <div className="table-responsive table-newdatatable">
        <table className="table table-new custom-table mb-0 datatable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Asset ID</th>
              <th>Assigned Date</th>
              <th>Assignee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link to="/assets-details" className="table-imgname">
                  <img src={laptop} className="me-2" alt="img" />
                  <span>Laptop</span>
                </Link>
              </td>
              <td>AST - 001</td>
              <td>22 Nov, 2022 10:32AM</td>
              <td className="table-namesplit">
                <Link to="#" className="table-profileimage">
                  <img src={Avatar_02} className="me-2" alt="img" />
                </Link>
                <Link to="#" className="table-name">
                  <span>John Paul Raj</span>
                  <p>john@dreamguystech.com</p>
                </Link>
              </td>
              <td>
                <div className="table-actions d-flex">
                  <Link
                    className="delete-table me-2"
                    to="/app/profile/user-assets-details"
                  >
                    <img src={eye} alt="svg" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link to="/assets-details" className="table-imgname">
                  <img src={laptop} className="me-2" alt="img" />
                  <span>Laptop</span>
                </Link>
              </td>
              <td>AST - 002</td>
              <td>22 Nov, 2022 10:32AM</td>
              <td className="table-namesplit">
                <Link
                  to="#"
                  className="table-profileimage"
                  data-bs-toggle="modal"
                  data-bs-target="#edit-asset"
                >
                  <img src={Avatar_05} className="me-2" alt="img" />
                </Link>
                <Link to="#" className="table-name">
                  <span>Vinod Selvaraj</span>
                  <p>vinod.s@dreamguystech.com</p>
                </Link>
              </td>
              <td>
                <div className="table-actions d-flex">
                  <Link className="delete-table me-2" to="/user-asset-details">
                    <img src={eye} alt="svg" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Link to="/assets-details" className="table-imgname">
                  <img src={keyboard} className="me-2" alt="img" />
                  <span>Dell Keyboard</span>
                </Link>
              </td>
              <td>AST - 003</td>
              <td>22 Nov, 2022 10:32AM</td>
              <td className="table-namesplit">
                <Link
                  to="#"
                  className="table-profileimage"
                  data-bs-toggle="modal"
                  data-bs-target="#edit-asset"
                >
                  <img src={Avatar_09} className="me-2" alt="img" />
                </Link>
                <Link to="#" className="table-name">
                  <span>Harika </span>
                  <p>harika.v@dreamguystech.com</p>
                </Link>
              </td>
              <td>
                <div className="table-actions d-flex">
                  <Link className="delete-table me-2" to="/user-asset-details">
                    <img src={eye} alt="svg" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Link to="#" className="table-imgname">
                  <img src={mouse} className="me-2" alt="img" />
                  <span>Logitech Mouse</span>
                </Link>
              </td>
              <td>AST - 0024</td>
              <td>22 Nov, 2022 10:32AM</td>
              <td className="table-namesplit">
                <Link to="/assets-details" className="table-profileimage">
                  <img src={Avatar_10} className="me-2" alt="img" />
                </Link>
                <Link to="/assets-details" className="table-name">
                  <span>Mythili</span>
                  <p>mythili@dreamguystech.com</p>
                </Link>
              </td>
              <td>
                <div className="table-actions d-flex">
                  <Link className="delete-table me-2" to="/user-asset-details">
                    <img src={eye} alt="svg" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Link to="#" className="table-imgname">
                  <img src={laptop} className="me-2" alt="img" />
                  <span>Laptop</span>
                </Link>
              </td>
              <td>AST - 005</td>
              <td>22 Nov, 2022 10:32AM</td>
              <td className="table-namesplit">
                <Link to="/assets-details" className="table-profileimage">
                  <img src={Avatar_16} className="me-2" alt="img" />
                </Link>
                <Link to="/assets-details" className="table-name">
                  <span>John Paul Raj</span>
                  <p>john@dreamguystech.com</p>
                </Link>
              </td>
              <td>
                <div className="table-actions d-flex">
                  <Link className="delete-table me-2" to="/user-asset-details">
                    <img src={eye} alt="svg" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <Link to="#" className="table-imgname">
                  <img src={laptop} className="me-2" alt="img" />
                  <span>Laptop</span>
                </Link>
              </td>
              <td>AST - 006</td>
              <td>22 Nov, 2022 10:32AM</td>
              <td className="table-namesplit">
                <Link to="#" className="table-profileimage">
                  <img src={Avatar_02} className="me-2" alt="img" />
                </Link>
                <Link to="#" className="table-name">
                  <span>Vinod Selvaraj</span>
                  <p>vinod.s@dreamguystech.com</p>
                </Link>
              </td>
              <td>
                <div className="table-actions d-flex">
                  <Link className="delete-table me-2" to="/user-asset-details">
                    <img src={eye} alt="svg" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
