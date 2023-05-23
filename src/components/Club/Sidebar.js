import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import logo from "../../assets/images/clubLogo.png";
function ClubSidebar() {
  return (
    <>
    <div className="leftsidemenu">
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <Link to="/club/recordList" className="d-block auth-logo">
            <div className="d-flex align-items-center ">
              <img src={logo} />
              <h3>Austin FC</h3>
            </div>
          </Link>
        </div>
        <div className="sideBrMenu">
          <div className="NavMenuRow">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className="singleLink">
                  <Link to="/club/newRecord">
                    <span>
                      <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_218)">
                        <path d="M16.3909 19.17H2.22761C1.646 19.1781 1.08495 18.9551 0.667586 18.55C0.250223 18.1448 0.0106561 17.5906 0.00146484 17.009V2.47101C0.0106561 1.88942 0.250223 1.33523 0.667586 0.930086C1.08495 0.524941 1.646 0.30194 2.22761 0.310027H14.7722C14.8508 0.308795 14.9288 0.323049 15.0019 0.351975C15.0749 0.380902 15.1415 0.423934 15.1979 0.478613C15.2543 0.533293 15.2994 0.59855 15.3306 0.670656C15.3618 0.742762 15.3785 0.820305 15.3797 0.898856V3.452H16.3909C16.4695 3.45077 16.5475 3.46502 16.6206 3.49395C16.6936 3.52288 16.7602 3.56591 16.8166 3.62059C16.873 3.67527 16.9181 3.74053 16.9493 3.81263C16.9805 3.88474 16.9972 3.96228 16.9984 4.04083V18.58C16.9973 18.6587 16.9808 18.7364 16.9496 18.8086C16.9185 18.8808 16.8735 18.9462 16.817 19.001C16.7606 19.0558 16.6939 19.099 16.6208 19.128C16.5477 19.157 16.4696 19.1713 16.3909 19.17ZM1.2152 4.39576V17.009C1.21949 17.2732 1.32833 17.525 1.51788 17.7091C1.70744 17.8932 1.96223 17.9946 2.22645 17.9912H15.7835V4.63199H2.22761C1.87703 4.63398 1.5308 4.5543 1.21636 4.39925L1.2152 4.39576ZM2.22645 1.48652C1.96223 1.4831 1.70744 1.58455 1.51788 1.76865C1.32833 1.95275 1.21949 2.20448 1.2152 2.46868C1.21949 2.73288 1.32833 2.98461 1.51788 3.16871C1.70744 3.35281 1.96223 3.45426 2.22645 3.45084H14.166V1.48885L2.22645 1.48652Z" fill="currentColor"/>
                        <path d="M5.98075 13.8403C5.84466 13.8402 5.71289 13.7925 5.60837 13.7053L3.28098 11.7654C3.2155 11.7108 3.16282 11.6425 3.12667 11.5653C3.09052 11.488 3.07178 11.4038 3.07178 11.3186C3.07178 11.2333 3.09052 11.1491 3.12667 11.0719C3.16282 10.9946 3.2155 10.9263 3.28098 10.8717L5.60837 8.93182C5.66705 8.88285 5.73481 8.84591 5.80777 8.82311C5.88072 8.80032 5.95746 8.79212 6.03359 8.79898C6.10971 8.80584 6.18374 8.82763 6.25145 8.8631C6.31916 8.89858 6.37921 8.94704 6.42819 9.00572C6.47717 9.0644 6.51411 9.13216 6.5369 9.20511C6.5597 9.27807 6.5679 9.35481 6.56104 9.43094C6.55417 9.50706 6.53239 9.58109 6.49691 9.6488C6.46144 9.71651 6.41298 9.77656 6.3543 9.82554L4.56221 11.3197L6.3543 12.8127C6.44618 12.8894 6.51221 12.9924 6.54339 13.1079C6.57457 13.2234 6.56939 13.3457 6.52856 13.4582C6.48773 13.5707 6.41322 13.6678 6.3152 13.7364C6.21717 13.8049 6.10039 13.8405 5.98075 13.8403Z" fill="currentColor"/>
                        <path d="M11.0191 13.8403C10.8996 13.8402 10.7829 13.8034 10.6851 13.7347C10.5872 13.666 10.5129 13.5689 10.4722 13.4565C10.4316 13.3441 10.4265 13.2219 10.4577 13.1065C10.4889 12.9911 10.5549 12.8881 10.6467 12.8116L12.4376 11.3186L10.6467 9.82554C10.588 9.77656 10.5396 9.71651 10.5041 9.6488C10.4686 9.58109 10.4468 9.50706 10.44 9.43094C10.4331 9.35481 10.4413 9.27807 10.4641 9.20511C10.4869 9.13216 10.5238 9.0644 10.5728 9.00572C10.6218 8.94704 10.6818 8.89858 10.7496 8.8631C10.8173 8.82763 10.8913 8.80584 10.9674 8.79898C11.0435 8.79212 11.1203 8.80032 11.1932 8.82311C11.2662 8.84591 11.3339 8.88285 11.3926 8.93182L13.72 10.8717C13.7855 10.9263 13.8382 10.9946 13.8743 11.0719C13.9105 11.1491 13.9292 11.2333 13.9292 11.3186C13.9292 11.4038 13.9105 11.488 13.8743 11.5653C13.8382 11.6425 13.7855 11.7108 13.72 11.7654L11.3926 13.7053C11.2878 13.7927 11.1556 13.8405 11.0191 13.8403Z" fill="currentColor"/>
                        <path d="M7.72354 14.6212C7.66963 14.6212 7.61597 14.6138 7.56411 14.5991C7.41585 14.5566 7.29053 14.457 7.21568 14.3221C7.14084 14.1873 7.1226 14.0282 7.16496 13.8799L8.71268 8.44895C8.75856 8.3047 8.85885 8.18401 8.99226 8.11249C9.12567 8.04098 9.2817 8.02427 9.42723 8.06591C9.57276 8.10756 9.69633 8.20428 9.77172 8.33554C9.8471 8.46681 9.86836 8.62228 9.83099 8.76897L8.27978 14.1999C8.24511 14.3216 8.17171 14.4287 8.0707 14.5049C7.96969 14.5812 7.84659 14.6224 7.72005 14.6224L7.72354 14.6212Z" fill="currentColor"/>
                        </g>
                      </svg>
                    </span> New Record
                  </Link>
                </Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="active">
                <Accordion.Header className="singleLink">
                  <Link to="/club/recordList">
                    <span>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_230)">
                        <path d="M4.70106 12.6237C4.56999 12.6235 4.44437 12.5713 4.35169 12.4786C4.25901 12.3859 4.20682 12.2603 4.20654 12.1292V4.87077C4.20654 4.73947 4.2587 4.61356 4.35153 4.52072C4.44437 4.42789 4.57029 4.37573 4.70158 4.37573C4.83287 4.37573 4.95878 4.42789 5.05162 4.52072C5.14446 4.61356 5.19662 4.73947 5.19662 4.87077V12.1282C5.19676 12.1933 5.18404 12.2578 5.15918 12.318C5.13432 12.3782 5.09783 12.4329 5.05178 12.4789C5.00574 12.525 4.95105 12.5615 4.89086 12.5863C4.83067 12.6112 4.76618 12.6239 4.70106 12.6237Z" fill="currentColor"/>
                        <path d="M12.2938 12.6237C12.1627 12.6237 12.0369 12.5717 11.9442 12.4789C11.8514 12.3862 11.7993 12.2604 11.7993 12.1292V4.87077C11.7993 4.73947 11.8515 4.61356 11.9443 4.52072C12.0372 4.42789 12.1631 4.37573 12.2944 4.37573C12.4257 4.37573 12.5516 4.42789 12.6444 4.52072C12.7372 4.61356 12.7894 4.73947 12.7894 4.87077V12.1282C12.7894 12.2596 12.7372 12.3857 12.6442 12.4786C12.5513 12.5715 12.4253 12.6237 12.2938 12.6237Z" fill="currentColor"/>
                        <path d="M8.49989 16.4186C8.36882 16.4183 8.24319 16.3661 8.15051 16.2734C8.05783 16.1807 8.00565 16.0551 8.00537 15.924V1.07707C8.00537 0.945778 8.05753 0.819863 8.15037 0.727025C8.24321 0.634187 8.36912 0.582031 8.50041 0.582031C8.63171 0.582031 8.75762 0.634187 8.85046 0.727025C8.9433 0.819863 8.99546 0.945778 8.99546 1.07707V15.923C8.99546 16.0544 8.94323 16.1805 8.8503 16.2734C8.75736 16.3663 8.63132 16.4186 8.49989 16.4186Z" fill="currentColor"/>
                        <path d="M15.0523 17H1.94768C1.43129 16.9994 0.936214 16.7941 0.571074 16.4289C0.205934 16.0638 0.000554657 15.5687 0 15.0523L0 1.94768C0.000554657 1.43129 0.205934 0.936214 0.571074 0.571074C0.936214 0.205934 1.43129 0.000554657 1.94768 0L15.0523 0C15.5687 0.000554657 16.0638 0.205934 16.4289 0.571074C16.7941 0.936214 16.9994 1.43129 17 1.94768V15.0523C16.9994 15.5687 16.7941 16.0638 16.4289 16.4289C16.0638 16.7941 15.5687 16.9994 15.0523 17ZM1.94768 1.06237C1.71296 1.06265 1.48794 1.15601 1.32198 1.32198C1.15601 1.48794 1.06265 1.71296 1.06237 1.94768V15.0523C1.06265 15.287 1.15601 15.5121 1.32198 15.678C1.48794 15.844 1.71296 15.9374 1.94768 15.9376H15.0523C15.287 15.9374 15.5121 15.844 15.678 15.678C15.844 15.5121 15.9374 15.287 15.9376 15.0523V1.94768C15.9374 1.71296 15.844 1.48794 15.678 1.32198C15.5121 1.15601 15.287 1.06265 15.0523 1.06237H1.94768Z" fill="currentColor"/>
                        <path d="M15.923 12.7894H1.07707C0.945778 12.7894 0.819863 12.7372 0.727025 12.6444C0.634187 12.5516 0.582031 12.4257 0.582031 12.2944C0.582031 12.1631 0.634187 12.0372 0.727025 11.9443C0.819863 11.8515 0.945778 11.7993 1.07707 11.7993H15.923C16.0543 11.7993 16.1802 11.8515 16.273 11.9443C16.3659 12.0372 16.418 12.1631 16.418 12.2944C16.418 12.4257 16.3659 12.5516 16.273 12.6444C16.1802 12.7372 16.0543 12.7894 15.923 12.7894Z" fill="currentColor"/>
                        <path d="M15.923 5.20077H1.07707C0.945778 5.20077 0.819863 5.14862 0.727025 5.05578C0.634187 4.96294 0.582031 4.83702 0.582031 4.70573C0.582031 4.57444 0.634187 4.44852 0.727025 4.35568C0.819863 4.26285 0.945778 4.21069 1.07707 4.21069H15.923C16.0543 4.21069 16.1802 4.26285 16.273 4.35568C16.3659 4.44852 16.418 4.57444 16.418 4.70573C16.418 4.83702 16.3659 4.96294 16.273 5.05578C16.1802 5.14862 16.0543 5.20077 15.923 5.20077Z" fill="currentColor"/>
                        </g>
                      </svg>
                    </span> All Records
                  </Link>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="logoutSideBar">
          <Link to="/">
            <span>
              <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61507 2.71337C9.81258 2.52039 10.12 2.50893 10.3305 2.67661L10.3811 2.72226L10.4336 2.77613C11.3796 3.77512 11.9166 5.09607 11.9166 6.49992C11.9166 9.49146 9.49146 11.9166 6.49992 11.9166C3.50838 11.9166 1.08325 9.49146 1.08325 6.49992C1.08325 5.15711 1.57459 3.89014 2.45032 2.9029L2.57212 2.77003L2.61879 2.72226C2.82785 2.50829 3.17079 2.50431 3.38477 2.71337C3.58228 2.90636 3.60086 3.21341 3.43812 3.42781L3.39365 3.47935L3.35286 3.52101C2.59557 4.32074 2.16659 5.37596 2.16659 6.49992C2.16659 8.89315 4.10668 10.8333 6.49992 10.8333C8.89315 10.8333 10.8333 8.89315 10.8333 6.49992C10.8333 5.43511 10.4482 4.432 9.7688 3.65457L9.65285 3.52712L9.60618 3.47935C9.39712 3.26538 9.4011 2.92244 9.61507 2.71337ZM6.49992 1.08325C6.79907 1.08325 7.04158 1.32576 7.04158 1.62492V5.95825C7.04158 6.25741 6.79907 6.49992 6.49992 6.49992C6.20076 6.49992 5.95825 6.25741 5.95825 5.95825V1.62492C5.95825 1.32576 6.20076 1.08325 6.49992 1.08325Z" fill="white"/>
              </svg>
            </span> Logout
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
export default ClubSidebar;