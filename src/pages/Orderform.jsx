import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { userContext } from "../context/useContext";
import axios from "axios";

// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
  paymentMethod: Yup.string().required("Please select a payment method"),
});

const paymentOptions = [
  {
    value: "gpay",
    label: (
      <div className="d-flex align-items-center">
        <img
          src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/11/05/Google-Pay-India-Tez-new-icon.jpg"
          alt="Google Pay"
          width="50"
          height="30"
          style={{ marginRight: "10px" }}
        />
        GPay
      </div>
    ),
  },
  {
    value: "paytm",
    label: (
      <div className="d-flex align-items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/256/825/825454.png"
          alt="Paytm"
          width="30"
          height="30"
          style={{ marginRight: "10px" }}
        />
        Paytm
      </div>
    ),
  },
  {
    value: "creditCard",
    label: (
      <div className="d-flex align-items-center">
        <img
          src="https://thumb.ac-illust.com/d3/d36b69e25936e0208a07e2653fce0342_t.jpeg"
          alt="Credit Card"
          width="30"
          height="30"
          style={{ marginRight: "10px" }}
        />
        Credit Card
      </div>
    ),
  },
];

const OrderDetails = () => {
  const id=localStorage.getItem('id')
  const{cart,orders}=useContext(userContext)
  return (
    <div className="container mt-5 justify-content-center">
      <div
        style={{
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#333" }}>
          Order Details
        </h2>
        <Formik
          initialValues={{
            fullName: "",
            phoneNumber: "",
            address: "",
            state: "",
            pincode: "",
            paymentMethod: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const neworder={
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
            address: values.address,
            state: values.state,
            pincode: values.pincode,
            paymentMethod: values.paymentMethod,
            cartitems:cart
            }
             axios.patch(`http://localhost:3000/users/${id}`,{order:[...orders,neworder],cart:[]})
             .then(res=>console.log(`success`))
            alert('succes')
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control form-control-lg"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control form-control-lg"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              {/* Address */}
              <div className="mb-4">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  className="form-control form-control-lg"
                  rows="3"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              {/* State */}
              <div className="mb-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="form-control form-control-lg"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              {/* Pincode */}
              <div className="mb-4">
                <label htmlFor="pincode" className="form-label">
                  Pincode
                </label>
                <Field
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="form-control form-control-lg"
                />
                <ErrorMessage
                  name="pincode"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              {/* Payment Method */}
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="form-label">
                  Payment Method
                </label>
                <Field name="paymentMethod">
                  {({ field, form }) => (
                    <Select
                      options={paymentOptions}
                      onChange={(option) =>
                        form.setFieldValue("paymentMethod", option.value)
                      }
                      value={paymentOptions.find(
                        (option) => option.value === form.values.paymentMethod
                      )}
                      className="basic-select"
                      classNamePrefix="select"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="paymentMethod"
                  component="div"
                  className="text-danger mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    width: "100%",
                  }}
                >
                  Place Order
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OrderDetails;
