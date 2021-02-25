import React from 'react'
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SideBtnWrap, SidebarLink, SidebarRoute, SidebarMenu } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="pricing" onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="login">Login</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper> 
        </SidebarContainer>
    )
}

export default Sidebar
