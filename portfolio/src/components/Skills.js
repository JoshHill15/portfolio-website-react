import React from "react"
import styled from "styled-components";

const firstMediaQuery = "1700px"
const secondMediaQuery = "500px"

function Skills() {

  return (
    <MainDiv>
      <StyledH1>Technologies I've worked with:</StyledH1>
      <InnerDiv>
        <LeftDiv>
          <StyledP>React</StyledP>
          <StyledP>Redux</StyledP>
          <StyledP>Axios</StyledP>
          <StyledP>JavaScript</StyledP>
          <StyledP>Python3</StyledP>
          <StyledP>Apollo-server</StyledP>
          <StyledP>Express</StyledP>
          <StyledP>Jest</StyledP>
          <StyledP>Git</StyledP>
        </LeftDiv>
        <RightDiv>
          <StyledP>Styled-components</StyledP>
          <StyledP>Material-UI</StyledP>
          <StyledP>Node</StyledP>
          <StyledP>Graphql</StyledP>
          <StyledP>Django</StyledP>
          <StyledP>HTML</StyledP>
          <StyledP>CSS</StyledP>
          <StyledP>Supertest</StyledP>
          <StyledP>MySQL</StyledP>
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
  font-size:2rem;
  font-family: 'Oswald', sans-serif;

  @media (max-width: ${firstMediaQuery}){
    font-size:1.7rem;
  }




`

export default Skills