import React, { useContext } from 'react';
import { userContext } from '../context/useContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cart, RemoveCart, updatequantity } = useContext(userContext);

  
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
const navigate=useNavigate()
  

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h2 >Shopping Cart</h2>
        
      </div>
      
        <div className='d-flex justify-content-end'>

 <strong className="me-3">Total: ${totalAmount.toFixed(2)}</strong>
          <button
            className="btn btn-success"
            onClick={()=>navigate('/order')}//form
            disabled={cart.length === 0} >
          
            Buy Now
          </button>
        </div>
      {cart.length > 0 ? (
        <div className="row g-3">
          {cart.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card">
                <img
                  src={item.image}
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
                    Quantity: 
                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => updatequantity(item, 1)}>
                      +
                    </button>
                    <strong className="mx-2">{item.quantity}</strong>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => updatequantity(item, -1)}>
                      -
                    </button>
                    <button
                      className="btn btn-primary btn-sm ms-3"
                      onClick={() => RemoveCart(item.id)}
                    >
                      Remove
                    </button>
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
