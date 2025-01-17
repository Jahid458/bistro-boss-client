import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const UseAxiosSecure = () => {
        const navigate = useNavigate();
        const {logOut} = useAuth()
        //request interceptor to add authorization header for every secure call to API
        axiosSecure.interceptors.request.use(function(config){
                const token = localStorage.getItem('access-token')
                // console.log('request stopped by interceptor',token);
                config.headers.authorization = `Bearer ${token}`
                return config;
        }, function (error) {
                // Do something with request error
                return Promise.reject(error);
         });

         //interceptor 401 and 403 status 
         axiosSecure.interceptors.response.use(function(response){
                return response;
         }, async(error) =>{
                const status = error.response.status;
                // console.log('Status error in the interceptors', status);
                //for 401 and 403 logout the user and move the user login page   
                if(status === 401 || status === 403){
                        await logOut();
                        navigate('/login')
                }
                return Promise.reject(error)
         })



        return axiosSecure;
};

export default UseAxiosSecure;