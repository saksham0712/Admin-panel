import React from 'react'
import Table from '../components/Table'
import Navbar from '../components/Navbar'

const Admin = () => {
  return (
    <>
        <Navbar/>
    <div className=' w-100 vh-100 overflow-y-scroll overflow-x-auto mt-2'>
      <Table />
    </div>
    </>
  )

}

export default Admin
