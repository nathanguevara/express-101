const express = require("express");
const app = express();
const peopleRouter = require("./routers/people")
PORT = 8000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", peopleRouter);

app.listen(PORT, () => console.log(`I am listening on port ${PORT}`));
