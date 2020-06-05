import React from "react"
import styled from "styled-components";
import FirstProject from "../projects/FirstProject"
import SecondProject from "../projects/SecondProject"
import ThirdProject from "../projects/ThirdProject";
import Footer from "./Footer"


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
        <Footer />
      </div>
    </section>
  )
}


export default Work