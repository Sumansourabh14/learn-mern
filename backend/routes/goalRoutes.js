const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Get request sent" });
});

router.post("/", (req, res) => {
    res.json({ message: "Post request sent" });
});

router.put("/:id", (req, res) => {
    res.json({ message: `Update goal no. ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
    res.json({ message: `Delete goal no. ${req.params.id}` });
});

module.exports = router;