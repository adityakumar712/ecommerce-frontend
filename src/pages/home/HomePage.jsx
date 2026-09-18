import axios from 'axios';
import { useEffect , useState} from 'react';
import {Header} from '../../components/Header';
import { ProductsGrid } from './productsGrid';
import { useSearchParams } from 'react-router';



import './HomePage.css';
import { API_BASE_URL } from "../../config/api";

export function HomePage({cart , loadCart}){
    const [products , setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    
    useEffect(()=>{
      const getHomeData = async ()=>{
        const urlPath = search ? `${API_BASE_URL}/api/products?search=${search}` : `${API_BASE_URL}/api/products`;
        const response = await axios.get(urlPath);

        setProducts(response.data);
        
      }

      getHomeData();
      
    }, [search]);
   

    return (
    <>   

        <title>Ecommerce Project</title>
        <link rel="icon" type="image/svg+xml" href="./images/home-favicon.png" />
        <Header cart={cart}/>
        <div className="home-page">

        <ProductsGrid products={products} loadCart={loadCart}/>
        
        </div>
    </> 
    );
}