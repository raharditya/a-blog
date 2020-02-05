import React from "react"
import { Link } from "gatsby"
import "./style.css"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

import {myState} from '../../provider'

const About = () => {
  return (
    <myState.Consumer>
      {context => (
        <div className={context.isDark ? "darkTheme" : "lightTheme"}>
          <div className="page-wrapper about-wrapper">
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
                  <div className="nav-links">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="nav-theme">
                    <p onClick={()=> context.changeTheme()}>{context.isDark ? "Light Mode" : "Dark Mode"}</p>
                  </div>
                </div>
              </header>
    
              <article className="post-content">
                <p style={{ fontWeight: "bold", marginTop: "1em" }}>
                  Hi! My name is Adit Raharditya, and welcome to my blog.
                </p>
                <p>
                  I'm bad at writing though, so get ready for some mundane, averagely-written, cringe-inducing blog posts. This site was made using my favorite Javascript framework, GatsbyJs.
                </p>
              </article>
    
              <Footer />
            </>
          </div>
        </div>
      )}
    </myState.Consumer>
    
    
  )
}

export default About
