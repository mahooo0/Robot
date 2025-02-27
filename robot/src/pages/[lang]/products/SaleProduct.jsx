import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import HelpSection from '@/components/sections/Help-Section';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';
// import ProductCategories from '@/components/ProductCategorys';
import React from 'react';

export default function SaleProduct({
    Translates,
    ProductBundle1,
    ProductBundle2,
    choices,
}) {
    console.log('ProductBundle1', ProductBundle1);
    console.log('ProductBundle2', ProductBundle2);

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
    return (
        <div>
            {' '}
            <Header activeIndex={3} offerindex={0} />
            <main className="mb-[100px]">
                {' '}
                <div className="w-full flex justify-center">
                    <h2 className="text-[#132A1B] text-[48px] font-semibold text-center  mt-[40px] max-w-[587px]  ">
                        Ən son təkliflərimizi satın alın!
                    </h2>
                </div>
                <section className="w-full ">
                    <div className="flex overflow-hidden flex-col rounded-3xl lg:mx-[60px] mx-[30px] mt-[40px]">
                        <div className="flex relative flex-col justify-center items-start px-16 py-36 w-full min-h-[500px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ac7dca8cac70c81d2a2b76d8348a8fc43464158543b52ae0dfebec18e95514?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col mb-0 max-w-full w-[632px] max-md:mb-2.5">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    <div className="flex gap-3 items-center self-start p-3 text-center whitespace-nowrap rounded-lg bg-white bg-opacity-10 text-white text-opacity-90">
                                        <div className="flex gap-1 items-center self-stretch my-auto text-base font-medium">
                                            <div className="self-stretch my-auto">
                                                250
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43137e5c7694df430fd38df9b4fe9bc5011ffda5389f80be936fa84043d7adfd?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                            />
                                        </div>
                                        <div className="self-stretch my-auto text-sm">
                                            Qənaət
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-5 w-full font-semibold max-md:max-w-full">
                                        <h1 className="text-5xl text-white max-md:max-w-full max-md:text-4xl leading-[72px]">
                                            Roomba Combo® j9+ now
                                        </h1>
                                        <div className="flex gap-1 items-center self-start px-3 py-1.5 mt-6 text-2xl text-center text-white whitespace-nowrap bg-[#69BE56] rounded-lg">
                                            <div className="self-stretch my-auto">
                                                300
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c76cdb1075d3c17072e071aa7352e0ee9c478db97e08495a72cf654bd52bcf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProductBundle ProductBundle1={ProductBundle1.data} />
                </section>
                <section className="w-full ">
                    <div className="flex overflow-hidden flex-col rounded-3xl lg:mx-[60px] mx-[30px] mt-[40px]">
                        <div className="flex relative flex-col justify-center items-start px-16 py-36 w-full min-h-[500px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30ac7dca8cac70c81d2a2b76d8348a8fc43464158543b52ae0dfebec18e95514?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative flex-col mb-0 max-w-full w-[632px] max-md:mb-2.5">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    <div className="flex gap-3 items-center self-start p-3 text-center whitespace-nowrap rounded-lg bg-white bg-opacity-10 text-white text-opacity-90">
                                        <div className="flex gap-1 items-center self-stretch my-auto text-base font-medium">
                                            <div className="self-stretch my-auto">
                                                250
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43137e5c7694df430fd38df9b4fe9bc5011ffda5389f80be936fa84043d7adfd?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                                            />
                                        </div>
                                        <div className="self-stretch my-auto text-sm">
                                            Qənaət
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-5 w-full font-semibold max-md:max-w-full">
                                        <h1 className="text-5xl text-white max-md:max-w-full max-md:text-4xl leading-[72px]">
                                            Roomba Combo® j9+ now
                                        </h1>
                                        <div className="flex gap-1 items-center self-start px-3 py-1.5 mt-6 text-2xl text-center text-white whitespace-nowrap bg-[#69BE56] rounded-lg">
                                            <div className="self-stretch my-auto">
                                                300
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6c76cdb1075d3c17072e071aa7352e0ee9c478db97e08495a72cf654bd52bcf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt=""
                                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProductBundle ProductBundle1={ProductBundle2.data} />
                </section>
                <HelpSection helpData={choices} translates={Translates} />
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
        const choicesResponse = await fetch(`${baseUrl}/choices`, {
            headers: { 'Accept-Language': lang },
        });
        const choices = await choicesResponse.json();
        const ProductBundle1Response = await fetch(`${baseUrl}/products?`, {
            headers: { 'Accept-Language': lang },
        });
        const ProductBundle1 = await ProductBundle1Response.json();
        const ProductBundle2Response = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const ProductBundle2 = await ProductBundle2Response.json();
        return {
            props: {
                Translates,
                ProductBundle1,
                ProductBundle2,
                choices,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
