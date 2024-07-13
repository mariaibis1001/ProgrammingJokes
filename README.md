#Programming Jokes Web App
This web application fetches programming jokes from a public API (https://sv443.net/jokeapi/v2/) and displays them on the webpage. Users can click a button to fetch a new joke dynamically.

#Technologies Used
Node.js: Backend server environment.
Express.js: Web framework for Node.js.
Axios: HTTP client for making requests to external APIs.
EJS: Templating engine for generating HTML with JavaScript.
Bootstrap: Frontend framework for styling.

#Files and Structure
index.js
This file sets up the Express server and defines routes to render the main page (index.ejs) and fetch jokes from an external API.

index.ejs
This EJS template file generates the HTML structure for the main page:

Displays a header with a title and a joke fetched from the API.
Provides a button to fetch a new joke dynamically using a form submission.
footer.ejs
This EJS partial file includes the footer section:

Displays a footer with copyright information dynamically updated to the current year.

#Getting Started
To run the application locally:

-Clone this repository to your local machine.
git clone <repository-url>

-Install dependencies using npm.
npm install

-Start the server.
nodemon index.js

Open your web browser and go to http://localhost:3000 to view the application.
