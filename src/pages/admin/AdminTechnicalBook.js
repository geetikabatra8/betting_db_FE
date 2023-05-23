import React, { useEffect, useRef,useState } from "react";
import { Link, } from "react-router-dom";
import {  Table } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { getRequest} from '../../services/authService';  
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");
export default function AdminTechnicalBook() {
    const selectRef1 = useRef();
    
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
                                                    <h4>Sportsbook Details</h4>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="/admin/technicalbook" className="btnCommon">
                                                    Technical Contacts
                                                </Link>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="/admin/sportsbook" className="btnCommon btnWhite">
                                                    Sports Book
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
                                                        <th>Sportsbook Name</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Email</th>
                                                        <th>Mobile Number</th>
                                                        <th>IP Address</th>
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
                                                                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M10.2021 8.58594L10.9521 7.83594C11.0693 7.71875 11.2803 7.8125 11.2803 7.97656V11.375C11.2803 12.0078 10.7646 12.5 10.1553 12.5H1.90527C1.27246 12.5 0.780273 12.0078 0.780273 11.375V3.125C0.780273 2.51562 1.27246 2 1.90527 2H8.30371C8.46777 2 8.56152 2.21094 8.44434 2.32812L7.69434 3.07812C7.64746 3.125 7.60059 3.125 7.55371 3.125H1.90527V11.375H10.1553V8.72656C10.1553 8.67969 10.1553 8.63281 10.2021 8.58594ZM13.8584 3.875L7.71777 10.0156L5.58496 10.25C4.97559 10.3203 4.45996 9.80469 4.53027 9.19531L4.76465 7.0625L10.9053 0.921875C11.4443 0.382812 12.3115 0.382812 12.8506 0.921875L13.8584 1.92969C14.3975 2.46875 14.3975 3.33594 13.8584 3.875ZM11.5615 4.57812L10.2021 3.21875L5.84277 7.57812L5.65527 9.125L7.20215 8.9375L11.5615 4.57812ZM13.0615 2.72656L12.0537 1.71875C11.96 1.60156 11.7959 1.60156 11.7021 1.71875L10.999 2.42188L12.3584 3.80469L13.085 3.07812C13.1787 2.96094 13.1787 2.82031 13.0615 2.72656Z" fill="currentColor" />
                                                                            </svg>
                                                                        </a>
                                                                    </li>
                                                                    <li className="delete-btn">
                                                                        <a href="/">
                                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <g clip-path="url(#clip0_130_165)">
                                                                                    <path d="M8.875 4.75H11.125C11.2245 4.75 11.3198 4.78951 11.3902 4.85983C11.4605 4.93016 11.5 5.02554 11.5 5.125V5.875H8.5V5.125C8.5 5.02554 8.53951 4.93016 8.60984 4.85983C8.68016 4.78951 8.77554 4.75 8.875 4.75ZM12.25 5.875V5.125C12.25 4.82663 12.1315 4.54048 11.9205 4.3295C11.7095 4.11853 11.4234 4 11.125 4H8.875C8.57663 4 8.29048 4.11853 8.0795 4.3295C7.86853 4.54048 7.75 4.82663 7.75 5.125V5.875H5.8795C5.877 5.87498 5.8745 5.87498 5.872 5.875H5.125C5.02554 5.875 4.93016 5.91451 4.85983 5.98484C4.78951 6.05516 4.75 6.15054 4.75 6.25C4.75 6.34946 4.78951 6.44484 4.85983 6.51516C4.93016 6.58549 5.02554 6.625 5.125 6.625H5.5285L6.16825 14.62C6.19842 14.9959 6.36907 15.3466 6.64621 15.6024C6.92335 15.8581 7.28665 16.0001 7.66375 16H12.3362C12.7134 16.0001 13.0767 15.8581 13.3538 15.6024C13.6309 15.3466 13.8016 14.9959 13.8317 14.62L14.4715 6.625H14.875C14.9745 6.625 15.0698 6.58549 15.1402 6.51516C15.2105 6.44484 15.25 6.34946 15.25 6.25C15.25 6.15054 15.2105 6.05516 15.1402 5.98484C15.0698 5.91451 14.9745 5.875 14.875 5.875H14.1287C14.1263 5.87498 14.1237 5.87498 14.1213 5.875H12.25ZM13.7185 6.625L13.084 14.56C13.0689 14.7479 12.9836 14.9233 12.845 15.0512C12.7065 15.1791 12.5248 15.25 12.3362 15.25H7.66375C7.4752 15.25 7.29355 15.1791 7.15498 15.0512C7.01641 14.9233 6.93108 14.7479 6.916 14.56L6.2815 6.625H13.7185ZM8.10325 7.375C8.2025 7.36926 8.29997 7.40317 8.37422 7.46927C8.44848 7.53537 8.49345 7.62825 8.49925 7.7275L8.87425 14.1025C8.87819 14.2006 8.84351 14.2963 8.77766 14.3691C8.71181 14.4419 8.62004 14.486 8.52206 14.4919C8.42407 14.4978 8.32768 14.465 8.25358 14.4006C8.17949 14.3362 8.13359 14.2453 8.12575 14.1475L7.75 7.7725C7.74696 7.72323 7.75367 7.67385 7.76975 7.62719C7.78583 7.58052 7.81097 7.53749 7.84372 7.50056C7.87646 7.46363 7.91618 7.43353 7.96059 7.41198C8.005 7.39043 8.05322 7.37787 8.1025 7.375H8.10325ZM11.8968 7.375C11.946 7.37787 11.9943 7.39043 12.0387 7.41198C12.0831 7.43353 12.1228 7.46363 12.1555 7.50056C12.1883 7.53749 12.2134 7.58052 12.2295 7.62719C12.2456 7.67385 12.2523 7.72323 12.2492 7.7725L11.8742 14.1475C11.8722 14.1973 11.8603 14.2463 11.8392 14.2914C11.818 14.3366 11.7881 14.3771 11.7511 14.4106C11.7141 14.444 11.6708 14.4698 11.6238 14.4863C11.5767 14.5028 11.5268 14.5098 11.477 14.5068C11.4273 14.5038 11.3786 14.4909 11.3338 14.4688C11.2891 14.4468 11.2492 14.4161 11.2165 14.3784C11.1838 14.3408 11.1589 14.297 11.1433 14.2496C11.1277 14.2022 11.1218 14.1522 11.1258 14.1025L11.5008 7.7275C11.5065 7.62825 11.5515 7.53537 11.6258 7.46927C11.7 7.40317 11.7975 7.36926 11.8968 7.375ZM10 7.375C10.0995 7.375 10.1948 7.41451 10.2652 7.48484C10.3355 7.55516 10.375 7.65054 10.375 7.75V14.125C10.375 14.2245 10.3355 14.3198 10.2652 14.3902C10.1948 14.4605 10.0995 14.5 10 14.5C9.90054 14.5 9.80516 14.4605 9.73484 14.3902C9.66451 14.3198 9.625 14.2245 9.625 14.125V7.75C9.625 7.65054 9.66451 7.55516 9.73484 7.48484C9.80516 7.41451 9.90054 7.375 10 7.375Z" fill="currentColor" />
                                                                                </g>
                                                                                <defs>
                                                                                    <clipPath id="clip0_130_165">
                                                                                        <rect width="12" height="12" fill="white" transform="translate(4 4)" />
                                                                                    </clipPath>
                                                                                </defs>
                                                                            </svg>

                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td>Austin FC</td>
                                                        <td>John</td>
                                                        <td>Doe</td>
                                                        <td><a href="mailto:john@austinfc.com">john@austinfc.com</a></td>
                                                        <td><a href="tel:+1-555-169-6552">+1-555-169-6552</a></td>                          
                                                        <td>123.123.123.123</td>
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
                         
                            </>
  )
}
