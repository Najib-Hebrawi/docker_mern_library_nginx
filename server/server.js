require("dotenv").config();
const express = require("express");


const app =express();
app.use(express.json());


const PORT= process.env.PORT || 8000




app.get('/test', (req, res, ) =>{
    res.json({
        HI: "Welcome to the MERN Library API",
    });
} );


app.listen(PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));