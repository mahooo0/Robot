import Green_to_none from '@/components/btns/green_to_none';
import CompareSwipperUpper from '@/components/compareSwipper';
import CompareSwipper2 from '@/components/CompareSwipper2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

export default function compare() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled); // Toggle between true and false
    };
    return (
        <div>
            {' '}
            <Header activeIndex={0} />
            <main className="bg-[#ECF3EA] pt-[40px] text-center flex justify-center flex-col items-center w-full pb-[100px]">
                <h1 className=" text-[40px] font-semibold max-w-[446px]">
                    Müqayisə etmək üçün məhsulları seç
                </h1>
                <p className="text-black text-[16px] font-normal max-w-[446px] text-center mt-[12px]">
                    Filter compare tool by category
                </p>
                <div className="flex flex-row gap-3 flex-wrap mt-[48px]">
                    <Green_to_none>Robot tozsoranlar</Green_to_none>
                    <Green_to_none>2-si 1-də məhsul</Green_to_none>
                    <Green_to_none isactive={true}>Robot süpürgə</Green_to_none>
                </div>
                <CompareSwipperUpper />
                <h2 className=" text-[36px] font-semibold max-w-[446px] mt-[103px]">
                    Seçilən məhsullar
                </h2>
                <div className="w-full flex flex-row relative  mt-7 ">
                    <div className="lg:absolute md:absolute  top-0 left-0 h-[100%] bg-[#ECF3EA] max-w-[310px] flex flex-col lg:pl-[60px] pl-[30px] z-50 ">
                        <section className="flex flex-col self-start">
                            <button
                                onClick={handleToggle}
                                className={`flex justify-between items-center p-1.5 max-w-full rounded-[100px] w-[106px] ${
                                    isToggled ? 'bg-green-700' : 'bg-white'
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
                                Yalnız fərqləri göstər
                            </h2>
                        </section>
                        <div className=" h-[86px] w-full flex items-center justify-center border-t mt-[348px] border-black border-opacity-15">
                            <p className="text-[20px] font-medium">
                                Məhsulun xüsusiyyəti
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
