import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ShoppingCart from '@/components/ShoppingCart';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';

export default function Basket({ translates }) {
    const router = useRouter();
    const { lang = 'az' } = router.query;

    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);

    // const { data: translates } = GETRequest(`/translates`, 'translates', [
    //     lang,
    // ]);
    return (
        <div>
            <Header activeIndex={0} />
            <main className="px-[60px] pb-[20px]">
                <h1 className="text-[48px] font-semibold mt-[40px] text-[]">
                    {translates?.Səbətim}
                </h1>
                <ShoppingCart basked={basked} translates={translates} />
            </main>
            <Footer />
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch data sequentially

        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const translates = await TranslatesResponse.json();

        return {
            props: {
                translates,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
