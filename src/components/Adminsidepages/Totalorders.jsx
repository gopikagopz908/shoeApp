import React, { useContext } from 'react';
import { AdminContext } from '../Admin/AdminContext/Admincontext';
import "./Totalorders.css";

const OrdersList = () => {
  const { totalorders } = useContext(AdminContext);

  return (
    <>
    <h1 style={{
    justifyContent: "center", 
    textAlign: "center", 
    fontFamily: "'Garamond', serif",
    fontSize:"25px",
    fontWeight:"bold"
  }}  className='pt-2'>Total Orders</h1>
    <div className="container bg-secondary">

      {totalorders.map((order) => (
        <div style={{ maxWidth: "none" }} className="card bg-dark-subtle order-card no-hover w-100 mb-4 mt-2 shadow-lg" key={order.id}>
          <div className="card-header bg-secondary d-flex justify-content-between align-items-center">
            <span><strong>Order ID:</strong> {order.id}</span>
            <span className="badge bg-primary">{order.paymentMethod}</span>
          </div>

          <div className="card-body">
            <div className="row mb-3">
              <div className="col-12">
                <h5 className="card-title "></h5>
                <p><strong>FullName:</strong> {order.fullName}</p>

                <p><strong>Phone:</strong> {order.phoneNumber}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>State:</strong>{order.state}</p>
                <p><strong>pincode:</strong>{order.pincode}</p>
                <p><strong>Date:</strong>{order.Date}</p>
              </div>
              <div className="col-12 text-end">
              <span className="badge bg-dark">{order.cartitems.length}-Items</span>

              </div>
            </div>

            <h6>Cart Items:</h6>
            <div className="cart-items-container">
              {order.cartitems.map((item) => (
                <div style={{ width: '180px',height:'263px'}} 
 className="cart-item shadow p-3 mb-5  rounded bg-primary " key={item.id}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="img-fluid" 
                    style={{ width: '150px', height: '130px', objectFit: 'cover' }} 
                  />
                  <div className="item-details">
                    <h6>{item.title}</h6>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div></>
  );
};

export default OrdersList; 