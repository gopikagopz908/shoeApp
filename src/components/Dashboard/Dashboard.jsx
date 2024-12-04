import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "./Dashboard.css";
import { AdminContext } from '../Admin/AdminContext/Admincontext';

function Dashboard() {
  const { users, products,totalorders } = useContext(AdminContext);

  return (
    <div className="dashboard-container">
      <div className="container">
        <h3 className='brd-head'>Details</h3>
        <div className="row gy-4"> {/* gy-4 for spacing between rows */}
          {/* Card 1 (Blue Background) */}
          <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <div className="card card-brd p-3 text-center" style={{ backgroundColor: "#4B8BF5" }}>
              <h5
                style={{
                  fontWeight: "700",
                  color: "#fff", // White text for contrast
                  fontSize: "20px",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "1px",
                  marginBottom: "5px"
                }}
                className="card-title"
              >
                Users
              </h5>
              <p style={{ fontSize: "24px", color: "#fff", fontWeight: "bold" }}>{users.length}+</p>
            </div>
          </div>

          {/* Card 2 (White Background) */}
          <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <div className="card card-brd p-3 text-center" style={{ backgroundColor: "#ffffff" }}>
              <h5
                style={{
                  fontWeight: "700",
                  color: "#4B8BF5",
                  fontSize: "20px",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "1px",
                  marginBottom: "5px"
                }}
                className="card-title"
              >
                Products
              </h5>
              <p style={{ fontSize: "24px", color: "blue", fontWeight: "bold" }}>{products.length}+</p>
            </div>
          </div>

          {/* Card 3 (Blue Background) */}
          <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <div className="card card-brd p-3 text-center" style={{ backgroundColor: "#4B8BF5" }}>
              <h5
                style={{
                  fontWeight: "700",
                  color: "#fff", // White text for contrast
                  fontSize: "20px",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "1px",
                  marginBottom: "5px"
                }}
                className="card-title"
              >
                Orders
              </h5>
              <p style={{ fontSize: "24px", color: "#fff", fontWeight: "bold" }}>{totalorders.length}+</p>
            </div>
          </div>

          {/* Card 4 (White Background) */}
          <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">
            <div className="card card-brd p-3 text-center" style={{ backgroundColor: "#ffffff" }}>
              <h5
                style={{
                  fontWeight: "700",
                  color: "#4B8BF5",
                  fontSize: "20px",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "1px",
                  marginBottom: "5px"
                }}
                className="card-title"
              >
                Revenue
              </h5>
              <p style={{ fontSize: "24px", color: "blue", fontWeight: "bold" }}></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
