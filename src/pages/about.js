import React from "react"
import { Link } from "gatsby"
import "./style.css"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A Blog | raharditya.com</title>
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

      <article className="post-content">
        <p style={{ fontWeight: "bold", marginTop: "1em" }}>
          Hi! My name is Adit Raharditya, and welcome to my blog.
        </p>
        <p>
          This blog was made using GatsbyJs and GraphQl. This place will be home
          to many posts, ranging from those random stuff or sometimes serious
          ones. I hope you bear with me. Enjoy!
        </p>
      </article>

      <Footer />
    </>
  )
}

export default About
