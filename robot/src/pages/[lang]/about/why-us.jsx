import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import IROSComponent from '@/components/OsHero';
import ProductCategories from '@/components/ProductCategorys';
import AdvantagesSection from '@/components/whyAdvanteges';
import SupportSection from '@/components/whySupportSection';
import { ROUTES } from '@/Helpers/Routes';
import {
    getAdvantages,
    getChoices,
    getSupports,
    getTranslates,
} from '@/services/Requests';
import { useRouter } from 'next/router';
import React from 'react';

export default function WhyUs({ data }) {
    const { choices, translates, supports, advantages, hero } = data;
    const router = useRouter();
    const { lang } = router.query;
    console.log('lang', lang);

    return (
        <div>
            <Header activeIndex={4} whyindex={1} />
            <main>
                <section className="w-full flex justify-center">
                    <IROSComponent
                        data={hero}
                        Translates={translates}
                        isWhyPage={true}
                    />
                </section>
                <h2
                    className="self-center text-4xl font-semibold text-center text-[#132A1B] max-md:max-w-full mt-[60px] "
                    id="Seçimdə_kömək_etmək"
                >
                    {translates.Seçim_etməkdə}
                </h2>
                <section className="flex overflow-hidden flex-col justify-center px-[60px] py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full mt-[48px]">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            {choices.map((item, index) => {
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
                                                data.translates.Bizimlə_əlaqə
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
                <section className="py-[100px]" id="Etibarlı_dəstək">
                    <SupportSection
                        supports={supports}
                        title={translates?.SupportSectionTitle}
                        description={translates?.SupportSectionDesc}
                    />
                </section>
                <section className="pt-[100px] lg:px-[60px] px-[30px]">
                    <AdvantagesSection
                        advantages={advantages}
                        title={translates?.AdvantagesSectionTitle}
                    />
                </section>
                <section className="my-[100px] lg:px-[145px] ">
                    <h2 className="text-[40px] font-semibold text-center text-[#447355] ">
                        {translates.Digər_kateqoriyalar}
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
    const choices = await getChoices(lang);
    const supports = await getSupports(lang);
    const translates = await getTranslates(lang);
    const advantages = await getAdvantages(lang);
    const heroResponse = await fetch(`${baseUrl}/section?type=Irobot_Os_hero`, {
        headers: { 'Accept-Language': lang },
    });

    const hero = await heroResponse.json();
    return {
        props: {
            data: {
                hero,
                choices,
                translates,
                supports,
                advantages,
            }, // Data will be available in the BuyersGuide component as a
        },
    };
}
