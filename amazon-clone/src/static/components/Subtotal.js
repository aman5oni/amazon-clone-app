import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../css/Subtotal.css';
import {useStateValue} from "../components/StateProvider";
import {getBasketTotal} from "../components/Reducer";
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order Contains A Gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
