class IdSearch extends React.Component {
    readID(event) {
        event.preventDefault();

        let element = document.querySelector("#pokeID"); //variable created
		//looping being created
        fetch("/api/pokemon/id/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let report = document.querySelector("#reportingArea");

            if(processed.error) {
                report.innerHTML = processed.error; //If issue, will output this
            }
            else {
                report.innerHTML = processed.name; //If information is correct, will output this. Finalized. 
            }
        });
    }

    render() {
        return(
			// HTML section
            <div>
                <h2>ID</h2>
                <form onSubmit={this.readID}>//Input section for users
                    <input id="pokeID" type="text" placeholder="Enter Pokemon ID"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;