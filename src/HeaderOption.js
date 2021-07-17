import React from 'react'
import styled from "styled-components"

const HeaderOption = ({ Icon, title }) => {
    return (
        <HeaderOptionsContainer>
            {Icon && <Icon style={{}}/>}
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
`;

export default HeaderOption
