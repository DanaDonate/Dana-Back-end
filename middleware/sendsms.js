// const accountSid = process.env.Twilio_Account_SID;
// const authToken = process.env.Twilio_Auth_Token;
const twilio = require("twilio");
const client = twilio(
  process.env.Twilio_Account_SID,
  process.env.Twilio_Auth_Token,
);

// console.log("Twilio");

const sendMessageFun = async (phone, body) => {
  const To_Phone = `+91${phone}`;
  const msgOptions = {
    from: process.env.Twilio_Phone_Number,
    to: To_Phone,
    body: body,
  };
  console.log(msgOptions);
  await client.messages.create(msgOptions);
};

module.exports = sendMessageFun;
