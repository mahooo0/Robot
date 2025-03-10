import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Settings from '@/components/Setting';
import UserAside from '@/components/UserAside';
import React from 'react';

export default function Setting({ translates }) {
    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className=" w-[20%] h-[100%] mr-3">
                    <UserAside active={0} translates={translates} />
                </div>
                <Settings translates={translates} />
            </div>{' '}
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
