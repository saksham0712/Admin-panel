import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createUser } from '../utils/APIRoutes'

const CreateUser = () => {
    const [value, setvalue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
    })

    const handleSubmit = async () => {
        try {
            const data = await axios.post(createUser, value)
            const response = data.data;
            console.log(response)
        } catch (error) {
            alert(error)
        }
    }

    const handleChange = async (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>


            <div id="adduserModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={value.firstName} name='firstName' onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={value.lastName} name='lastName' onChange={handleChange} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" value={value.email} name='email' onChange={handleChange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" value={value.password} name='password' min='8' onChange={handleChange} className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <input type="password" value={value.role} name='role' onChange={handleChange} className="form-control" />

                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CreateUser
