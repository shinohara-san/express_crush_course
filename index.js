const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const members = require("./Members");
// const logger = require("./middleware/logger");

const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//Init Middleware
// app.use(logger);

//Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//body parser middleware
//POSTで送信したやつを取得するのでmiddlewareでbodyをparseする
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //form submittion

//Homepage Route
app.get("/", (req, res) => res.render("index", {
  title: "Member App",
  members
})); //index.handlebars、そっちで{{title}}のように受け取る

//Set static folder
app.use(express.static(path.join(__dirname, "public")));
//普通はこれとHomepage routeは同時に使わない。こちらを表示するにはHomepage Routeより上に記述する。

//Members API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT,
  () => console.log(`Server running on port ${PORT}`)
);