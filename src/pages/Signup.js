import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './css/Signup.css';
const Signup = () => {

  const [name, setName]=useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail]=useState("");
  const [verified, setVerified] = useState("false");
  const [msg, setMsg]=useState("");
  const history = useNavigate();

  async function signup(){
    let item={name,password,email, verified}
    console.warn(item)
    
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (regex.test(item.email)) {
      let result = await fetch("http://localhost:8000/api/register",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json',
      }
      })
      result = await result.json()
      localStorage.setItem("user-info",JSON.stringify(result))
      alert("User Created")
      history("/")
    } else {
      setMsg("Email is not valid")
    }

    
  }

  return (
    <div>
      <div className='nav-square'>
        <Link to='/login'>
          <IconButton sx= {{ color: 'white', marginLeft: 5, marginTop: -3}}>
            <Icon icon="eva:arrow-ios-back-fill" />
          </IconButton>
        </Link>
          <text style={{marginLeft: 80, fontWeight:'bold', fontSize:50, fontFamily:'sans-serif', color:'white'}}>  'Hippo-Campus'</text>
      </div>
      <div class="hippo-logo">
        <img src="/logo1.png" alt="bg" width={205} height={205}></img>
      </div>

      <div className='body'>
        <text>MSEUF's first beta web based and mobile application clinic management system</text>
      </div>
      <div className='signup'>
          <text> SIGN UP </text>
      </div>
        <div className="col-sm-6 offset-sm-3">
          <input type="text" style={{ height:50 }} value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Username"/>
          <br />
          <input type="text" style={{ height:50 }} value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email"/>
          {msg}
          <br />
          <input type="password" style={{ height:50 }} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password"/>
          <br />
          <button  onClick={signup} className="btnsignup" >Sign Up</button>
        </div>
      </div>
  );
};

export default Signup;
