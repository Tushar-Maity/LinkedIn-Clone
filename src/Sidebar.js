import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from "styled-components"

const Sidebar = () => {

    const recentItem = (topic) => (
        <SidebarRecentItem>
            <SidebarHash>#</SidebarHash>
            <p>{topic}</p>
        </SidebarRecentItem>
    )

    return (
        <SidebarContainer>
            <SidebarTop>
                <img src="https://images.unsplash.com/photo-1533735380053-eb8d0759b24a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Tushar Maity</h2>
                <h4>tusharmaity578dsdagmail.com</h4>
            </SidebarTop>

            <SideabarStats>
                <SidebarStat>
                    <p>Who viewed you</p>
                    <SidebarStatNumber>2,215</SidebarStatNumber>
                </SidebarStat>

                <SidebarStat>
                    <p>Views on posts</p>
                    <SidebarStatNumber>2,545</SidebarStatNumber>
                </SidebarStat>
            </SideabarStats>

            <SidebarBottom>
                <p>Recent</p>
                {recentItem('ReactJS')}
                {recentItem('NextJS')}
                {recentItem('Netflix')}
                {recentItem('JavaScript')}
                {recentItem('MaterialUI')}
                {recentItem('Technologies')}
                {recentItem('Mobile responsive')}
            </SidebarBottom>
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div`
    top: 80px;
    position: sticky;
    flex: 0.2;
    border-radius: 10px;
    text-align: center;
    height: fit-content;
`;

const SidebarTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 0;
    background-color: white;
    padding-bottom: 10px;

    img {
        margin-bottom: -20px;
        width: 100%;
        height: 60px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
    }

    h2 {
        font-size: 18px;
    }

    h4 {
        color: gray;
        font-size: 12px;
    }
    
    .sidebar__avatar {
        margin-bottom: 10px;
    }
`;

const SideabarStats = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    background-color: #fff;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const SidebarStat = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    p {
        color: gray;
        font-size: 13px;
        font-weight: 600;
    }
`;

const SidebarStatNumber = styled.p`
    font-weight: bold;
    color: #0a66c2 !important;
`;

const SidebarBottom = styled.div`
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 10px;
`;

const SidebarRecentItem = styled.div`
    display: flex;
    font-size: 13px;
    cursor: pointer;
    color: gray;
    font-weight: bolder;
    margin-bottom: 5px;
    padding: 5px;

    &:hover {
        background-color: whitesmoke;
        border-radius: 10px;
        cursor: pointer;
        color: black;
    }
`;

const SidebarHash = styled.span``;

export default Sidebar
