import React from "react"
import sauti1 from "../images/smaller-sauti.png"
import styled from "styled-components";
import AOS from "aos"

function FirstProject() {

  AOS.init()

  return (
    <div data-aos="fade-in">
      <MainDiv >
        <IMGdiv>
          <img src={sauti1} alt="sauti" />
        </IMGdiv>
      </MainDiv>
    </div>
  )
}

const MainDiv = styled.div`
  background: #488286;
  height:90vh;
`

const IMGdiv = styled.div`
  width:50%;
  border:2px solid blue;
  height:99.5%;
  display:flex;
  align-items:center;
  margin-left:3%;
`

export default FirstProject