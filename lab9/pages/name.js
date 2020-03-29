import NameSearch from '../components/NameSearch';

import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/styles.css';

const Name = () => {
    return(
        <div className={styles.body}>
            <Head>
                <title>Search by name page!</title>
            </Head>
            <div>
            <br />
            <Link href="/index">
                <a className={styles.home_button}>Home</a>
            </Link>
            <br />
            <NameSearch />
            <br />
            <hr />
            <h2>Reporting</h2>
            <div id="reportingArea"></div>
            </div>
        </div>
    );
}

export default Name;
