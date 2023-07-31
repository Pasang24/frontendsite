import React from "react";
import axios from "axios";
import { AiOutlineEye } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBin7Line } from "react-icons/ri";
import "./JobsTable.css";

function AppliedJobs() {
  const jobs = [
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      applied_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
  ];

  const renderJobs = jobs.map((job, indx) => {
    return (
      <div className="jobs-table-row">
        <span>{job.title}</span>
        <span>{job.location}</span>
        <span>{job.applied_date}</span>
        <span>{job.closing_date}</span>
        <span className="job-actions">
          <AiOutlineEye size={18} fill="#338573" />
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
