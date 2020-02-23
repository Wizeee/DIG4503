//declaration of variables and connection information.
const Express = require("express");
const App = Express();
const port = 80;

const chalk = require("chalk");

const pokemons = require("json-pokemon");
const pokeDex = pokemons;

const cors = require("cors"); //requested for lab6
App.use(cors());

App.use("/", Express.static("public"));

App.get("/id/:id", (request, response) => {
    let result = {"error" : "That Pokemon is currently not in our database, apologizes."};

    pokeDex.forEach((value) => {
        if(value.id == request.params.id) {
            // console.log(request.path);
            result = value;
        }
    });
		//used to color content
    if(result.error) {
        console.log(chalk.red(request.path));
    }		//used to color content
    else {
        console.log(chalk.green(req.path));
    }

    response.json(result);
});

App.get("/name/:name", (request, response) => {
    let result = {"error" : "That Pokemon is currently not in our database, apologizes."};

    pokeDex.forEach((value) => {
        if(value.name.toLowerCase() == req.params.name) {
            // console.log(req.path);
            result = value;
        }
    });
		//used to color content
    if(result.error) {
        console.log(chalk.red(request.path));
    }
    else { //used to color content
        console.log(chalk.green(request.path));
    }

    response.json(result);
});

App.listen(port, function(){
    console.log("Server running!");
});