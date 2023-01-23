import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function MedHistory() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/api/users`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.user);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading User Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.email}</td>
          <td>
            <Link
              to={"/checkmed"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Check
            </Link>
          </td>
        </tr>
      );
    });
  }
  
  return (
    <>
      <Navbar />
      <div>
        <div style={{ marginLeft: 40, marginTop:45 }}>
         
        </div>
        <h4 style={{ marginLeft: 50 }}>
          User Account Data
        </h4>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Check Record</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default MedHistory;