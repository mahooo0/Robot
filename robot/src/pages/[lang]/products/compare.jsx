import Green_to_none from '@/components/btns/green_to_none';
import CompareSwipperUpper from '@/components/compareSwipper';
import CompareSwipper2 from '@/components/CompareSwipper2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CompareProducts } from '@/components/recoil/Atom';
import GETRequest from '@/services/QueryREq';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function compare({ translates, seo }) {
    const [isToggled, setIsToggled] = useState(false);
    const [Filter, setFilter] = useState(2);
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const handleToggle = () => {
        setIsToggled(!isToggled); // Toggle between true and false
    };
    const [compareProducts, setCompareProducts] =
        useRecoilState(CompareProducts);
    const { data: products, isLoading: ProductLoading } = GETRequest(
        `/products${
            Filter === 1
                ? '?category_id=4'
                : Filter === 2
                ? '?type_id=1'
                : '?category_id=5'
        }`,
        'products',
        [lang, Filter]
    );
    useEffect(() => {
        console.log('compareProducts', compareProducts);
    }, [compareProducts]);

    return (
        <>
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>{' '}
            <div>
                {' '}
                <Header activeIndex={0} />
                <main className="bg-[#ECF3EA] pt-[40px] text-center flex justify-center flex-col items-center w-full pb-[100px]">
                    <h1 className=" text-[40px] font-semibold max-w-[446px]">
                        {translates.Müqayisə_etmək_üçün_məhsulları_seç}
                    </h1>
                    <p className="text-black text-[16px] font-normal max-w-[446px] text-center mt-[12px]">
                        {translates.Filter_compare_tool_by_category}
                    </p>
                    <div className="flex flex-row gap-3 flex-wrap mt-[48px]">
                        <Green_to_none
                            isactive={Filter === 1}
                            action={() => setFilter(1)}
                        >
                            {translates.Roomba_Robot_Vacuums}
                        </Green_to_none>
                        <Green_to_none
                            isactive={Filter === 2}
                            action={() => setFilter(2)}
                        >
                            {translates.to_in_one}
                        </Green_to_none>
                        <Green_to_none
                            isactive={Filter === 3}
                            action={() => setFilter(3)}
                        >
                            {translates.Robot_süpürgə}
                        </Green_to_none>
                    </div>
                    <CompareSwipperUpper
                        products={products?.data}
                        isLoading={ProductLoading}
                    />
                    <h2 className=" text-[36px] font-semibold  mt-[103px] lg:text-left text-center w-full lg:pl-[310px] pl-0">
                        {translates.Seçilən_məhsullar}
                    </h2>
                    <div className="w-full flex flex-row relative  mt-7 ">
                        <div className="lg:absolute md:absolute max-sm:hidden w-[260px] border-l  top-0 left-0 h-[100%] bg-[#ECF3EA] max-w-[310px] flex flex-col  z-50 ">
                            <section className="flex flex-col self-start opacity-0">
                                <button
                                    onClick={handleToggle}
                                    className={`flex justify-between items-center p-1.5 max-w-full rounded-[100px] w-[106px] ${
                                        isToggled ? 'bg-[#447355]' : 'bg-white'
                                    }`}
                                >
                                    <span
                                        className={`flex shrink-0 w-11 h-11 rounded-[100px] transition-transform duration-300 ${
                                            isToggled
                                                ? 'bg-white translate-x-[49px]'
                                                : 'bg-stone-300 translate-x-0'
                                        }`}
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">
                                        Toggle Switch
                                    </span>
                                </button>
                                <h2 className="mt-3 text-base font-medium text-green-950">
                                    {translates.Yalnız_fərqləri_göstər}
                                </h2>
                            </section>
                            <div className="  absolute top-[440px] flex  flex-col">
                                <div className=" lg:pl-[60px] pl-[30px]  h-[86px] w-[98vw]  flex items-center justify-start border-t  border-black border-opacity-15">
                                    <p> {translates?.price}</p>
                                </div>
                                <div className="lg:pl-[60px] pl-[30px]  w-[98vw]   flex items-center h-[86px] justify-start border-t border-black border-opacity-15">
                                    <p>{translates?.Category}</p>
                                </div>

                                <div className=" lg:pl-[60px] pl-[30px]  w-[98vw]  h-[86px]  flex items-center justify-start border-t border-black border-opacity-15">
                                    <p>{translates?.Type}</p>
                                </div>
                                <div className="lg:pl-[60px] pl-[30px]  w-[98vw]  h-[86px]  flex items-center justify-start border-t border-black border-opacity-15">
                                    <p>{translates?.room_area}</p>
                                </div>
                                <div className="lg:pl-[60px] pl-[30px]  w-[98vw]  h-[86px]  flex items-center justify-start border-t border-b border-black border-opacity-15">
                                    <p>{translates?.color}</p>
                                </div>
                            </div>
                        </div>

                        <CompareSwipper2 translates={translates} />
                    </div>
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
        const seo = await fetch(
            `https://irobot.avtoicare.az/api/seo_pages?type=compare`,
            {
                headers: { 'Accept-Language': lang },
            }
        ).then((response) => response.json());
        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const translates = await TranslatesResponse.json();

        return {
            props: {
                seo,
                translates,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
