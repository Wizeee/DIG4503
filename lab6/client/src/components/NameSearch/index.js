import React from 'react';

class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault(); // Stop (prevent) the 'default' form action

        let element = document.querySelector("#pokeName");

        fetch('http://localhost:80/name/' + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let report = document.querySelector("#reportingArea");

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
                <h2>Pokemon ID search</h2>     
                <form onSubmit={this.readName}>
                    <input id="pokeName" type="text" placeholder="Enter Pokemon name"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;