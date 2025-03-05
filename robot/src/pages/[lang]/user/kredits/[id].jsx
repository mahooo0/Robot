import Footer from '@/components/Footer';
import Header from '@/components/Header';
import KreditMain from '@/components/Kredits';
import KreditDetail from '@/components/Kredits/detail';
import Settings from '@/components/Setting';
import UserAside from '@/components/UserAside';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function Kredits({ Translates }) {
    console.log('Translates', Translates);
    const router = useRouter();
    const { lang, id } = router.query;
    const { data: KreditDetailData } = GETRequest(
        `/credit-detail/${id}`,
        'credit-detail',
        [lang, id]
    );
    useEffect(() => {
        console.log('KreditDetailData', KreditDetailData);
    }, [KreditDetailData]);
    return (
        <div className=" w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className=" w-[20%]  mr-3">
                    <UserAside active={3} translates={Translates} />
                </div>
                <KreditDetail
                    date={KreditDetailData?.date}
                    productImage={KreditDetailData?.product.image}
                    productName={KreditDetailData?.product.title}
                    months={KreditDetailData?.product.month}
                    interestRate={KreditDetailData?.product.percent}
                    monthlyPayment={KreditDetailData?.product.monthly_payment}
                    payments={KreditDetailData?.credit_items.map((item) => {
                        return {
                            date: item.date,
                            amountDue: item.monthly_payment,
                            amountPaid: 1,
                            status: item.status,
                            remainingAmount: item.remaining_amount,
                        };
                    })}
                    Translates={Translates}
                />
                {/* {
            date: 'string',
            amountDue: 1,
            amountPaid: 1,
            status: 'string',
            remainingAmount: 1,
        }, */}
            </div>
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
        const Translates = await TranslatesResponse.json();

        return {
            props: {
                Translates,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
