const Person = require ("./Person.js");

class Bert extends Person {
    constructor(name ,favoriteColor){
        super(name, favoriteColor);
    }
}

module.exports = Bert;