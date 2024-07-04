
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [first, setFirst] = useState('')


  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    const username = async () => {
      const name = localStorage.getItem('user');
      const firstname = name.split(',')[1].split('"')[3];
      setFirst(firstname);

    }
    username();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin panel</a>

          <div className="d-flex gap-2 align-items-baseline">
            <p className="text-center">Hello, {first}</p>
            <button className="btn btn-outline-success" onClick={handleClick}>Logout</button>
          </div>

        </div>

      </nav >
    </>
  );
}

export default Navbar;