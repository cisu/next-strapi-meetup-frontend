import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'

import styles from '@/styles/Layout.module.scss'

const Layout = ({title, keywords, description, children}) => {

    const router = useRouter()


    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Head>

            <Header />

            {router.pathname === '/' && <Showcase />}

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
