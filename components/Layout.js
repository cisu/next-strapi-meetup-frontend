import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.scss'

const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>

            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps ={
    title: 'Meetups | Find the event that are you interested in',
    description: 'Find the latest meetups in your area',
    keywords: 'science, technology, programming, health, fitness'
}

export default Layout
