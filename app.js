const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
require("./conn/conn");
const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);
console.log("Dir name:" +__dirname);
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});


const PORT = 1000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
