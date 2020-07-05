import React, { useState } from "react";
import { Button, FormGroup, FormControl, Col} from "react-bootstrap";
import "./Login.css";
import viggicon from '../vigglogo2.png';
import {Link} from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className ="container">
        <div className ="col-8 mx-auto col-md-6 col-lg-4 p-2 loginpanel">
          <div className = "text-center">
            <img alt="Vigg Icon" src={viggicon} className="logologin justify-content-center"/>
          </div>
          <div className="Login">
            <form onSubmit={handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <div>Email</div>
                <FormControl
                  autoFocus
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <div>Password</div>
                <FormControl
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                    <div className="ml-0">
                            <input type="checkbox" id="customCheck1" />
                            <label for ="customCheck1 ">Remember me</label>
                    </div>
              </FormGroup>
                
              <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
              </Button>
            </form>
            <div className ="row my-1 ">
              <div className ='col text-right'>
                Forgot
                <Link to='/forgotpassword' className ="ml-1 text-primary">
                  <u>
                    password?
                  </u>
                </Link> 
              </div>
            </div>
            <div className ="row my-5 ">
              <div className ='col text-center'>
                Not a member? 
                <Link to='/signup' className ="ml-2">
                  <u>
                    Sign up now
                  </u>
                </Link> 
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }