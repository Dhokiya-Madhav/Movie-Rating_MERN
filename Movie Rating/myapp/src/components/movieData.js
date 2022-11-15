import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './movieDataStyle.css'

import { useLocation } from 'react-router-dom';

export default function MovieData() {

  const location = useLocation();

  const [searchh, setsearch] = useState([])

  const [bollywood, setbollywood] = useState([])

  const [hollywood, sethollywood] = useState([])

  const [southindian, setsouthindian] = useState([])

  const [webseries, setwebseries] = useState([])
  useEffect(() => {

    fetch("http://localhost:5000/Bollywood").then((response) => response.json())
      .then((data) => {
        setbollywood(data)
        console.log(data);
        console.log("amish");

        if (data.error === "No records found!") {

        }
      }
      );
    fetch("http://localhost:5000/Hollywood").then((response) => response.json())
      .then((hollywooddata) => {

        sethollywood(hollywooddata)
        console.log("amish");
        console.log(hollywooddata);
        console.log(hollywood);
        if (hollywooddata.error === "No records found!") {

        }
      }
      );
    fetch("http://localhost:5000/SouthIndian").then((response) => response.json())
      .then((southindiandata) => {
        setsouthindian(southindiandata)
        console.log("amish");
        console.log(southindian);
        if (southindiandata.error === "No records found!") {

        }
      }
      );
    fetch("http://localhost:5000/WebSeries").then((response) => response.json())
      .then((webseriesdata) => {
        setwebseries(webseriesdata)
        console.log("amish");
        console.log(webseries);
        if (webseries.error === "No records found!") {

        }
      }
      );

  }, []);
  const apigetBollywood = () => {
    fetch("http://localhost:5000/Bollywood").then((response) => response.json())
      .then((bollywooddata) => {
        setbollywood(bollywooddata)
        console.log(bollywooddata);
        console.log(bollywood);
        if (bollywooddata.error === "No records found!") {

        }
      }
      );

  }
  const apigetHollywood = () => {
    fetch("http://localhost:5000/Hollywood").then((response) => response.json())
      .then((hollywooddata) => {

        sethollywood(hollywooddata)
        console.log("amish");
        console.log(hollywooddata);
        console.log(hollywood);
        if (hollywooddata.error === "No records found!") {

        }
      }
      );

  }
  // const searchb = () => {
  //   fetch("http://localhost:5000/searchmovie/"+location.state.search).then((response)=>response.json())
  //               .then((data)=>{
  //                 setsearch(data);
  //               console.log(data);
  //               if(data.error==="No records found!"){
  //                   alert("No records found!");
  //               }    
  //           }
  //           );
  // }
  const apigetSouthIndian = () => {
    fetch("http://localhost:5000/SouthIndian").then((response) => response.json())
      .then((southindiandata) => {
        setsouthindian(southindiandata)
        console.log("amish");
        console.log(southindian);
        if (southindiandata.error === "No records found!") {

        }
      }
      );

  }
  const apigetWebSeries = () => {
    fetch("http://localhost:5000/WebSeries").then((response) => response.json())
      .then((webseriesdata) => {
        setwebseries(webseriesdata)
        console.log("amish");
        console.log(webseries);
        if (webseries.error === "No records found!") {

        }
      }
      );

  }
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <center><h2>Bollywood</h2></center>
      {/* Bollywood*/}

      <div className="container-fluid">
        <div className="row flex-row flex-nowrap">
            {bollywood.map(postbollywood => (
              <div className="col-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                  <div className="col">
                    <div className="card h-100 border border-warning" style={{ width: 300 }}>
                      <img src={postbollywood.Image} className="card-img-top" alt="..." />
                      <div className="card-body bg-dark">
                        <h5 className="card-title text-danger">{postbollywood.Name}</h5>
                        <h5 className="card-title text-danger"><Link to="/viewmore" state={{id:postbollywood._id}}>View More</Link></h5>
                      </div>
                      <div className='card-footer bg-warning text-dark'>
                        IMDB: {postbollywood.imdb}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}          
        </div>
      </div>
      {/*-------------------------------------------------------------------------------- */}
      <hr></hr>
      <br></br>
      <center><h2>Hollywood</h2></center>
      {/* Hollywood*/}

      <div className="container-fluid">
        <div className="row flex-row flex-nowrap">
          {hollywood.map(postbollywood => (
            <div className="col-3">
              <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col">
                  <div className="card h-100 border border-warning" style={{ width: 300 }}>
                    <img src={postbollywood.Image} className="card-img-top" alt="..." />
                    <div className="card-body bg-dark">
                      <h5 className="card-title text-danger">{postbollywood.Name}</h5>
                    </div>
                    <div className='card-footer bg-warning text-dark'>
                      IMDB: {postbollywood.imdb}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/*-------------------------------------------------------------------------------- */}
      <hr></hr>
      <br></br>
      <center><h2>South Indian</h2></center>
      {/* South*/}

      <div className="container-fluid">
        <div className="row flex-row flex-nowrap">
          {southindian.map(postbollywood => (
            <div className="col-3">
              <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col">
                  <div className="card h-100 border border-warning" style={{ width: 300 }}>
                    <img src={postbollywood.Image} className="card-img-top" alt="..." />
                    <div className="card-body bg-dark">
                      <h5 className="card-title text-danger">{postbollywood.Name}</h5>
                    </div>
                    <div className='card-footer bg-warning text-dark'>
                      IMDB: {postbollywood.imdb}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/*-------------------------------------------------------------------------------- */}
      <hr></hr>
      <br></br>
      <center><h2>Web Series</h2></center>
      {/* Web Series*/}

      <div className="container-fluid">
        <div className="row flex-row flex-nowrap">
          {webseries.map(postbollywood => (
            <div className="col-3">
              <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col">
                  <div className="card h-100 border border-warning" style={{ width: 300 }}>
                    <img src={postbollywood.Image} className="card-img-top" alt="..." />
                    <div className="card-body bg-dark">
                      <h5 className="card-title text-danger">{postbollywood.Name}</h5>
                    </div>
                    <div className='card-footer bg-warning text-dark'>
                      IMDB: {postbollywood.imdb}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}