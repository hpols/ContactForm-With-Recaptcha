//For Nodemailer See: https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m
//For Recapcha See: https://blog.logrocketnpm install --save react-google-recaptcha.com/implement-recaptcha-react-application/

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import './App.css';

const App = () => {

  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const captchaRef = useRef(null);
  
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();

    //handling captcha
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    let response = "";
 
    await axios.post("http://localhost:3001/post", {token})
    .then(res => 
      console.log("axios post in Kontakt: ",res),
      console.log({ mailerState }), //handling mail 
      
      response = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ mailerState }),
      })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      }),
    )
    .catch((error) => {
        console.log(error);
    })
   
  };

  return (
    <div className="App">
     <form
       style={{
         display: "flex",
         height: "100vh",
         justifyContent: "center",
         alignItems: "center",
       }}
       onSubmit={submitEmail}
        >
       <fieldset
         style={{
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           width: "50%",
         }}
       >
         <legend>React NodeMailer Contact Form</legend>
         <input
           placeholder="Name"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
         />
         <input
           placeholder="Email"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
         />
         <textarea
           style={{ minHeight: "200px" }}
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
         />
          <ReCAPTCHA
            sitekey={"6Ld5-eggAAAAAHk2RTvyTSE9lC9Du5YVX9j-cDLp"}
            ref={captchaRef}
            />
         <button>Send Message</button>
       </fieldset>
     </form>
   </div>
  );
}

export default App;