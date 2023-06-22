import React, { useState } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Nested1, Nested2, Nested3 } from "./Category1";
import "./category.css";
import CategoryDet from "./CategoryDet";

const SelectCategoryMain = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [actlist, setActList] = useState(null);
  const [actlist2, setActList2] = useState(null);
  const [actlist3, setActList3] = useState(null);
  const [actlist4, setActList4] = useState(null);

  const list1 = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
    "Vestibulum at eros",
  ];
  return (
    <div className="page-content">
      <Row>
        <Col xs="2">
          <div
            style={{
              padding: "16px 11.2px",
              background: "#ffffff",
              border: "1px solid #f4f5f5",
              fontSize: "14px",
              color: "#000",
            }}
          >
            <i className=" ri-bookmark-line align-middle me-1"></i>
            Your Categories
          </div>
          {/* <hr style={{ height: "0.6px", margin: "0px" }} /> */}

          <ListGroup
            className="category-container"
            style={{
              height: "426px",
              overflowY: "scroll",
              direction: "rtl",
              textAlign: "left",
              padding: "0px",
              width: "173.6px",
            }}
          >
            {list1.map((item, index) => {
              return (
                <>
                  <ListGroupItem
                    className={actlist == index ? "arrow-div" : ""}
                    active={actlist == index ? true : false}
                    onClick={() => {
                      setShow1(true);
                      if (show2 === true || show3 === true) {
                        setShow2(false);
                        setShow3(false);
                      }
                      setActList(index);
                      setActList2(null);
                      setShow4(false);
                    }}
                  >
                    {item}
                  </ListGroupItem>
                </>
              );
            })}
          </ListGroup>
          <div
            style={{
              padding: "16px 11.2px",
              background: "#ffffff",
              border: "1px solid #f4f5f5",
            }}
          >
            <p className="m-0 fs-12">Can't find the category?</p>
            <p className="m-0 text-primary" style={{ fontWeight: "500" }}>
              Search Category
            </p>
          </div>
        </Col>

        {show1 && (
          <Col xs="2">
            <Nested1
              show={show2}
              setShow={setShow2}
              show3={show3}
              setShow3={setShow3}
              actlist={actlist2}
              setActList={setActList2}
              setActList3={setActList3}
              setShow4={setShow4}
            />
          </Col>
        )}
        {show2 && (
          <Col xs="2">
            <Nested2
              show={show3}
              setShow={setShow3}
              actlist={actlist3}
              setActList={setActList3}
              setShow4={setShow4}
              show4={setShow4}
              setActList4={setActList4}
            />
          </Col>
        )}
        {show3 && (
          <Col xs="2">
            <Nested3
              show={show4}
              setShow={setShow4}
              actlist={actlist4}
              setActList={setActList4}
            />
          </Col>
        )}
        <Col xs="4">{show4 && <CategoryDet />}</Col>
      </Row>
    </div>
  );
};

export default SelectCategoryMain;
