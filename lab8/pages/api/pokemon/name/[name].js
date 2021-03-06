import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {
    let result  = {"error": "Could not find name."}; //variable and error output

    let pokemon = getPokemon.getPokemonByName(req.query.name); //variable

    if(pokemon !== null) { //loop
        result = pokemon;
    }

    res.json(result);
}