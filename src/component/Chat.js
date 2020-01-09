import MessageBar from './MessageBar';
import MessageList from './MessageList';
import React, {Component, useState} from 'react';
import styled from 'styled-components';
import Redux from 'redux';

const Div = styled.div`
    background-color : #66ffff
`;

const customMiddleware = store => next => action =>{
    console.log(action);
    return next(action);
}

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const handleMessageChange = message => {
        // les ... permets de récupérer les anciens messages
        setMessages([...messages, {body: message, username: "testUser"}]);
    }

    return (
        <Div>
            <h1>Chat Li Chat'Line !</h1>
            <MessageList
            onSubmitBar={handleMessageChange}
            stateMessages={messages}/>
            <MessageBar handleMessageChange = {handleMessageChange}/>
        </Div>
    )
}

export default Chat;