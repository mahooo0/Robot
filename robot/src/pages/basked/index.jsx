import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';
import React from 'react';

export default function index() {
    return (
        <div>
            <Header activeIndex={0} />
            <main className="px-[60px] pb-[20px]">
                <h1 className="text-[48px] font-semibold mt-[40px] text-[]">
                    Səbətim
                </h1>
                <ShoppingCart />
            </main>
            <Footer />
        </div>
    );
}
