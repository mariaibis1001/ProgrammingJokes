import express from "express"; //Import Express framework
import axios from "axios"; //Import Axios for making HTTP requests

const app = express(); //Create Express application instance
const port = 3000; //Define the port number

//Serve static files from the public directory
app.use(express.static("public"));

//Route for the homepage
app.get("/", async (req, res) => {
        res.render("index.ejs", {joke: "..."}); //Render index.ejs with a placeholder joke
});

//Route to fetch a programming joke from public API
app.get("/joke", async (req, res) => {
    try {
        //Loop until we get a response that has a "joke" attribute
        let result;
        do {
            //Make an HTTP GET request to the joke API
              result = await axios.get("https://v2.jokeapi.dev/joke/Programming");
          } while (typeof result.data.joke == "undefined");

        res.render("index.ejs", {joke: result.data.joke}); //render index.ejs with fetched joke
    }
    //Handle any errors
    catch(error) {
        console.error("Error with the api request.");
    }
});

//Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});