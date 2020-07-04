import React, { useState } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import viggicon from '../vigglogo2.png';

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
        <div className ="col-8 mx-auto col-md-6 col-lg-4 p-5 loginpanel">
          <div className = "text-center">
            <img alt="Vigg Icon" src={viggicon} className="navbar-brand justify-content-center"/>
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
              <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
              </Button>
            </form>
          </div>
        </div>
        
      </div>
      
    );
  }