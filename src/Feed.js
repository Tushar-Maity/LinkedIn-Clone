import React from 'react'
import styled from "styled-components"
import CreateIcon from "@material-ui/icons/Create"

const Feed = () => {
    return (
        <FeedContainer>
            <FeedInputContainer>
                <FeedInput>
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </FeedInput>
            </FeedInputContainer>
        </FeedContainer>
    )
}

const FeedContainer = styled.div`
    flex: 0.6;
    margin: 0 20px;
`;

const FeedInputContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const FeedInput = styled.div`
    display: flex;
    border: 1px solid lightgray;
    color: gray;
    border-radius: 30px;
    padding: 10px;
    padding-left: 15px;

    form {
        display: flex;
        width: 100%;

        input {
            border: none;
            flex: 1;
            margin-left: 10px;
            font-weight: 600;
            outline-width: 0;
        }

        button {
            display: none;
        }
    }
`;

export default Feed
