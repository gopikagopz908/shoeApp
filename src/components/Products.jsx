import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./Productscard/Productcard";
import { useParams } from "react-router-dom";

function Products() {
  const{category}=useParams()
  const [products, setProducts] = useState([]); 

  useEffect(() => { 
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
       if(!category){
        setProducts(res.data)
        
       }else{
        
        
          setProducts(res.data.filter((item)=>item.brand===category))
       } 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
