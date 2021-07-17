import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';

const Header = () => {
    return (
        <HeaderContainer> 
            <HeaderLeft>
                <img 
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
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
            </HeaderRight>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
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
