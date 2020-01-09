import MessageItem from './MessageItem';
import React, {Component, useState} from 'react';
import {useSelector} from 'react-redux';

const MessageList = () => {

    const messages = useSelector(state => state.messages);

    return(
            messages.map(function(item, i){
            return <MessageItem 
            message={item}
            key={i}
            />
        })
    )
}

export default MessageList;