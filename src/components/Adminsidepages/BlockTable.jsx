import React, { useState } from 'react';

const BlockTable = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", status: "Active" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", status: "Active" },
  ]);

  const toggleBlock = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };

  return (
    <>
     <h3 style={{
    justifyContent: "center", 
    textAlign: "center", 
    fontFamily: "'Garamond', serif",
    fontSize:"25px",
    fontWeight:"bold"}}>Users</h3>
    <div style={{ padding: "10px" ,backgroundColor:"lightgrey"}}>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Name</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Email</th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.id}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.name}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{user.email}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <button
                  style={{
                    backgroundColor: user.status === "Active" ? "#FF4D4D" : "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    justifyContent:"center",
                    alignItems:"center",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    height:"35px",
                    width:"80px"
                  }}
                  onClick={() => toggleBlock(user.id)}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {user.status === "Active" ? "Block" : "Unblock"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default BlockTable;


