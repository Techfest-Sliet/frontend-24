import React, { useState } from "react";
import { useFormik } from "formik";
import { Box, Modal, Stack, Button } from "@mui/material";
import BackGrndImg from "../../../assets/earthfromspace.jpg";
import axios from "axios";
import { baseUrl } from "../../../API/Api";

import "./SignUp.css";

const initialValues = {
  name: "",
  password: "",
  confPassword: "",
  number: "",
  branch: "",
  email: "",
  collage: "",
  birth: "",
  wNumber: "",
};
const submitHandler = (values) => {
  console.log(values);
  // const submit = async (values)=>{
  //   await axios
  //   .post(`${baseUrl}/auth/sign-up`,values)
  //   .then((result)=>{
  //     const res = result;
  //     console.log(res);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  // submit(values);
};

const validate = (values) => {
  const error = {};
  if (!values.name) {
    error.name = "Name is Required";
  }
  if (!values.email) {
    error.email = "Email is required";
  }
  //add the email validation here

  if (!values.dob) {
    error.dob = "Required Feild";
  }

  if (!values.password) {
    error.password = "Required Feild";
  }
  if (!values.confPassword) {
    error.password = "Required Feild";
  } else if (values.password !== values.confPassword) {
    error.confPassword = "password must match";
  }

  if (!values.number) {
    error.number = "Required Feild";
  }

  if (!values.wNumber) {
    error.wNumber = "Required Feild";
  }

  if (!values.branch) {
    error.branch = "Required Feild";
  }

  return error;
};

const branchArr = [
  "Aeronautical Engineering",
  "Aerospace Engineering",
  "Automobile Engineering",
  "Biomedical Engineering",
  "Biotechnology Engineering",
  "Ceramic Engineering",
  "Chemical Engineering",
  "Civil Engineering",
  "Communications Engineering",
  "Computer Science Engineering",
  "Construction Engineering",
  "Electrical Engineering",
  "Electronics & Communication Engineering",
  "Electronics Engineering",
  "Environmental Engineering",
  "Food Engineering and Technology",
  "Industrial Engineering",
  "Instrumentation and Control Engineering",
  "Marine Engineering",
  "Mechanical Engineering",
  "Mechatronics Engineering",
  "Metallurgical Engineering",
  "Mining Engineering",
  "Petroleum Engineering",
  "Power Engineering",
  "Production Engineering",
  "Robotics Engineering",
  "Structural Engineering",
  "Telecommunication Engineering",
  "Textile Engineering",
  "Tool Engineering",
  "Transportation Engineering",
];

const SignUp = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: submitHandler,
    validate: validate,
  });
  console.log(formik.values);
  const [page, setPage] = useState(1);
  // const [openModal, setOpenModal] = useState(true);

  return (
    <Box
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BackGrndImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "bottom",
      }}
    >
      <Modal
        open={true}
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(2px)",
        }}
      >
        <Box
          className="formBox"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            // border: "1px solid black",
            borderRadius: "8px",
            outline: "2px solid white",
            height: "75%",
            width: "55%",
            padding: ".9rem",
            boxShadow: "-2px -4px 20px #00B4D8 ,3px 5px 15px #03045E",
          }}
        >
          <Stack
            className="stack"
            style={{
              height: "100%",
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              className="spanBox"
              style={{
                height: "15%",
                width: "85%",
                color: "white",
                // border: "1px solid black",
              }}
            >
              <h1>
                Hi!{" "}
                <span>
                  <b>{formik.values.name.toUpperCase()}</b>
                </span>
              </h1>
              {/* corection needed */}
            </Box>
            <form onSubmit={formik.handleSubmit}>
              {page === 1 ? (
                <>
                  <Box>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="name"
                      color="#03045E"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <Box>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="xyz@gmail.com"
                      color="#03045E"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <Box>
                    <label htmlFor="dob">Date Of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="DD-MM-YYYY"
                      color="#03045E"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <Box>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      color="#03045E"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  {/* <Box>
                    <label htmlFor="confPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confPassword"
                      id="confPassword"
                      placeholder="confirm passoword"
                      color="#03045E"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box> */}
                  <Box
                    className="nextBtn"
                    style={{
                      width: "55%",
                      // border: "1px solid red",
                      display: "flex",
                      // justifyContent: "end",
                      alignItems: "end",
                      // padding: "1rem",
                    }}
                  >
                    <Button onClick={() => setPage(2)}>Next</Button>
                  </Box>
                </>
              ) : page === 2 ? (
                <>
                  <Box>
                    <label htmlFor="number">Contact number</label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      autoComplete="off"
                      placeholder="contact number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <Box>
                    <label htmlFor="wNumber">What'sApp Number</label>
                    <input
                      type="text"
                      id="wNumber"
                      name="wNumber"
                      autoComplete="off"
                      placeholder="whatsapp number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <Box>
                    <label htmlFor="collage">Institution Name</label>
                    <input
                      type="text"
                      id="collage"
                      name="collage"
                      autoComplete="off"
                      placeholder="Institution Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Box>
                  <Box>
                    <label htmlFor="branch">Department</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      autoComplete="off"
                      placeholder="Department"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <select name="" id=""></select>
                  </Box>
                  <Box
                    style={{
                      width: "55%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "1rem",
                    }}
                  >
                    <Button onClick={() => setPage(1)}>Back</Button>
                    <Button type="submit" variant="contained">
                      {" "}
                      Submit
                    </Button>
                  </Box>
                </>
              ) : null}
            </form>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default SignUp;
