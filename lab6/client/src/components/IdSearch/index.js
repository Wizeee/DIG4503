import React from 'react';

class IdSearch extends React.Component {
    readID(event) {
        event.preventDefault(); // Stop (prevent) the 'default' form action

        let element = document.querySelector("#pokeID"); // Find the element with 'id="id"'

        fetch('http://localhost:80/id/' + element.value) // Parse the string into a JavaScript object and return it
        .then((res) => {
             return res.json();
        })
        .then((processed) => {
            let report = document.querySelector("#reportingArea"); // Find the element with 'id="reportingArea"'

            if(processed.error) {
                report.innerHTML = processed.error;
            }
            else {
                report.innerHTML = processed.name;
            }
        });
    }
    render() {
        return(
            <div>
                <h2>Pokemon ID Search</h2>     
                <form onSubmit={this.readID}>
                    <input id="pokeID" type="text" placeholder="Enter Pokemon ID"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;