import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from "styled-components"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarTop>
                <img src="" alt=""/>
                <Avatar />
                <h2>Tushar Maity</h2>
                <h4>tusharmaity989@gmail.com</h4>
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
        </SidebarContainer>
    )
}

const SidebarContainer = styled.div``;

const SidebarTop = styled.div``;

const SideabarStats = styled.div``;

const SidebarStat = styled.div``;

const SidebarStatNumber = styled.p``;

export default Sidebar
