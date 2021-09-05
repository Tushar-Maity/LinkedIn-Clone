import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from "styled-components"
import InputOption from './InputOption';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = (
    {name, description, message, photoUrl}
) => {

    return (
        <PostContainer>
            <PostHeader>
                <Avatar />
                <PostInfo>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </PostInfo>
            </PostHeader>

            <PostBody>
                <p>{message}</p>
            </PostBody>

            <PostButton>
                <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </PostButton>
        </PostContainer>
    )
}

const PostContainer = styled.div`
    background-color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

const PostHeader = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const PostBody = styled.div`
    overflow-wrap: anywhere;
`;

const PostInfo = styled.div`
    margin-left: 10px;

    p {
        font-size: 12px;
        color: gray;
    }

    h2 {
        font-size: 15px;
    }
`;

const PostButton = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default Post
