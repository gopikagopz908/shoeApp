import React,{useState,useEffect} from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { log } from 'debug/src/browser'

export const 
AdminContext=createContext()
function Admin({children}) {

    
    const [toggled, setToggled] =useState(false);
    const [broken, setBroken] = useState(window.matchMedia('(max-width: 800px)').matches);

    const[users,setUsers]=useState([])
    const[products,setProducts]=useState([])
    const[totalorders,setTotal]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/users/")
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost:3000/products/")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost:3000/totalorders/")
        .then((res)=>{
            setTotal(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    
    const handleBlock = (user) => {
        axios
          .patch(`http://localhost:3000/users/${user.id}`, { isBlocked: !user.isBlocked }) 
          .then(() => {
            setUsers((prevUsers) =>
              prevUsers.map((u) =>
                u.id === user.id ? { ...u, isBlocked: !user.isBlocked } : u
              )
            );
          })
          .catch((error) => {
            console.error("Error updating block status:", error);
          });
      };
      const totalRevenue=totalorders.reduce((acc,item)=>acc+item.totalAmount,0)
  return (
    <div>
        <AdminContext.Provider value={{users,setUsers,products,setProducts,totalorders,toggled, setToggled,broken, setBroken,handleBlock,totalRevenue}}>
            {children}

        </AdminContext.Provider>
      
    </div>
  )
}

export default Admin
