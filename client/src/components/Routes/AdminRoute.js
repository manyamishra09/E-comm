// import {useState , useEffect} from 'react'
// import { useAuth } from '../../context/auth'
// import { Outlet } from 'react-router-dom';
// import axios from 'axios';
// import Spinner from '../Spinner';

// export default function AdminRoute(){
//     const [ok , setOk] = useState(false);
//     const [auth, setAuth] = useAuth();

//     useEffect(()=>{
//         const authCheck = async()=>{
//             const res = await axios.get('/api/v1/auth/admin-auth')
//             if(res.data.ok){
//                 setOk(true)
//             }
//             else{
//                 setOk(false)
//             }
//         }
//         if(auth?.token)authCheck()
//     },[auth?.token])

//     return ok ? <Outlet/> : <Spinner path = "" />
// }


import { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [error, setError] = useState(null);
    // eslint-disable-next-line
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get('/api/v1/auth/admin-auth');
                if (res.data.ok) {
                    setOk(true);
                } else {
                    // User is not authenticated as an admin, set error state
                    setError('You are not authorized to access this page.');
                }
            } catch (error) {
                // Handle other errors (e.g., network error)
                setError('An error occurred while checking authentication.');
            }
        };

        if (auth?.token) authCheck();
    }, [auth?.token]);

    return (
        <>
            {ok ? (
                <Outlet />
            ) : (
                error ? (
                    <div>{error}</div>
                ) : (
                    <Spinner path="" />
                )
            )}
        </>
    );
}
