import React, {Component} from'react';
import PropTypes from 'prop-types';
import Emoji from "react-emoji-render";

const MessageItem = (props) => {
    return(
        <div>
            <b className="Username">{props.message.username}</b>
            <div>
                <Emoji text={props.message.body}/>
            </div>
        </div>
    )
}

MessageItem.propTypes = {
    props: PropTypes.shape({
        username: PropTypes.string.isRequired,
        message: PropTypes.string
    })
};

export default MessageItem;