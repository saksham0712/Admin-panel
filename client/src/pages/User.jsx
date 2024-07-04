import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

const User = () => {
    const [first, setFirst] = useState('')

    useEffect(() => {
        const username = async () => {
            const name = localStorage.getItem('user');
            const firstname = name.split(',')[1].split('"')[3];
            setFirst(firstname);

        }
        username();
    }, []);
    return (

        <>
            <Navbar />
            <div className='vh-100 w-100 align-content-center'>
                <h1 className=' text-center'>Welcome, {first}</h1><h3 className=' text-center'>Sorry there is noting for you friend</h3>
            </div>
        </>
    )
}

export default User
