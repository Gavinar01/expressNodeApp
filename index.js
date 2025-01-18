const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require(`http`);
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

// MongoDB connection
mongoose
    .connect("mongodb+srv://arawgabby24:XgamHYDWkbUjEBzq@cluster0.bg1lo.mongodb.net/")
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    });

// Root route
app.get('/', (req, res) => {
    res.send("Server is running");
});

// Import API routes
const submitValoAcad = require('./API/submit');

// Use API routes
app.use('/submit', submitValoAcad);

//Local server
/*const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/

// Start the server Azure
const PORT = process.env.PORT || 5000; // Environment variable for PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});