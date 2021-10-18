import React from 'react';
import coding from '../../media/coding.jpeg';
import styled from 'styled-components';
import './home.css';
import selfimage from './../../media/facebookpfp.jpg'


const HeadingDiv = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    float:left;
`


function Home(){
    return (
        <HeadingDiv className="HeadingDiv" style={{backgroundImage: `url(${coding})`, backgroundSize: `cover`}}> 

        <div className="MainContainer" >
            <div className="ShortInfo">
                <img src={selfimage} className="SelfImage"/>
                <p className="ShortInfoHeader">Hello World!</p>
            </div>
            <div className="LongerInfo">Lorem ipsum something something</div>

        </div>
        <div className="SkillContainer">
            <div className="SkillHeading">Skills</div>
        </div>
        

        </HeadingDiv>
    )

}

export default Home