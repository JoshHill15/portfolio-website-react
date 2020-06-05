import React from "react"
import lendr from "../images/lendr.png"
import styled from "styled-components";
import AOS from "aos"
import 'aos/dist/aos.css'
import githubSVG from "../images/github-logo.svg"
import linkSVG from "../images/link.svg"

function ThirdProject() {

  AOS.init({
    duration: 1000,
    offset: 100
  })

  return (
    <MainDiv>
      <IMGdiv data-aos="fade-up">
        <a rel="noopener noreferrer" target="_blank" href="https://lendr-beige.now.sh/"><img src={lendr} alt="lendr img" /></a>
        <StyledTechnologiesDiv>
          <span>GSAP </span>
          <StyledSpans>| </StyledSpans>
          <span>Formik </span>
          <StyledSpans>| </StyledSpans>
          <span>React </span>
          <StyledSpans>| </StyledSpans>
          <span>Redux </span>
          <StyledSpans>| </StyledSpans>
          <span>Styled-Components </span>
          <StyledSpans>| </StyledSpans>
          <span>Redux-Thunk </span>
          <StyledSpans>| </StyledSpans>
          <span>Axios </span>
          <StyledSpans>| </StyledSpans>
          <span>React-Router-Dom</span>
        </StyledTechnologiesDiv>
      </IMGdiv>
      <ContentDiv data-aos="fade-up">
        <StyledH1 data-aos="fade-up">Lendr</StyledH1>
        <StyledP data-aos="fade-up">A convenient application to keep track of items lent
        between people.
        </StyledP>
        <StyledButtonsDiv>
          <a rel="noopener noreferrer" href="https://github.com/JoshHill15/lendr" target="_blank"><StyledGitIMG src={githubSVG} data-aos="fade-up" /></a>
          <a rel="noopener noreferrer" target="_blank" href="https://lendr-beige.now.sh/"><StyledLinkIMG src={linkSVG} data-aos="fade-up" /></a>
        </StyledButtonsDiv>
      </ContentDiv>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  height:90vh;
  display:flex;
  background: #767B91;
`
const IMGdiv = styled.div`
  width:60%;
  padding-top:8%;
`

const ContentDiv = styled.div`
  width:40%;
  height:70%;
  padding-top:10%;

`

const StyledTechnologiesDiv = styled.div`
  font-size:1.7rem;
  font-family: 'Oswald', sans-serif;
  diplay:flex;
  flex-direction:column;
  margin-top:2%;
`

const StyledSpans = styled.span`
  color:white;
  font-size:1.7rem;
`

const StyledH1 = styled.h1`
  color:white;
  font-family: 'Source Code Pro', monospace;
  font-size:2.7rem;
  width:100%;


`

const StyledP = styled.p`
  width:60%;
  text-align:left;
  font-size:1.3rem;
  margin-left:20%;
  font-family: 'Noto Serif KR', serif;
  font-weight:bold;

`


const StyledButtonsDiv = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:30%;
  margin-left:37%;

`

const StyledGitIMG = styled.img`
  width:60px;
  margin-bottom:20%;

`

const StyledLinkIMG = styled.img`
  width:73px;
  margin-bottom:20%;

`

export default ThirdProject