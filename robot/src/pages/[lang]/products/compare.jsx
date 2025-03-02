import Green_to_none from '@/components/btns/green_to_none';
import CompareSwipperUpper from '@/components/compareSwipper';
import CompareSwipper2 from '@/components/CompareSwipper2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CompareProducts } from '@/components/recoil/Atom';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function compare({ translates }) {
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
                    <div className="lg:absolute md:absolute  top-0 left-0 h-[100%] bg-[#ECF3EA] max-w-[310px] flex flex-col lg:pl-[60px] pl-[30px] z-50 ">
                        <section className="flex flex-col self-start">
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
                                <span className="sr-only">Toggle Switch</span>
                            </button>
                            <h2 className="mt-3 text-base font-medium text-green-950">
                                {translates.Yalnız_fərqləri_göstər}
                            </h2>
                        </section>
                        <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[348px] border-black border-opacity-15">
                            <p className="text-[20px] font-medium">
                                {translates.Məhsulun_xüsusiyyəti}
                            </p>
                        </div>
                        <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                            <p>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                            <p>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                            <p>Lorem Ipsum is simply dummy</p>
                        </div>
                        <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[28px] border-black border-opacity-15">
                            <p>Lorem Ipsum is simply dummy</p>
                        </div>
                    </div>

                    <CompareSwipper2 />
                </div>
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
        const translates = await TranslatesResponse.json();

        return {
            props: {
                translates,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
