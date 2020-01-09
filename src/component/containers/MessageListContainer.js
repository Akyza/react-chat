import {connect} from 'react-redux';
import MessageList from "../MessageList";

const mapStateToProps = (state) => {
    return(
        {
            messages: state.messages.body,
        }
    )
}

export default connect(mapStateToProps)(MessageList);