import React, { Component } from 'react'
import Styled from 'styled-components'

type Props = {
    itemText: String
}

const TextContainer = Styled.p`
  text-decoration: none;
  color: white;
`

const HeaderButtonDiv = Styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  transition: 0.3s;
  &:hover {
    background-color: #615d5e;
  }
`

const HeaderButton: React.FC<Props> = ({itemText}) => 
  <HeaderButtonDiv>
    <TextContainer>{itemText}</TextContainer>
  </HeaderButtonDiv>

export default HeaderButton;
