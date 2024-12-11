import React, { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Loginpage.css'; 
import { userContext } from '../context/useContext';


const validationSchema = Yup.object({
  email: Yup.string()
    .email("valid email is required")
    .required('email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Loginform = () => {
  const navigate = useNavigate();
  const{setislogged}=useContext(userContext)
  const [userdata, setUserdata] = useState([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/users");
      setUserdata(res.data);
    };
    fetchUsers();
  }, []);

  
  const handleSubmit = async (values) => {
  
    const user = userdata.find((user) => user.email === values.email && user.password === values.password );

  if(user.email==="admin@gmail.com"&&user.password==="888888"){
    localStorage.setItem('id', user.id);
    localStorage.setItem("adminId",user.id)
    navigate("/admin")
    alert("admin logined")
    return
  }
if(user.isBlocked===true){
  alert(" blocked user")
  return
}
    if (user) {
      alert('Login Successful!');
      
      localStorage.setItem('id', user.id);
      setislogged(true)
      navigate('/');
    } else {
      alert('Invalid user. Please try again.');
      navigate('/register');
    }
  };

  return (
    <div className="container-fluid login-form d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <Link to="/register"> don't have an account?</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Loginform;
