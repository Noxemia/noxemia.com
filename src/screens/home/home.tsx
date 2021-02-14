import React from 'react';
import coding from '../../media/coding.png';
import styled from 'styled-components';


const HeadingDiv = styled.div`
    width: 100%;
    height: 30%;
    background: white;
    position: absolute; 
`

const HeadingImage = styled.img`
    position: absolute ;
    width: 100% ;
    height: 100% ;
    overflow: hidden ;
`

const TextGradient = styled.div`
    width: 40% ;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 64%, rgba(255,255,255,0) 100%);
    opacity: 0.9;
    position: absolute ;
    height: 100% ;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2%;
`

const NameText = styled.p`
    color: white;
    font-size: 2em;
`

//<HeadingImage src={coding}/> 
function Home(){
    return (
        <HeadingDiv> 
            <HeadingImage src={coding}/>
            <TextGradient>
                <NameText>Aaron 'Nox' Sandgren</NameText>
            </TextGradient>
        </HeadingDiv>

        



    )

}

export default Home