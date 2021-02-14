import React, { Component } from 'react'
import Styled from 'styled-components'

type Props = {
    itemText: String
}

const Damn = Styled.p`
  text-decoration: none;
  color: white;
`

const HeaderButton: React.FC<Props> = ({itemText}) => 
  <div className="headerButton">
    <Damn>{itemText}</Damn>
  </div>

export default HeaderButton;
