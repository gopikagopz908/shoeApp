import React,{useContext} from 'react';
import { userContext } from '../context/useContext';

function Cart() {
  const{cart}=useContext(userContext)
  
    

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      {cart.length > 0 ? (
        <div className="row g-3">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Price: <strong>${item.price.toFixed(2)}</strong>
                  </p>
                  <p className="card-text">
                    Quantity: <strong>{item.quantity}</strong>
                  </p>
                  <p className="card-text">
                    Total: <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Cart;
