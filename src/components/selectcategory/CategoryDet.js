import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Toast, ToastBody } from "reactstrap";
import avatar from "../../../assets/images/products/img-1.png";

const CategoryDet = () => {
  return (
    <div>
      <Card>
        <CardHeader className="bg-light">
          {/* <button
            type="button"
            className="btn-close float-end fs-11"
            aria-label="Close"
          ></button> */}
          <h6 className="mb-0 text-center">
            Men Fashion/Western Wear/Top Wear/T shirts
          </h6>
        </CardHeader>
        <CardBody className="px-4 py-2 text-center">
          <div className=" mb-3">
            <img src={avatar} alt="" className=" " style={{ width: "220px" }} />
            <div>
              <p
                className="m-0 text-dark fw-bold"
                style={{ wordWrap: "break-word" }}
              >
                Please provide only front image for each product
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
            >
              <i className=" ri-upload-line align-middle me-1"></i>
              Add Product Images
            </button>
          </div>
        </CardBody>
        <div className="mt-4" style={{ height: "12px" }}>
          <hr />
        </div>
        <div className="d-flex justify-content-center">
          <Toast
            isOpen={true}
            id="borderedToast3"
            className="bg-soft-warning overflow-hidden mt-3"
            style={{ border: "1px solid #f6b94b" }}
          >
            <ToastBody>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <i className=" ri-information-fill text-warning fs-21 align-middle"></i>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0">Something went wrong, try again.</h6>
                </div>
              </div>
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3">
          <p className="m-0 text-dark " style={{ fontWeight: "500" }}>
            General Guidelines{" "}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CategoryDet;
