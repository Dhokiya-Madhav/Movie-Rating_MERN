import React, { Component } from "react";
export default class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email } = this.state;
        console.log(email);
        fetch("http://localhost:5000/forgot-password", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error === "User Not found") {
                    alert("There is no user registered with this email id");
                }
                else
                {
                    alert("Check your email for re-setting the password");
                }
                

            });
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <center>
                        <h2>Enter Your Email</h2>
                        <br></br>
                        <input type="email" placeholder="Enter Email Id" title="Please Enter valid email address" style={{width:350}} onChange={(e) => this.setState({ email: e.target.value })} required/><br></br>
                        <button type="Submit" className="btn btn-danger">Submit</button>
                    </center>
                </form>
                
            </>
        )
    }
}