import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { itemMenu } from '../data'
const Header = () => {
    const myRef = useRef(null)
    function scrollToTop() {
        scroll.scrollToTop();
    }
    return (
        <HeaderContainer>
            <a href="#" onClick={scrollToTop}>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {itemMenu.map((item) => (
                    <MenuLink to={item.id}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                    ><span>{item.title}</span></MenuLink>
                ))}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
        </HeaderContainer>
    )
}

export default Header
const MenuLink = styled(LinkScroll)`
cursor: pointer;
>span {
    transition: 0.3s ease-in-out;
    :hover {
    color: gray;
    transition: 0.2s ease-in-out;
}

}
&.active {
    border-bottom: 2px solid gray;
    opacity: 0.6;
}
`
const Links = styled(LinkScroll)`

`
const RightMenu = styled.div`
a {
    font-weight: 600;
    text-transform: uppercase;
    /* padding top bottom = 0 */
    /* padding left right = 10px */
    padding: 0 10px;
    /* flex: 1; */
    justify-content: center;
    flex-wrap: nowrap;
}
`
const Menu = styled.div`
display: flex;
align-items: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    /* padding top bottom = 0 */
    /* padding left right = 10px */
    padding: 0 10px;
    /* flex: 1; */
    justify-content: center;
    flex-wrap: nowrap;
}
`
const HeaderContainer = styled.div`
top: 0;
left: 0;
right: 0;
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
`