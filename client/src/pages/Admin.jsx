import React, { useState } from 'react'
import Table from '../components/Table'
import Navbar from '../components/Navbar'
import DeleteUser from '../components/DeleteUser'
import axios from 'axios'
import { deleteUsers, updateUsers } from '../utils/APIRoutes'
import UpdateUser from '../components/UpdateUser'
import CreateUser from '../components/CreateUser'

const Admin = () => {
    // for delete a user
    const [userId, setuserId] = useState("")
    const [updateID, setupdateID] = useState("")


    const deleteUser = (id) => {
        setuserId(id)
        console.log(deleteUsers)
    }


    const handleDelete = async () => {
        try {

            const data = await axios.delete(`${deleteUsers}${userId}`)
            const response = data.data
            console.log(response)
            if (response.msg === "User deleted") {
                alert("User deleted")
            }
        } catch (error) {
            alert(error)
        }
    }

    // for update user
    const updateUser = (id) => {
        setupdateID(id)
        console.log(updateID)
    }
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await axios.put(`${updateUsers}${updateID}`, value);
            const response = data.data
            console.log(response)
        } catch (error) {
            alert(error)
        }

    }

    // for create new user it is inside Create User component




    return (
        <>
            <Navbar />
            <div className=' w-100 vh-100 overflow-y-scroll overflow-x-auto mt-2'>
                <CreateUser />
                <Table Deleteuser={deleteUser} UpdateUser={updateUser} />
                <DeleteUser handleDelete={handleDelete} />
                <UpdateUser handleChange={handleChange} value={value} handleSubmit={handleSubmit} />
            </div>
        </>
    )

}

export default Admin
