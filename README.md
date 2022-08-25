# ContactForm With Recaptcha
 Simple Contact from using Google Recaptcha V2

This example combines tutorials for using Nodemailer (Gmail) and Google Captcha with React. The tutorials can be found here:

* Nodemailer: https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m
* Recaptcha: https://blog.logrocket.com/implement-recaptcha-react-application/

To use you will have to get the necessary keys and secrets for the APIs and store these along with your gmail-account login in your ```.env-file```. The constants for this are:

* EMAIL = <Your Email>
* WORD = <Your Password>
* OAUTH_CLIENTID = <Your Gmail Client ID>
* OAUTH_CLIENT_SECRET = < Your Gmail Client Secret>
* OAUTH_REFRESH_TOKEN = <Your Gmail Refresh Token>
* REACT_APP_SECRET_KEY = <Recaptcha security key>
* REACT_APP_SITE_KEY = <Recaptcha site key>
* REACT_APP_API_URL = <URL of local host with port number and '/post' appended>
* SERVER_PORT = <Pprt Number you are using>

With all that in place you can call ```npm start``` on both the root folder and the "nodemailer-form"-folder.
