import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "./Navbar";

function AddStudent() {
  const history = useNavigate();
  const [fname, setFname]=useState("")
  const [lname, setlname]=useState("")
  const [category, setCategory]=useState("")
  const [bday, setbday]=useState("")
  const [sex, setsex]=useState("")
  const [course, setcourse]=useState("")
  const [yrlvl, setyrlvl]=useState("")
  const [phone, setphone]=useState("")
  const [address, setaddress]=useState("")
  const [religion, setreligion]=useState("")
  const [cvs, setcvs]=useState("")
  const [cbc, setcbc]=useState("")
  const [uri, seturi]=useState("")

  async function addstudent(){
    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('category', category);
    formData.append('bday', bday);
    formData.append('sex', sex);
    formData.append('course', course);
    formData.append('yrlvl', yrlvl);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('religion', religion);
    formData.append('cvs', cvs);
    formData.append('cbc', cbc);
    formData.append('uri', uri);
    let result = await fetch("http://localhost:8000/api/add-student", {
      method: 'POST',
      body: formData
    });
    console.log(result)
    swal("Success!", "Student Added", "Successfully!")
    history("/dashboard");
  }
  /*const [studentInput, setStudent] = useState({
    fname: "",
    lname: "",
    bday: "",
    sex: "",
    course: "",
    yrlvl: "",
    phone: "",
    address: "",
    religion: "",
    cvs: "",
    error_list: [],
  });*/

  /*const handleInput = (e) => {
    e.persist();
    setStudent({ ...studentInput, [e.target.name]: e.target.value });
  };*/

  /*const saveStudent = (e) => {
    e.preventDefault();
    const data = {
      fname: studentInput.fname,
      lname: studentInput.lname,
      bday: studentInput.bday,
      sex: studentInput.sex,
      course: studentInput.course,
      yrlvl: studentInput.yrlvl,
      phone: studentInput.phone,
      address: studentInput.address,
      religion: studentInput.religion,
      cvs: studentInput.cvs,
    };
    axios.post(`/api/add-student`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        setStudent({
          fname: "",
          lname: "",
          bday: "",
          sex: "",
          course: "",
          yrlvl: "",
          phone: "",
          address: "",
          religion: "",
          cvs: "",
          error_list: [],
        });
        history("/dashboard");
      } else if (res.data.status === 422) {
        setStudent({ ...studentInput, error_list: res.data.validate_err });
      }
    });
  };*/

  return (
    <>
      <Navbar />
      <img src="/stud.png" alt="bg" width={430} height={350} style={{  marginTop: 25, marginLeft:550 }} ></img> 
      <div className="col-sm-6 offset-sm-3">
        <h4>
          Add User
        </h4>
      </div>
      <div className="col-sm-6 offset-sm-3">
          <div className="form-group mb-3">
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              style={{ height: 50 }}
              onChange={(e) => setFname(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              style={{ height: 50 }}
              onChange={(e) => setlname(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Category</label>
            <select type="text" name="category" onChange={(e) => setCategory(e.target.value)} className="form-control">
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Birthdate</label>
            <input
              type="date"
              name="bday"
              style={{ height: 50 }}
              onChange={(e) => setbday(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Sex</label>
            <select type="text" name="sex" onChange={(e) => setsex(e.target.value)} className="form-control">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              style={{ height: 50 }}
              onChange={(e) => setphone(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Course</label>
            <select type="text" name="course" onChange={(e) => setcourse(e.target.value)} className="form-control">
              <option value="Engineering">Engineering</option>
              <option value="Maritime">Maritime</option>
              <option value="Education">Education</option>
              <option value="Nursing">Nursing</option>
              <option value="Psychology">Psychology</option>
              <option value="Architecture">Architecture</option>
              <option value="Accountancy">Accountancy</option>
              <option value="Arts and Science">Arts and Science</option>
              <option value="Criminology">Criminology</option>
              <option value="Computing and Multimedia Studies">Computing and Multimedia Studies</option>
              <option value="Hospitality and Tourism Management">Hospitality and Tourism Management</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Year Level</label>
            <select type="text" name="yrlvl" onChange={(e) => setyrlvl(e.target.value)} className="form-control">
              <option value="1stYear">1st Year</option>
              <option value="2ndYear">2nd Year</option>
              <option value="3rdYear">3rd Year</option>
              <option value="4thYear">4th Year</option>
              <option value="5thYear">5th Year</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              style={{ height: 50 }}
              onChange={(e) => setaddress(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <label>Religion</label>
            <select
              type="text"
              name="religion"
              onChange={(e) => setreligion(e.target.value)}
              className="form-control"
            >
              <option value="RomanCatholic">Roman Catholic</option>
              <option value="Iglesia">Iglesia</option>
              <option value="BornAgain">Born Again</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Civil Status</label>
            <select type="text"  name="cvs" onChange={(e) => setcvs(e.target.value)} className="form-control">
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Seperated">Seperated</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>CBC</label>
            <input type="file" name="cbc" onChange={(e) => setcbc(e.target.files[0])} className="form-control" />
          </div>
          <div className="form-group mb-3">
            <label>Urinalysis</label>
            <input type="file" name="uri" onChange={(e) => seturi(e.target.files[0])} className="form-control" />
          </div>
          <div className="form-group mb-3">
          <Link to={"/dashboard"} className="btn btn-danger btn-sm float-end">
            {" "}
            BACK
          </Link>
            <button type="submit" onClick={addstudent} className="btn btn-primary">
              Save Student
            </button>
          </div>
      </div>
    </>
  );
}

export default AddStudent;