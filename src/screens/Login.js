import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import Dashboard from './DashBoard';
import "./Login.css";


function Login({Login, error}) {
    
    const history = useHistory();
   
    const [details, setDetails]= useState({ email:"", password:""});
    const [state,setState]=useState("LoggedOut");

    const submitHandler = e =>{
        e.preventDefault();
        history.push('/dashboard');
    }  
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
      } 
      
    
    function loginUser(){
        
        if (details.email === adminUser.email && details.password === adminUser.password){
            setState("LoggedIn");
            history.push("/dashboard");
           
          }else{
            console.log("Details do not match!");
            alert("Details do not match")
          }
        
    }

    return (
      <div class="div-body">
         <div align="center">   
            
            <form onSubmit={submitHandler}>
            <h1 className="log-head">Hello!</h1>
                <h4>Log in to your account</h4>
                <div>
                   {(error !== "") ?(<div className="error">{error}</div>):""}
                    <div>
                <div className="input-container">

                 
                  <input

                    type="email"
                    name="email"
                    placeholder="Email"
                    className="ins"
                    onChange={e => setDetails({ ...details, email: e.target.value })}
                    value={details.email}
                  >
                  </input>
                  <br/>
                  <input 
                        
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="ins"
                        onChange={e=>setDetails({...details,password:e.target.value})}
                        value={details.password}>
                        </input>
                </div>
                 </div>
                    {/* <div className="input-container" >
                    <input 
                        
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="ins"
                        onChange={e=>setDetails({...details,password:e.target.value})}
                        value={details.password}>
                        </input>
                        </div> */}
                    {/* <VisibilityOutlinedIcon  className="end-icons"/>
                    <VisibilityOffOutlinedIcon className="end-icons" /> */}
                    
                    
                    
                    {/* <div className="input-container">
                    <button className="plane-btn" >Forgot password?</button> 
                    </div>
                    <div className="input-container">
                    <button
                    type="submit"  
                    value="LOGIN"
                    onClick={loginUser}
                    className="login-btn"
                    >LOGIN</button>
                    </div> */}
                   
                    <button className="plane-btn" >Forgot password?</button> 
                     <br/>
                    <div className="log-con">
                    <button
                    type="submit"  
                    value="LOGIN"
                    onClick={loginUser}
                    className="login-btn"
                    >LOGIN</button>
                    </div>
                    
                    
                
                    
                    <div className="rem-me"> 
                    <input className="rad-btn"type="radio" value="rememberMe" name="rememberMe" />
                    Remember me
                    </div>
                    <div>
                    {state ==="LoggedIn" && <Dashboard/>}
                    </div>
                    
                </div>
             </form>
             </div>
    
              
      </div>
       
           
    )
}

export default Login;  
