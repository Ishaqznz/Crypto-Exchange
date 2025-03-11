const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  userIp: {
    type: String,
    required: false,
  },

  userLocation: {
    type: String,
    required: false,
  },

  isBlocked: {
    type: Boolean, 
    default: false,
    required: false,
  },

  wallet: [
    {
      type: Schema.Types.ObjectId, 
      ref: "Wallet",
    },
  ],

  referral: [
    {
      type: Schema.Types.ObjectId, 
      ref: "Referral",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
