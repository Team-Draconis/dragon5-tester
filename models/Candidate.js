const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  candidate_name: {
    type: String,
    required: [true, "Name is required"],
  },
  candidate_city: {
    type: [String],
    required: [true, "City is required"],
  },
  candidate_email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  candidate_password: {
    type: String,
    required: [true, "Password is required"],
  },
  quiz_tests: [
    { quiz_detail: String, quiz_score: Number, quiz_submitted_at: Date },
  ],

  coding_tests: {
    easy: [
      {
        coding_test_codes: String,
        coding_test_result: String,
        coding_test_submitted_at: { type: Date, default: Date.now },
      },
    ],
    medium: [
      {
        coding_test_codes: String,
        coding_test_result: String,
        coding_test_submitted_at: { type: Date, default: Date.now },
      },
    ],
    hard: [
      {
        coding_test_codes: String,
        coding_test_result: String,
        coding_test_submitted_at: { type: Date, default: Date.now },
      },
    ],
  },
});

module.exports =
  mongoose.models.Candidate || mongoose.model("Candidate", CandidateSchema);
