import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { RefetchBusked } from '@/components/recoil/Atom';
import ShoppingCart from '@/components/ShoppingCart';
import OrderSummary from '@/components/ShoppingCart/OrderSummary';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

export default function Order({ translates }) {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const [refetchBusked, setRefetchBusked] = useRecoilState(RefetchBusked);

    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
        refetchBusked,
    ]);

    return (
        <div>
            <Header activeIndex={0} />
            <main className="px-4 md:px-[60px] pb-5">
                <h1 className="text-3xl md:text-[48px] font-semibold mt-5 md:mt-10">
                    {translates.Səbətim}
                </h1>
                <div className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-5 mt-[40px]">
                    <CheckoutForm translates={translates} />
                    <OrderSummary
                        isConfrim={true}
                        basked={basked}
                        translates={translates}
                    />
                </div>
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
