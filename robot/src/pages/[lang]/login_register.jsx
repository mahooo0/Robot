import Header from '@/components/Header';
import LoginForum from '@/components/LoiinForum';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';

export default function Login_register({ Translates, hero }) {
    const router = useRouter();
    return (
        <div className="w-full h-[100vh] bg-[#F2F5F0] flex flex-row  relative">
            <div className="flex justify-center items-center lg:w-1/2 md:w-1/2 w-full h-full">
                <LoginForum translates={Translates} />
            </div>
            <div className="w-1/2 p-5 h-full rounded-3xl overflow-hidden  lg:block md:block hidden">
                <img
                    className="w-full h-full object-cover rounded-3xl"
                    src={hero.image}
                />
            </div>
            <div
                className=" absolute rounded-full w-[48px] h-[48px] flex justify-center items-center top-[40px] left-[40px] bg-white  rotate-180"
                onClick={() => router.push(`/${router.query.lang}`)}
            >
                <img src="/svg/Strelka_black.svg" className=" rotate-180" />
            </div>
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
        const heroRespose = await fetch(`${baseUrl}/section?type=Mops_Hero`, {
            headers: { 'Accept-Language': lang },
        });
        const hero = await heroRespose.json();

        return {
            props: {
                Translates,
                hero,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
