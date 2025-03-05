import Green_to_green from '@/components/btns/green_to_green';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpCard from '@/components/HelpCard';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import HelpSection from '@/components/sections/Help-Section';
import ProductBundle from '@/components/sections/Vakumus/ProductBundle';
import Head from 'next/head';
// import ProductCategories from '@/components/ProductCategorys';
import React from 'react';

export default function SaleProduct({
    Translates,
    ProductBundle1,
    ProductBundle2,
    choices,
    seo,
}) {
    console.log('ProductBundle1', ProductBundle1);
    console.log('ProductBundle2', ProductBundle2);

    return (
        <>
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>{' '}
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
        </>
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
        const ProductBundle1Response = await fetch(
            `${baseUrl}/products?is_discounted=true`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const ProductBundle1 = await ProductBundle1Response.json();
        const ProductBundle2Response = await fetch(
            `${baseUrl}/products?page=2&is_discounted=true`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const ProductBundle2 = await ProductBundle2Response.json();
        const seo = await fetch(
            `https://irobot.avtoicare.az/api/seo_pages?type=sale_product`,
            {
                headers: { 'Accept-Language': lang },
            }
        ).then((response) => response.json());
        return {
            props: {
                Translates,
                ProductBundle1,
                ProductBundle2,
                choices,
                seo,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
