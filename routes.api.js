
import express from "express";

const router = express.Router();

router.get("/status", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
    uptime: process.uptime()
  });
});

export default router;



import express from "express";

const router = express.Router();

router.get("/status", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
    uptime: process.uptime()
  });
});

export default router;


