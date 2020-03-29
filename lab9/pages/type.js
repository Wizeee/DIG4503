import TypeSearch from "../components/TypeSearch";

import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/styles.css';

class Type extends React.Component {
    constructor(props) {
        super(props);

        this.state = { "table": [] };
    }

    processTable = (processed) => {
        return(
            this.setState( {"table": processed} )
        )
    }

    createTable() {
        return(
          //html area
            <table className={styles.table}>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        this.state.table.map((entry, index) => {
                            return(
                                <tr key={index}>
                                    <td>{entry.id}</td>
                                    <td>{entry.name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }

    render() {
        return(

          //html area

            <div className={styles.body}>
                <Head>
                    <title>Search by type page!</title>
                </Head>
                <br />
                <Link href="/index">
                    <a className={styles.home_button}>Home</a>
                </Link>
                <br />
                <TypeSearch callback={this.processTable} />
                <br />
                <hr />
                <h2>Reporting</h2>
                <div>
                    {this.createTable()}
                </div>
            </div>
        );
    }
}


export default Type;
