import React from 'react'
import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { itemMenu } from '../data'
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
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

                <CustomMenu>
                </CustomMenu>
                <BurgerNav>
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
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 999;
list-style-type: none;
justify-content: center;
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