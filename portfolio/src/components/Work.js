import React from "react"
import FirstProject from "../projects/FirstProject"
import SecondProject from "../projects/SecondProject"
import ThirdProject from "../projects/ThirdProject";
import Footer from "./Footer"
import Skills from "./Skills"

function Work() {

  return (
    <section>
      <div id="work">
        <FirstProject />
      </div>
      <div id="work2">
        <SecondProject />
      </div>
      <div>
        <ThirdProject />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}


export default Work