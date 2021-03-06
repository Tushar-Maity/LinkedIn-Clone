import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HeaderOption from './HeaderOption';
import Logo from './assets/linkedin.png'

const Header = () => {
    return (
        <HeaderContainer> 
            <HeaderLeft>
                <img 
                    src={Logo}
                    alt=""
                />
                <HeaderSearch>
                    <SearchIcon />
                    <input type="text"/>
                </HeaderSearch>
            </HeaderLeft>

            <HeaderRight>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notofications"/>
                <HeaderOption avatar={AccountCircleIcon} title="me"/>
            </HeaderRight>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 0.1px solid lightgray;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    position: sticky;
    z-index: 1000;
    background-color: #fff;
`;

const HeaderLeft = styled.div`
    display: flex;

    img {
        object-fit: contain;
        height: 40px;
        margin-right: 10px;
    }
`;

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    height: 22px;
    color: gray;
    background-color: #eef3f8;

    input {
        outline: none;
        border: none;
        background: none;
    }
`;

const HeaderRight = styled.div`
    display: flex;
`;

export default Header
