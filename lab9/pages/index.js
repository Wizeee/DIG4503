import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/styles.css';

const Home = () => {
    return(
        <div className={styles.body}>
            <Head>
                <title>This is the home page!</title>
            </Head>
            <h1>Welcome to Pokemon Search!</h1>
            <div className={styles.navigation}>
                <ul className={styles.menu_bar}>
                    <li>
                        <Link href="/name">
                            <a>Name</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/id">
                            <a>ID</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/type">
                            <a>Type</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;
