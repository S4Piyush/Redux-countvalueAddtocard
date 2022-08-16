
import {configureStore} from  "@reduxjs/toolkit"
import cartCountReducer from "./redux/Reducer/CartCountReducer";
import cartDetailsReducer from './redux/Reducer/CartDetailsReducer';

// const store = createStore(reducer,[]);

const store = configureStore({
    reducer : {
        cartCount: cartCountReducer,
        cartDetails: cartDetailsReducer
    }
})

export default store;   