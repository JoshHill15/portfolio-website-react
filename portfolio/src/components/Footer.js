import React from "react"
import styled from "styled-components";
import PDF from "../images/Joshua_Hill_Resume.pdf"



function Footer() {


  return (
    <MainDiv>
      <StyledGit target="_blank" rel="noopener noreferrer" href="https://github.com/JoshHill15">GitHub</StyledGit>
      <StyledLinkedIn target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josh-hill-b2b463b8/">LinkedIn</StyledLinkedIn>
      <p>Created by Joshua Hill</p>
      <StyledEmail target="_blank" rel="noopener noreferrer" href="mailto:josh_hill15@me.com?subject=Mailed from portfolio site">Contact Me</StyledEmail>
      <StyledResume target="_blank" rel="noopener noreferrer" href={PDF}>Resume</StyledResume>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background:#292929;
  height:150px;
  display:flex;
  align-items:center;
  color:white;
  justify-content:space-evenly;
`

const StyledGit = styled.a`
  color:white;
  text-decoration:none;

  &:hover{
    text-decoration:underline;
  }

`

const StyledLinkedIn = styled.a`
  color:white;
  text-decoration:none;

    &:hover{
    text-decoration:underline;
  }

`

const StyledEmail = styled.a`
  color:white;
  text-decoration:none;

    &:hover{
    text-decoration:underline;
  }

`

const StyledResume = styled.a`
  color:white;
  text-decoration:none;

    &:hover{
    text-decoration:underline;
  }

`

export default Footer