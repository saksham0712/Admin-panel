import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/SignupStyle.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../utils/APIRoutes';


const Signup = () => {
  const [msg, setmsg] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      // navigate('/')
    }
  }, [])
  useEffect(() => {
    setmsg(msg)
  }, [msg])

  // it is used to prevent errors and make form handling easy
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    // console.log(formData)
    const { data } = await axios.post(signup, formData, {
      withCredentials: true,
    })
    console.log(data)
    if (data.status === false) { setmsg(data.msg) }
    if (data.status === true) {
      setmsg(data.msg)
      alert(`${data.msg}, now you will be redirected to Login page `)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/login')
    }
  }

  return (
    <div className='row vw-100 vh-100'>
      <div className='d-flex d-none d-lg-block justify-content-center align-content-center col-sm-7  signup-left'>
        <div className='text-center'>
        </div>

      </div>
      <div className='form-container w-auto p-4 h-100'>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <Form.Group className="mb-2" controlId="formBasicfirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" className='input rounded-3' {...register('firstName', { required: true, minLength: { value: 3, message: "lirst name is too short" }, maxLength: { value: 20, message: "first name is too long" } })} placeholder="First name" />
            {errors.firstName && <Form.Text className="text-muted">{errors.firstName.message}</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-2" controlId="formBasiclasrname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" className='input rounded-3' {...register('lastName', { required: true, minLength: { value: 3, message: "last name is too short" }, maxLength: { value: 20, message: "last name is too long" } })} placeholder="Enter Last name" />
            {errors.lastName && <Form.Text className="text-muted">{errors.lastName.message}</Form.Text>}
          </Form.Group>


          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='input rounded-3' {...register('email',
              { required: true, pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address" } })}
              placeholder="Enter email" />
            {errors.email && <div className=' text-muted text-sm-start'>{errors.email.message}</div>}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='input rounded-3' {...register('password', { required: true, minLength: { value: 8, message: "password is too short minimum length is 8" } })} placeholder="Password" />
            {errors.password && <Form.Text className="text-muted">
              {errors.password.message}
            </Form.Text>}
          </Form.Group>
          {msg && <div className=' alert alert-danger ' role='alert' >{msg}</div>}

          <Form.Group className="mb-2" controlId="formBasicrole">
            <Form.Label>Admin Code</Form.Label>
            <Form.Control type="password" className='input rounded-3' {...register('role', { required: false })} placeholder="only for admin" />
          </Form.Group>
          {/* {msg && <div className=' alert alert-danger ' role='alert' >{msg}</div>} */}


          <Button variant="primary" className="btn btn-secondary rounded-1" type="submit">
            Submit
          </Button>
          <div className="mt-2">Already have an account? <Link className='signup-link' to="/login">Login</Link></div>
        </Form>
      </div>

    </div>
  )
}

export default Signup
