import Header from '@/components/Header';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import Settings from '@/components/Setting';
import UserAside from '@/components/UserAside';
import React from 'react';

export default function index() {
    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className="w-[20%] h-[100%] mr-3">
                    <UserAside active={2} />
                </div>
                <div className="w-full h-full bg-[#F1F5F0] flex flex-col">
                    <h3 className="text-[28px] font-semibold m-[40px]">
                        Bəyəndiklərim
                    </h3>
                    <div className="flex flex-row justify-between w-full px-[50px] flex-wrap gap-5">
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                    </div>
                </div>
            </div>
        </div>
    );
}
