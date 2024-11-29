import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCard.css";
import { userContext } from "../../context/useContext";


const ProductCard = ({ product }) => {
  const { AddtoCart } = useContext(userContext);
  const [showModal, setShowModal] = useState(false);
  

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="col-md-3 col-sm-6 mb-3">
        <div
          onClick={handleOpenModal}
          style={{
            background: "linear-gradient(to right, #00c6ff, #0072ff, #3a8dff)",
            height: "50px",
          }}
          className="mycard shadow p-3 mb-5 bg-body rounded"
        >
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{
              backgroundColor: "white",
              height: "180px",
              objectFit: "cover",
              borderTopLeftRadius: "calc(.25rem - 1px)",
              borderTopRightRadius: "calc(.25rem - 1px)",
            }}
          />
          <div className="card-body d-flex flex-column">
            <h5
              className="card-title text-truncate"
              style={{ fontSize: "1rem" }}
            >
              {product.title}
            </h5>
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <span className="text-primary fw-bold">${product.price}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  AddtoCart(product);
                }}
                className="btn btn-primary btn-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered"
            style={{
              maxWidth: "800px",  
              maxHeight: "80vh", 
              overflowY: "auto", 
            }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{product.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex" style={{ gap: "20px" }}>
                
                <div
                  style={{
                    flex: "2",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "350px", 
                      objectFit: "cover",
                    }}
                  />
                </div>

                
                <div
                  style={{
                    flex: "3",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h5 className="mb-3">{product.title}</h5>
                    <p>{product.description}</p>
                    <p className="fw-bold text-primary">Price: ${product.price}</p>
                  </div>

                  
                  <div className="d-flex justify-content-start mt-3">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => {
                        AddtoCart(product);
                        handleCloseModal();
                        
                      }}
                    >
                      Add to Cart
                    </button>
                    
                    <button
                      className="btn btn-secondary"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
