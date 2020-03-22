import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {
    let result = {"error": "Could not find id."}; //output for error

    const id = parseInt(req.query.id); //variable

    let pokemon = getPokemon.getPokemonById(id); //variable

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);
}