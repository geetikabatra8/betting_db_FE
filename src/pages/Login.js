import React, { useState, useEffect } from 'react';
// import {omit} from 'lodash'
import { Link, Navigate } from "react-router-dom";
import { Container, Form, Alert, Button } from "react-bootstrap"; 
import { loginFun, getAuth } from '../services/authService'; 
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/icons/userIcon.svg";
import passIcon from "../assets/images/icons/passIcon.svg"; 

const Login = () => {

  const [auth,setAuth] = useState({
    status:false,
    role:''
  });

  useEffect(() => {
    getAuth().then((res) => {
       setAuth({
           status:res.status,
           role:res.role
       });
       console.log("loaded",res);
       if(res.status){
       
        window.location.href = '/admin';
       }
      
    });
    
    
 },[]);

 
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loginDetails,setLoginDetail] = useState({
        email:"",
        password:""
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [getErrors,setErrors] = useState({
        hasError:false,
        message:''
    });

    const handleChange = (event,field) => {
        setLoginDetail({...loginDetails,[field]:event.target.value});
    }

    const handleFormSubmit = (event) => {
         event.preventDefault();
        
         if(loginDetails.email !== '' && loginDetails.password !== ''){
                loginFun(loginDetails).then((response) => { 
                    if(response.status === 1){
                      setErrors({
                        hasError:true,
                        message:'Login successfully, redirecting to dashboard....'
                      });
                      let token = response.accessToken;
                      let data = JSON.stringify(response.data);
                      localStorage.setItem('accessToken',token);
                      localStorage.setItem('userData',data);
                      setTimeout(() => {
                        window.location.href = '/admin';
                      },3000);
                    }else{
                      setErrors({
                        hasError:true,
                        message:response.message
                      });
                    }
                   
                     
                }).catch((error) => {
                     
                    setErrors({
                        hasError:true,
                        message:error.message
                    });
                });
         }else{
              alert('please enter email and passord!');
         }
         console.log(loginDetails);
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
    if(auth.status){
      return <Navigate to={'/admin'} />
     }

  return (
    <> 
     <div className="auth-page">
        <Container fluid className="p-0">
          <div className="auth-bg d-flex align-items-center justify-content-end">
            <div className="auth-full-page-content">
              <div className="loginBody auth-content my-auto">
                <div className="loginHdr text-center">
                  <div className="loginLogo mb-2 text-center">
                    <Link to="/" className="d-block auth-logo">
                      <img src={logo} alt="MLS Club" />
                    </Link>
                  </div>
                  <h3 className="mb-0">Login</h3>
                  <p className="mt-2">Please enter your details below to Sign In</p>
                </div>
                <div className="loginForm formStyle">
                <Form onSubmit={(e)=> handleFormSubmit(e)}>
                       {errorMessages()}
                    <Form.Group className="formInputIcon mb-4">
                      <Form.Label>Email</Form.Label>
                      <i><img src={userIcon} alt="" /></i>
                      <Form.Control type="email" placeholder="Enter Your Email Address" value={loginDetails.email} onChange={(e) => handleChange(e,'email')}/>
                    </Form.Group>
                    <Form.Group className="formInputIcon mb-4">
                      <Form.Label>Password</Form.Label>
                      <i><img src={passIcon} alt="" /></i>
                      <Form.Control type="password" placeholder="******" value={loginDetails.password} onChange={(e) => handleChange(e,'password')}/>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <div className="formBtn text-center"> 
                      <Button className="btn btn-primary waves-effect waves-light" type="submit">Submit</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div> 
    </>
  )
}
export default Login;