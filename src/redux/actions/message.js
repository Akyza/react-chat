export const ADD_MESSAGE = "ADD_MESSAGE";
export const GET_MESSAGE = "GET_MESSAGE";

export const addMessage = (username, body) => ({
    type: ADD_MESSAGE,
    message: {username, body}
})