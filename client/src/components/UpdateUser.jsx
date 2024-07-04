import React from 'react'

const UpdateUser = ({ handleSubmit, value, handleChange }) => {
    return (
        <div>


            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add new user</h4>
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

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default UpdateUser
