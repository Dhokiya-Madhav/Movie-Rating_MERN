import React, { Component } from "react";
import './logincss.css'
import { Link } from "react-router-dom";
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("http://localhost:5000/login-user", {
            
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Login Successfull");
                console.log(data, "userRegister");
                if (data.error === "User Not found") {
                    alert("Invalid Credentials");
                }
                else{
                    alert("Login Successfull");
                    sessionStorage.setItem('logindata',JSON.stringify(data));
                    window.location.href = "http://localhost:3000/";
                }
            });
    }
    render() {

        return (
            <form class="login" onSubmit={this.handleSubmit}
            name="regform"
            autocomplete="off">
      
      
            <h1 class="sign">Login</h1>
            <div id="errormessage"></div>
            <span class="seperator"></span>
      
        <div class="input-text">
      
      
          <input
            type="Email"
            name="email"
            placeholder="Email"
            title="Invalid format"
            onChange={(e) => this.setState({ email: e.target.value })} required
          />
          
        </div>
            <div class="input-text">
      
              <input
                id = "pass_signup"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => this.setState({ password: e.target.value })} required
              /><i class="fa fa-fw fa-eye field-icon toggle-password" id="togglePassword"></i>
        
            </div>
      
              <span class="seperator"></span>
              <center><input class="signin-button" type="submit" value="Sign In" /></center>
            
              <div class="">
                
                
            </div>
              <div class="login-face">
                <br/>
                    <div class="new-members">
                        New to Apna Theatre? <a href="/signup" class="signup-link">Sign up now</a>.
                    </div>
                <br/>
                    <div class="protection color_link help">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <div class="learnmore"> <a href="#">Learn more.</a></div>
                    </div>
                </div>
            </form>
            
           


       )

    }
}