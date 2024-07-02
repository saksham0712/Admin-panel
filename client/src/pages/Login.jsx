import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/LoginStyle.css'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/APIRoutes';
import axios from 'axios'


const Login = () => {
  const [msg, setmsg] = useState('') // state for msg from backend
  const navigate = useNavigate()
  // it is used to prevent errors and make form handling easy
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

useEffect(()=>{
  if(localStorage.getItem('user')){
    // navigate('/')
  }
},[])

const onSubmit = async (formData) => {
  // console.log(formData)
  const {data} = await axios.post(login, formData)
  console.log(data.msg)
  if (data.status === false) { setmsg(data.msg) }
  if (data.status === true){
    setmsg(data.msg);
    alert(`${msg}, Now you will directed to Login page`)
    localStorage.setItem('user', JSON.stringify(data.user))
    // navigate('/login')
  }

}
  return (
    <div className='d-flex vw-100 vh-100'>
      <div className='d-flex justify-content-center align-content-center w-50 login-left'>
        <div className='text-center'>
        </div>

      </div>
      <div className='form-container w-50 p-5'>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='input rounded-3' {...register('email', { required: true })} placeholder="Enter email" />

          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='input rounded-3' {...register('password', { required: true })} placeholder="Password" />
          </Form.Group>
          {msg && <div className=' alert alert-danger ' role='alert' >{msg}</div>}

          <Button variant="primary" className="btn btn-secondary rounded-1" type="submit">
            Submit
          </Button>

        </Form>
        <div className="mt-2">Don't have an account? don't worry <Link className='signup-link' to="/signup">Signup</Link></div>
      </div>

    </div>
  )
}

export default Login
