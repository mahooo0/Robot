import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCategories from '@/components/ProductCategorys';
import HelpSection from '@/components/sections/Help-Section';
import AcsesuaresSection from '@/components/sections/Home-acsesuares';
import VakumusHeroRight from '@/components/sections/Vakumus/heroRight';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';
import {
    get_Products_By_Param,
    getChoices,
    getSection,
    getTranslates,
} from '@/services/Requests';
import { useRouter } from 'next/router';
import React from 'react';
const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
export default function Paket({
    Vakumus_Hero,
    Translates,
    ProductBundle1,
    ProductBundle2,
    ProductBundle3,
    Home_acsesuares,
    choices,
}) {
    const router = useRouter();
    return (
        <div>
            {' '}
            <Header activeIndex={1} productIndex={3} />
            <main>
                {' '}
                <VakumusHeroRight
                    Vakumus_Hero={Vakumus_Hero}
                    Translates={Translates}
                />
                <section className="w-full  mt-[100px]" id="vakumus">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center">
                        {Translates?.Ən_güclü_təmizlik}{' '}
                    </h2>
                    <ProductBundle ProductBundle1={ProductBundle1.data} />

                    {/* <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <Product_Card_aute />
                        <Product_Card_aute />
                        <Product_Card_aute />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-7 gap-5">
                        <ProductCard_MD
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            bgcolor="#EEEEEE"
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                        <ProductCard_MD
                            desc={'Free Shipping on All Robot Orders'}
                            title="Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash Dock"
                            price={300}
                            bgcolor="#EEEEEE"
                            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/589a6fc8a10678a08f38e26b3e681773e5c2b98eb237cc16ab22563d23fbb54c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        />
                    </div> */}
                </section>
                <section className="w-full mt-[100px] bg-[#ECF3EA] py-[100px]">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center ">
                        {Translates?.Döşəmə_təmizliyinə}
                    </h2>

                    <ProductBundle ProductBundle1={ProductBundle2.data} />
                </section>
                <section className="w-full mt-[100px]  ">
                    <h2 className="text-[#447355] text-[40px] font-semibold text-center max-w-[985px]  self-center mx-auto">
                        {Translates?.Eksklüziv_robot_və}
                    </h2>

                    <ProductBundle ProductBundle1={ProductBundle3.data} />
                </section>
                <AcsesuaresSection
                    Home_acsesuares={Home_acsesuares}
                    Translates={Translates}
                />{' '}
                <HelpSection helpData={choices} translates={Translates} />
                {/* <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px]">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="self-center text-4xl font-semibold text-center !w-[100%] text-[#132A1B] ">
                            Seçim etməkdə kömək edək!
                        </h2>
                        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            {helpData.map((item, index) => (
                                <HelpCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </section>{' '} */}
                <section className="my-[100px] lg:px-[145px] ">
                    <h2 className="text-[40px] font-semibold text-center text-[#447355] ">
                        Digər kateqoriyalar
                    </h2>
                    <ProductCategories />
                </section>
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
        const Vakumus_HeroResponse = await fetch(
            `${baseUrl}/section?type=Bundles_Hero`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Home_acsesuaresResponse = await fetch(
            `${baseUrl}/section?type=Home_acsesuares`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Home_acsesuares = await Home_acsesuaresResponse.json();

        const Vakumus_Hero = await Vakumus_HeroResponse.json();

        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const Translates = await TranslatesResponse.json();

        const ProductBundle1Response = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const ProductBundle1 = await ProductBundle1Response.json();

        const ProductBundle2Response = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const ProductBundle2 = await ProductBundle2Response.json();

        const ProductBundle3Response = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const ProductBundle3 = await ProductBundle3Response.json();

        const choicesResponse = await fetch(`${baseUrl}/choices`, {
            headers: { 'Accept-Language': lang },
        });
        const choices = await choicesResponse.json();

        return {
            props: {
                Translates,
                Vakumus_Hero,
                ProductBundle1,
                ProductBundle2,
                ProductBundle3,
                choices,
                Home_acsesuares,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
