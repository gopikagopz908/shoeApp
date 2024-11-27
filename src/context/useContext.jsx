import axios from 'axios'
import React ,{ useEffect, useState } from 'react'
import { createContext } from 'react'
 
 export const userContext=createContext()
function Context({children}) {
    const id =localStorage.getItem("id")
    const[cart,setCart]=useState([])

    const [products, setProducts] = useState([]);
    const[orders,setOrders]=useState([])


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
  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then((res=>{
        setOrders(res.data?.order)
    }))
    .catch((error)=>{
        console.log(error)
    })


  },[])
  const AddtoCart=async(product)=>{
    const existcart=cart.find(item=>item.id===product.id)
    if(existcart) 
        return
    try {
      product.quantity=1
      await axios.patch(`http://localhost:3000/users/${id}`,{cart:[...cart,product]})
      setCart((prev)=>[...prev,product])
      
    } catch (error) {
      console.log(error)
      
    }

  }
  const RemoveCart=async(cartid)=>{
try {
  const remove=cart.filter((item)=>item.id!==cartid)
     await axios.patch(`http://localhost:3000/users/${id}`,{cart:[...remove]})
     setCart(remove)
} catch (error) {
  console.log(error)
}     

  }
 const updatequantity=async(product,num)=>{
    if(num===-1&&product.quantity===1)
    return
    const newcart=cart.map((item)=>item.id===product.id?{...item,quantity:item.quantity+num}:item)
    await axios.patch(`http://localhost:3000/users/${id}`,{cart:[...newcart]})
     setCart(newcart)

 }
 
  
  return (
    <div>
        <userContext.Provider value={{cart,setCart,AddtoCart,RemoveCart,updatequantity,orders}}>
            {children}

        </userContext.Provider>
      
    </div>
  )
}

export default Context
