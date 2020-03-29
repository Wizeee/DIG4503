import styles from '../styles/styles.css';

  //Taken from lab 8
  //Update was import styles page.

class IdSearch extends React.Component {
    readID(event) {
        event.preventDefault();

        let element = document.querySelector("#pokeID"); //variable created

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
            <div className={styles.body}>
                <h2 className={styles.subheadings}>Search by ID</h2>
                <form onSubmit={this.readID}>
                    <input id="pokeID" className={styles.input} type="text" placeholder="Enter Pokemon ID"></input>
                    <button className={styles.submit_button}>Submit</button>
                </form>
            </div>
        );
    }
}

export default IdSearch;
