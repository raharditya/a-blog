import React from "react"
import { Link } from "gatsby"
import "./style.css"
import Footer from "../components/footer"

const About = () => {
  return (
    <>
      <header>
        <h1>A Blog</h1>
        <div className="header-nav">
          <Link to="/">Home</Link>
        </div>
      </header>

      {/* <article className="post-content">
          {descriptions.map(
            description => console.log(description) || <p>Hello :)</p>
          )}
        </article> */}

      <Footer />
    </>
  )
}

export default About
