import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div  className="col-md-3 col-sm-6 mb-4">
      <div  style={{background: "linear-gradient(to right, #00c6ff, #0072ff, #3a8dff)"}} className="card shadow-sm h-100 border-0">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{
            backgroundColor:"white",
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "calc(.25rem - 1px)",
            borderTopRightRadius: "calc(.25rem - 1px)",
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate">{product.title}</h5>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="text-primary fw-bold">${product.price}</span>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
