const express = require("express");
const router = express.Router();
const Form = require("../Models/ValoAcad");

router.use(express.json());

router.post("/", async (req, res) => {
    const { name, age, email, agent } = req.body;
    //console.log("Received Data: ", { name, age, email, talent });
try {
    const formEntry = new Form({ name, age, email, agent });
    const savedEntry = await formEntry.save(); // save to MongoDB
    console.log("Saved Data: ", savedEntry);
    res.status(201).json({ message: "Form Submitted Successfully", data: savedEntry });
} catch (error) {
    console.error("Error saving from data:", error);
    if (error.code === 11000) {
        res.status(400).json({ message: "Email already exists!" });
        } else {
            res.status(500).json({ message: "Error Saving form data." });
    }
   }  
 });

 module.exports = router;