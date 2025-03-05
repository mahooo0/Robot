import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getChoices, getQuestions, getTranslates } from '@/services/Requests';
import { useRecoilState } from 'recoil';
import { languageState } from '@/components/recoil/Atom';
import { ROUTES } from '@/Helpers/Routes';
import Head from 'next/head';

const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default function BuyersGuide({ data }) {
    console.log('data:', data.questions);
    console.log('data:', data.choices);
    const router = useRouter();
    const { seo } = data;
    const { lang } = router.query;
    // const [language, setlanguage] = useRecoilState(languageState);

    // const {
    //     data: initialQuestions = [],
    //     isLoading: initialQuestionsLoading,
    //     isError,
    // } = useQuery({
    //     queryKey: ['initialQuestions', language],
    //     queryFn: () => getQuestions(language),
    // });
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
                <Header activeIndex={4} whyindex={3} />
                <main className=" overflow-hidden">
                    <section className="flex relative flex-col items-center px-20 pt-32 pb-7 w-full min-h-[500px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0ce25143976452c62e52edd732f9e520ab2fc787ed9afaf9f03a0be7fef783?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-cover absolute inset-0 size-full"
                        />

                        <div className="flex relative flex-col max-w-full w-[722px]">
                            <div className="flex flex-col items-start w-full text-center text-white max-md:max-w-full">
                                <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                    {data.questions.hero.title}
                                </h1>
                                <p className="mt-3 text-base max-md:max-w-full">
                                    {data.questions.hero.description}
                                </p>
                            </div>
                            <div
                                className="flex flex-col items-center self-center mt-12 w-[50px] max-md:mt-10 animate-bounce"
                                onClick={() => scrollToElement('question1')}
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/428aeee1a17a1210b9014598063ed4ec9d3505180e3fdb2380f827efdeb8bb72?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt="Scroll down indicator"
                                    className="object-contain w-full aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d98f485bd8a61ea7c98e81c4a88684bb1e51e00a65e4894e9c0f4e67b12ad67?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain mt-2.5 aspect-square w-[26px]"
                                />
                            </div>
                        </div>
                    </section>
                    {/* question1 */}
                    {data.questions.questions.map((question) => (
                        <section
                            data-aos="fade-up"
                            className="flex flex-col w-full max-md:max-w-full lg:px-[60px] px-[30px] mt-[100px]"
                            id="question1"
                        >
                            <div className="flex flex-col w-full max-md:max-w-full items-center">
                                <h2 className="text-4xl font-semibold text-center text-black max-w-full">
                                    {question.title}
                                </h2>

                                <div
                                    className="mt-5 text-base text-black text-opacity-80 max-md:max-w-full max-w-[1320px]"
                                    dangerouslySetInnerHTML={{
                                        __html: question?.description,
                                    }}
                                ></div>
                            </div>{' '}
                            <div className="flex overflow-hidden flex-col mt-10 w-full rounded-3xl max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    src={question.images[0]?.image}
                                    alt="Illustration of a clean home environment"
                                    className="object-cover w-full aspect-[2.82] max-md:max-w-full"
                                />
                            </div>
                        </section>
                    ))}

                    <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[100px] mb-[100px]">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <h2 className="self-start text-4xl font-semibold text-[#132A1B] max-md:max-w-full w-full text-center">
                                {data.translates.Seçim_etməkdə}
                            </h2>
                            <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                                {data.choices.map((item, index) => {
                                    if (index === 0) {
                                        return (
                                            <HelpCard
                                                key={index}
                                                title={item.title}
                                                description={item.description}
                                                imageSrc={item.icon}
                                                linkText={
                                                    data.translates.Testdən_keç
                                                }
                                                page={`/${lang}/user/help`}
                                            />
                                        );
                                    } else if (index === 1) {
                                        return (
                                            <HelpCard
                                                key={index}
                                                title={item.title}
                                                description={item.description}
                                                imageSrc={item.icon}
                                                linkText={
                                                    data.translates
                                                        .Bizimlə_əlaqə
                                                }
                                                page={`/${lang}/contact`}
                                            />
                                        );
                                    }
                                    return (
                                        <HelpCard
                                            key={index}
                                            title={item.title}
                                            description={item.description}
                                            imageSrc={item.icon}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
export async function getServerSideProps(context) {
    const { lang = 'az' } = context.params;
    const questions = await getQuestions(lang);
    const choices = await getChoices(lang);
    const translates = await getTranslates(lang);
    const seo = await fetch(
        `https://irobot.avtoicare.az/api/seo_pages?type=10`,
        {
            headers: { 'Accept-Language': lang },
        }
    ).then((response) => response.json());
    return {
        props: {
            data: { seo, questions, choices, translates }, // Data will be available in the BuyersGuide component as a
        },
    };
}
