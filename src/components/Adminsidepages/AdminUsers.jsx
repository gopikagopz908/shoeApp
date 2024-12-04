import React, { useContext, useState } from "react";
import { FaEye, FaBan } from "react-icons/fa";
import { AdminContext } from "../Admin/AdminContext/Admincontext";

const UsersTable = () => {
  const{users}=useContext(AdminContext)

  // Handlers
  const handleBlock = (id) => {
    alert(`User with ID ${id} has been blocked.`);
  };

  const handleViewOrders = (id) => {
    alert(`Viewing orders for user with ID ${id}.`);
  };

  return (
    <div className="container mt-2 ">
      <h3 style={{
    justifyContent: "center", 
    textAlign: "center", 
    fontFamily: "'Garamond', serif",
    fontSize:"25px",
    fontWeight:"bold"
  }}  className="mb-4">Users List</h3>
      <table className="table table-bordered table-striped  ">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#f0f0f0 !important" }}>
        
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button style={{width:"100px",height:"35px"}}
                  onClick={() => handleViewOrders(user.id)}
                  className="border-0 rounded-2 text-white bg-dark ms-2">
                  
                
                  <FaEye className="me-1" />  Orders
                </button>
                <button style={{width:"65px",height:"35px",fontSize:"13px"}}

                  onClick={() => handleBlock(user.id)}
                  className="border-0 rounded-2 text-white bg-danger ms-2">
                  
                
                  <FaBan className="me-1" /> Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
