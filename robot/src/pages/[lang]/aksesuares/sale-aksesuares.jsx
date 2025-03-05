import React from 'react';
import Header from '@/components/Header';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import HelpCard from '@/components/HelpCard';
import Footer from '@/components/Footer';
import SaleAcsesuaresHero from '@/components/sections/Help-Section/SaleAcsesuaresHero';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';
import { getChoices } from '@/services/Requests';
import HelpSection from '@/components/sections/Help-Section';
import Head from 'next/head';

export default function SaleAksesuares({
    accessoryCategories,
    Accessoryes,
    choices,
    Translates,
    seo,
}) {
    console.log('Accessoryes', Accessoryes);

    return (
        <>
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>{' '}
            <div>
                {' '}
                <Header activeIndex={3} offerindex={1} />
                <main className="mb-[100px]">
                    <SaleAcsesuaresHero
                        accessoryCategories={accessoryCategories}
                        Translates={Translates}
                    />

                    <section className="w-full lg:px-[60px] px-[30px] mt-[40px] bg-[#ECF3EA] py-[100px]">
                        <h2 className=" text-[48px] font-semibold text-center  mt-[40px]  text-[#447355]">
                            {Translates._Endirim}{' '}
                        </h2>
                        <ProductBundle ProductBundle1={Accessoryes.data} />
                    </section>
                    <section className="w-full lg:px-[60px] px-[30px] mt-[40px] bg-[#FFFFFF] py-[100px]">
                        <h2 className=" text-[48px] font-semibold text-center  mt-[40px]  text-[#447355]">
                            {Translates.Digər_aksesuarlar}
                        </h2>
                        <ProductBundle ProductBundle1={Accessoryes.data} />
                    </section>
                    <HelpSection helpData={choices} translates={Translates} />
                </main>
                <Footer />
            </div>
        </>
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
        const AccessoryesResponse = await fetch(
            `${baseUrl}/accessories?is_discounted=true`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Accessoryes = await AccessoryesResponse.json();
        const AccessorySeriesResponse = await fetch(
            `${baseUrl}/accessorySeries`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const AccessorySeries = await AccessorySeriesResponse.json();

        const accessoryCategoriesResponse = await fetch(
            `${baseUrl}/accessoryCategories`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const accessoryCategories = await accessoryCategoriesResponse.json();
        const accessoryTypesResponse = await fetch(
            `${baseUrl}/accessoryTypes`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const accessoryTypes = await accessoryTypesResponse.json();
        const choicesResponse = await fetch(`${baseUrl}/choices`, {
            headers: { 'Accept-Language': lang },
        });
        const choices = await choicesResponse.json();
        const seo = await fetch(
            `https://irobot.avtoicare.az/api/seo_pages?type=sale_acsesuares`,
            {
                headers: { 'Accept-Language': lang },
            }
        ).then((response) => response.json());
        return {
            props: {
                seo,
                Translates,
                AccessorySeries,
                accessoryCategories,
                accessoryTypes,
                Accessoryes,
                choices,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
