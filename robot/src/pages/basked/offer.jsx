import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';
import OrderSummary from '@/components/ShoppingCart/OrderSummary';
import React from 'react';

export default function Index() {
    return (
        <div>
            <Header activeIndex={0} />
            <main className="px-4 md:px-[60px] pb-5">
                <h1 className="text-3xl md:text-[48px] font-semibold mt-5 md:mt-10">
                    Səbətim
                </h1>
                <div className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-5 mt-[40px]">
                    <CheckoutForm />
                    <OrderSummary />
                </div>
            </main>
            <Footer />
        </div>
    );
}
