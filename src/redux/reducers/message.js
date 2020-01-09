import { ADD_MESSAGE } from '../actions/message';

const INITIAL_STATE = {
    messages : [
        {username: 'TestUser', body: "Le chat est en cours, mais il ne marche pas encore"}
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages, {body: action.message, username: "TestUser"}
                ]
            }
    
        default:
            return state;
    }
}