import React from 'react'
import styled from "styled-components"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from './Post'

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

                <FeedInputOptions>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
                </FeedInputOptions>
            </FeedInputContainer>

            <Post 
                name="Tushar Maity" description="This is a test" message="It is amazing"  
            />
            {/* Posts */}
        </FeedContainer>
    )
}

const FeedContainer = styled.div`
    flex: 0.6;
    margin: 0 20px;
    /* optional width to add */
    width: 620px;
`;

const FeedInputContainer = styled.div`
    background-color: #fff;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    /* width: 450px; optional*/
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

const FeedInputOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default Feed
