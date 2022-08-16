import { CART_COUNT, } from '../constent';

const initialState = {
    count: 0,

};

export default function cartCountReducer(state = initialState,action) {
    switch (action.type) {
        case CART_COUNT: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: {
            return state
        }
    }

}

