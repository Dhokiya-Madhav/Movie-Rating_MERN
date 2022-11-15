import React, { Component } from "react";

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstname: "",
          lastname: "",
          email: "",
          phone:"",
          subject:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { firstname,lastname,email,phone,subject } = this.state;
        console.log(firstname,lastname,email,phone,subject);
        fetch("http://localhost:5000/contact", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              firstname,
              lastname,
              email,
              phone,
              subject,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
              
                if(data.status === "ok")
                {
                    alert("Your request is send");
                    window.location.href = "http://localhost:3000/";
                }
            });
    }


    render() {
        return (
            <div class="loginmain">
          
            <form class="signUp" onSubmit={this.handleSubmit}
            name="regform"
            autocomplete="off">
      
      
            <h1 class="sign">Contact Us</h1>
            <div id="errormessage"></div>
            <span class="seperator"></span>
      
        <div class="input-text">
      
      
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={(e) => this.setState({ firstname: e.target.value })} required
          />
          
        </div>
        <div class="input-text">
      
      
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        onChange={(e) => this.setState({ lastname: e.target.value })} required
      />
      
    </div>
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
        type="number"
        name="phoneno"
        placeholder="Phone No"
        onChange={(e) => this.setState({ phone: e.target.value })} required
      />
      
    </div>
    <div class="input-text">
      
      
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={(e) => this.setState({ subject: e.target.value })} required
      />
      
    </div>
   
      
              <span class="seperator"></span>
              <center><input class="signup-button" type="submit" value="Contact Us" /></center>
              
            </form>
            </div>
           
        )
    }
}
   

