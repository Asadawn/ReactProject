import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const [submittedData, setSubmittedData] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    console.log(JSON.stringify(data, null, 2));
    setSubmittedData((prevData) => [...prevData, data]);
  };

  return (
    <div className="container-app">
      <form className="col-3" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-light">User Information</h2>
        <div className="form-group m-2">
          <input
            type="text"
            name="username"
            autoComplete="off"
            placeholder="Username"
            {...register("username")}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username.message}</div>
          )}
        </div>
        <div className="form-group m-2">
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>
        <div className="form-group m-2">
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        <div className="form-group m-2">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={reset}
            className="btn btn-warning float-right m-2"
          >
            Reset
          </button>
        </div>
        {submittedData.length > 0 && (
          <div className="col-5 mt-4">
            <h3 className="text-light">Submitted Data:</h3>
            {submittedData.map((data, index) => {
              return (
                <div className="show" key={index}>
                  <p className="">{data.username}</p>
                  <p className="">{data.email}</p>
                  <p className="">{data.password}</p>
                </div>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
