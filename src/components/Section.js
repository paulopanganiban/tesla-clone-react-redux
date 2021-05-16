import React from 'react'
import styled from 'styled-components'
import media from '../data'
const Section = ({ title, description,
    backgroundImg, leftBtnText,
    rightBtnText, downArrowHidden }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                {!downArrowHidden &&
                    <DownArrow src={`/images/down-arrow.svg`} />
                }

            </Buttons>
        </Wrap>
    )
}

export default Section
const Buttons = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const DownArrow = styled.img`
height: 40px;
margin-bottom: 5px;
animation: animateDown infinite 1.5s;
overflow-x: hidden;
cursor: pointer;
`
const LeftButton = styled.div`
background-color: rgba(23,26,32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`
// Inherit CCSS Of LeftButton
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: black; 
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: ${props => `url('/images/${props.bgImage}')`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
