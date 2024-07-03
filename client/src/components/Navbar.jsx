
import React from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
 
  const navigate = useNavigate();
  const handleClick = async()=> {
  
  }
 
 
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Admin panel</a>
          <button class="btn btn-outline-success" type="submit">Search</button>
          
        </div>
      
    </nav >
    </>
  );
}

export default Navbar;