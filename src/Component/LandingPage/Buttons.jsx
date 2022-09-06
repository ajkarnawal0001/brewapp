// import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import './Home.css'

const buttonNames = ["24h Trending", "Latest shows", "Most Popular" , "In Genisis" , "In Temple" , "in Void" , "BAYC"]

export const Buttons = ({handleSearch}) => {
  return (
        <div style={{
            alignItem:"center",
            textAlign:"center"
        }}>
            {
                buttonNames.map((item)=>(
                    <StyledButton onClick={()=>handleSearch(item)}
                 variant="outlined">{item}</StyledButton>
                ))
            }
        </div>
    )
}

const StyledButton = styled.button`
  color: #141414;
  padding: 6px 12px;
  border: 0.5px solid #daf1ee;
  border-radius:10px;
  margin:1rem;
  &:hover {
    background-color: #242424 !important;
    color:#fafafa;
    cursor: pointer;
  }
  &:focus {
    background-color: #c3f9ff;
  }
`;