import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowJob() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/jobs/${id}`).then((res) => {
      setJob(res.data);
    });
  }, []);

  return <></>;
}

export default ShowJob;
