import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  upperCharList,
  lowerCharList,
  numCharList,
  specialCharList,
} from "../utils/charList";
import "./Form.css";

function Register() {
  const [role, setRole] = useState("applicant");

  const [payload, setPayload] = useState({
    role: "applicant",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    education: "",
    company: "",
  });

  const handleChange = (event) => {
    setPayload({ ...payload, [event.target.name]: event.target.value });
  };

  const checkPassword = (charList) => {
    let hasChar = false;
    for (let char of charList) {
      if (payload.password.includes(char)) {
        hasChar = true;
        break;
      }
    }
    return hasChar;
  };

  return (
    <div className="page-wrapper">
      <h2 className="form-title">Register</h2>

      <form className="form-wrapper">
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name *"
              onChange={handleChange}
              value={payload.name}
            />
          </div>
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
        </div>
        <div className="input-section">
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
            {payload.password.length > 0 && (
              <ul className="password-criteria-list">
                <li
                  style={{
                    color: payload.password.length >= 8 ? "green" : "red",
                  }}
                >
                  Must be at least 8 characters
                </li>
                <li
                  style={{
                    color: checkPassword(upperCharList) ? "green" : "red",
                  }}
                >
                  Must contain uppercase letter
                </li>
                <li
                  style={{
                    color: checkPassword(lowerCharList) ? "green" : "red",
                  }}
                >
                  Must contain lowercase letter
                </li>
                <li
                  style={{
                    color: checkPassword(specialCharList) ? "green" : "red",
                  }}
                >
                  Must contain special character
                </li>
              </ul>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone </label>
            <input
              type="number"
              name="phoneNumber"
              required
              placeholder="Phone *"
              onChange={handleChange}
              value={payload.phoneNumber}
            />
          </div>
        </div>
        <div className="input-section">
          <div className="form-field">
            <label htmlFor="role">Role</label>
            <select onChange={handleChange} name="role">
              <option value="applicant">Applicant</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>
          {payload.role === "applicant" ? (
            <>
              <div className="form-field">
                <label htmlFor="education">Education</label>
                <input
                  type="text"
                  name="education"
                  required
                  placeholder="Education *"
                  onChange={handleChange}
                  value={payload.education}
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company *"
                  onChange={handleChange}
                  value={payload.company}
                />
              </div>
            </>
          )}
        </div>
        <button className="form-btn">Register</button>
        <div className="form-link">
          <span>Already have an account?</span> <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
