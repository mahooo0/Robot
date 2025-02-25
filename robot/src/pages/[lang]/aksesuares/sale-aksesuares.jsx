import React from 'react';
import Header from '@/components/Header';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import HelpCard from '@/components/HelpCard';
import Footer from '@/components/Footer';
import SaleAcsesuaresHero from '@/components/sections/Help-Section/SaleAcsesuaresHero';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';

export default function SaleAksesuares({ accessoryCategories, Accessoryes }) {
    console.log('Accessoryes', Accessoryes);

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

    return (
        <div>
            {' '}
            <Header activeIndex={3} offerindex={1} />
            <main>
                <SaleAcsesuaresHero accessoryCategories={accessoryCategories} />

                <section className="w-full lg:px-[60px] px-[30px] mt-[40px] bg-[#ECF3EA] py-[100px]">
                    <h2 className=" text-[48px] font-semibold text-center  mt-[40px]  text-[#447355]">
                        20% Endirim{' '}
                    </h2>
                    <ProductBundle ProductBundle1={Accessoryes.data} />
                </section>
                <section className="w-full lg:px-[60px] px-[30px] mt-[40px] bg-[#FFFFFF] py-[100px]">
                    <h2 className=" text-[48px] font-semibold text-center  mt-[40px]  text-[#447355]">
                        20% Endirim{' '}
                    </h2>
                    <ProductBundle ProductBundle1={Accessoryes.data} />
                </section>
                <section className="flex overflow-hidden flex-col justify-center px-20 py-16 w-full bg-[#ECF3EA] max-md:px-5 max-md:max-w-full my-[100px] ">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="self-start text-4xl font-semibold text-center text-[#132A1B] max-md:max-w-full w-full">
                            Seçim etməkdə kömək edək!
                        </h2>
                        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                            {helpData.map((item, index) => (
                                <HelpCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
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

        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const Translates = await TranslatesResponse.json();
        const AccessoryesResponse = await fetch(`${baseUrl}/accessories`, {
            headers: { 'Accept-Language': lang },
        });
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
        return {
            props: {
                Translates,
                AccessorySeries,
                accessoryCategories,
                accessoryTypes,
                Accessoryes,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
