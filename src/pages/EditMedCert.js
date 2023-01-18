import { useLocation } from 'react-router';
import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar';

const EditMedCert = ({userdata}) => {
    const location = useLocation();
    const history = useNavigate();
    const [errorInput, setError] = useState([]);
    const state = location.state;
    const [MedInput, setMed] = useState(state);


    const handleInput = (e) => {
        e.persist();
        setMed({...MedInput, [e.target.name]: e.target.value });
    }


    const updateMedCert = (e) => {
        e.preventDefault();
        
        const med_id = state.id;
        const data = {
            fname: MedInput.fname || state.fname,
            lname: MedInput.lname || state.lname,
            verdict: MedInput.verdict || state.verdict,
            doctor: MedInput.doctor || state.doctor,
            uid: MedInput.uid || state.uid,
        }
        axios.put(`/api/update-medcert/${med_id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                history('/med');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandatory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history('/med');
            }
        });
    }
    return(
        <>
        <Navbar />
        <div className="col-sm-6 offset-sm-3">
        <br></br>
            <text style={{fontSize:35, marginLeft:280, fontFamily:'monospace'}}>Edit Doctor
                
             </text>
            <form onSubmit={(e) => updateMedCert(e)} >
                <div className="form-group mb-3">
                    <label>First Name</label>
                    <input style={{ height:50 }} type="text" name="fname" onChange={(e) => handleInput(e)} value={MedInput.fname} className="form-control" disabled/>
                    <span className="text-danger">{errorInput.fname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input type="text" style={{ height:50 }} name="lname" onChange={(e) => handleInput(e)} value={MedInput.lname}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.lname}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Verdict</label>
                    <select type="text"  name="verdict" onChange={(e) => handleInput(e)}  value={MedInput.verdict} className="form-control">
                        <option value="TBA">TBA</option>
                        <option value="is Allowed">is Allowed</option>
                        <option value="is not Allowed">is not Allowed</option>
                    </select>
                    <span className="text-danger">{errorInput.verdict}</span>
                </div>
                <div className="form-group mb-3">
                    <label>Doctor in Charge</label>
                    <select type="text"  name="doctor" onChange={(e) => handleInput(e)}  value={MedInput.doctor} className="form-control">
                        <option value="TBA">TBA</option>
                        <option value="Dr. Elizabeth Jones">Dr. Elizabeth Jones</option>
                        <option value="Dr. Michael Folly">Dr. Michael Folly</option>
                    </select>
                    <span className="text-danger">{errorInput.doctor}</span>
                </div>
                <div className="form-group mb-3">
                    <label>User ID</label>
                    <input type="text" style={{ height:50 }} name="uid" onChange={(e) => handleInput(e)} value={MedInput.uid}  className="form-control" disabled/>
                    <span className="text-danger">{errorInput.uid}</span>
                </div>
                <div className="form-group mb-3">
                <Link to={'/med'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                    <button type="submit" id="updatebtn" className="btn btn-primary">Update Medical Certificate</button>
                </div>
            </form>
        </div>
        </>
    )
}
 export default EditMedCert;