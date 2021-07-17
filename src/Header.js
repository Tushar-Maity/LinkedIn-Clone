import React from 'react'
import styled from "styled-components"
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <HeaderContainer>
            <h1>I am the header</h1>
            <HeaderLeft>
                <img src="" alt="/"/>
                <HeaderSearch>
                    <SearchIcon />
                    <input type="text"/>
                </HeaderSearch>
            </HeaderLeft>
            <HeaderRight>

            </HeaderRight>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderSearch = styled.div``;

const HeaderRight = styled.div``;

export default Header
