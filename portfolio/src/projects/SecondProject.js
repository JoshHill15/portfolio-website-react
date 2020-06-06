import React from "react"
import disney from "../images/parent-disney_50.png"
import styled from "styled-components";
import AOS from "aos"
import 'aos/dist/aos.css'
import githubSVG from "../images/github-logo.svg"
import linkSVG from "../images/link.svg"

const firstMediaQuery = "1530px"
const secondMediaQuery = "1240px"
const thirdMediaQuery = "1000px"
const fourthMediaQuery = "800px"
const fifthMediaQuery = "730px"
const sixthMediaQuery = "370px"

function SecondProject() {

  return (
    <MainDiv>
      <IMGdiv>
        <a rel="noopener noreferrer" target="_blank" href="https://disneyparent-5o9m3e76w.now.sh/"> <StyledIMG data-aos="fade-up" src={disney} alt="disney" /></a>
        <StyledTechnologiesDiv data-aos="fade-up">
          <span>Express </span>
          <StyledSpans>| </StyledSpans>
          <span>Knex </span>
          <StyledSpans>| </StyledSpans>
          <span>Bcryptjs </span>
          <StyledSpans>| </StyledSpans>
          <span>Jsonwebtoken </span>
          <StyledSpans>| </StyledSpans>
          <span>Cors </span>
          <StyledSpans>| </StyledSpans>
          <span>Postgres Database </span>
          <StyledSpans>| </StyledSpans>
          <span>Jest </span>
          <StyledSpans>| </StyledSpans>
          <span>Supertest </span>
          <StyledSpans>| </StyledSpans>
          <span>Nodemon</span>
          <StyledSpans>| </StyledSpans>
          <span>Helmet </span>
        </StyledTechnologiesDiv>
      </IMGdiv>
      <ContentDiv data-aos="fade-up">
        <StyledH1>Disney Parent</StyledH1>
        <StyledAltIMG src={disney} alt="disney" />
        <StyledAltTechnologiesDiv data-aos="fade-up">
          <span>Express </span>
          <StyledSpans>| </StyledSpans>
          <span>Knex </span>
          <StyledSpans>| </StyledSpans>
          <span>Bcryptjs </span>
          <StyledSpans>| </StyledSpans>
          <span>Jsonwebtoken </span>
          <StyledSpans>| </StyledSpans>
          <span>Cors </span>
          <StyledSpans>| </StyledSpans>
          <span>Postgres Database </span>
          <StyledSpans>| </StyledSpans>
          <span>Jest </span>
          <StyledSpans>| </StyledSpans>
          <span>Supertest </span>
          <StyledSpans>| </StyledSpans>
          <span>Nodemon</span>
          <StyledSpans>| </StyledSpans>
          <span>Helmet </span>
        </StyledAltTechnologiesDiv>
        <StyledP data-aos="fade-up">
          A service that parents can utilize when attending Disney with their children.
          There are two types of users, parents and caregivers. It's primary function is to provide
          protection and safety to children, while parents can still ride the attractions that they're
          interested in.
        </StyledP>
        <StyledP data-aos="fade-up">Role: Backend Developer</StyledP>
        <StyledButtonsDiv>
          <a rel="noopener noreferrer" href="https://github.com/Build-Week-Web26-Disney-Parents/BE" target="_blank"><StyledGitIMG src={githubSVG} data-aos="fade-up" /></a>
          <a rel="noopener noreferrer" target="_blank" href="https://disneyparent-5o9m3e76w.now.sh/"><StyledLinkIMG src={linkSVG} data-aos="fade-up" /></a>
        </StyledButtonsDiv>
      </ContentDiv>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: #958D9B;
  height:90vh;
  display:flex;
`

const IMGdiv = styled.div`
  height:70%;
  width:60%;
  margin-left:1%;
  padding-top:8%;

  @media (max-width: ${thirdMediaQuery}){
    display:none;
  }

`
const StyledIMG = styled.img`
  @media (max-width: ${firstMediaQuery}){
    width: 90%;
  }
`

const StyledAltIMG = styled.img`
  display:none;

    @media (max-width: ${thirdMediaQuery}){
    width:90%;
    height:50%;
    display:inline-block;
  }

  @media (max-width: ${fifthMediaQuery}){
    height:40%;
  }

  @media (max-width: ${sixthMediaQuery}){
    height:25%;
  }
`

const ContentDiv = styled.div`
  width:40%;
  height:70%;
  padding-top:10%;

  @media (max-width: ${thirdMediaQuery}){
    width:100%;
    height:95%;
    padding-top:0%;
  }


  
`

const StyledTechnologiesDiv = styled.div`
  font-size:1.7rem;
  font-family: 'Oswald', sans-serif;
  width:80%;
  margin-top:2%;
  margin-left:10%;
`
const StyledSpans = styled.span`
  color:white;
`

const StyledH1 = styled.h1`
  color:white;
  font-family: 'Source Code Pro', monospace;
  font-size:2.7rem;
  width:100%;

  @media (max-width: ${fourthMediaQuery}){
    font-size:2.2rem;
  }

`

const StyledP = styled.p`
  text-align:left;
  width:70%;
  margin-left:20%;
  font-weight:bold;
  font-family: 'Noto Serif KR', serif;
  font-size:1.3rem;

  @media (max-width: ${thirdMediaQuery}){
    width:90%;
    margin-left:5%;
    font-size:1.1rem;

  }

  @media (max-width: ${fifthMediaQuery}){
    width:90%;
    margin-left:5%;
    font-size:1rem;
  }

`

const StyledButtonsDiv = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:30%;
  margin-left:37%;

  @media (max-width: ${secondMediaQuery}){
    width: 40%;
  }

  @media (max-width: ${thirdMediaQuery}){
    width:20%;

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
const StyledAltTechnologiesDiv = styled.div`
  display:none;
  font-family: 'Oswald', sans-serif;

    @media (max-width: ${thirdMediaQuery}) {
      display:inline-block;
      font-size:1.2rem;
    }

`
export default SecondProject