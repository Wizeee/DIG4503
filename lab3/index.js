const Express = require('express');
const App = Express();
const Port = 8080;


App.use("/public", Express.static('public'));


App.get('/', function(req,res) {
    res.send('Hello World!');
});

/*listen(port, () => { */
App.listen(Port, function() {
    console.log('server running');
});