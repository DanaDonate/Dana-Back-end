const donateModel = require("../models/donateModel");
const helpModel = require("../models/helpModel");

module.exports.add_Donate = async (req, res) => {
  try {
    const user = new donateModel({
      name: req.body.name,
      phone: req.body.phone,
      amount: req.body.amount,
    });
    await user.save();
    return res.send({
      successful: true,
    });
  } catch (err) {
    // console.log(err);
    return res.send({
      successful: false,
    });
  }
};

module.exports.help_message = async (req, res) => {
  // console.log("Data = ",req.body);
  try {
    const help_sms = new helpModel({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await help_sms.save();
    return res.send({
      successful: true,
    });
  } catch (err) {
    console.log(err);
    return res.send({
      successful: false,
    });
  }
};
