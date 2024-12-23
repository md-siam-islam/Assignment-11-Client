import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../Components/Home/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosProvider = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true
})
const Useaxios = () => {
const {signoutUser} = useContext(Authcontext)
const navigate = useNavigate()
    useEffect(() =>{
        axiosProvider.interceptors.response.use((res) => {
            return res
        }) , error => {

            if(error.status === 401 || error.status === 403){
                signoutUser().then(res => {
                    console.log(res);
                    navigate('/login')
                
                })
            }
            return Promise.reject(error)
        }
    },[])

    return axiosProvider
    
};

export default Useaxios;