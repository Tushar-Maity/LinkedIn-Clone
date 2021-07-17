import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from "styled-components"

const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <HeaderOptionsContainer>
            {Icon && <Icon style={{}}/>}
            {avatar && <Avatar style={{}} src={avatar}/>}
            <h3>{title}</h3>
        </HeaderOptionsContainer>
    )
}

const HeaderOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: gray;
    margin-right: 20px;
    cursor: pointer;

    h3 {
        font-size: 12px;
        font-weight: 400;
    }

    &:hover {
        color: #000;
    }
`;

export default HeaderOption
