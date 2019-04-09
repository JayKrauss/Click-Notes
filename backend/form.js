// /backend/Form.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our form base's form structure 
const formSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Form", FormSchema);