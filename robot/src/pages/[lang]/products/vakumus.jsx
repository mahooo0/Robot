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
import { useRouter } from 'next/router';
import React from 'react';

export default function category({
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
    const robotTypes = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/d258d7a5af1b6527c4c63161762a541f86e82ae2ed23425d29760922bd583eb5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: '2-si 1-də robot tozsoranlar',
            description: 'Vacuum and mop simultaneously',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/fe2d3e37a64e26833f8bf586cca7314530934d538572bc8b25aa9dce2187338c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Dəyişdirilə bilən və silinən robot tozsoranlar',
            description: 'Vacuum or mop with a swap of a bin',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/e1ff51fcc7ee45f5c2421292e9eb061261a04bdc1180048ffed48106cac16421?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Robot tozsoranlar',
            description: 'Powerful and advanced hands free cleaning',
        },
    ];
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
            description:
                'Hansı məhsulun sizin üçün uyğun olduğunu müəyyən etmək üçün məhsul testimizdə bir neçə sadə suala cavab verin. Testdən keçin',
        },
    ];
    console.log('Vakumus_Hero', Vakumus_Hero);

    return (
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
    );
}
export async function getServerSideProps(context) {
    const { lang } = context.params;

    const Vakumus_Hero = await getSection(lang, 'Vakumus_Hero');
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
