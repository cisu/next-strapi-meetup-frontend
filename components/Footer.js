import React from 'react'

import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; Meetups {new Date().getFullYear()}</p>
            <Link href='/about'>
                About this Project
            </Link>
        </footer>
    )
}

export default Footer
