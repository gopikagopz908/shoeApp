import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../Admin/AdminContext/Admincontext';
import { useParams } from 'react-router-dom';

function ViewOrders() {
  const { users } = useContext(AdminContext);
  const { id } = useParams();
  const [view, setView] = useState([]);

  useEffect(() => {
    if (users?.length > 0) {
      const filtered = users.filter((item) => String(item.id) === id);
      setView(filtered);
    }
  }, [id, users]);

  return (
    <div className="container mt-5">
      <div className="row">
        {view.length > 0 ? (
          view.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.image || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt={item.name || 'Order Image'}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name || 'Order Name'}</h5>
                  <p className="card-text">
                    {item.description || 'Order description goes here.'}
                  </p>
                </div>
                <div className="card-footer">
                  <span className="text-muted">Order ID: {item.id}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default ViewOrders;
