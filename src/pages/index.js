import * as React from 'react'
import  { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <main>
      <Layout pateTitle = "Home Page">
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  )
}

export default IndexPage
