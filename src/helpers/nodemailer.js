const nodemailer = require('nodemailer');
const googleapis = require('googleapis');
require('dotenv').config();
const Oauth2 = googleapis.google.auth.OAuth2;

async function createTransporter() {

  const oauthClient = new Oauth2(
    process.env.G_ID_CLIENT,
    process.env.G_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );

  oauthClient.setCredentials({refresh_token: process.env.REFRESH_TOKEN});
  try {  
    const accesToken = await oauthClient.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER_EMAIL,
        accesToken,
        clientId: process.env.G_ID_CLIENT,
        clientSecret: process.env.G_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });
    return transporter;
  } catch (error) {
    console.error(error);
  }
};

const options = {
  subject: 'test email nodemailer',
  text: 'nice',
  to: 'gladys67v_k203o@bylup.com',
  from: process.env.USER_EMAIL
}

async function sendEmail(options) {
  const gmailTransporter = await createTransporter();
  await gmailTransporter.sendMail(options);
}

sendEmail(options);