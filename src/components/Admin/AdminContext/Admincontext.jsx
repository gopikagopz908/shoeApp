import React,{useState,useEffect} from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { log } from 'debug/src/browser'

export const AdminContext=createContext()
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
  return (
    <div>
        <AdminContext.Provider value={{users,setUsers,products,setProducts,totalorders,toggled, setToggled,broken, setBroken}}>
            {children}

        </AdminContext.Provider>
      
    </div>
  )
}

export default Admin
