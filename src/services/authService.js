import axios from "axios";
const baseURL = "https://dining.fivvia.com/api";
const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
//   'Authorization': 'JWT fefege...'
}

export const loginFun = async (loginDetails) => {
     const response = await axios.post(`${baseURL}/admin/check/login`, loginDetails,{
        headers: headers
      });
    return response.data;
}

export const postRequest = async (url,params) => {
    const response = await axios.post(`${baseURL}/${url}`, params,{
       headers: headers
     });
   return response.data;
}


export const getRequest = async (url,params={}) => {
    const response = await axios.get(`${url}`, params,{
       headers: headers
     });
   return response.data;
}

export const getAuth = async () => {
    let status = false;
    let role = null;
    if(localStorage.getItem('userData') !== null && localStorage.getItem('accessToken') !== null){
        const userData = JSON.parse(localStorage.getItem('userData'));
        role = userData.role;
        status = true;  
        
    }else{
        status = false;
    } 
    const response =  {
        status:status,
        role:role,
        dashbord:getDashboard(role)
    };
    return response;
}


const getDashboard = (role) => {
  let route = '/login';
  switch (role) {
    case 'admin':
        route = '/admin';
        break;
  
    default:
        break;
  }
  return route;
}

export const logout = (role) => {
   localStorage.removeItem('userData');
   localStorage.removeItem('accessToken');
}



axios.interceptors.request.use(function (config) {
    const token = 'Bearer 55454';
    config.headers.Authorization =  token; 
    return config;
});