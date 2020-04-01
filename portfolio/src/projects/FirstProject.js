import React from "react"
import sauti1 from "../images/smaller-sauti.png"
import styled from "styled-components";
import AOS from "aos"
import 'aos/dist/aos.css'


function FirstProject() {

  AOS.init({
    duration: 1000
  })

  return (
    <div >
      <MainDiv >
        <IMGdiv data-aos="fade-up">
          <img src={sauti1} alt="sauti" />
        </IMGdiv>
        <ContentDiv>
          <StyledH1 data-aos="fade-up">Sauti Databank</StyledH1>
          <StyledP data-aos="fade-up">A data visualizer for cross border traders located in Africa.
          Users have the option to register or proceed to the data with limited features.
          You may filter or crossfilter the data in any way you wish,
          additionally you can download the results of any search
             if you are a paid member.</StyledP>
          <StyledH3 data-aos="fade-up">Technologies:</StyledH3>
        </ContentDiv>
      </MainDiv>
    </div>
  )
}

const MainDiv = styled.div`
  background: #488286;
  height:90vh;
  display:flex;
`

const IMGdiv = styled.div`
  width:47%;
  height:99.5%;
  display:flex;
  align-items:center;
  margin-left:3%;
`
const ContentDiv = styled.div`
  width:38%;
  display:flex;
  align-items:center;
  justify-content:center;
  height:75%;
  margin-left:10%;
  margin-top:5.5%;
  flex-direction:column;
`

const StyledH1 = styled.h1`
  color:white;
  font-size:2rem;
`

const StyledP = styled.p`
  width:70%;
  text-align:left;
  font-size:1.3rem;
  margin-left:6%;
`

const StyledH3 = styled.h3`
  font-size:1.7rem;
  margin-bottom:30%;
`
export default FirstProject