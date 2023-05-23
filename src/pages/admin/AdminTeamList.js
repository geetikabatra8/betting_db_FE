import React, { useEffect, useRef, useState } from "react";
import { Link, } from "react-router-dom";
import { Button, Table, Modal, Form, Alert } from "react-bootstrap"; 
import { postRequest, getRequest} from '../../services/authService';  
import ReactPaginate from 'react-paginate'; 
import plusIcon from "../../assets/svgFiles/plus.svg";
// import xlsIcon from "../../assets/svgFiles/xls.svg";
import editIcon from "../../assets/svgFiles/edit.svg";
import logoutIcon from "../../assets/svgFiles/logout.svg";
// import checkIcon from "../../assets/svgFiles/check.svg";

import teamLogo1 from '../../assets/images/teamlogo1.png';

import validate from '../../Hooks/teamList/ValidationRules';
import useForm from "../../Hooks/teamList/useForm";
import fileIcon from '../../assets/images/icons/fileIcon.svg';
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");



export default function AdminTeamList() {
    const selectRef1 = useRef();
    //------------------------------------------------------------------------------
    //start load data
    
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

//-------------------------------------------------------------------------------------------------------------
    


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % getPageCount;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);

    getUserRecord();
  };
 


    const [showTeam, setShowTeam] = useState(false);
    const handleCloseTeam = () => setShowTeam(false);
    const handleShowTeam = () => setShowTeam(true);

 //Final submit function
  const [getErrors,setErrors] = useState({
        hasError:false,
        message:''
    });


 const [selectedImage, setSelectedImage] = useState(null);
 const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(accountSubmit, validate);

  function accountSubmit() {
    postRequest(values
        ).then((response) => {
        console.log(response);
    }).catch((error) => {
        
        console.log(error.message);
        setErrors({
            hasError:true,
            message:error.message
        });
    });
  }


  const errorMessages = () => {
    if(getErrors.hasError){ 
        return (
            <><Alert variant="danger">{getErrors.message}</Alert></>
        );
    }else{
        return <></>
    }
}

  return (
    <>
     
                                <div className="cardFull bg-white mt-3">
                                    <div className="hdngRowBlk p-4">
                                        <div className="row align-items-center justify-content-center pb-20">
                                            <div className="col">
                                                <div className="MainHdng">
                                                    <h4>All Teams</h4>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="" className="btnCommon" onClick={handleShowTeam}>
                                                    <span className="me-1">
                                                        <img src={plusIcon} alt=""/>
                                                    </span>

                                                    Add Team
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pgContent p-4 pt-0">
                                        <div className="common-table">
                                            <Table className="table">
                                                <thead>
                                                    <tr>
                                                        <th align="center" width="150">Action</th>
                                                        <th>Team Name</th>
                                                        <th>Team Code</th>
                                                        <th>Team logos</th>
                                                        <th>Region</th>
                                                        <th>Opta ID</th>
                                                        <th>Company</th>
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
                                                                    <img src={editIcon} alt=""/>
                                                                    </li>
                                                                    <li className="delete-btn">
                                                                        <a href="/">
                                                                        <img src={logoutIcon} alt=""/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td>Austin FC</td>
                                                        <td>25480</td>
                                                        <td><img src={teamLogo1} alt="Teamlogo" /> </td>
                                                        <td>US</td>
                                                        <td>#56H52</td>
                                                        <td>MLS</td>
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



            <Modal show={showTeam} onHide={handleCloseTeam} className="comonModelOutr">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalForm">
                        <div className="formStyle">
                            <form onSubmit={(e)=> handleSubmit(e)} noValidate>
                                <Form.Group className="mb-4">
                                    <Form.Label>Team Name</Form.Label> 
                                    <Form.Control type="text" name="teamName"
                                    autoComplete="off" className={`input ${errors.teamName && 'is-danger'}`} 
                                    onChange={handleChange} value={values.teamName || ''} required />
                                    { errors.teamName && <div className="error">{errors.teamName}</div> }
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Team Code</Form.Label>
                                    <Form.Control type="text" name="teamCode"
                                    autoComplete="off" className={`input ${errors.teamCode && 'is-danger'}`} 
                                    onChange={handleChange} value={values.teamCode || ''} required />
                                    { errors.teamCode && <div className="error">{errors.teamCode}</div> }
                                </Form.Group>
                                
                                <Form.Group className="formInputIcon chooseFile mb-4">
                                    <Form.Label>Team Logo</Form.Label>
                                    <i><img src={fileIcon} alt="" /></i>

                                    <span>Upload File</span>
                                    <Form.Control type="file" name="teamLogo"
                                    autoComplete="off" className={`input ${errors.teamLogo && 'is-danger'}`}  
                                    onChange={(event) => { 
                                        setSelectedImage(event.target.files[0]); 
                                      }} value={values.teamLogo || ''} required />
                                    {selectedImage && (
                                            <div>
                                            <img
                                                alt="not found"
                                                width={"250px"}
                                                src={URL.createObjectURL(selectedImage)}
                                            />
                                            <br />
                                            <button onClick={() => setSelectedImage(null)}>Remove</button>
                                            </div>
                                        )}
                                    { errors.teamLogo && <div className="error">{errors.teamLogo}</div> }
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Select Religion</Form.Label>
                                    <Form.Select name="religion" className={`input ${errors.religion && 'is-danger'}`} 
                                    onChange={handleChange} required >
                                        <option value="">Select Religion</option>
                                        <option value="1">American</option>
                                        <option value="2">American</option>
                                        <option value="3">American</option>
                                    </Form.Select>
                                    { errors.religion && <div className="error">{errors.religion}</div> }
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Opta ID</Form.Label>
                                    <Form.Control type="text" name="opataID"
                                    autoComplete="off" className={`input ${errors.opataID && 'is-danger'}`} 
                                    onChange={handleChange} value={values.opataID || ''} required />
                                    { errors.opataID && <div className="error">{errors.opataID}</div> }
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Select Company</Form.Label>
                                    <Form.Select name="company" className={`input ${errors.religion && 'is-danger'}`} 
                                    onChange={handleChange} required>
                                        <option value="">Select Company</option>
                                        <option value="1">MLS</option>
                                        <option value="2">MLS</option>
                                        <option value="3">MLS</option>
                                    </Form.Select>
                                    { errors.company && <div className="error">{errors.company}</div> }
                                </Form.Group>
                                {errorMessages()}
                                <div className="formBtn text-left">
                                    <Button className="btnCommon" type="submit">Submit</Button>
                                    <Button className="btnCommon btnDark ms-3" type="button" onClick={handleCloseTeam}>Cancel</Button>

                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
                             
    </>
  )
}
