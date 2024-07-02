import React from 'react'
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/SignupStyle.css'


const Signup = () => {
  // it is used to prevent errors and make form handling easy
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => console.log(formData);

  return (
    <div className='d-flex vw-100 vh-100'>
      <div className='d-flex justify-content-center align-content-center w-50 signup-left'>
        <div className='text-center'>
        </div>

      </div>
      <div className='form-container w-50 p-5'>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <Form.Group className="mb-3" controlId="formBasicfirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" className='input rounded-3' {...register('firstName', { required: true, minLength: {value: 3, message: "lirst name is too short"}, maxLength: {value: 20, message: "first name is too long"} })} placeholder="First name" />
            {errors.firstName && <div className=' text-muted text-sm-start'>{errors.firstName.message}</div>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasiclasrname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" className='input rounded-3' {...register('lastName', { required: true, minLength: {value: 3, message: "last name is too short"}, maxLength: {value: 20, message: "last name is too long"} })} placeholder="Enter Last name" />
            {errors.lastName && <div className=' text-muted text-sm-start'>{errors.lastName.message}</div>}
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='input rounded-3' {...register('email', 
            { required: true, pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email address"}})} 
            placeholder="Enter email" />
            {errors.email && <div className=' text-muted text-sm-start'>{errors.email.message}</div>}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='input rounded-3' {...register('Password', { required: true })} placeholder="Password" />
          </Form.Group>

          <Button variant="primary" className="btn btn-secondary rounded-1" type="submit">
            Submit
          </Button>

        </Form>
      </div>

    </div>
  )
}

export default Signup
