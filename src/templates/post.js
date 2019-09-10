import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <header>
        <h1>A Blog</h1>
        <div className="header-nav">
          <Link to="/">Home</Link>
        </div>
      </header>

      <section className="post-header">
        <h3 className="post-title" style={{marginTop: "1em"}}>{post.frontmatter.title}</h3>
        <small className="post-date">{post.frontmatter.date}</small>
      </section>

      <article className="post-content">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <Footer />
    </React.Fragment>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
