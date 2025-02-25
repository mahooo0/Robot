import Header from '@/components/Header';
import Orders from '@/components/Orders';
import UserAside from '@/components/UserAside';

import React from 'react';

export default function index({ Translates }) {
    console.log('Translates', Translates);

    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className="w-[20%] h-[100%] mr-3">
                    <UserAside active={1} />
                </div>
                <Orders Translates={Translates} />
            </div>
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    const Translates = await fetch(`${baseUrl}/translates`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());

    return {
        props: {
            Translates,

            // Data will be available in the BuyersGuide component as a
        },
    };
}
