import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res, next) => {
  return res.send("i love to");
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

const logger = (req, res, next) => {
  console.log("I love middle !"+`${req.method}  ${req.url}`);
  next();  // 이게 Controller Middleware 가 될수있다, But 함수가 next를 호출하면 Middleware이다 .
};

const privateMiddleware = (req ,res, next ) => {
  const url = req.url;
  if(url === "/protected"){
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleProtected = ( req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(logger); // Global Middleware Create : 어떤 Url 에도 작동하는
app.use(privateMiddleware);
app.get("/",handleHome);
app.get("/protected", handleProtected);


app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);
const handleListening = () => console.log(`http://localhhost:${PORT}`);

app.listen(PORT, handleListening);
