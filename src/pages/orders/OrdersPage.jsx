import { Header } from "../../components/Header.jsx";
import axios from "axios";
import { useState, useEffect, } from "react";
import "./OrdersPage.css";
import {OrdersGrid} from './OrdersGrid.jsx';
import { API_BASE_URL } from "../../config/api";


export function OrdersPage({ cart , loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get(
        `${API_BASE_URL}/api/orders?expand=products`,
      );
      setOrders(response.data);
    };

    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href="./images/orders-favicon.png"
      />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
