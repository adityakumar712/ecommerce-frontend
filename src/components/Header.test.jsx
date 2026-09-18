import { it, expect, describe,  beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import {Header } from "./Header";
import { MemoryRouter } from "react-router";



describe('Header Component' , ()=>{
    let cart;

    beforeEach(()=>{
        cart = [{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }, {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 3,
      deliveryOptionId: '2'
    }];
    });

    it("displays the header correctly" , ()=>{
       render(
         <MemoryRouter>
            <Header cart={cart} />
        </MemoryRouter>
       );

       const logo = screen.getByTestId('header-logo');
       expect(logo).toHaveAttribute('src' , '/src/assets/images/logo-white.png');

       const mobilelogo = screen.getByTestId('header-mobile-logo');
       expect(mobilelogo).toHaveAttribute('src' , '/src/assets/images/mobile-logo-white.png');

       expect(screen.getByTestId('header-search-bar')).toBeInTheDocument();
       expect(screen.getByTestId('header-search-button')).toBeInTheDocument();

       const orderlink = screen.getByTestId('header-orders-link');
       expect(orderlink).toHaveTextContent('Orders');
       expect(orderlink).toHaveAttribute('href' , '/orders');

       const cartlink = screen.getByTestId('header-cart-link');
       expect(cartlink).toHaveTextContent('Cart');
       expect(cartlink).toHaveTextContent('5');
       expect(cartlink).toHaveAttribute('href' , '/checkout');
    })
})