import Navbar from "./Navbar";
import { useState } from "react";
import { Link } from 'react-router-dom';

function SearchStudent() {

    const [table, setTable] = useState(null);

    async function search(key) {
        console.warn(key)
        let result = await fetch("http://localhost:8000/api/search/"+key);
        console.log(result);
        result = await result.json();
    
        var student_HTMLTABLE = result.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
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
        setTable(student_HTMLTABLE)

    }

    return (
        <div>
            <Navbar />
            <br></br>
            <img src="/search.png" alt="bg" width={430} height={350} style={{  marginTop: -15, marginLeft:600 }} ></img> 
            <br></br>
            <br></br>
            <div className="col-sm-6 offset-sm-3">
                <h1>Search by Last Name</h1>
                <br/>
                <input type='text' onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Student" />
            </div>
            <div className="col-sm-6 offset-sm-3">
              <br></br>
                <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthdate</th>
                    <th>Sex</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Year Level</th>
                    <th>Address</th>
                    <th>Religion</th>
                    <th>Civil Status</th>
                    <th>CBC</th>
                    <th>Urinalysis</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>{table}</tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchStudent;