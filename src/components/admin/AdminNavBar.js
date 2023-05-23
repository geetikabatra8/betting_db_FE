import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import navBarIcon from "../../assets/images/barIcon.svg";
import logoutIcon from "../../assets/svgFiles/logout.svg";
import $ from "jquery";
function AdminNavBar() {
  // const handleClick = event => {
  //   event.currentTarget.classList.toggle('close');
  // };
  const showonclick = event => {
    $("body").find("#root").toggleClass("intro");
  };
  // const [show, setShow] = React.useState();
  return (
    <div className="navbar-custom">
      <Row className="align-items-center w-100">
        <Col>
          <div className="navBarClose"> 
            <Link to="" onClick={() => showonclick()}>
              <img src={navBarIcon} alt="" height="18" className="" />
            </Link>
          </div>
        </Col>
        <Col xl="auto">
          <div className="navRightSideBar">
            <div className="hdrLogout">
              <Link to="/">
                <span>
                <img src={logoutIcon} alt="" /> 
                </span> Logout
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default AdminNavBar;