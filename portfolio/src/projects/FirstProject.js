import React from "react"
import sauti from "../images/smaller-sauti.png"
import styled from "styled-components";
import AOS from "aos"
import 'aos/dist/aos.css'
import githubSVG from "../images/github-logo.svg"
import linkSVG from "../images/link.svg"

const firstMediaQuery = "1650px"
const secondMediaQuery = "1470px"
const thirdMediaQuery = "1000px"
const fourthMediaQuery = "775px"
const fifthMediaQuery = "600px"
const sixthMediaQuery = "370px"
const seventhMediaQuery = "200px"



function FirstProject() {

  AOS.init({
    duration: 1000,
    offset: 100
  })

  return (
    <div >
      <MainDiv >
        <IMGdiv >
          <a rel="noopener noreferrer" target="_blank" href="https://www.databank.sautiafrica.org/"> <StyledIMG data-aos="fade-up" src={sauti} alt="sauti" /></a>
          <StyledTechnologiesDiv data-aos="fade-up">
            <span>React-router-dom </span>
            <StyledSpans>| </StyledSpans>
            <span>Apollo-server-express </span>
            <StyledSpans>| </StyledSpans>
            <span> Material UI </span>
            <StyledSpans>| </StyledSpans>
            <span> @testing-library/react </span>
            <StyledSpans>| </StyledSpans>
            <span> Graphql </span>
            <StyledSpans>| </StyledSpans>
            <span> Paypal API </span>
            <StyledSpans>| </StyledSpans>
            <span> Nivo</span>
          </StyledTechnologiesDiv>
        </IMGdiv>
        <ContentDiv>
          <StyledH1 data-aos="fade-up">Sauti Databank</StyledH1>
          <StyledAltIMG data-aos="fade-up" src={sauti} alt="alt-sauti" />
          <StyledAltTechnologiesDiv data-aos="fade-up">
            <span>React-router-dom </span>
            <StyledSpans>| </StyledSpans>
            <span>Apollo-server-express </span>
            <StyledSpans>| </StyledSpans>
            <span> Material UI </span>
            <StyledSpans>| </StyledSpans>
            <span> @testing-library/react </span>
            <StyledSpans>| </StyledSpans>
            <span> Graphql </span>
            <StyledSpans>| </StyledSpans>
            <span> Paypal API </span>
            <StyledSpans>| </StyledSpans>
            <span> Nivo</span>
          </StyledAltTechnologiesDiv>
          <StyledP data-aos="fade-up">A data visualizer for cross border traders located in Africa.
          Users have the option to register or proceed to the data with limited features.
          You may filter or crossfilter the data in any way you wish,
          additionally you can download the results of any search
             if you are a paid member.</StyledP>
          <StyledButtonsDiv>
            <a rel="noopener noreferrer" href="https://github.com/orgs/Lambda-School-Labs/teams/labs-21-sauti-data-bank" target="_blank"><StyledGitIMG src={githubSVG} data-aos="fade-up" /></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.databank.sautiafrica.org/"><StyledLinkIMG src={linkSVG} data-aos="fade-up" /></a>
          </StyledButtonsDiv>
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
  width:62%;
  height:70%;
  display:flex;
  align-items:center;
  margin-left:3%;
  flex-wrap:wrap;
  margin-top:8%;

  @media (max-width: ${firstMediaQuery}){
    width:100%;
  }

  @media (max-width: ${secondMediaQuery}){
    height:65%;
    width:120%;
  }

  @media (max-width: ${thirdMediaQuery}){
    display:none;
  }

`

const StyledIMG = styled.img`
  @media (max-width: ${firstMediaQuery}){
    width:100%;
  }
`

const StyledAltIMG = styled.img`
  display:none;

    @media (max-width: ${thirdMediaQuery}){
    width:100%;
    display:inline-block;
  }

  @media (max-width: ${fifthMediaQuery}){
    width:90%;
  }
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
  margin-right:10%;

  @media (max-width: ${firstMediaQuery}){
    width:48%;
  }

  @media (max-width: ${secondMediaQuery}){
    width:75%;
  }

  @media (max-width: ${thirdMediaQuery}){
    width:100%;
    height:97%;
    margin-top:0;
  }

  @media (max-width: ${fifthMediaQuery}){
    margin-right:0;
    margin-left:0
  }

`

const StyledH1 = styled.h1`
  color:white;
  font-family: 'Source Code Pro', monospace;
  font-size:2.7rem;
  width:100%;

  
  @media (max-width: ${sixthMediaQuery}){
    font-size:2rem;
  }
`

const StyledP = styled.p`
  width:100%;
  text-align:left;
  font-size:1.3rem;
  margin-left:6%;
  font-family: 'Noto Serif KR', serif;
  font-weight:bold;

  @media (max-width: ${thirdMediaQuery}){
    margin-left:0;
    font-size:1.2rem;
  }

  @media (max-width: ${fifthMediaQuery}){
    width:90%;
  }

  @media (max-width: ${sixthMediaQuery}){
    font-size:1rem;
  }

  @media (max-width: ${seventhMediaQuery}){
    font-size:0.8rem;
  }

`

const StyledTechnologiesDiv = styled.div`
  font-size:1.7rem;
  font-family: 'Oswald', sans-serif;
  diplay:flex;
  flex-direction:column;
`

const StyledAltTechnologiesDiv = styled.div`
  display:none;
  font-family: 'Oswald', sans-serif;

    @media (max-width: ${thirdMediaQuery}) {
      display:inline-block;
      font-size:1.2rem;
    }

    @media (max-width: ${sixthMediaQuery}){
      font-size:1rem;
    }
`

const StyledButtonsDiv = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:40%;

  @media (max-width: ${thirdMediaQuery}){
    width:25%;
  }

  @media (max-width: ${fourthMediaQuery}){
    width:30%;
  }

`

const StyledGitIMG = styled.img`
  width:60px;
  margin-bottom:20%;

  @media (max-width: ${sixthMediaQuery}){
    width:45px;
  }
`

const StyledLinkIMG = styled.img`
  width:73px;
  margin-bottom:20%;

  @media (max-width: ${sixthMediaQuery}){
    width:53px;
  }

`

const StyledSpans = styled.span`
  color:white;
  font-size:1.7rem;
`


export default FirstProject