const donateModel = require("../models/donateModel");
const helpModel = require("../models/helpModel");
const adminModel = require("../models/adminModel");

module.exports.show_all_payments = async (req, res) => {
  try {
    const admin_details = await adminModel.findOne({
      admin_id: "danaAdmin2023",
    });
    const donateUsers = await donateModel.find().sort({ createdAt: -1 });
    return res.render("admin", {
      users: donateUsers,
      totalAmount: admin_details.amount,
    });
  } catch (err) {
    res.send({
      status: 404,
      message: "Server Down",
    });
  }
};

// payment received
module.exports.payment_received = async (req, res) => {
  // console.log("payment Received",req.body);
  try {
    const donater = await donateModel.findByIdAndUpdate(
      { _id: req.body.id },
      {
        received: true,
        admin_view: true,
      },
    );

    // Add confirm payment received
    const admin_details = await adminModel.findOne({
      admin_id: "danaAdmin2023",
    });
    const ADD_AMOUNT = admin_details.amount + parseFloat(donater.amount);
    // console.log("total amount before save - ", ADD_AMOUNT);
    const ad_data = await adminModel.findByIdAndUpdate(admin_details._id, {
      amount: ADD_AMOUNT,
    });

    return res.send({
      status: true,
    });
  } catch (err) {
    res.send({
      status: 404,
      message: "Server Down",
    });
  }
};

// payment not received
module.exports.payment_not_received = async (req, res) => {
  // console.log("payment not Received");
  try {
    const donater = await donateModel.findByIdAndUpdate(
      { _id: req.body.id },
      {
        admin_view: true,
      },
    );
    // sendMessageFun(donater.phone,`Hello ${donater.name} , Your Donating amount have not Received. Please Check again. Contact : 8336870054`);
    return res.send({
      status: true,
    });
  } catch (err) {
    res.send({
      status: 404,
      message: "Server Down",
    });
  }
};

// delete any payment
module.exports.payment_delete = async (req, res) => {
  // console.log("world")
  try {
    const isPresent = await donateModel.findById({ _id: req.body.id });
    if (isPresent) {
      await donateModel.findByIdAndDelete({ _id: req.body.id });
      return res.send({
        status: true,
      });
    }
    return res.send({
      status: false,
    });
  } catch (err) {
    res.send({
      status: 404,
      message: "Server Down",
    });
  }
};

// show all help message
module.exports.show_all_help = async (req, res) => {
  try {
    let helpMessage = await helpModel.find().sort({ createdAt: -1 });
    return res.render("help-message", {
      helpMessage,
    });
  } catch (err) {
    return res.send({
      message: "Server Down",
    });
  }
};
