import React from "react"
import styled from "styled-components";
import emailSVG from "../images/email.svg"
import githubSVG from "../images/github-logo.svg"
import linkedinSVG from "../images/linkedin.svg"
import resumeSVG from "../images/portfolio.svg"
import avatar from "../images/joshhill15_small.png"
import bg from "../images/midcityimg.webp"
import mobile_bg from "../images/midcityimg_mobile.jpg"
import PDF from "../images/Final_Resume.pdf"
import "../landingpage.css"

const firstMediaQuery = "1200px"
const secondMediaQuery = "850px"
const thirdMediaQuery = "570px"
const fourthMediaQuery = "450px"
const fifthMediaQuery = "350px"

function LandingPage() {
  return (
    <MainDiv>
      <SupportingDiv>
        <AvatarDiv className="avatar">
          <Avatar src={avatar} alt="avatar" />
        </AvatarDiv>
        <AlignName>
          <StyledName className="name">Hello, my name's </StyledName>
          <StyledName className="name" className="main-name">Josh</StyledName>
        </AlignName>
        <AlignTitle>
          <StyledTitle className="title">I'm a</StyledTitle>
          <StyledTitle className="title" className="main-title">Full Stack Web Developer </StyledTitle>
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
            <StyledP className="third-icon">Mail</StyledP>
          </GroupedMail>
          <GroupedResume>
            <a href={PDF} target="_blank" rel="noopener noreferrer" ><StyledResume className="fourth-icon" src={resumeSVG} alt="Resume" /></a>
            <StyledP className="fourth-icon">Resume</StyledP>
          </GroupedResume>
        </StyledIcons>
      </SupportingDiv>
      <div className="to-work-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
        <a id="work_ref" href="#work"><span className="to-work">My work</span></a>
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

  background-image: url(${bg});
  max-size:100%;
  background-size:cover;
  background-position:center;
  height:100vh;
  // background: rgba(0, 0, 225, 0.6);

  @media(max-width: ${thirdMediaQuery}) {
    background-image: url(${mobile_bg});
  }
`

const SupportingDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  background: rgba(240, 240, 240, 0.4);
  width:60%;
  height:60%;
  border-radius:15px;
  padding:2%;

  @media(max-width: ${fourthMediaQuery}) {
    height:70%;
    width:70%;
  }

  @media(max-width: ${fifthMediaQuery}) {
    height:80%;
    width:80%;
  }

`

const AvatarDiv = styled.div`
  width:25%;
  height:19%;

  @media(max-width: ${firstMediaQuery}) {
    width:38%;
  }

  
  @media(max-width: ${secondMediaQuery}) {
    width:50%;
  }

  @media(max-width: ${thirdMediaQuery}) {
    width:60%;
  }

  @media(max-width: ${fifthMediaQuery}) {
    width:90%;
  }

`

const Avatar = styled.img`
  width:50%;

`

const AlignName = styled.div`
  display:flex;
  width:100%;
  justify-content:center;

`

const StyledName = styled.h1`
  font-size:3.2rem;
  font-weight:bold;

  @media(max-width: ${firstMediaQuery}) {
    font-size:2.5rem;
  }

  @media(max-width: ${secondMediaQuery}) {
    font-size:2rem;
  }

  @media(max-width: ${thirdMediaQuery}) {
    font-size:1.6rem;
  }

  @media(max-width: ${fourthMediaQuery}) {
    font-size:1.3rem;
  }
`

const AlignTitle = styled.div`
  display:flex;
  width:100%;
  justify-content:center;

  @media(max-width: ${firstMediaQuery}) {
    width:100%;
  }
`

const StyledTitle = styled.h2`
  font-weight:bold;
  font-size:1.9rem;

  @media(max-width: ${firstMediaQuery}) {
    font-size:1.5rem;
  }

  @media(max-width: ${secondMediaQuery}) {
    font-size:1.2rem;
  }

  @media(max-width: ${thirdMediaQuery}) {
    font-size:1.1rem;
  }


  @media(max-width: ${fourthMediaQuery}) {
    font-size:.9rem;
  }
`

const StyledIcons = styled.div`
  align-items:center;
  display:flex;
  width:50%;
  justify-content:flex-end;

    @media(max-width: ${firstMediaQuery}) {
      width:65%;
    }

    @media(max-width: ${secondMediaQuery}) {
      width:80%;
    }

    @media(max-width: ${thirdMediaQuery}) {
      width:95%;
    }

    @media(max-width: ${fourthMediaQuery}) {
      flex-direction:column;
    }
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
  margin-bottom:2.8%;
`

const StyledP = styled.p`
  color:white;
`


export default LandingPage