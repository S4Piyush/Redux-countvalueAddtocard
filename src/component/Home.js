import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { cartCountAction,} from "../redux/Action/CartCount";



function Home (){
    const cartCount = useSelector((state) => state.cartCount);
    // const cartDetails = useSelector((state) => state.cartDetails);

    const dispatch = useDispatch();

    const onCartCountUpdate = () => {
        const updateCount = cartCount.count + 1
        dispatch(cartCountAction({count: updateCount}))
        // dispatch(cartDetailsAction({productName: 'I-phone', productDetails: "1000"}))
    }

    const onCartdecrement =()=>{ 
        const updateCount = cartCount.count - 1
        dispatch(cartCountAction({count: updateCount}))
      
    }

    return(
        <div>
            <div className="header">
                <div className="cart-icon">
                    <div className="cart-content">
                        <img src="https://media.istockphoto.com/vectors/cart-shopping-cart-shopping-in-the-store-vector-illustration-vector-id1387101919?b=1&k=20&m=1387101919&s=170667a&w=0&h=AfpcZnjUGVQ2BjipHVgx7Ep3yFg78HV22_FL8mHVz_4="/>
                        <div className="cart-count">{cartCount.count}</div>
                    </div>
                </div>
            </div>
            
            <div className="add-to-card">
                
              
            </div>
            <div className="cart-wrapper">
                <div className="img wrapper item">
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631776566/Croma%20Assets/Communication/Mobiles/Images/243463_wwwi8s.png/mxw_640,f_auto"/>
                </div>
                <div className="img-wrapper item">
                    <p>
                        {/* {cartDetails.productName} */}
                       I-PHONE  PRICE - $1000
                    </p>
                    <p>
                    {/* {cartDetails.productDetails} */}
                       
                    </p>
                </div>
                <div className="btn-wrapper item">
                    <button className="button" onClick={onCartCountUpdate}>Add tocart + </button>
                    <button  onClick={onCartdecrement} disabled={(cartCount.count==0)? true : false}>Add tocart- </button>
                   
                </div>
            </div>
        </div>
    )   
}
export default Home;