import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Profile() {
    const [user, setUser] = useState([]);
    useEffect(() => {
      axios
        .get(`https://apiforjob.onrender.com/api/getuserdata`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("id")}`
          }
        })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        });
    }, []);
  return (
    <div>Profile</div>
  )
}

export default Profile