import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("main");
};

const handleAbout = (req, res) => {
  return res.send("handleAbout");
};

const handleContact = (req, res) => {
  return res.send("handleContact");
};

const handleLogin = (req, res) => {
  return res.send("handleLogin");
};
app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () => console.log(`http://localhhost:${PORT}`);

app.listen(PORT, handleListening);
