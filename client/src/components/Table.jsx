import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { getUsers } from '../utils/APIRoutes';




const Table = ({Deleteuser, UpdateUser}) => {
  const [data, setData] = useState([])


  useEffect(() => {
    async function FeatchData() {
      try {
        const user = await axios.post(getUsers)
        const response = user.data
        setData(response.user)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    FeatchData()

  })



  return (
    <>
      <div>

        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row justify-content-between m-3">
                <div className="col-sm-9 w-auto">
                  <h3>Manage <b>Users</b></h3>
                </div>
                <div className="col-sm-3 w-auto">
                  <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#adduserModal">
                    <i className="material-icons">&#xE147;</i> <span>Add</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>

                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>
                        <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateUser(item._id)}>
                          <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                        </a>
                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deleteuser(item._id)}>
                          <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                        </a>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div >


      </div>
    </>
  )
}

export default Table
