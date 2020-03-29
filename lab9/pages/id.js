import IdSearch from "../components/IdSearch";

import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/styles.css';

const ID = () => {
    return(
        <div className={styles.body}>
            <Head>
                <title>Search by ID page!</title>
            </Head>
            <br />
            <Link href="/index">
                <a className={styles.home_button}>Home</a>
            </Link>
            <br />
            <IdSearch />
            <br />
            <hr />
            <h2>Reporting</h2>
            <div id="reportingArea"></div>
        </div>
    );
}

export default ID;
