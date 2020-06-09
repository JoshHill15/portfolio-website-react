import React from "react"
import FirstProject from "../projects/FirstProject"
import SecondProject from "../projects/SecondProject"
import ThirdProject from "../projects/ThirdProject";
import Footer from "./Footer"
import Skills from "./Skills"

function Work() {

  return (
    <section>
      <section id="work">
        <FirstProject />
      </section>
      <section id="work2">
        <SecondProject />
      </section>
      <section>
        <ThirdProject />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  )
}


export default Work