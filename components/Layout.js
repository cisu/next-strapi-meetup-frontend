import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '@/styles/Layout.module.scss'

const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>

            <Header />

            <div className={styles.container}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

Layout.defaultProps ={
    title: 'Meetups | Find the event that are you interested in',
    description: 'Find the latest meetups in your area',
    keywords: 'science, technology, programming, health, fitness'
}

export default Layout
