import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin7Line } from "react-icons/ri";
import "./JobsTable.css";

function PostedJobs() {
  const jobs = [
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
    {
      title: "Larvel Developer",
      location: "Putalisadak",
      posted_date: "07/30/2023",
      closing_date: "08/13/2023",
    },
  ];

  const renderJobs = jobs.map((job, indx) => {
    return (
      <div className="jobs-table-row" key={indx}>
        <span>{job.title}</span>
        <span>{job.location}</span>
        <span>{job.posted_date}</span>
        <span>{job.closing_date}</span>
        <span className="job-actions">
          <AiOutlineEye size={18} fill="#338573" />
          <GoPencil size={18} fill="#04BCF6" />
          <RiDeleteBin7Line size={18} fill="#FA0606" />
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
