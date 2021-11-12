import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);
const handleTrending = (req, res) => res.send("Trending");
globalRouter.get("/trending", handleTrending);
const handleNew = (req, res) => res.send("New");
globalRouter.get("/new", handleNew);
const handleJoin = (req, res) => res.send("Join");
globalRouter.get("/join", handleJoin);
const handleLogin = (req, res) => res.send("Login");
globalRouter.get("/login", handleLogin);


const userRouter = express.Router();

const handleUser = (req, res) => res.send("Users");
userRouter.get("/", handleUser);
const handleUserEditProfile = (req, res) => res.send("Users Edit Profile");
userRouter.get("/edit-profile", handleUserEditProfile);
const handleUserID = (req, res) => res.send(`User ID : ${req.params.id}`);
userRouter.get("/:id", handleUserID);







const storyRouter  = express.Router();

const handleStoriesEdit = (req, res) => res.send("Storeies Edit");
const handleStoriesDelete = (req, res) => res.send("Storeies Delete");

storyRouter.get("/:id", handleUserID);
storyRouter.get("/:id/edit", handleStoriesEdit);
storyRouter.get("/:id/delete", handleStoriesDelete);



app.use("/", globalRouter);
app.use("/stories", storyRouter );
app.use("/users", userRouter);


const handleListening = () => console.log(`http://localhost:${PORT}`);

app.listen(PORT, handleListening);
