import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
        res.render("index.ejs", {joke: "..."});
});

app.get("/joke", async (req, res) => {
    try {
        let result;
        do {
              result = await axios.get("https://v2.jokeapi.dev/joke/Programming");
          } while (typeof result.data.joke == "undefined");

        res.render("index.ejs", {joke: result.data.joke});
    }
    catch(error) {
        console.error("Error with the api request.");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});