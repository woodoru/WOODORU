import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
    <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      <p>My posts will go in here</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMDX (sort:  {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
      }
      id
      body
      parent {
      ... on  File {
        modifiedTime(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}

export default BlogPage
