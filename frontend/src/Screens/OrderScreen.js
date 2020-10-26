import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';
import Axios from "axios";
import {PayPalButton} from "react-paypal-button-v2";
// import PayButton from "../components/PaypalButton";
function OrderScreen(props) {

  const orderId = props.match.params.id;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;
  const [sdkReady, setSdkReady] = useState(false);
  useEffect(() => {

    const addPayPalScript = async () => {
      const { data: clientId } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        console.log("enter");
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (successPay) {
      props.history.push("/profile");
    } else {
      if(!order){
        dispatch(detailsOrder(orderId));
      }else if(order && !order.isPaid){
        if(!order.isPaid){
          if (!window.paypal) {
            addPayPalScript();
          } else {
            setSdkReady(true);
        }
      }
    }}
    return () => {
    };
  }, [successPay, order, orderId, dispatch]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }

  
  const payHandler = () => { };
  console.log(orderDetails)
  return loading ? <div>Loading ....</div> : error ? <div>{error}</div> :
    (<div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Shipping
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},
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
              {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
          </h3>
                <div>
                  Price
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
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
                  )
              }
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={handleSuccessPayment}
                    ></PayPalButton>
                  
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
    </div>)
}
export default OrderScreen;