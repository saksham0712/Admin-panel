import React from 'react'
import '../Styles/WelcomeStyle.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='home-main d-flex justify-content-center align-items-center vw-100 vh-100'>
                <div className='home-main-text d-flex flex-column justify-content-center align-items-center'>
                    <h2>
                        Welcome
                    </h2>
                    <p>Admin Panel by <span className='text-secondary'>Saksham Verma</span></p>
                    <div className="buttons d-flex gap-1">
                    <Button variant='secondary'><Link to='/login' className='text-decoration-none text-white'>Login</Link></Button>
                    <Button variant='secondary'><Link to='/signup' className='text-decoration-none text-white'>Signup</Link></Button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
