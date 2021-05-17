import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { itemMenu } from '../data'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const toggle = () => {
        console.log(burgerOpen)
        setBurgerOpen(!burgerOpen)
    }

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

                <CustomMenu  onClick={toggle}>
                </CustomMenu>
                <BurgerNav show={burgerOpen}>
                    <CustomWrapper>
                        <CustomClose  onClick={toggle}/>
                    </CustomWrapper>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade In</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Roadster</a></li>
                </BurgerNav>

            </RightMenu>
        </HeaderContainer>
    )
}

export default Header
const CustomWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 999;
list-style-type: none;
display: flex;
flex-direction: column;
padding: 20px;
transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, 0.2);
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
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
display: flex;
align-items: center;
justify-content: center;
white-space: nowrap;
a {
    margin-right: 10px;
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
@media (max-width: 768px) {
    display: none;
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
z-index: 10;
`