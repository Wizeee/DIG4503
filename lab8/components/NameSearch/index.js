class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault();

        let element = document.querySelector("#pokeName"); //variable created

        fetch("/api/pokemon/name/" + element.value) //looping being created
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let report = document.querySelector("#reportingArea");

            if(processed.error) {
                report.innerHTML = processed.error;  //If issue, will output this
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
                <h2>Name</h2>
                <form onSubmit={this.readName}>//Input section for users
                    <input id="pokeName" type="text" placeholder="Enter Pokemon Name"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;