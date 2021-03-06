import React from 'react'
import Link from 'next/link'
import Search from './Search';
import styles from '@/styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>Meetups</a>
                </Link>
            </div>

            <Search />

            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/events/add'>
                            <a>Add Post</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header

