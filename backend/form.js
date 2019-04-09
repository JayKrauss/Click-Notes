const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our database's form structure 
const formSchema = new Schema(
  {
    id: Number,
    candidateName: String,
    candidateSchool: String,
    candidateProgram: String,
    candidateScore: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", formSchema);