import axios from 'axios'
import React ,{ useEffect, useState } from 'react'
import { createContext } from 'react'
 
 export const userContext=createContext()
function Context({children}) {
    const id =localStorage.getItem("id")
    const[cart,setCart]=useState([])

    const [products, setProducts] = useState([]); 


  useEffect(() => { 
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data)
       
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then((res=>{
        setCart(res.data.cart)
    }))
    .catch((error)=>{
        console.log(error)
    })


  },[])
  
  return (
    <div>
        <userContext.Provider value={{cart,setCart}}>
            {children}

        </userContext.Provider>
      
    </div>
  )
}

export default Context
