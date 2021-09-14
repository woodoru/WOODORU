import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle = 'Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src = "https://cdnb.artstation.com/p/assets/images/images/019/775/347/large/kate-kneebone-su-background-style-sunset.jpg?1564979276"
        alt = "Any image"
        />
      </Layout>
    </main>
  )
}

export default IndexPage
