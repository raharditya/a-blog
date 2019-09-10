import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Footer from "../components/footer"
import "./style.css"

const IndexPage = ({ data }) => (
  <React.Fragment>
    <header>
      <h1>A Blog</h1>
      <div className="header-nav">
        <Link to="/">Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
    <main>
      {data.allMarkdownRemark.edges.map(post => (
        <div className="post" key={post.node.id}>
          <Link
            key={post.node.frontmatter.path}
            to={post.node.frontmatter.path}
            className="post-title"
          >
            <h3>{post.node.frontmatter.title}</h3>
          </Link>
          <small className="post-date">{post.node.frontmatter.date}</small>
          <p className="post-excerp">
            {post.node.excerpt.substring(0, 100) + "..."}
          </p>
        </div>
      ))}
    </main>
    <Footer />
  </React.Fragment>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
