import '../styles/loginStyle.css'
import React, { Component } from "react";
export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Image:"",
            Name:"",
            Desc:"",
            Movietype:"",
            Movieorigin:"",
            actress:"",
            actor:"",
            imdb:"",
            rtime:"",
            rdate:"",

            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { Image,Name,Desc,Movietype,Movieorigin,actress,actor,imdb,rtime,rdate} = this.state;
        console.log(Image,Name,Desc,Movietype,Movieorigin,actress,actor,imdb,rtime,rdate);
        fetch("http://localhost:5000/registermovie", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                Image,
                Name,
                Desc,
                Movietype,
                Movieorigin,
                actress,
                actor,
                imdb,
                rtime,
                rdate,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "movieRegister");
                if(data.error === "Movie Exists")
                {
                    alert("Movie Already Exists");
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
            <form onSubmit={this.handleSubmit}>
                <div className="container text-danger">
                    <label for="Image"><b>Image</b></label>
                    <input type="text" placeholder="Enter Image URL" onChange={(e) => this.setState({ Image: e.target.value })} required />

                    <label for="Name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Movie Name" onChange={(e) => this.setState({ Name: e.target.value })} required />

                    <label for="Desc"><b>Movie Desc</b></label>
                    <input type="text" placeholder="Enter your Movie Description" onChange={(e) => this.setState({ Desc: e.target.value })} required />

                    <label for="Movietype"><b>Movie Type</b></label>
                    <input type="text" placeholder="Enter Movie Type" onChange={(e) => this.setState({ Movietype: e.target.value })} required />

                    <label for="Movieorigin"><b>Movie Origin</b></label>
                    <input type="text" placeholder="Enter Movie Origin" onChange={(e) => this.setState({ Movieorigin: e.target.value })} required />

                   <label for="actress"><b>Lead Actress</b></label>
                    <input type="text" placeholder="Enter actress name" onChange={(e) => this.setState({ actress: e.target.value })} required />

                    <label for="actor"><b>Lead Actor</b></label>
                    <input type="text" placeholder="Enter actor name" onChange={(e) => this.setState({ actor: e.target.value })} required />

                    <label for="imdb"><b>IMDB</b></label>
                    <input type="number" placeholder="Enter actress name" onChange={(e) => this.setState({ imdb: e.target.value })} required />

                    <label for="rtime"><b>Movie Time</b></label>
                    <input type="number" placeholder="Enter actor name" onChange={(e) => this.setState({ rtime: e.target.value })} required />
                   
                    <label for="rdate"><b>Release date</b></label>
                    <input type="date" placeholder="Enter actor name" onChange={(e) => this.setState({ rdate: e.target.value })} required />


                    <button type="submit" className='loginBtn btn btn-outline-danger'>Register movie</button>
                </div>


            </form>
        )
    }
}