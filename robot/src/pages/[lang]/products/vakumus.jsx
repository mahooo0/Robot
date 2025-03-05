import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCategories from '@/components/ProductCategorys';
import HelpSection from '@/components/sections/Help-Section';
import VAkumusBunner from '@/components/sections/Vakumus/Bunner';
import VakumusHero from '@/components/sections/Vakumus/hero';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';
import TypesOfRobots from '@/components/sections/Vakumus/TypesOfRobots';
import {
    get_Products_By_Param,
    getChoices,
    getSection,
    getTranslates,
    getTypesOfRobots,
} from '@/services/Requests';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function category({
    seo,
    Vakumus_Hero,
    Translates,
    typesOfRobots,
    Vakumus_Bunner_1,
    ProductBundle1,
    Vakumus_Bunner_2,
    ProductBundle2,
    ProductBundle3,
    Vakumus_Bunner_3,
    choices,
}) {
    console.log('Vakumus_Hero', Vakumus_Hero);

    return (
        <>
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>{' '}
            <div>
                {' '}
                <Header activeIndex={1} productIndex={0} />
                <main>
                    {' '}
                    <VakumusHero
                        Vakumus_Hero={Vakumus_Hero}
                        Translates={Translates}
                    />
                    <TypesOfRobots
                        typesOfRobots={typesOfRobots}
                        Translates={Translates}
                    />
                    <VAkumusBunner Vakumus_Bunner={Vakumus_Bunner_1} />{' '}
                    <ProductBundle ProductBundle1={ProductBundle1.data} />
                    <div className="bg-[#ECF3EA] ">
                        <VAkumusBunner Vakumus_Bunner={Vakumus_Bunner_2} />{' '}
                        <ProductBundle ProductBundle1={ProductBundle2.data} />
                    </div>
                    <VAkumusBunner Vakumus_Bunner={Vakumus_Bunner_3} />{' '}
                    <ProductBundle ProductBundle1={ProductBundle3.data} />
                    <HelpSection helpData={choices} translates={Translates} />
                    <section className="my-[100px] lg:px-[145px] ">
                        <h2 className="text-[40px] font-semibold text-center text-[#447355] ">
                            {Translates.Digər_kateqoriyalar}
                        </h2>
                        <ProductCategories />
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {
    const { lang } = context.params;

    const Vakumus_Hero = await getSection(lang, 'Vakumus_Hero');
    const seo = await fetch(
        `https://irobot.avtoicare.az/api/seo_pages?type=vakumus`,
        {
            headers: { 'Accept-Language': lang },
        }
    ).then((response) => response.json());
    const Vakumus_Bunner_1 = await getSection(lang, 'Vakumus-Bunner-1');
    const Vakumus_Bunner_2 = await getSection(lang, 'Vakumus-Bunner-2');
    const Vakumus_Bunner_3 = await getSection(lang, 'Vakumus-Bunner-3');
    const Translates = await getTranslates(lang);
    const typesOfRobots = await getTypesOfRobots(lang);
    const ProductBundle1 = await get_Products_By_Param(lang, `?type_id=1`);
    const ProductBundle2 = await get_Products_By_Param(lang, '?type_id=7');
    const ProductBundle3 = await get_Products_By_Param(lang, '?type_id=3');
    const choices = await getChoices(lang);

    return {
        props: {
            seo,
            Translates,
            Vakumus_Hero,
            typesOfRobots,
            Vakumus_Bunner_2,
            Vakumus_Bunner_1,
            Vakumus_Bunner_3,
            ProductBundle1,
            ProductBundle2,
            ProductBundle3,
            choices,
            // Data will be available in the BuyersGuide component as a
        },
    };
}
