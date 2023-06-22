import React, { useState } from "react";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  UncontrolledDropdown,
} from "reactstrap";

export const Nested1 = ({
  show,
  setShow,
  setShow3,
  show3,
  actlist,
  setActList,
  setActList3,
  setShow4,
}) => {
  console.log(show, "show");
  const list = ["Nested1", "Nested1", "Nested1", "Nested1", "Nested1"];
  return (
    <div>
      <ListGroup>
        {list.map((item, index) => {
          return (
            <>
              <ListGroupItem
                className={actlist == index ? "arrow-div" : ""}
                active={actlist == index ? true : false}
                onClick={() => {
                  setShow(true);

                  if (show3 === true) {
                    setShow3(false);
                  }

                  setActList(index);
                  setActList3(null);
                  setShow4(false);
                }}
              >
                {item}
              </ListGroupItem>
            </>
          );
        })}
      </ListGroup>
    </div>
  );
};
export const Nested2 = ({
  show,
  setShow,
  actlist,
  setActList,
  setShow4,
  show4,
  setActList4,
}) => {
  const list = ["Nested2", "Nested2", "Nested2", "Nested2", "Nested2"];
  return (
    <div>
      <ListGroup>
        {list.map((item, index) => {
          return (
            <>
              <ListGroupItem
                className={actlist == index ? "arrow-div" : ""}
                active={actlist == index ? true : false}
                onClick={() => {
                  setShow(true);
                  setActList(index);
                  setShow4(false);
                  setActList4(null);
                }}
              >
                {item}
              </ListGroupItem>
            </>
          );
        })}
      </ListGroup>
    </div>
  );
};

export const Nested3 = ({ show, setShow, setActList, actlist }) => {
  const list = ["Nested3", "Nested3", "Nested3", "Nested3", "Nested3"];
  return (
    <div>
      <ListGroup>
        {list.map((item, index) => {
          return (
            <>
              <ListGroupItem
                className={actlist == index ? "arrow-div" : ""}
                active={actlist == index ? true : false}
                onClick={() => {
                  setShow(true);
                  setActList(index);
                }}
              >
                {item}
              </ListGroupItem>
            </>
          );
        })}
      </ListGroup>
    </div>
  );
};
