import FAQSection from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    getApp_content,
    getApp_faqs,
    getApp_hero,
    getInstructions,
    getMagical_word,
    getTranslates,
} from '@/services/Requests';
import Head from 'next/head';
const buttons = [
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e8fd20df3ae33ad2036a6de5c41a3bbcb0d95ebaf928e9297351167e2b90675?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Download on the App Store',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/641bdd3b79c1f185448c206d2f67508cda7070f089d6131a5813bf4b0eb394d3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Get it on Google Play',
    },
];

const Mobile_aplication = (data) => {
    const {
        app_hero,
        app_content,
        instructions,
        translates,
        magical_word,
        app_faqs,
        seo,
    } = data;

    const renderSection = (title, description, imgSrc) => (
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full">
            <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                {title}
            </h2>
            <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                {description}
            </p>
            <img
                loading="lazy"
                src={imgSrc}
                alt={`${title} illustration`}
                className="object-contain w-full aspect-[0.56] max-md:max-w-full"
            />
        </div>
    );
    useEffect(() => {
        AOS.init({
            duration: 600, // animation duration in milliseconds
            easing: 'ease-in-out', // animation easing
            // whether animation should happen only once
            offset: 100,
        });
    }, []);

    return (
        <>
            {' '}
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>{' '}
            <div>
                <Header activeIndex={4} whyindex={2} />
                <main className=" overflow-hidden">
                    <section className="flex relative flex-col justify-center items-start px-16 py-20 w-full min-h-[500px] max-md:px-5 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src={app_hero.image}
                            alt="Background"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <section className="flex relative flex-col max-w-full w-[565px]">
                            <div className="flex flex-col w-full text-green-950 max-md:max-w-full">
                                <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                    {app_hero.title}{' '}
                                </h1>
                                <p className="mt-3 text-base max-md:max-w-full">
                                    {app_hero.description}{' '}
                                </p>
                            </div>
                            <div className="flex gap-2.5 items-center self-start mt-12 max-md:mt-10 flex-wrap">
                                {buttons.map((button, index) => (
                                    <a href="#">
                                        <img
                                            key={index}
                                            loading="lazy"
                                            src={button.src}
                                            alt={button.alt}
                                            className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                                        />
                                    </a>
                                ))}
                            </div>
                        </section>
                    </section>
                    <section className="flex justify-center w-full">
                        <div className="flex flex-wrap gap-5 justify-between items-center self-center mt-24 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col self-stretch px-10 pt-10 pb-44 rounded-3xl bg-[#8E98B8] min-w-[240px] lg:w-[539px] w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
                                <div className="flex flex-col max-md:max-w-full">
                                    <h2 className="text-4xl font-semibold text-[#E4E9F8] max-md:max-w-full">
                                        {app_content.title}
                                    </h2>
                                    <p className="mt-3 text-base text-[#E4E9F8] max-md:max-w-full">
                                        {app_content.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] lg:w-[761px] w-full max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src={app_content.image}
                                    alt="Home cleaning robot illustration"
                                    className="w-full aspect-[1.52] max-md:max-w-full h-[502px] object-cover"
                                />
                            </div>
                        </div>
                    </section>
                    {/* Additional sections with renderSection */}
                    <section className="flex justify-center items-center mt-[100px]">
                        <h2 className="text-[40px] font-semibold text-center max-w-[540px] mx-[40px] leading-[60px]">
                            {translates.Güç_düğmesine}
                        </h2>
                    </section>
                    {instructions.map((instruction, i) => {
                        if (i % 2 === 1) {
                            return (
                                <section className="flex flex-row flex-wrap gap-10 lg:justify-between justify-center items-center w-full max-md:max-w-full px-[60px] mt-[48px]">
                                    <div
                                        className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full"
                                        data-aos="fade-right"
                                    >
                                        <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                                            {instruction.title}{' '}
                                        </h2>
                                        <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                                            {instruction.description}{' '}
                                        </p>
                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        className="flex overflow-hidden flex-col justify-center self-stretch py-6 my-auto rounded-3xl min-w-[240px] w-[538px] max-md:max-w-full"
                                    >
                                        <img
                                            loading="lazy"
                                            src={instruction.image}
                                            alt="iRobot Home App interface showing customizable cleaning map"
                                            className="object-contain w-full aspect-[0.56] max-md:max-w-full"
                                        />
                                    </div>
                                </section>
                            );
                        } else {
                            return (
                                <section className="flex flex-row-reverse flex-wrap gap-10 lg:justify-between justify-center items-center w-full max-md:max-w-full px-[60px] mt-[48px]">
                                    <div
                                        className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full"
                                        data-aos="fade-right"
                                    >
                                        <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                                            {instruction.title}{' '}
                                        </h2>
                                        <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                                            {instruction.description}{' '}
                                        </p>
                                    </div>
                                    <div
                                        data-aos="fade-left"
                                        className="flex overflow-hidden flex-col justify-center self-stretch py-6 my-auto rounded-3xl min-w-[240px] w-[538px] max-md:max-w-full"
                                    >
                                        <img
                                            loading="lazy"
                                            src={instruction.image}
                                            alt="iRobot Home App interface showing customizable cleaning map"
                                            className="object-contain w-full aspect-[0.56] max-md:max-w-full"
                                        />
                                    </div>
                                </section>
                            );
                        }
                    })}

                    <section className="relative flex flex-col justify-center items-start px-16 py-56 w-full min-h-[656px] max-md:px-5 max-md:py-24 max-md:max-w-full mt-[100px] text-white">
                        <img
                            loading="lazy"
                            src={magical_word.image}
                            alt="Background"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col mb-0 max-w-full w-[571px] max-md:mb-2.5">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                {magical_word.title}{' '}
                            </h1>
                            <p className="mt-3 text-base max-md:max-w-full">
                                {magical_word.description} \
                            </p>
                        </div>
                    </section>

                    <FAQSection
                        Title={'Tez-tez verilən suallar'}
                        data={app_faqs}
                    />
                    <section className="flex relative flex-col justify-center items-start px-16 py-64 w-full min-h-[800px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d435b1e2cfba66a9f2118ba0357118d694f66efcdf1dedf77aff001ce578240?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col mb-0 max-w-full w-[713px] max-md:mb-2.5">
                            <h1 className="text-4xl font-semibold text-green-950 max-md:max-w-full">
                                Robotlarınızın təmizliyinə nəzarət etmək üçün
                                iRobot Home Proqramını yükləyin
                            </h1>
                            <div className="flex gap-2.5 items-center self-start mt-12 max-md:mt-10">
                                <a href="#">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e332e583c02e31964a20847a93183f06e9f16265b972557cea88db62cb3282?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Download on the App Store"
                                        className="object-cover shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/384dec7c977891ca12aeeebc9eb14692b16aec493d138ec6c029edf172bc44db?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Download on the App Store"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};
export async function getServerSideProps(context) {
    const { lang = 'az' } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    // const app_hero = await getApp_hero(lang);/app_content
    const app_hero = await fetch(`${baseUrl}/section?type=app_hero`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());
    const app_content = await fetch(`${baseUrl}/app_content`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());
    const translates = await fetch(`${baseUrl}/translates`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());
    const instructions = await fetch(`${baseUrl}/instructions`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());
    const magical_word = await fetch(`${baseUrl}/magical_word`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());
    const app_faqs = await fetch(`${baseUrl}/app_faqs`, {
        headers: { 'Accept-Language': lang },
    }).then((response) => response.json());
    const seo = await fetch(
        `https://irobot.avtoicare.az/api/seo_pages?type=mobile`,
        {
            headers: { 'Accept-Language': lang },
        }
    ).then((response) => response.json());
    return {
        props: {
            seo,
            app_hero,
            app_content,
            translates,
            instructions,
            magical_word,
            app_faqs,
        },
    };
}

export default Mobile_aplication;
