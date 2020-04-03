import React from "react"
import styled from "styled-components";
import emailSVG from "../images/email.svg"
import githubSVG from "../images/github-logo.svg"
import linkedinSVG from "../images/linkedin.svg"
import resumeSVG from "../images/portfolio.svg"
import background from "../images/midcity.jpg"
import PDF from "../images/Joshua_Hill_Resume.pdf"

import "../landingpage.css"

import { useHistory } from "react-router-dom"


function LandingPage() {
  const History = useHistory()
  return (
    <MainDiv>
      <p className="avatar">avatar</p>
      <AlignName>
        <h1 className="name">Hello, my name's </h1>
        <h1 className="name" className="main-name">Josh</h1>
      </AlignName>
      <AlignTitle>
        <h2 className="title">I'm a</h2>
        <h2 className="title" className="main-title">Full Stack Web Developer </h2>
      </AlignTitle>
      <StyledIcons className="icons">
        <GroupedGit>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/JoshHill15"><StyledGit className="first-icon" src={githubSVG} alt="github" /></a>
          <StyledP className="first-icon">Github</StyledP>
        </GroupedGit>
        <GroupedLinkedin>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-hill-b2b463b8/"><StyledLinkedin className="second-icon" src={linkedinSVG} alt="Linkedin" /></a>
          <StyledP className="second-icon">Linked in</StyledP>
        </GroupedLinkedin>
        <GroupedMail>
          <a href="mailto:josh_hill15@me.com?subject=Mailed from portfolio site"><StyledMail className="third-icon" src={emailSVG} alt="mail" /></a>
          <StyledP className="third-icon">Contact Me</StyledP>
        </GroupedMail>
        <GroupedResume>
          <a href={PDF} target="_blank" rel="noopener noreferrer" ><StyledResume className="fourth-icon" src={resumeSVG} alt="Resume" /></a>
          <StyledP className="fourth-icon">Resume</StyledP>
        </GroupedResume>
      </StyledIcons>
      <div className="to-work-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <a href="#work"><span className="to-work">My work</span></a>
      </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  border-size:border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  background-image: url(${background});
  opacity:.90;
  max-size:100%;
  background-size:cover;
  background-position:center;
  height:100vh;
`
const AlignName = styled.div`
  display:flex;
  width:80%;
  justify-content:center;
`

const AlignTitle = styled.div`
  display:flex;
  width:80%;
  justify-content:center;
`

const StyledIcons = styled.div`
  align-items:center;
  display:flex;
  width:30%;
  justify-content:flex-end;

`
const StyledGit = styled.img`
  width:40%;
`

const StyledLinkedin = styled.img`
  width:40%;
`

const StyledMail = styled.img`
  width:45%;
`

const StyledResume = styled.img`
  width:45%;
`

const GroupedGit = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:25%;
  height:85%;


`

const GroupedLinkedin = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:25%;
  height:85%;

`

const GroupedMail = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:25%;
  height:85%;
  margin-bottom:1.2%;
`

const GroupedResume = styled.div`
  width:25%;
  height:85%;
  cursor:pointer;
  margin-bottom:2.2%;
`

const StyledP = styled.p`
  color:white;
`


export default LandingPage