import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <ul className={styles.left}>
                    <li className={styles.pages}><Link href="/"><a className={styles.links}>HOME</a></Link></li>
                    <li className={styles.pages}><Link href="/jobs"><a className={styles.links}>JOBS</a></Link></li>
                    <li className={styles.pages}><Link href="/employers"><a className={styles.links}>EMPLOYERS</a></Link></li>
                    <li className={styles.pages}><Link href="/candidates"><a className={styles.links}>CANDIDATES</a></Link></li>
                    <li className={styles.pages}><Link href="/contact"><a className={styles.links}>CONTACT</a></Link></li>
                    <li className={styles.pages}><Link href="/faq"><a className={styles.links}>FAQ</a></Link></li>
                </ul>
                <ul className={styles.right}>
                    <li className={`${styles.pages} ${styles.right}`}><Link href="/login"><a className={styles.login}>Login/Register</a></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar