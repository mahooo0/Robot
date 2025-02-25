import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';
import OrderSummary from '@/components/ShoppingCart/OrderSummary';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';

export default function Order() {
    const router = useRouter();
    const { lang = 'az' } = router.query;

    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);
    console.log(basked);

    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    return (
        <div>
            <Header activeIndex={0} />
            <main className="px-4 md:px-[60px] pb-5">
                <h1 className="text-3xl md:text-[48px] font-semibold mt-5 md:mt-10">
                    Səbətim
                </h1>
                <div className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-5 mt-[40px]">
                    <CheckoutForm />
                    <OrderSummary isConfrim={true} basked={basked} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
