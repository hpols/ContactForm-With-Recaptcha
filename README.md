# ContactForm With Recaptcha
 Simple Contact from using Google Recaptcha V2

This example combines tutorials for using Nodemailer (Gmail) and Google Captcha with React. The tutorials can be found here:

* Nodemailer: https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m
* Recaptcha: https://blog.logrocket.com/implement-recaptcha-react-application/

To use you will have to get the necessary keys and secrets for the APIs and store these along with your gmail-account login in your ```.env-file```. The constants for this are:

* EMAIL = _Your Email_
* WORD = _Your Password_
* OAUTH_CLIENTID = _Your Gmail Client ID_
* OAUTH_CLIENT_SECRET = _Your Gmail Client Secret_
* OAUTH_REFRESH_TOKEN = _Your Gmail Refresh Token_
* REACT_APP_SECRET_KEY = _Recaptcha security key_
* REACT_APP_SITE_KEY = _Recaptcha site key_
* REACT_APP_API_URL = _URL of local host with port number and '/post' appended_
* SERVER_PORT = _Port Number you are using_

With all that in place you can call ```npm install``` on both the root folder and the "nodemailer-form"-folder. After that you can ```npm start``` both.
