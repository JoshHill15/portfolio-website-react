import React from "react"
import styled from "styled-components";
import BackgroundMain from "../images/ocean.jpg"
import emailSVG from "../images/email.svg"
import githubSVG from "../images/github-logo.svg"
import linkedinSVG from "../images/linkedin.svg"

function LandingPage() {

  return (
    <MainDiv>
      <p>avatar</p>
      <h1>
        Joshua Hill
      </h1>
      <h2>
        Full Stack Web Developer
      </h2>
      <StyledIcons>
        <a target="_blank" href="https://github.com/JoshHill15"><StyledGit src={githubSVG} alt="github" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/josh-hill-b2b463b8/"><StyledLinkedin src={linkedinSVG} alt="Linkedin" /></a>
        <StyledMail src={emailSVG} alt="mail" />
      </StyledIcons>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  border-size:border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  background-image: url(${BackgroundMain});
  max-size:100%;
  height:100vh
  
`
const StyledIcons = styled.div`
  display:flex;
  align-items: center;
  width:15%;
  justify-content:space-evenly;
`
const StyledMail = styled.img`
  height:50%;
  width:50%;

`

const StyledGit = styled.img`
  height:55%;
  width:55%;
`

const StyledLinkedin = styled.img`
  height:50%;
  width:50%;
`



export default LandingPage