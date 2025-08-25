const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  bio: {
    name: String,
    title: String,
    github: String,
    linkedin: String,
    twitter: String,
  },
  skills: [String],
  certifications: [
    {
      title: String,
      organization: String,
      icon: String, // e.g., "oracle", "laptop", "guvi"
      link: String, // PDF or external link
    },
  ],
  projects: [
    {
      title: String,
      category: String,
      description: String,
      tech: [String],
      link: String,
    },
  ],
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
