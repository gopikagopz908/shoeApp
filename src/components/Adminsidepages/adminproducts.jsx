import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Icons for Edit and Delete
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import Admin, { AdminContext } from "../Admin/AdminContext/Admincontext";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import EditProductModal from "./modal/editProduct";
import AddProductModal from "./modal/addProduct";
import { useParams } from "react-router-dom";

const ProductTable = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const handleNavigation = (event) => {
    const value = event.target.value;
    if (value) {
      navigate(`/Admin/products/${value}`); // Navigate to the dynamic route
    }
  };
  const { products } = useContext(AdminContext);
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        if (category === "All") {
          setCategory(res.data);
        } else {
          setCategory(res.data.filter((item) => item.category === category));
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category,showModal,addModal]);
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };
  const handleAdd = () => {
    setAddModal(true);
  };

  const handleSave = (updatedProduct) => {
    console.log("Updated Product:", updatedProduct);
    // Implement save logic, e.g., make an API call to update the product
    setShowModal(false);
  };


  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:3000/products/${productId}`)
      .then(() => {
        alert("Product deleted successfully");
        // Remove the product from the state
        setCategory(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        alert("Failed to delete the product. Please try again.");
      });
  };
  
  
  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-start justify-content-md-center position-relative">
        {" "}
        <h3
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "'Garamond', serif",
            fontSize: "25px",
            fontWeight: "bold",
          }}
          className="mb-4"
        >
          Product List
        </h3>
        <div className="position-absolute end-0 d-flex">
          <button
            style={{ marginRight: "10px", height: "40px" }}
            class="btn btn-dark  m-6 "
            onClick={handleAdd}
          >
            Add
          </button>
          <div class="m-6  ">
            <select
              value={category}
              onChange={handleNavigation}
              class="form-select"
              aria-label="Category Select"
            >
              <option value="" disabled selected>
                Select Category{" "}
              </option>

              <option value="All">All</option>

              <option value="sports">Sports</option>
              <option value="running">Running</option>
              <option value="casual">Casual</option>
            </select>
          </div>
        </div>
      </div>
      <table className="table table-hover table-bordered table-striped shadow-lg rounded">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Category</th>
            <th>Discount</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categorys.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              </td>
              <td>${product.price}</td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{product.color}</td>
              <td>{product.category}</td>
              <td>{product.discount}%</td>
              <td>{product.stock}</td>
              <td>
                <button
                  style={{ width: "80px", height: "35px" }}
                  onClick={() => handleEdit(product)}
                  className="border-0 rounded-3 bg-secondary btn-sm text-white "
                >
                  <FaEdit /> Edit
                </button>
                <button
                  style={{ width: "80px", height: "35px", marginTop: "5px" }}
                  onClick={() => handleDelete(product.id)}
                  className="border-0  rounded-3 bg-danger btn-sm text-white "
                >
                  <FaTrashAlt /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditProductModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        product={selectedProduct}
        handleSave={handleSave}
      />
      <AddProductModal
        show={addModal}
        handleClose={() => setAddModal(false)}
        handleSave={handleSave}
      />
    </div>
  );
};

export default ProductTable;
