import React, { Component } from "react";

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userName, email, password } = this.state;
        console.log(userName, email, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userName,
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if(data.error === "User Exists")
                {
                    alert("User Already Exists");
                }

                if(data.status === "ok")
                {
                    alert("Registration Successfull");
                    window.location.href = "http://localhost:3000/login";
                }
            });
    }


    render() {
        return (
            <div class="loginmain">
            <form class="signUp" onSubmit={this.handleSubmit}
            name="regform"
            autocomplete="off">
      
      
            <h1 class="sign">Sign Up</h1>
            <div id="errormessage"></div>
            <span class="seperator"></span>
      
        <div class="input-text">
      
      
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })} required
          />
          
        </div>
            <div class="input-text">
      
              <input
                type="text"
                name="password"
                placeholder="Enter Username"
                onChange={(e) => this.setState({ userName: e.target.value })} required 
              /><i class="fa fa-fw fa-eye field-icon toggle-password" id="togglePassword"></i>
        
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
              <center><input class="signup-button" type="submit" value="Sign In" /></center>
            
              <div class="help">
                <a class="color_text" href="https://www.google.com/gmail/">Need help?</a>
            </div>
              <div class="login-face">
                <br/>
                    <div class="new-members">
                        New to Apna Theatre? <a href="login" class="signup-link">Sign In now</a>.
                    </div>
                <br/>
                    <div class="protection color_link help">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <div class="learnmore"> <a href="#">Learn more.</a></div>
                    </div>
                </div>
            </form>
            </div>
            // <form onSubmit={this.handleSubmit}>
            //     <div className="container text-danger">
            //         <label for="uname"><b>Username</b></label>
            //         <input type="text" placeholder="Enter Username" onChange={(e) => this.setState({ userName: e.target.value })} required />

            //         <label for="psw"><b>Password</b></label>
            //         <input type="password" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value })} required />

            //         <label for="psw"><b>Email Id</b></label>
            //         <input type="email" placeholder="Enter your email id" onChange={(e) => this.setState({ email: e.target.value })} required />

            //         <button type="submit" className='loginBtn btn btn-outline-danger'>Register</button>
            //     </div>


            // </form>
        )
    }
}