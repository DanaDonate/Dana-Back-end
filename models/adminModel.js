const { default: mongoose } = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    admin_id: {
      type: String,
    },
  },
  { timestamps: true },
);

const adminModel = new mongoose.model("admin", adminSchema);

module.exports = adminModel;
