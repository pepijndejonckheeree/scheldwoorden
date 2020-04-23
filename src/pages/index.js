import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <ul>
      {data.allContentfulScheldwoord.edges.map(({ node }) => (
        <li>
          <Link to={node.id}>{node.id}</Link>
          <p>{node.scheldwoord}</p>
        </li>
      ))}
    </ul>
    <Link to="/create" className={style.button}>
     Kies een mooi scheldwoord
    </Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulScheldwoord {
      edges {
        node {
          id
          scheldwoord
        }
      }
    }
  }
`
