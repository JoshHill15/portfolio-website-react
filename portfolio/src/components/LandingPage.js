import React from "react"
import styled from "styled-components";
import emailSVG from "../images/email.svg"
import githubSVG from "../images/github-logo.svg"
import linkedinSVG from "../images/linkedin.svg"
import background1 from "../images/midcity.jpg"
import "../landingpage.css"



function LandingPage() {

  return (
    <MainDiv>
      <p className="avatar">avatar</p>
      <AlignHeader>
        <h1 className="name">Hello, my name's </h1>
        <h1 className="name" className="main-name">Josh</h1>
      </AlignHeader>
      <h2 className="title">
        I'm a Full Stack Web Developer
      </h2>
      <StyledIcons className="icons">
        <a target="_blank" href="https://github.com/JoshHill15"><StyledGit className="first-icon" src={githubSVG} alt="github" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/josh-hill-b2b463b8/"><StyledLinkedin className="second-icon" src={linkedinSVG} alt="Linkedin" /></a>
        <a href="mailto:josh_hill15@me.com?subject=Mailed from portfolio site"><StyledMail className="third-icon" src={emailSVG} alt="mail" /></a>
      </StyledIcons>
      <div className="to-work-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <span className="to-work">My work</span>
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
  background-image: url(${background1});
  opacity:.90;
  max-size:100%;
  background-size:cover;
  background-position:center;
  height:100vh;
`


const StyledIcons = styled.div`
  align-items:center;
  display:flex;
  width:30%;
  justify-content:flex-end;
  margin-right:6%;

`
const StyledGit = styled.img`
  width:40%;
  margin-right:-50%;
`

const StyledLinkedin = styled.img`
  width:25%;


`

const StyledMail = styled.img`
  width:115%;
`
const AlignHeader = styled.div`
  display:flex;
  width:25%;
`


export default LandingPage