const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");

// 🟢 Get Portfolio (Read)
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 Add Skill (Create)
router.post("/skills", async (req, res) => {
  try {
    const { skill } = req.body;
    const portfolio = await Portfolio.findOne();
    portfolio.skills.push(skill);
    await portfolio.save();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 Delete Skill
router.delete("/skills/:skill", async (req, res) => {
  try {
    const { skill } = req.params;
    const portfolio = await Portfolio.findOne();
    portfolio.skills = portfolio.skills.filter((s) => s !== skill);
    await portfolio.save();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 Add Project
router.post("/projects", async (req, res) => {
  try {
    const project = req.body;
    const portfolio = await Portfolio.findOne();
    portfolio.projects.push(project);
    await portfolio.save();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 Delete Project
router.delete("/projects/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const portfolio = await Portfolio.findOne();
    portfolio.projects = portfolio.projects.filter((p) => p.title !== title);
    await portfolio.save();
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
