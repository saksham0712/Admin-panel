import React from 'react'
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/LoginStyle.css'
import { Link } from 'react-router-dom';


const Login = () => {
  // it is used to prevent errors and make form handling easy
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => console.log(formData);
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
            <Form.Control type="password" className='input rounded-3' {...register('password', { required: true})} placeholder="Password" />
          
          </Form.Group>

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
