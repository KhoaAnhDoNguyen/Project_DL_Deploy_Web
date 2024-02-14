import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import axios from 'axios'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dropdown } from "react-bootstrap";
import { User } from 'react-feather';
import { Button } from 'react-bootstrap';


import img1 from './assets/feedback-1.jpg'
import img2 from './assets/feedback-2.jpg'
import img3 from './assets/feedback-3.jpg'
import img4 from './assets/feedback-4.jpg'
import bot  from './assets/bot.jpg'  
function Model() {
    /*const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch data from Flask API when the component mounts
        axios.get('http://localhost:5000/results')
            .then(response => {
                // Update the state with the members data
                setResults(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching results:', error);
            });
    }, []); // Empty dependency array ensures the effect runs once when the component mounts*/

    /*Handle Choose Language */
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    console.log(selectedLanguage)

    /*Handle Choose Logout */
    const [showLogout, setShowLogout] = useState(false);

    
    /*Animation for Model Pic */
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    /*Handle Choose Logout and turn to default page */
    const handleLogOut = () => {
        // Chuyển hướng sang trang đăng nhập
        window.location.href = '/';
      };

    /*Handle display bot sentence */
    const [currentIndex, setCurrentIndex] = useState(0);
    const sentence = "Hello! How can I help you.";
    const wordsArray = sentence.split(" ");

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex < wordsArray.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [wordsArray.length]);

    /*Handle user feedback input */
    const [feedback, setFeedback] = useState('');

    const handleInput = (event) => {
      event.preventDefault();
      const inputValue = event.target.value;
      setFeedback(inputValue);
  };

    /*Handle predict */
    const [predictionResult, setPredictionResult] = useState('');
    const handlePredict = () => {
      console.log(feedback.length); 
      if (feedback.length > 0)
      {
        fetch('http://localhost:5000/results', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ sentence: feedback })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.results); // Hiển thị kết quả từ Flask backend
            setPredictionResult(data.results);
        })
        .catch(error => {
            console.error('Error:', error);
        });
      }
  };


    return (
    <div style={{backgroundColor: "#f0f3f4"}}>
      <div className="container">
          <div className="row">

              <div class="col-2 mt-4">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Choose Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedLanguage("English")}
                  style={{ backgroundColor: selectedLanguage === "English" ? "blue" : "white", color: selectedLanguage === "English" ? "white" : "black" }}
                  >
                  English</Dropdown.Item>

                  <Dropdown.Item onClick={() => setSelectedLanguage("日本語")}
                  style={{ backgroundColor: selectedLanguage === "日本語" ? "blue" : "white", color: selectedLanguage === "日本語" ? "white" : "black" }}
                  >日本語</Dropdown.Item>

                  <Dropdown.Item onClick={() => setSelectedLanguage("Tiếng Việt")}
                  style={{ backgroundColor: selectedLanguage === "Tiếng Việt" ? "blue" : "white", color: selectedLanguage === "Tiếng Việt" ? "white" : "black" }}
                  >Tiếng Việt</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>

              <div class="col-9">
              <Slider {...settings}>
                  <div className="text-center d-flex justify-content-center align-items-center">
                      <img src={img1} alt="image1" className="img-fluid"/>
                  </div>
                  <div className="text-center d-flex justify-content-center align-items-center">
                      <img src={img2} alt="image2" className="img-fluid "/>
                  </div>
                  <div className="text-center d-flex justify-content-center align-items-center">
                      <img src={img3} alt="image3" className="img-fluid"/>
                  </div>
                  <div className="text-center d-flex justify-content-center align-items-center">
                      <img src={img4} alt="image4" className="img-fluid"/>
                  </div>
              </Slider>
              </div>

              <div class="col-1 mt-4">
                  <div onClick={() => setShowLogout(!showLogout)} style={{ cursor: 'pointer' , width: '50px', height: '50px'}}>
                        <User />
                  </div>
                  {showLogout && (
                      <Button variant="danger" className="ml-2 mt-n3" onClick={handleLogOut}>
                          Log Out
                      </Button>)}
              </div>
          </div>
          
          <div className='d-flex justify-content-center align-items-center'>
                <div className="input-group mb-3" style={{ maxWidth: '700px' }}>
                        <input type="text" className="form-control" placeholder="Write your feedback"  onChange={handleInput}
                        aria-label="Input your feedback" aria-describedby="basic-addon2" />
                </div>   
          </div>
          <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary" type="button" onClick={handlePredict}>Predict</button>
        </div>          

        <div className="d-flex align-items-center">
            <img src={bot} alt="image4" className="img-fluid mr-3" style={{ marginLeft: '400px' }} />
            <p 
                style={{ 
                marginLeft: '10px', 
                marginTop: '22px', 
                fontWeight: 'bold', 
                color: 'red' 
            }}   
            >
            {wordsArray.slice(0, currentIndex + 1).join(" ")}
            </p>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      </div>
    )
  }
  
  export default Model