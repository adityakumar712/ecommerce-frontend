import axios from "axios";
import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./Ordersummary";
import { PaymentSummary } from "./PaymentSummary";
import { API_BASE_URL } from "../../config/api";


export function CheckoutPage({ cart , loadCart }) {
 const [deliveryOptions, setDeliveryOptions] = useState([]);
 const [paymentSummary , setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async ()=>{
        const response = await axios.get(`${API_BASE_URL}/api/delivery-Options?expand=estimatedDeliveryTime`);
        setDeliveryOptions(response.data);
    };

    fetchCheckoutData();
   }, []);

  useEffect(()=>{
    const fetchPaymentSummary = async ()=>{
      const response = await axios.get(`${API_BASE_URL}/api/payment-summary`);
      setPaymentSummary(response.data);
    };

    fetchPaymentSummary();
  }, [cart]);




  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="./images/cart-favicon.png" />
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
         
         <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
        </div>
      </div>
    </>
  );
}
