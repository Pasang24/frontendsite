import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEye } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import ShowJob from "./ShowJob";
import "./JobsTable.css";


function AppliedJobs() {
  const [appliedjobs, setAppliedjobs] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/appliedjob`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setAppliedjobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const jobs = [
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     applied_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  // ];

  const renderJobs = appliedjobs.map((job, indx) => {
    return (
      <div className="jobs-table-row" key={indx}>
        <span>{job.jobs.job_id.title}</span>
        <span>{job.jobs.job_id.location}</span>
        <span>{job.jobs.job_id.posted_date.slice(0,10) }</span>
        <span>{job.jobs.job_id.closing_date.slice(0,10)}</span>
        <span className="job-actions">
          <Link to={`/job/${job.jobs.job_id._id}`}>
          <AiOutlineEye size={18} fill="#338573" />
          </Link>
          <RxCross1 size={18} color="#FA0606" />
        </span>
      </div>
    );
  });

  return (
    <div className="page-wrapper">
      <h2 className="job-table-heading">Applied Jobs List</h2>
      <div className="jobs-table">
        <div className="jobs-table-header">
          <span>Title</span>
          <span>Location</span>
          <span>Applied On</span>
          <span>Deadline</span>
          <span>Action</span>
        </div>
        {renderJobs}
      </div>
    </div>
  );
}

export default AppliedJobs;
