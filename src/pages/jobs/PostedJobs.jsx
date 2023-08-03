import React, { useState, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";

import "./JobsTable.css";

function PostedJobs() {

  const [postedjobs, setPostedjobs] = useState([]);

  const posted_jobs = () => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/postedjobs/${localStorage.getItem("id")}`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => {
      console.log(res.data.data);
      setPostedjobs(res.data.data);
    })
  }

  useEffect(()=> {
    posted_jobs();
  },[])

  // const jobs = [
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  //   {
  //     title: "Larvel Developer",
  //     location: "Putalisadak",
  //     posted_date: "07/30/2023",
  //     closing_date: "08/13/2023",
  //   },
  // ];

  const deleteJob = (id) => {
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/job/${id}`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => posted_jobs())
  }

  const renderJobs = postedjobs.map((job, indx) => {
    return (
      <div className="jobs-table-row" key={indx}>
        <span>{job.title}</span>
        <span>{job.location}</span>
        <span>{job.posted_date.slice(0,10)}</span>
        <span>{job.closing_date.slice(0,10)}</span>
        <span className="job-actions">
          <Link to={`/job/${job._id}`} >
          <AiOutlineEye size={18} fill="#338573" />
          </Link>
          <Link to={`/editjob/${job._id}`}>
          <GoPencil size={18} fill="#04BCF6" />
          </Link>
          <RiDeleteBin7Line size={18} fill="#FA0606" onClick={()=>deleteJob(job._id)}/>
        </span>
      </div>
    );
  });

  return (
    <div className="page-wrapper">
      <h2 className="job-table-heading">My Jobs List</h2>
      <div className="jobs-table">
        <div className="jobs-table-header">
          <span>Title</span>
          <span>Location</span>
          <span>Posted On</span>
          <span>Deadline</span>
          <span>Action</span>
        </div>
        {renderJobs}
      </div>
    </div>
  );
}

export default PostedJobs;
