import { CART_COUNT,CART_DETALIS, } from '../constent';

export const cartCountAction = (data) => {
    return(
        {
            type: CART_COUNT,
            payload: data
        }

    )
};


// export const cartDetailsAction = (data) => {
//     return(
//         {
//             type: CART_DETALIS,
//             payload: data
//         }

//     )
// };


