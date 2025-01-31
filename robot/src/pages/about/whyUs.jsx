import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import IROSComponent from '@/components/OsHero';
import ProductCategories from '@/components/ProductCategorys';
import AdvantagesSection from '@/components/whyAdvanteges';
import SupportSection from '@/components/whySupportSection';
import { ROUTES } from '@/Helpers/Routes';
import React from 'react';

export default function WhyUs({ data, lang }) {
    const { choices, translates, supports, advantages } = data;
    const helpData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/3bcd91055783e850ce350db9e3b1e18a036771ee4dbb602d047b0e9ceee40d68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Testdən keç',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Testdən keç',
            page: '/user/help',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/274fcf70462b6cfce6ed1a77a92ed79c22246f989eba9ebe4321020077cf9d53?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Ekspert məsləhəti',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
            linkText: 'Bizimlə əlaqə',
            page: '/contact',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/79161b1f02d51e9a189b3e58d236194f37f61ff45fdcf797e0654e2adb59b400?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Mağazamıza yaxınlaş',
            linkText: 'Testdən keç',
            page: '/products/compare',
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
        },
    ];
    return (
        <div>
            <Header activeIndex={4} whyindex={1} />
            <main>
                <section className="w-full flex justify-center">
                    <IROSComponent />
                </section>
                <h2 className="self-center text-4xl font-semibold text-center text-[#132A1B] max-md:max-w-full mt-[60px] ">
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
                                            page={`/${lang}/${ROUTES.test[lang]}`}
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
                                            page={`/${lang}/${ROUTES.cotact[lang]}`}
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
                <section className="py-[100px]">
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
                        Digər kateqoriyalar
                    </h2>
                    <ProductCategories />
                </section>
            </main>
            <Footer />
        </div>
    );
}
