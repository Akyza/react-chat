import { createStore } from 'redux';
import reducerMessage from './reducers/message';

const store = createStore(
    reducerMessage,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;