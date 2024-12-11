import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../Admin/AdminContext/Admincontext';
import { useParams } from 'react-router-dom';
import "./viewOrders.css";

function ViewOrders() {
  const { users } = useContext(AdminContext);
  const { id } = useParams();
  const [userOrders, setUserOrders] = useState(null);

  useEffect(() => {
    if (users?.length > 0) {
      const user = users.find((item) => String(item.id) === id);
      if (user) {
        setUserOrders(user.order); 
      } else {
        setUserOrders(null); 
      }
    }
  }, [id, users]);

  return (
    <div className="view-orders-container">
      <h2 className="text-center mb-4">User Orders</h2>
      <div className="row">
        {userOrders ? (
          userOrders.length > 0 ? (
            userOrders.map((order, index) => (
              <div className="col-md-12 mb-4" key={index}>
                
                <div className="row">
                  {order.cartitems.map((item, itemIndex) => (
                    <div className="col-md-4 mb-4" key={itemIndex}>
                      <div className="card card-height shadow-sm">
                      <h5 className="card-title">{item.title}</h5>

                        <img
                          style={{ height: "150px", objectFit: "cover" }}
                          src={item.image}
                          className="card-img-top"
                          alt={item.title}
                        />
                        <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">
                              <strong>Brand:</strong> {item.brand}
                            </li>
                            <li className="list-group-item">
                              <strong>Model:</strong> {item.model}
                            </li>
                            <li className="list-group-item">
                              <strong>Color:</strong> {item.color}
                            </li>
                            <li className="list-group-item">
                              <strong>Category:</strong> {item.category}
                            </li>
                            <li className="list-group-item">
                              <strong>Price:</strong> ₹{item.price}
                            </li>
                            <li className="list-group-item">
                              <strong>Discount:</strong> {item.discount}%
                            </li>
                            <li className="list-group-item">
                              <strong>Quantity:</strong> {item.quantity}
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer">
                          <span className="text-muted"><b>Item ID: {item.id}</b></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">This user has no orders.</p>
          )
        ) : (
          <p className="text-center">User not found or no orders available.</p>
        )}
      </div>
    </div>
  );
}

export default ViewOrders;
