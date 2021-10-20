import Head from 'next/head'
import styles from './layout.module.css';

export const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Sullivan Senior Service</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>{children}</div>
        </>
    )
}

export default Layout;