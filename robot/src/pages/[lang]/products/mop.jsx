import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCategories from '@/components/ProductCategorys';
import HelpSection from '@/components/sections/Help-Section';
import VakumusHero from '@/components/sections/Vakumus/hero';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
export default function Paket({
    Translates,
    Vakumus_Hero,
    ProductBundle1,
    seo,
    choices,
    Home_acsesuares,
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
    const router = useRouter();

    return (
        <>
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>{' '}
            <div>
                {' '}
                <Header activeIndex={1} productIndex={1} />
                <main>
                    {' '}
                    <VakumusHero
                        Vakumus_Hero={Vakumus_Hero}
                        Translates={Translates}
                    />
                    <section className="w-full  mt-[100px]" id="vakumus">
                        <h2 className="text-[#447355] text-[40px] font-semibold text-center">
                            {Translates?.Sərt_səthlərdəki}{' '}
                        </h2>
                        <ProductBundle ProductBundle1={ProductBundle1.data} />
                    </section>
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
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch data sequentially
        const Vakumus_HeroResponse = await fetch(
            `${baseUrl}/section?type=Mops_Hero`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const seo = await fetch(
            `https://irobot.avtoicare.az/api/seo_pages?type=mop`,
            {
                headers: { 'Accept-Language': lang },
            }
        ).then((response) => response.json());
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

        const ProductBundle1Response = await fetch(
            `${baseUrl}/products?type_id=8`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const ProductBundle1 = await ProductBundle1Response.json();

        const choicesResponse = await fetch(`${baseUrl}/choices`, {
            headers: { 'Accept-Language': lang },
        });
        const choices = await choicesResponse.json();

        return {
            props: {
                Translates,
                Vakumus_Hero,
                ProductBundle1,
                seo,
                choices,
                Home_acsesuares,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
