import React from "react"
import styled from "styled-components";
import FirstProject from "../projects/FirstProject"

function Work() {

  return (
    <div>
      <div id="work">
        <FirstProject />
      </div>
      <SecondDiv id="work">
        second
      </SecondDiv>
    </div>
  )
}



const SecondDiv = styled.div`
  // background: red;
  height:90vh;
`

export default Work