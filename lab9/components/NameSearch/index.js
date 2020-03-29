import styles from '../styles/styles.css';

//Taken from lab 8
//Update was import styles page.

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
                report.innerHTML = processed.error; //If issue, will output this
            }
            else {
                report.innerHTML = processed.name; //If information is correct, will output this. Finalized.
            }
        });
    }

    render() {

      // HTML section

        return(
            <div className={styles.body}>
                <h2 className={styles.subheadings}>Search by Name</h2>
                <form onSubmit={this.readName}>
                    <input id="pokeName" className={styles.input} type="text" placeholder="Enter Pokemon Name"></input>
                    <button className={styles.submit_button}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NameSearch;
