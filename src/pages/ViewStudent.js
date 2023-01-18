import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import BCHART from "./BarChart";
import YRBChart from "./BChartYrlvl";
import CourseChart from "./LChartCourse";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [data, setData] = useState('');

  //count
  const [female, setFemale] = useState('');
  const [male, setMale] = useState('');
  const [stud, setStud] = useState('');
  const [emp, setEmp] = useState('');

  //Religion
  const [rc, setRC] = useState('');
  const [ba, setBA] = useState('');
  const [ig, setIG] = useState('');
  const [prr, setPRR] = useState('');

  //Civil Status
  const [single, setSingle] = useState('');
  const [mar, setMar] = useState('');
  const [sep, setSep] = useState('');
  const [pref, setPref] = useState('');

  //yearlvl
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [fifth, setFifth] = useState('');
  const [sixth, setSixth] = useState('');

  //course
  const [eng, setEng] = useState('');
  const [maritime, setMaritime] = useState('');
  const [educ, setEducation] = useState('');
  const [nursing, setNursing] = useState('');
  const [psych, setPsych] = useState('');
  const [arch, setArch] = useState('');
  const [acc, setAcc] = useState('');
  const [aas, setAas] = useState('');
  const [crim, setCrim] = useState('');
  const [ccms, setCCMS] = useState('');
  const [htm, setHTM] = useState('');



  useEffect(() => {
    axios.get(`/api/students`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.students);
        setLoading(false);
      }
    });
    axios.get('/api/counter').then(response => {
      if(response.status === 200)
      {
          setData(response.data.all)
      }
    });
    axios.get('/api/female').then(response => {
      if(response.status === 200)
      {
          setFemale(response.data.all)
      }
    });
    axios.get('/api/male').then(response => {
      if(response.status === 200)
      {
          setMale(response.data.all)
      }
    });
    //Religion
    axios.get('/api/RC').then(response => {
      if(response.status === 200)
      {
          setRC(response.data.all)
      }
    });
    axios.get('/api/BA').then(response => {
      if(response.status === 200)
      {
          setBA(response.data.all)
      }
    });
    axios.get('/api/IG').then(response => {
      if(response.status === 200)
      {
          setIG(response.data.all)
      }
    });
    axios.get('/api/PRR').then(response => {
      if(response.status === 200)
      {
          setPRR(response.data.all)
      }
    });
    //Civil Status
    axios.get('/api/single').then(response => {
      if(response.status === 200)
      {
          setSingle(response.data.all)
      }
    });
    axios.get('/api/married').then(response => {
      if(response.status === 200)
      {
          setMar(response.data.all)
      }
    });
    axios.get('/api/sep').then(response => {
      if(response.status === 200)
      {
          setSep(response.data.all)
      }
    });
    axios.get('/api/pref').then(response => {
      if(response.status === 200)
      {
          setPref(response.data.all)
      }
    });
    //YearLevel
    axios.get('/api/first').then(response => {
      if(response.status === 200)
      {
          setFirst(response.data.all)
      }
    });
    axios.get('/api/second').then(response => {
      if(response.status === 200)
      {
          setSecond(response.data.all)
      }
    });
    axios.get('/api/third').then(response => {
      if(response.status === 200)
      {
          setThird(response.data.all)
      }
    });
    axios.get('/api/fourth').then(response => {
      if(response.status === 200)
      {
          setFourth(response.data.all)
      }
    });
    axios.get('/api/fifth').then(response => {
      if(response.status === 200)
      {
          setFifth(response.data.all)
      }
    });
    //Course
    axios.get('/api/engineering').then(response => {
      if(response.status === 200)
      {
          setEng(response.data.all)
      }
    });
    axios.get('/api/maritime').then(response => {
      if(response.status === 200)
      {
          setMaritime(response.data.all)
      }
    });
    axios.get('/api/education').then(response => {
      if(response.status === 200)
      {
          setEducation(response.data.all)
      }
    });
    axios.get('/api/nursing').then(response => {
      if(response.status === 200)
      {
          setNursing(response.data.all)
      }
    });
    axios.get('/api/psychology').then(response => {
      if(response.status === 200)
      {
          setPsych(response.data.all)
      }
    });
    axios.get('/api/architecture').then(response => {
      if(response.status === 200)
      {
          setArch(response.data.all)
      }
    });
    axios.get('/api/accountancy').then(response => {
      if(response.status === 200)
      {
          setAcc(response.data.all)
      }
    });
    axios.get('/api/aas').then(response => {
      if(response.status === 200)
      {
          setAas(response.data.all)
      }
    });
    axios.get('/api/criminology').then(response => {
      if(response.status === 200)
      {
          setCrim(response.data.all)
      }
    });
    axios.get('/api/ccms').then(response => {
      if(response.status === 200)
      {
          setCCMS(response.data.all)
      }
    });
    axios.get('/api/htm').then(response => {
      if(response.status === 200)
      {
          setHTM(response.data.all)
      }
    });
    axios.get('/api/studcount').then(response => {
      if(response.status === 200)
      {
          setStud(response.data.all)
      }
    });
    axios.get('/api/employeecount').then(response => {
      if(response.status === 200)
      {
          setEmp(response.data.all)
      }
    });
    axios.get('/api/sixth').then(response => {
      if(response.status === 200)
      {
          setSixth(response.data.all)
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading Student Data...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.fname}</td>
          <td>{item.lname}</td>
          <td>{item.category}</td>
          <td>{item.bday}</td>
          <td>{item.sex}</td>
          <td>{item.phone}</td>
          <td>{item.course}</td>
          <td>{item.yrlvl}</td>
          <td>{item.address}</td>
          <td>{item.religion}</td>
          <td>{item.cvs}</td>
          <td><img src={ "http://localhost:8000/" + item.cbc } className="img-fluid img-bordered" width="200px" alt='alternative'/></td>
          <td><img src={ "http://localhost:8000/" + item.uri } className="img-fluid img-bordered" width="200px" alt='alternative'/></td>
          <td>
            <Link
              to={"/add-medrec"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add
            </Link>
          </td>
          <td>
            <Link
              to={"/add-guardian"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Add
            </Link>
          </td>
          <td>
            <Link
              to={"/edit"}
              state={item}
              className="btn btn-success btn-sm"
            >
              Edit
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
        <br></br>
        <br></br>
        <div style={{ marginLeft: 100 }}>
          <h4>Total Number of Users: {data}</h4>
          <h4>Total Number of Female Students: {female}</h4>
          <h4>Total Number of Male Students: {male}</h4>
          <h4>Total Number of Students: {stud}</h4>
          <h4>Total Number of Employees: {emp}</h4>
        </div>
        <br></br>
        <br></br>
        <div style={{ marginLeft: 100}}>
          <h4>Civil Status Chart</h4>
          <BCHART />
        </div>
        <div style={{ marginLeft: 550, marginTop: -110 }}>
          <h5>Legend:</h5>
          <h6>Total Single: {single}</h6>
          <h6>Total Married: {mar}</h6>
          <h6>Total Seperated: {sep}</h6>
          <h6>Total Prefer not to say: {pref}</h6>
        </div>
        <div style={{ marginLeft: 750, marginTop: -180 }}>
          <h4>Religion Chart</h4>
          <LineChart/>
        </div>
        <div style={{ marginLeft: 1250, marginTop: -120 }}>
          <h5>Legend:</h5>
          <h6>Total Roman Catholic: {rc}</h6>
          <h6>Total Born Again: {ba}</h6>
          <h6>Total Iglesia: {ig}</h6>
          <h6>Total Prefer not to say: {prr}</h6>
        </div>
        <div style={{ marginLeft: 100}}>
          <h4>Year Level Chart</h4>
          <YRBChart/>
        </div>
        <div style={{ marginLeft: 550, marginTop: -110 }}>
          <h5>Legend:</h5>
          <h6>Total First Year: {first}</h6>
          <h6>Total Second Year: {second}</h6>
          <h6>Total Third Year: {third}</h6>
          <h6>Total Fourth Year: {fourth}</h6>
          <h6>Total Fifth Year: {fifth}</h6>
          <h6>Total Employee: {sixth}</h6>
        </div>
        <div style={{ marginLeft: 750, marginTop: -200 }}>
          <h4>Course Chart</h4>
          <CourseChart/>
        </div>
        <div style={{ marginLeft: 1250, marginTop: -120 }}>
          <h5>Legend:</h5>
          <h6>Total Engineering: {eng}</h6>
          <h6>Total Maritime: {maritime}</h6>
          <h6>Total Education: {educ}</h6>
          <h6>Total Nursing: {nursing}</h6>
          <h6>Total Psychology: {psych}</h6>
          <h6>Total Architecture: {arch}</h6>
          <h6>Total Accountancy: {acc}</h6>
          <h6>Total Arts and Science: {aas}</h6>
          <h6>Total Criminology: {crim}</h6>
          <h6>Total Computing and Multimedia Studies: {ccms}</h6>
          <h6>Total Hospitality and Tourism Management: {htm}</h6>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <h4 style={{ marginLeft: 50 }}>
          Medical Data
          <Link
            to={"/add-students"}
            className="btn btn-primary btn-sm float-end"
          >
            {" "}
            Add User
          </Link>
        </h4>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Category</th>
              <th>Birthdate</th>
              <th>Sex</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Year Level</th>
              <th>Address</th>
              <th>Religion</th>
              <th>Civil Status</th>
              <th>CBC Image</th>
              <th>Urinalysis Image</th>
              <th>Add Medical Record</th>
              <th>Add Contact Person</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{student_HTMLTABLE}</tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;