import {createStore} from 'redux';
import reducer from '../reducer/todo';

const store = createStore(reducer);
export default store;