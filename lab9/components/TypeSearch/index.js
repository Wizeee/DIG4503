import styles from '../styles/styles.css';

// newest page creation
//function was taken from prevous project

class TypeSearch extends React.Component { //function being created
    readType = () => {
        let element = document.querySelector("#pokeType");

        fetch("/api/pokemon/type/" + element.value) //looping section
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            this.props.callback(processed); //finalizing loop.
        });
    }

    render() {
        return(

          //html section
            <div className={styles.body}>
                <h2 className={styles.subheadings}>Search by Type</h2>
                <form onSubmit={this.readType}>
                    <input id="pokeType" className={styles.input} type="text" placeholder="Enter Pokemon Type"></input>
                    <button className={styles.submit_button}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TypeSearch;
