import React, { useState, useEffect } from "react";
import axios from "axios";
import "./jobs/JobsTable.css"

function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://apiforjob.onrender.com/api/getuserdata`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  }, []);
  return (
    <div className="page-wrapper">
        <div className="job-table-heading">
          <h2>Profile</h2>
        </div>

      <div className="list">
        <h2>
          Name : <span>{user.name}</span>
        </h2>
        <h2>
          Email : <span>{user.email}</span>
        </h2>
        <h2>
          PhoneNumber : <span>{user.phoneNumber}</span>
        </h2>
        {
        (localStorage.getItem("role") === "applicant") ? (
          <h2>
            Education : <span>{user.education}</span>
          </h2>
        ) : (
          <h2>
            Company : <span>{user.company}</span>
          </h2>
        )}
      </div>
    </div>
  );
}

export default Profile;
