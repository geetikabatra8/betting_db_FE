import React, { useEffect, useRef, useState } from "react";
import { Link, } from "react-router-dom";
import { Button, Table, Modal, Form } from "react-bootstrap";  
import ReactPaginate from 'react-paginate';
import { getRequest} from '../../services/authService';  
import plusIcon from "../../assets/svgFiles/plus.svg";
import xlsIcon from "../../assets/svgFiles/xls.svg";
import editIcon from "../../assets/svgFiles/edit.svg";
import logoutIcon from "../../assets/svgFiles/logout.svg";
import checkIcon from "../../assets/svgFiles/check.svg";
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
export default function AdminRecordList() {
    const selectRef1 = useRef(); 
    
    const [showEmp, setShowEmp] = useState(false);

    const handleCloseEmp = () => setShowEmp(false);
    const handleShowEmp = () => setShowEmp(true);

    useEffect(() => {
        $(selectRef1.current).niceSelect();
        getUserRecord(); 
     // eslint-disable-next-line react-hooks/exhaustive-deps, no-use-before-define
     }, []);
   


    const [getUserRecords,setUserRecords] = useState([]); 
    const [itemOffset, setItemOffset] = useState(0);
    const [getPageCount, setPageCount] = useState(0);
    const itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`); 
    const pageCount = Math.ceil(getPageCount / itemsPerPage);
    
    const getUserRecord = () => {
        getRequest(`https://api.codedruns.com/home/slider?skip=${itemOffset}&limit=${itemsPerPage}`).then((res) => {
            setPageCount(res.data.count)
            setUserRecords(res.data.listing); 
        });
    }


    


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % getPageCount;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    getUserRecord();
  };
 
  return (
    <> 
                            <div className="cardFull bg-white mt-3">
                                <div className="hdngRowBlk p-4">
                                    <div className="row align-items-center justify-content-center pb-20">
                                        <div className="col">
                                            <div className="MainHdng">
                                                <h4>All Records</h4>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <Link to="#" className="btnCommon" onClick={handleShowEmp}>
                                                <span className="me-1"> 
                                                    <img src={plusIcon} alt=""/>
                                                </span> New Record
                                            </Link>
                                        </div>
                                        <div className="col-auto">
                                            <Button className="btnCommon btnWhite" type="button">
                                                <span className="me-1">
                                                <img src={xlsIcon} alt=""/>
                                                </span> Export
                                            </Button>
                                        </div>
                                        <div className="col-auto">
                                            <div className="prdctsortCol">
                                                <div className="form-group">
                                                    <select ref={selectRef1} className="wide">
                                                        <option value="Status">Choose Status</option>
                                                        <option value="10">Active</option>
                                                        <option value="25">Inactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgContent p-4 pt-0">
                                    <div className="common-table">
                                        <Table className="table">
                                            <thead>
                                                <tr>
                                                    <th align="center" width="150">Action</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Club Name</th>
                                                    <th>Mobile Number</th>
                                                    <th>Email</th>
                                                    <th>Birth Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {getUserRecords && getUserRecords.map(item => {
                                                                return (
                                                <tr className="whitebgRow">
                                                    <td className="actions">
                                                        <div className="tbl-actn">
                                                            <ul>
                                                                <li className="edit-btn">
                                                                    <a href="/admin/editproduct">
                                                                    <img src={editIcon} alt=""/>
                                                                    </a>
                                                                </li>
                                                                <li className="delete-btn">
                                                                    <a href="/">
                                                                    <img src={logoutIcon} alt=""/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>John</td>
                                                    <td>Duo</td>
                                                    <td>Austin FC</td>
                                                    <td><a href="tel:+1-555-169-6552">+1-555-169-6552</a></td>
                                                    <td><a href="mailto:john@austinfc.com">john@austinfc.com</a></td>
                                                    <td>01/11/1992</td>
                                                    <td className="status">
                                                        <Link to="/" className="btnCommon">
                                                            Active
                                                            <i>
                                                            <img src={checkIcon} alt=""/>
                                                            </i>
                                                        </Link>
                                                    </td>
                                                </tr>
                                                 );
                                                })}

                                               
                                            </tbody>
                                        </Table>
                                        <ReactPaginate
                                                       containerClassName={'pagination'}  
                                                       subContainerClassName={'pages pagination'} 
                                                       activeClassName={'active'} 
                                                       breakLabel="..."
                                                       nextLabel=">"
                                                       onPageChange={handlePageClick}
                                                       pageRangeDisplayed={5}
                                                       pageCount={pageCount}
                                                       previousLabel="<"
                                                       renderOnZeroPageCount={null}
                                                   />
                                    </div>
                                </div>
                            </div>
                        

     <Modal show={showEmp} onHide={handleCloseEmp} className="comonModelOutr">
        <Modal.Header closeButton>
          <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalForm">
            <div className="formStyle">
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="password" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control type="date" placeholder="MM/DD/YY" />
                </Form.Group>                <Form.Group className="mb-4">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="number" placeholder="Mobile Number" />
                </Form.Group>
                <div className="formBtn text-left">
                  <Button className="btnCommon" type="submit">Submit</Button>
                  <Button className="btnCommon btnDark ms-3" type="button" onClick={handleCloseEmp}>Cancel</Button>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>




    </>
  )
}
