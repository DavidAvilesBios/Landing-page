import React from 'react'
import Layout from '../components/UI/Layout'
import Seo from '../components/Seo'
import Landing from '../components/Landing'
import '../components/UI/library.css'
import '../components/UI/layout.css'

export default function Home() {
    return (
        <Layout>
            <Seo title="Home" />
            <Landing />
        </Layout>
    )
}
