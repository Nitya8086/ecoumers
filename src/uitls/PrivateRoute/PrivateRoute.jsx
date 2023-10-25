import React from 'react';
import {Navigate} from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const auth = localStorage.getItem('token');

    if(!auth){
        return <Navigate to = '/login'/>
    }
  return children;
}

export default PrivateRoute