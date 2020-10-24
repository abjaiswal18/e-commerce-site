import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from '../components/CheckoutSteps';
// import { addToCart, removeFromCart } from '../actions/CartActions';
import { createOrder, detailsOrder } from '../actions/orderActions';
import { Link } from "react-router-dom";


function OrderScreen(props){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsOrder(props.match.params.id));
        return () => {
        
        }
    }, []);

    const orderDetails = useSelector(state => state.orderDetails);
    const {loading, order, error} = orderDetails;
    const payHandler = () => {};
    console.log(orderDetails);

    return  loading ? 
    <div> Loading...</div> : error ?
    <div>{error}</div> :
    <div>
        <div className="placeorder">
            <div className="placeorder-info">
                <div>
                    <h3>
                        Shipping
                    </h3>
                    <div>
                        {order.shipping.address}, {order.shippping.city},
                        {order.shipping.postalCode}, {order.shipping.country},
                    </div>
                    <div>
                        {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
                    </div>
                </div>
                <div>
                    <h3>Payment</h3>
                    <div>
                        Payment Method: {order.payment.paymentMethod}
                    </div>
                    <div>
                        {order.isPaid ? "Paid at"+ order.paidAt : "Not Paid."}
                    </div>
                </div>
                <div>
                    {order.isPaid ? "Paid at" + order.paidAt : "Not Paid."}
                </div>
            </div>
            <div>
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {order.orderItems.length === 0 ? 
                    <div> Cart is empty</div> : 
                    order.orderItems.map(item => 
                        <li>
                            <div className="cart-image">
                                <img src = {item.image} alt = "product" />
                            </div>
                            <div className="cart-name">
                                <div>
                                    <Link to={"/product/" + item.product}>
                                        {item.name}
                                    </Link>
                                </div>
                                <div>
                                    Qty: {item.qty}
                                </div>
                            </div>
                            <div className="cart-price">
                                Rs{item.price}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        <div className="placeorder-action">
            <ul>
                <li>
                    <button className="button primary full-width" onClick={payHandler}>Pay Now</button>
                </li>
                <li>
                    <h3>Order Summary</h3>
                </li>
                <li>
                    <div>Items</div>
                    <div>Rs{order.itemsPrice}</div>
                </li>
                <li>
                    <div>Shipping</div>
                    <div>Rs{order.shippingPrice}</div>
                </li>
                <li>
                    <div>Tax</div>
                    <div>Rs{order.taxPrice}</div>
                </li>
                <li>
                    <div>Order Total</div>
                    <div>Rs{order.totalPrice}</div>
                </li>
            </ul>
        </div>
    </div>
}

export default OrderScreen;