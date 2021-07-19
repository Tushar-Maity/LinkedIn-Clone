import React from 'react'
import styled from "styled-components"

const InputOption = ({ Icon, title, color }) => {
    return (
        <InputOptionContainer>
            <Icon style={{color: color}}/>
            <h4>{title}</h4>
        </InputOptionContainer>
    )
}

const InputOptionContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    color: gray;
    cursor: pointer;

    h4 {
        margin-left: 5px;
    }

    &:hover {
        background-color: whitesmoke;
        border-radius: 10px;
    }
`;

export default InputOption
