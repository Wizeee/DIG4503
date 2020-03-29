// import getPokemon from 'json-pokemon/getPokemon';
import pokemon from 'json-pokemon';

export default (req, res) => {
    let result = [{"error": "Could not find Pokemon with that type."}];  //variable and error output

    //* FOR LOOP AREA *//
    //Assistance with creation of this
    //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration *//
    for(let i = 0; i < pokemon.length; i++) { //Delcaration of the variable
        for(let k = 0; k < pokemon[i].typeList.length; k++) { //Delcaration of the variable
            if(pokemon[i].typeList[k] == req.query.type) {
                result.push(pokemon[i]); //final output
            }
        }
    }



    res.json(result);
}
