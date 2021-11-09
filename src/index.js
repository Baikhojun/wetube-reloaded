import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`http://localhhost:${PORT}`);


app.listen(PORT,handleListening);