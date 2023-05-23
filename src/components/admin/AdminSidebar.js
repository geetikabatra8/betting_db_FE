import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Modal, Form, Button } from "react-bootstrap";
import logo from "../../assets/images/logo.png"; 
import createNewAccount from "../../assets/svgFiles/createNewAccount.svg"; 
import newRecord from "../../assets/svgFiles/newRecord.svg"; 
import recordList from "../../assets/svgFiles/recordList.svg"; 
import teamList from "../../assets/svgFiles/teamList.svg"; 
import manageUsers from "../../assets/svgFiles/manageUsers.svg"; 
import technicalbook from "../../assets/svgFiles/technicalbook.svg"; 
import logoutIcon from "../../assets/svgFiles/logout.svg";  

import useForm from "../../Hooks/CreateAccount/useForm";
import validate from '../../Hooks/CreateAccount/AccountFormValidationRules';
function AdminSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Final submit function
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(accountSubmit, validate);

  function accountSubmit() {
    alert('No errors, submit callback called!');
  }
  return (
    <>
      <div className="leftsidemenu">
        <div className="sidebar-wrapper">
          <div className="logo d-flex align-items-center justify-content-start">
            <Link to="/club/recordList" className="d-block auth-logo">
              <div className="d-flex align-items-center ">
                <img src={logo} alt="test" />
                <h3>Major League Soccer</h3>
              </div>
            </Link>
          </div>
          <div className="sideBrMenu">
            <div className="NavMenuRow">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="singleLink">
                    <Link to=" " onClick={handleShow}>
                      <span>
                      <img src={createNewAccount} alt="test" />
                        
                      </span> Create New Account
                    </Link>
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="singleLink">
                    <Link to="/admin/newRecord">
                      <span> 
                        <img src={newRecord} alt="test" />
                      </span> New Record
                    </Link>
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="active">
                  <Accordion.Header className="singleLink">
                    <Link to="/admin/recordList">
                      <span> 
                        <img src={recordList} alt="test" />
                      </span> All Records
                    </Link>
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="singleLink">
                    <Link to="/admin/teamlist">
                      <span>
                       
                        <img src={teamList} alt="test" />
                      </span> Manage Team
                    </Link>
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="singleLink">
                    <Link to="/admin/manageUsers">
                      <span>
                        
                        <img src={manageUsers} alt="test" />
                      </span> Manage Users
                    </Link>
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="singleLink">
                    <Link to="/admin/technicalbook">
                      <span>
                       
                       <img src={technicalbook} alt="test" />
                      </span> Manage Sports Book
                    </Link>
                  </Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="logoutSideBar">
            <Link to="/">
              <span>
                 
                <img src={logoutIcon} alt="test" />
              </span> Logout
            </Link>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className="comonModelOutr">
        <Modal.Header closeButton>
          <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalForm">
            <div className="formStyle">
              <form onSubmit={(e)=> handleSubmit(e)} noValidate>
                <Form.Group className="mb-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="fname"
                   autoComplete="off" className={`input ${errors.fname && 'is-danger'}`} 
                   onChange={handleChange} value={values.fname || ''} required />
                  { errors.fname && <div className="error">{errors.fname}</div> }
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lname"
                   autoComplete="off" className={`input ${errors.lname && 'is-danger'}`} 
                   onChange={handleChange} value={values.lname || ''} required />
                  { errors.lname && <div className="error">{errors.lname}</div> }
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email"
                   autoComplete="off" className={`input ${errors.email && 'is-danger'}`} 
                   onChange={handleChange} value={values.email || ''} required />
                  { errors.email && <div className="error">{errors.email}</div> }
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Select Teams</Form.Label>
                  <Form.Select name="team"  autoComplete="off" className={`input ${errors.team && 'is-danger'}`} 
                   onChange={handleChange} value={values.team || ''} required >
                    <option value="">Select Teams</option>
                    <option value="1">Atlanta United</option>
                    <option value="2">Austin FC</option>
                    <option value="3">Charlotte FC</option>
                  </Form.Select>
                  { errors.team && <div className="error">{errors.team}</div> }
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Select Role</Form.Label>
                  <Form.Select name="role" 
                   autoComplete="off" className={`input ${errors.role && 'is-danger'}`} 
                   onChange={handleChange} value={values.role || ''} required >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="club-head">Club Head</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="sport-book">Sports Book</option>
                  </Form.Select>
                  { errors.role && <div className="error">{errors.role}</div> }
                </Form.Group>


                {values.role === "sport-book" ? (
                <Form.Group className="mb-4">
                  <Form.Label>Select Sports book</Form.Label>
                  <Form.Select name="sportBook" 
                   autoComplete="off" className={`input ${errors.sportBook && 'is-danger'}`} 
                   onChange={handleChange} value={values.sportBook || ''} required >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                  { errors.sportBook && <div className="error">{errors.sportBook}</div> }
                </Form.Group> ) :''
                }
                <Form.Group className="mb-4">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" placeholder="" name="mobile_number"
                   autoComplete="off" className={`input ${errors.mobile_number && 'is-danger'}`} 
                   onChange={handleChange} value={values.mobile_number || ''} required />
                  { errors.mobile_number && <div className="error">{errors.mobile_number}</div> }
                </Form.Group>
                <div className="formBtn text-left">
                  <Button className="btnCommon" type="submit">Submit</Button>
                  <Button className="btnCommon btnDark ms-3" type="button" onClick={handleClose}>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
}
export default AdminSidebar;