import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

import { myState } from "../../provider"

export default function Template({ data }) {
  const post = data.markdownRemark

  console.log(post)

  return (
    <myState.Consumer>
      {context => (
        <div className={context.isDark ? "darkTheme" : "lightTheme"}>
          <div className="page-wrapper">
            <React.Fragment>
              <Helmet>
                <meta charSet="utf-8" />
                <title>{post.frontmatter.title}</title>
                <link
                  href="https://fonts.googleapis.com/css?family=Vollkorn&display=swap"
                  rel="stylesheet"
                ></link>
                <meta
                  name="description"
                  content={post.html.substring(3, 100) + "..."}
                />
              </Helmet>
              <header id="top">
                <h1>A Blog</h1>
                <div className="header-nav">
                  <div className="nav-links">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="nav-theme">
                    <p onClick={() => context.changeTheme()}>
                      {context.isDark ? "Light Mode" : "Dark Mode"}
                    </p>
                  </div>
                </div>
              </header>

              <section className="post-header">
                <h3 className="post-title" style={{ marginTop: "1em" }}>
                  {post.frontmatter.title}
                </h3>
                <small className="post-date">
                  {post.frontmatter.dateString}
                </small>
              </section>

              <article className="post-content">
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </article>

              <Footer />
            </React.Fragment>
          </div>

          <a href="#top" className="top-link">
            <div className="top">
              <p>
                ↑↑↑
                <br />
                Back to top
              </p>
            </div>
          </a>
        </div>
      )}
    </myState.Consumer>
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
        dateString
      }
    }
  }
`
