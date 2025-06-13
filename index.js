import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({extended:true}));

// Routes

// Start Server
app.listen(port,()=>{console.log(`Server started on port: ${port}`);})