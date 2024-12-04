import React, { useContext, useEffect,useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Icons for Edit and Delete
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Admin, { AdminContext } from '../Admin/AdminContext/Admincontext';

import axios from 'axios';
const ProductTable = () => {
  const { products } = useContext(AdminContext);

  const[category,setCategory]=useState([])
  

  useEffect(() => { 
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
       if(!category){
        setCategory(res.data)
        
       }else{
        
        
          setCategory(res.data.filter((item)=>item.category==category))
       } 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

    
  


  // Handling the edit action
  const handleEdit = (product) => {
    console.log('Edit product:', product);
    // Add your edit functionality here
  };

  // Handling the delete action
  const handleDelete = (productId) => {
    console.log('Delete product:', productId);
    // Add your delete functionality here
  };

  return (
    <div className="container mt-2">
     <div className='d-flex justify-content-center position-relative'> <h3 style={{
    justifyContent: "center", 
    textAlign: "center", 
    fontFamily: "'Garamond', serif",
    fontSize:"25px",
    fontWeight:"bold"}} className="mb-4">Product List</h3>
    <div className='position-absolute end-0 d-flex'>
<button style={{marginRight:"10px",height:"40px"}} class="btn btn-dark  m-6 ">Add</button>
<div class="m-6  ">
    <select class="form-select" aria-label="Category Select">
    <option  value="" disabled selected>Select Category </option>

      <option value="1">All</option>

      <option value="2">Sports</option>
      <option value="3">Running</option>
      <option value="4">Casual</option>
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>{product.color}</td>
              <td>{product.category}</td>
              <td>{product.discount}%</td>
              <td>{product.stock}</td>
              <td>
                <button style={{width:"80px",height:"35px"}}
                  onClick={() => handleEdit(product)}
                  className="border-0 rounded-3 bg-warning btn-sm text-white "
                >
                  <FaEdit /> Edit
                </button>
                <button style={{width:"80px",height:"35px",marginTop:"5px"}}
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
    </div>
  );
};

export default ProductTable;
