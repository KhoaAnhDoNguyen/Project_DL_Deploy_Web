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

    /*Handle Choose Language */
    const [selectedLanguage, setSelectedLanguage] = useState("English");

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
    const [sentence, setSentence] = useState("Hello! How can I help you.");
    const [wordsArray, setWordsArray] = useState([]);
    var chat = "";
    if (sentence === 'Positive')
    {
        if (selectedLanguage === 'English')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "The text does not contain any offensive words and is highly complimentary, so the sentence's label is Positive.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "I realized that the text contains many words praising someone, so in my opinion the label of the text should be Positive.";
              setSentence(chat)
          }
          else
          {
              chat = "In my opinion, the label of the sentence is Positive because the text shows the writer's satisfaction.";
              setSentence(chat)
          }
        }
        else if (selectedLanguage === 'Tiếng Việt')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "Tôi nhận thấy câu text có chứa nhiều từ khen ngợi 1 ai đó nên theo tôi nhãn của câu text nên là Tích Cực.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "Đoạn text không có bất kì từ ngữ phản cảm nào và mang tính khen ngợi rất cao nên nhãn của câu là Tích Cực.";
              setSentence(chat)
          }
          else
          {
              chat = "Theo tôi, nhãn của câu là Tích Cực vì đoạn text thể hiện sự hài lòng của người viết.";
              setSentence(chat)
          }
        }
        else
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
            chat = "テキストには誰かを褒めする言葉が多く含まれていることに気づきました。そのため、テキストのラベルはポジティブだと思います。";
            setSentence(chat)
          }
          else if (randomNumber === 2)
          {
            chat = "テキストには不快な言葉が含まれません。それに、非常に褒め言葉である、文のラベルはポジティブです。";
            setSentence(chat)
          }
          else
          {
            chat = "私の意見では、文のラベルはポジティブだと思う、文がユーザーの満足感を示しているためです。";
            setSentence(chat)
          }
        }
    }

    if (sentence === 'Negative')
    {
        if (selectedLanguage === 'English')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "The text does not contain any offensive words and is highly complimentary, so the sentence's label is Positive.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "I realized that the text contains many words praising someone, so in my opinion the label of the text should be Positive.";
              setSentence(chat)
          }
          else
          {
              chat = "In my opinion, the label of the sentence is Positive because the text shows the writer's satisfaction.";
              setSentence(chat)
          }
        }
        else if (selectedLanguage === 'Tiếng Việt')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "Tôi nhận thấy câu text có chứa nhiều từ khen ngợi 1 ai đó nên theo tôi nhãn của câu text nên là Tích Cực.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "Đoạn text không có bất kì từ ngữ phản cảm nào và mang tính khen ngợi rất cao nên nhãn của câu là Tích Cực.";
              setSentence(chat)
          }
          else
          {
              chat = "Theo tôi, nhãn của câu là Tích Cực vì đoạn text thể hiện sự hài lòng của người viết.";
              setSentence(chat)
          }
        }
        else
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
            chat = "テキストには誰かを褒めする言葉が多く含まれていることに気づきました。そのため、テキストのラベルはポジティブだと思います。";
            setSentence(chat)
          }
          else if (randomNumber === 2)
          {
            chat = "テキストには不快な言葉が含まれません。それに、非常に褒め言葉である、文のラベルはポジティブです。";
            setSentence(chat)
          }
          else
          {
            chat = "私の意見では、文のラベルはポジティブだと思う、文がユーザーの満足感を示しているためです。";
            setSentence(chat)
          }
        }
    }

    if (sentence === 'Neutral')
    {
        if (selectedLanguage === 'English')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "The text does not contain any offensive words and is highly complimentary, so the sentence's label is Positive.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "I realized that the text contains many words praising someone, so in my opinion the label of the text should be Positive.";
              setSentence(chat)
          }
          else
          {
              chat = "In my opinion, the label of the sentence is Positive because the text shows the writer's satisfaction.";
              setSentence(chat)
          }
        }
        else if (selectedLanguage === 'Tiếng Việt')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "Tôi nhận thấy câu text có chứa nhiều từ khen ngợi 1 ai đó nên theo tôi nhãn của câu text nên là Tích Cực.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "Đoạn text không có bất kì từ ngữ phản cảm nào và mang tính khen ngợi rất cao nên nhãn của câu là Tích Cực.";
              setSentence(chat)
          }
          else
          {
              chat = "Theo tôi, nhãn của câu là Tích Cực vì đoạn text thể hiện sự hài lòng của người viết.";
              setSentence(chat)
          }
        }
        else
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
            chat = "テキストには誰かを褒めする言葉が多く含まれていることに気づきました。そのため、テキストのラベルはポジティブだと思います。";
            setSentence(chat)
          }
          else if (randomNumber === 2)
          {
            chat = "テキストには不快な言葉が含まれません。それに、非常に褒め言葉である、文のラベルはポジティブです。";
            setSentence(chat)
          }
          else
          {
            chat = "私の意見では、文のラベルはポジティブだと思う、文がユーザーの満足感を示しているためです。";
            setSentence(chat)
          }
        }
    }

    useEffect(() => {
      if (selectedLanguage === '日本語') {
          setWordsArray(sentence.split(/(?=[\s\S])/u));
      } else if (selectedLanguage === 'English' || selectedLanguage === 'Tiếng Việt') {
          setWordsArray(sentence.split(" "));
      }
  }, [selectedLanguage, sentence]);
  

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
            setSentence(data.results);
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
            <img src={bot} alt="image4" className="img-fluid mr-3" style={{ marginLeft: '270px' }} />
            <p 
                style={{ 
                marginLeft: '10px', 
                marginTop: '22px', 
                fontWeight: 'bold', 
                color: 'red' 
            }}   
            >
            {selectedLanguage === '日本語' ? 
                wordsArray.slice(0, currentIndex + 1).join("") :
                wordsArray.slice(0, currentIndex + 1).join(" ")}
            </p>
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
      </div>
    )
  }
  
  export default Model