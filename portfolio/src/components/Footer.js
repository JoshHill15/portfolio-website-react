import React from "react"
import styled from "styled-components";

function Footer() {


  return (
    <MainDiv>
      <div>
        Created with React
      </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background:#292929;
  height:125px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
`

export default Footer