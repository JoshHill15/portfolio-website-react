import React from "react"
import styled from "styled-components";

const firstMediaQuery = "1700px"
const secondMediaQuery = "500px"

function Skills() {

  return (
    <MainDiv>
      <StyledH1 data-aos="fade-up">Technologies I've worked with:</StyledH1>
      <InnerDiv>
        <LeftDiv>
          <StyledP data-aos="fade-up">React</StyledP>
          <StyledP data-aos="fade-up">Redux</StyledP>
          <StyledP data-aos="fade-up">Axios</StyledP>
          <StyledP data-aos="fade-up">JavaScript</StyledP>
          <StyledP data-aos="fade-up">Python3</StyledP>
          <StyledP data-aos="fade-up">Apollo-server</StyledP>
          <StyledP data-aos="fade-up">Express</StyledP>
          <StyledP data-aos="fade-up">Jest</StyledP>
          <StyledP data-aos="fade-up">Git</StyledP>
        </LeftDiv>
        <RightDiv>
          <StyledP data-aos="fade-up">Styled-components</StyledP>
          <StyledP data-aos="fade-up">Material-UI</StyledP>
          <StyledP data-aos="fade-up">Node</StyledP>
          <StyledP data-aos="fade-up">Graphql</StyledP>
          <StyledP data-aos="fade-up">Django</StyledP>
          <StyledP data-aos="fade-up">HTML</StyledP>
          <StyledP data-aos="fade-up">CSS</StyledP>
          <StyledP data-aos="fade-up">Supertest</StyledP>
          <StyledP data-aos="fade-up">MySQL</StyledP>
        </RightDiv>
      </InnerDiv>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: #017579;
  height:90vh;
`

const InnerDiv = styled.div`
  display:flex;
  height:100%;

  @media (max-width: ${firstMediaQuery}){
    height:90%;
  }

`

const StyledH1 = styled.h1`
  color:white;
  font-family: 'Source Code Pro', monospace;
  font-size:2.7rem;
  width:100%;
  margin:0;
  padding-top:2%;

  @media (max-width: ${secondMediaQuery}){
    font-size:2rem;
  }
`

const LeftDiv = styled.div`
  width:50%;
  height:80%;
  margin-top:2%;

`

const RightDiv = styled.div`
  width:50%;
  height:80%;
  margin-top:2%;


`

const StyledP = styled.p`
  font-size:1.8rem;
  font-family: 'Oswald', sans-serif;

  @media (max-width: ${firstMediaQuery}){
    font-size:1.6rem;
  }

`

export default Skills