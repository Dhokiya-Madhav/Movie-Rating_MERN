import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './viewmorecss.css'


export default function Viewmore() {

  const location = useLocation();

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  }
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItem: "center",
      backgroundcolor: "white",
    },
    textarea: {
      border: "2px solid black",
      borderRadius: 5,
      margin: "20px 0",
      minHeight: 200,
      padding: 10,
      color: "black"

    },
    button: {
      border: "1px solid red",
      borderRadius: 5,
      width: 300,
      padding: 10
    },
    formcontainer: {
      width: 300,
      padding: 10
    }
  }
  const moviedisplay = {
    gener: {
      color: "white"
    }
  }
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const [feedbackk, setfeedback] = React.useState("");
  const handleClick = value => {
    setCurrentValue(value);
    console.log(currentValue);
  }
  const handleMouseOver = value => {
    setHoverValue(value);
    console.log(currentValue);
  }
  const handleMouseLeave = () => {
    setHoverValue(undefined);
    console.log(currentValue);
  }
  const [sm, setsm] = useState([]);

  const [review, setreview] = useState([]);
  useEffect(() => {

    let loginin = sessionStorage.getItem('logindata');
    loginin = JSON.parse(loginin);
    console.log("a");
    if (loginin.userName != undefined) {
      fetch("http://localhost:5000/singlemovie/" + location.state.id).then((response) => response.json())
        .then((data) => {
          setsm(data);
          console.log(data);
          console.log("Data");
          if (data.error === "No records found!") {
            alert("No records found!");
          }
        }
        );

      fetch("http://localhost:5000/review/" + location.state.id).then((response) => response.json())
        .then((data) => {
          setreview(data);
          console.log(review);

          // if(data.error==="No records found!"){
          //     alert("No records found!");
          //   }    
        }
        );
    }
  }, []);

  const apisubmitfeedback = () => {



    let loginin = sessionStorage.getItem('logindata');
    loginin = JSON.parse(loginin);



    console.log(location.state.id);
    console.log(currentValue);
    console.log(feedbackk);
    const movieid = location.state.id
    const name = loginin.userName;

    fetch("http://localhost:5000/feedback", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        feedback: feedbackk.toString(),
        star: currentValue,
        userName: name,
        movieid: movieid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (loginin == null) {
          window.location.href = "http://localhost:3000/";
        }
        if (data.error === "feedback Exists") {
          alert("User Already given a feedback");
        }

        if (data.status === "ok") {
          alert("feedback given Successfull");
          window.location.href = "http://localhost:3000/";
        }
      });


  }
  return (
    <>
      {sm.map(postbollywood => (
        <div className="card mb-3 bg-dark" style={{ width: 1250 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={postbollywood.Image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-white">
                <div className='movieData'>
                  <h3>{postbollywood.Name}</h3>
                  <h3>Actor: {postbollywood.actor}</h3>
                  <h3>Actress: {postbollywood.actress}</h3>
                  <h3>IMDB: {postbollywood.imdb}</h3>
                  <h3>Movie Type: {postbollywood.Movietype}</h3>
                  <h3>Movie Origin: {postbollywood.Movieorigin}</h3>
                  <h3>Duration: {postbollywood.rtime} hours</h3>
                  <h3>Description: {postbollywood.Desc}</h3>
                  <h3>Rate Us: </h3>
                  <div className='star'>
                    <div style={styles.stars}>
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={24}
                            style={{
                              marginRight: 10,
                              cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.white}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <center>
        <form>
          <div>
            <textarea style={styles.textarea}
              
              name="feedback"
              className="inputbox"
              rows="0"
              cols="90"
              placeholder='Comment'
              onChange={(e) => setfeedback( e.target.value )} required
            />

          </div>

          <span className="seperator"></span>
          <center><input className="btn btn-success" type="button" onClick={apisubmitfeedback} value="Submit" /></center>
        </form>
      </center>
    </>
  )
}
