import Footer from '@/components/Footer';
import Header from '@/components/Header';
import KreditMain from '@/components/Kredits';
import KreditDetail from '@/components/Kredits/detail';
import Settings from '@/components/Setting';
import UserAside from '@/components/UserAside';
import React from 'react';

export default function Kredits({ Translates }) {
    console.log('Translates', Translates);

    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className=" w-[20%] h-[100%] mr-3">
                    <UserAside active={3} translates={Translates} />
                </div>
                {/* <KreditMain translates={Translates} /> */}
                <KreditDetail />
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
