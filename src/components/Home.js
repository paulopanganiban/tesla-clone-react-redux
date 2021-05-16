import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import {itemMenu} from '../data'
const Home = () => {
    return (
        <HomeContainer>
            {itemMenu.map((item) => (
            <div id={item.id}>
                <Section
                    title={item.title}
                    description={item.description}
                    backgroundImg={item.image}
                    leftBtnText='Custom Order'
                    rightBtnText='Existing Inventory'
                />
            </div>
            ))}
            <Section
                title='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnText='Shop now'
                downArrowHidden={true} />

        </HomeContainer>
    )
}

export default Home

const HomeContainer = styled.div`
    height: 100vh;
`