import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Footer from "../components/footer"
import {myState} from '../../provider'
import "./style.css"

const IndexPage = ({ data }) => (
  <myState.Consumer>
    {context => (
      <React.Fragment>
        <div className={context.isDark ? "darkTheme" : "lightTheme"}>
          <div className="page-wrapper">
            <Helmet>
              <meta charSet="utf-8" />
              <title>A Blog | raharditya.com</title>
              <link
                href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap"
                rel="stylesheet"
              ></link>
            </Helmet>
            <header id="top">
              <h1>A Blog</h1>
              <div className="header-nav">
                <div className="nav-links">
                  <Link to="/">Posts</Link>
                  <Link to="/about">About</Link>
                </div>
                <div className="nav-theme">
                  <p onClick={()=> context.changeTheme()}>{context.isDark ? "Light Mode" : "Dark Mode"}</p>
                </div>
              </div>
            </header>
            <main>
              {data.allMarkdownRemark.edges
                .map(post => (
                  <div className="post" key={post.node.id}>
                    <Link
                      key={post.node.frontmatter.path}
                      to={post.node.frontmatter.path}
                      className="post-title-link"
                    >
                      <h3 className="post-title">{post.node.frontmatter.title}</h3>
                    </Link>
                    <small className="post-date">{post.node.frontmatter.dateString}</small>
                    <p className="post-excerp">
                      {post.node.excerpt.substring(0, 100) + "..."}
                    </p>
                  </div>
                ))}
            </main>
            <Footer />
            {/* <button onClick={Array}>Debug</button> */}
          </div>
          
        </div>
      </React.Fragment>
    )}
  </myState.Consumer>
  
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            dateString
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
