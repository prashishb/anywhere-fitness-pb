import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth().post('http://localhost:5000/api/fitness/logout')
            .then(res => {
                localStorage.removeItem('token')
                push('/login')
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (<></>);
}

export default Logout;