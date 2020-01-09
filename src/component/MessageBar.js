import React, {Component, useState, useEffect} from 'react';
import Login from './Login';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    margin-left: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`; 

const Input = styled.input`
    border-radius: 10px;
    border: radius;
    font-size: 16px;
    padding: 10px;
    margin-right: 10px;
`;

const MessageBar = (props) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message){
            props.handleMessageChange(message);
            setMessage("");
        }
    }
    
    return(
        <form>
            Message : <Input 
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            ></Input>
            <Button onClick={handleSubmit}>Valider</Button>
        </form>
    );
}

MessageBar.propTypes = {
    props: PropTypes.shape({
        handleMessageChange: PropTypes.func.isRequired
    })
}

export default MessageBar;