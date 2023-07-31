import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    role: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/login`, payload)
      .then((res) => {
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange(event) {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  }

  return (
    <div className="page-wrapper">
      <h2 className="form-title">Login</h2>
      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email *"
            onChange={handleChange}
            value={payload.email}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password *"
            onChange={handleChange}
            value={payload.password}
          />
        </div>
        <div className="form-field">
          <label htmlFor="role">Role</label>
          <select value={payload.role} name="role" onChange={handleChange}>
            <option value="Applicant">Applicant</option>
            <option value="Recruiter">Recruiter</option>
          </select>
        </div>
        <button className="form-btn">Login</button>
        <div className="form-link">
          <span>Not a member?</span> <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
