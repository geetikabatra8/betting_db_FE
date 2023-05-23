import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import navBarIcon from "../../assets/images/barIcon.svg";
import $ from "jquery";
function ClubNavBar() {
  const handleClick = event => {
    event.currentTarget.classList.toggle('close');
  };
  const showonclick = event => {
    $("#root").toggleClass("intro");
  };
  const [show, setShow] = React.useState();
  return (
    <div className="navbar-custom">
      <Row className="align-items-center w-100">
        <Col>
          <div className="navBarClose">
            <Link to="javascript:void(0);" onClick={() => showonclick()}>
              <img src={navBarIcon} alt="" height="18" className="" />
            </Link>
          </div>
        </Col>
        <Col xl="auto">
          <div className="navRightSideBar">
            <div className="hdrLogout">
              <Link to="/">
                <span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61507 2.71337C9.81258 2.52039 10.12 2.50893 10.3305 2.67661L10.3811 2.72226L10.4336 2.77613C11.3796 3.77512 11.9166 5.09607 11.9166 6.49992C11.9166 9.49146 9.49146 11.9166 6.49992 11.9166C3.50838 11.9166 1.08325 9.49146 1.08325 6.49992C1.08325 5.15711 1.57459 3.89014 2.45032 2.9029L2.57212 2.77003L2.61879 2.72226C2.82785 2.50829 3.17079 2.50431 3.38477 2.71337C3.58228 2.90636 3.60086 3.21341 3.43812 3.42781L3.39365 3.47935L3.35286 3.52101C2.59557 4.32074 2.16659 5.37596 2.16659 6.49992C2.16659 8.89315 4.10668 10.8333 6.49992 10.8333C8.89315 10.8333 10.8333 8.89315 10.8333 6.49992C10.8333 5.43511 10.4482 4.432 9.7688 3.65457L9.65285 3.52712L9.60618 3.47935C9.39712 3.26538 9.4011 2.92244 9.61507 2.71337ZM6.49992 1.08325C6.79907 1.08325 7.04158 1.32576 7.04158 1.62492V5.95825C7.04158 6.25741 6.79907 6.49992 6.49992 6.49992C6.20076 6.49992 5.95825 6.25741 5.95825 5.95825V1.62492C5.95825 1.32576 6.20076 1.08325 6.49992 1.08325Z" fill="white"/>
                  </svg>
                </span> Logout
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ClubNavBar;