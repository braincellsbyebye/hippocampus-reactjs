import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import './css/ClinicPLogin.css';

const ClinicPersonnelLogin = () => {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(){
    let item={email, password};
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    if ("error" in result) {
      alert("Login Credentials do not match")
    } else if ("notVerified" in result) {
        alert("User not Verified!ss");
    } else {
      history("/dashboard")
    }


  }

  return (
    <div>
     <div className='nav-square'>
        <Link to='/'>
          <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: -3}}>
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>
        </Link>
          <text style={{marginLeft: 80, fontWeight:'bold', fontSize:50, fontFamily:'sans-serif', color:'white'}}>  'Hippo-Campus'</text>
          <text style={{marginLeft: 680, marginTop:20, fontWeight:'bold', fontSize:20, fontFamily:'sans-serif', color:'white'}}>Clinic Personnel</text>
      </div>

      <div className='hippo-logo'>
        <img src="/logo1.png" alt="bg" width={205} height={205}></img>
      </div>
      <div className="col-sm-6 offset-sm-3">
          <text style={{ marginLeft: 150 }}>MSEUF's first beta web based and mobile application clinic management system</text>
          <br></br>
          <text className="login"> LOGIN </text>
        <input type="text" style={{ height:50, marginTop: 25 }} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control"/>
        <br />
        <input type="password" style={{ height:50 }} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control"/>
        <br />
        <p>Not yet registered? <Link to ="/signup">Register here</Link></p>
        <button onClick={login} className="btn4" style={{ marginLeft:300 }}>Login</button>
      </div>


    </div>
  );
};

export default ClinicPersonnelLogin;
