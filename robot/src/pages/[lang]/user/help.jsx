import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';

import React, { useState } from 'react';

export default function Help({ translates }) {
    const [variat, setvariant] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [progress, setProgress] = useState(1);
    const [floor, setfloor] = useState(1);
    const router = useRouter();

    // const { translates } = data || {};
    // console.log('translates', translates);
    const handleProgressChange = (event) => {
        setProgress(event.target.value);
    };
    const ProductCard = ({ image, img_alt, title, price }) => {
        return (
            <article className="flex overflow-hidden flex-col grow shrink self-stretch px-6 pt-6 pb-10 my-auto rounded-3xl bg-[#87A28E] min-w-[240px] w-[315px] max-md:px-5">
                <img
                    loading="lazy"
                    src={image}
                    alt={img_alt}
                    className="object-cover w-full aspect-[1.56]"
                />
                <div className="flex flex-col mt-4 w-full">
                    <h3 className="w-full text-base font-medium">{title}</h3>
                    <div className="flex gap-10 items-center self-start mt-3 text-xl font-semibold text-center whitespace-nowrap">
                        <div className="flex gap-1 items-center self-stretch my-auto">
                            <span className="self-stretch my-auto">
                                {price}
                            </span>
                            <img
                                loading="lazy"
                                src={
                                    'https://cdn.builder.io/api/v1/image/assets/TEMP/ff22683343fb044fc9eeee40fd8fa6c77af21b3d8a6b19bd891e9f47d001e6b1?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2'
                                }
                                alt=""
                                className="object-cover shrink-0 self-stretch my-auto aspect-square w-[18px]"
                            />
                        </div>
                    </div>
                </div>
                <button className="gap-2.5 self-stretch px-7 py-3.5 mt-7 text-base font-medium bg-white hover:bg-[#69BE56] duration-300 hover:text-white rounded-[100px] text-green-950 max-md:px-5">
                    {translates?.Səbətə_əlavə_et}
                </button>
                <button className="gap-2.5 self-stretch px-7 py-3.5 mt-3 text-base font-medium border border-white border-solid rounded-[100px] max-md:px-5">
                    {translates?.Məhsula_bax}
                </button>
            </article>
        );
    };

    const { lang = 'az' } = router.query;
    console.log('selectedOption', selectedOption);
    console.log('progress', progress);
    console.log('floor', floor);
    const { data: chooseProducts } = GETRequest(
        `/chooseProducts?mn === 0
                ? 'animals'
                : selectedOption === 2
                ? 'parent'
                : 'children'ess_coming=${selectedOption}&floor_home=${floor}&level_clutter=${progress}`,
        'chooseProducts',
        [lang, selectedOption, floor, progress]
    );
    switch (variat) {
        case 0:
            return (
                <div>
                    <Header activeIndex={0} />

                    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-52 rounded-3xl bg-[#50576F] max-md:px-5 max-md:py-24 m-[20px]">
                        <div className="flex flex-col max-w-full w-[794px]">
                            <div className="flex flex-col w-full text-center text-white max-md:max-w-full">
                                <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                    {translates?.Məhsulu_seçməkdə}
                                </h1>
                                <p className="self-center mt-3 text-base max-md:max-w-full">
                                    {translates?.Eviniz_də_sizin}
                                </p>
                            </div>
                            <button
                                onClick={() => setvariant(1)}
                                className="gap-2.5 self-center px-12 py-5 mt-12 text-xl font-medium bg-white rounded-[100px] text-green-950 max-md:px-5 max-md:mt-10"
                            >
                                {translates?.İndi_başla}
                            </button>
                        </div>
                    </section>
                    <Footer />
                </div>
            );
        case 1:
            return (
                <div>
                    <Header activeIndex={0} />
                    <main className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-14 rounded-3xl bg-slate-600 max-md:px-5 m-5">
                        <div className="flex flex-col max-w-full w-[737px] justify-center">
                            <h1 className="self-start text-4xl font-semibold text-center text-white max-md:max-w-full w-full ">
                                {translates?.mess_coming}
                            </h1>
                            <section className="flex flex-col pl-4 mt-7 w-full max-md:max-w-full">
                                <div className="w-full max-md:max-w-full">
                                    <div className="flex  justify-center relative flex-col gap-5 items-center">
                                        {/* <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col self-stretch my-auto mr-0 w-full text-base font-medium whitespace-nowrap text-white text-opacity-90 max-md:mt-10 absolute">
                                                <button
                                                    className={`gap-2.5 self-stretch px-7 py-3.5 border border-solid border-white border-opacity-20 min-h-[52px] rounded-[100px] max-md:px-5 mt-0 ${
                                                        selectedOption === 0
                                                            ? 'bg-white text-black'
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        handleOptionClick(0)
                                                    }
                                                >
                                                    Valideynlər
                                                </button>{' '}
                                                <button
                                                    className={`gap-2.5 self-stretch px-7 py-3.5 border border-solid border-white border-opacity-20 min-h-[52px] rounded-[100px] max-md:px-5 mt-64 max-md:mt-10 ${
                                                        selectedOption === 1
                                                            ? 'bg-white text-black'
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        handleOptionClick(1)
                                                    }
                                                >
                                                    Uşaqlar
                                                </button>
                                                <button
                                                    className={`gap-2.5 self-stretch px-7 py-3.5 border border-solid border-white border-opacity-20 min-h-[52px] rounded-[100px] max-md:px-5 mt-96 max-md:mt-10 ${
                                                        selectedOption === 2
                                                            ? 'bg-white text-black'
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        handleOptionClick(2)
                                                    }
                                                >
                                                    Ev heyvanları
                                                </button>
                                            </div>
                                        </div> */}

                                        <button
                                            onClick={() => setSelectedOption(2)}
                                            className={`${
                                                selectedOption === 2
                                                    ? 'bg-white text-black'
                                                    : 'text-white'
                                            } lg:absolute md:absolute block top-0  left-0 px-[34px] py-[14px] bg-none rounded-[100px] border border-white border-opacity-20  text-[16px] font-medium `}
                                        >
                                            {translates?.Valideynlər}
                                        </button>
                                        <button
                                            onClick={() => setSelectedOption(1)}
                                            className={`${
                                                selectedOption === 1
                                                    ? 'bg-white text-black'
                                                    : 'text-white'
                                            } lg:absolute md:absolute block bottom-0  left-0 px-[34px] py-[14px] bg-none rounded-[100px] border border-white border-opacity-20  text-[16px] font-medium `}
                                        >
                                            {translates?.Uşaqlar}
                                        </button>
                                        <button
                                            onClick={() => setSelectedOption(0)}
                                            className={`${
                                                selectedOption === 0
                                                    ? 'bg-white text-black'
                                                    : 'text-white'
                                            } lg:absolute md:absolute block bottom-0  right-0 px-[34px] py-[14px] bg-none rounded-[100px] border border-white border-opacity-20  text-[16px] font-medium `}
                                        >
                                            {translates?.Ev_heyvanları}
                                        </button>

                                        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                            <img
                                                loading="lazy"
                                                src={`/image/${selectedOption}.png`}
                                                alt="Mess illustration"
                                                className="object-contain w-full aspect-square max-md:max-w-full"
                                            />
                                        </div>
                                        {/* <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full"></div> */}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-10 self-end mt-24 max-w-full w-[553px] max-md:mt-10 max-md:mr-2">
                                    <div className="flex flex-auto gap-3 items-center my-auto">
                                        <div className="flex shrink-0 self-stretch my-auto h-3 bg-white rounded-3xl lg:w-[126px] md:w-[126px] w-[90px]" />
                                        <div className="flex shrink-0 self-stretch my-auto h-3 rounded-3xl bg-white bg-opacity-40 lg:w-[126px] md:w-[126px] w-[90px]" />
                                        <div className="flex shrink-0 self-stretch my-auto h-3 rounded-3xl bg-white bg-opacity-40 lg:w-[126px] md:w-[126px] w-[90px]" />
                                    </div>
                                    <button
                                        className="flex gap-2 items-center py-0.5 text-base font-medium text-white"
                                        onClick={() => setvariant(2)}
                                    >
                                        <span className="self-stretch my-auto">
                                            {translates?.Davam_et}
                                        </span>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4987a2c171ec79672057382f230f1b518b4480b844b055aefcc9e675e10dde20?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt="Continue arrow"
                                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                        />
                                    </button>
                                </div>
                            </section>
                        </div>
                    </main>
                    {/* <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-52 rounded-3xl bg-[#50576F] max-md:px-5 max-md:py-24 m-[20px]">
                        <div className="flex flex-col max-w-full w-[794px]">
                            <div className="flex flex-col w-full text-center text-white max-md:max-w-full">
                                <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                    Məhsulu seçməkdə kömək et!
                                </h1>
                                <p className="self-center mt-3 text-base max-md:max-w-full">
                                    Eviniz də sizin kimi unikaldır və onu təmiz
                                    saxlamaq üçün bizdə tozsoranlar və moplar
                                    var. Hansı məhsulların sizə uyğun olduğunu
                                    öyrənmək üçün bu testdən keçin!
                                </p>
                            </div>
                            <button className="gap-2.5 self-center px-12 py-5 mt-12 text-xl font-medium bg-white rounded-[100px] text-green-950 max-md:px-5 max-md:mt-10">
                                İndi başla
                            </button>
                        </div>
                    </section> */}
                    <Footer />
                </div>
            );
        case 2:
            return (
                <div>
                    <Header activeIndex={0} />
                    <main className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-14 rounded-3xl bg-slate-600 max-md:px-5 m-5">
                        <div className="flex flex-col max-w-full w-[800px]">
                            <h1 className="self-center text-4xl font-semibold text-center text-white max-md:max-w-full">
                                {translates?.your_space_look}
                            </h1>
                            <img
                                key={progress}
                                loading="lazy"
                                src={
                                    progress < 1
                                        ? '/image/divan1.png'
                                        : `/image/divan${progress}.png`
                                }
                                alt="Illustration of a space"
                                className="object-cover mt-16 w-full aspect-[3.33] max-md:mt-10 max-md:max-w-full"
                            />
                            <section className="flex flex-col items-start self-end mt-24 mr-12 max-w-full w-[617px] max-md:mt-10 max-md:mr-2.5">
                                <div className="flex gap-5 justify-between ml-10 max-w-full text-lg font-medium text-white w-[448px]">
                                    <span>{translates?.Az_dağınıq}</span>
                                    <span>{translates?.Çox_dağınıq}</span>
                                </div>
                                <div className="flex mt-2.5 ml-10 max-w-full w-[448px]">
                                    <input
                                        type="range"
                                        min="1"
                                        max="3"
                                        value={progress}
                                        onChange={handleProgressChange}
                                        className="w-full h-3 bg-gray-400 rounded-full appearance-none cursor-pointer accent-blue-400"
                                        style={{
                                            background: `linear-gradient(to right, #A8B4FF ${
                                                (progress - 1) * 50
                                            }%, #808999 ${
                                                (progress - 1) * 50
                                            }%)`,
                                        }}
                                        aria-label="Space messiness level"
                                    />
                                </div>
                                <nav className="flex flex-wrap gap-5 justify-between items-center self-stretch mt-40 w-full max-md:mt-10 max-md:max-w-full">
                                    <button
                                        onClick={() => setvariant(1)}
                                        aria-label="Previous"
                                        className="focus:outline-none"
                                    >
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d77e2a034eb24f7a27b250efa3512ddc513566abd95dd0feacda9f734fb2a9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                        />
                                    </button>
                                    <div className="flex gap-3 items-center self-stretch my-auto">
                                        {[1, 2, 3].map((index) => (
                                            <div
                                                key={index}
                                                className={`flex shrink-0 self-stretch my-auto h-3 rounded-3xl w-[126px] ${
                                                    index === 3
                                                        ? 'bg-white bg-opacity-40'
                                                        : 'bg-white'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        className="flex gap-2 items-center self-stretch py-0.5 text-base font-medium text-white focus:outline-none"
                                        onClick={() => setvariant(3)}
                                    >
                                        <span className="self-stretch my-auto">
                                            {translates?.Davam_et}
                                        </span>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4987a2c171ec79672057382f230f1b518b4480b844b055aefcc9e675e10dde20?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                        />
                                    </button>
                                </nav>
                            </section>
                        </div>
                    </main>
                    <Footer />
                </div>
            );
        case 3:
            return (
                <div>
                    <Header activeIndex={0} />
                    <main className="flex overflow-hidden flex-col items-center px-20 pt-20 pb-14 rounded-3xl bg-slate-600 max-md:px-5 m-5">
                        <section className="flex flex-col ml-11 max-w-full w-[617px]">
                            <div className="flex flex-col ml-11 max-w-full text-white w-[443px]">
                                <h1 className="text-4xl font-semibold text-center max-md:max-w-full">
                                    {translates?.meet_your}
                                </h1>
                                <img
                                    loading="lazy"
                                    src={`/image/floor${floor}.png`}
                                    alt="Home illustration"
                                    className="object-contain mt-16 mr-5 ml-6 w-full aspect-[1.43] max-md:mx-2.5 max-md:mt-10"
                                />
                                <div className="flex gap-8 justify-center items-start self-center mt-20 whitespace-nowrap max-md:mt-10">
                                    <div className="flex flex-col w-20">
                                        <div
                                            onClick={() => setfloor(1)}
                                            className={`overflow-hidden self-center px-2 flex justify-center items-center text-3xl font-semibold bg-white ${
                                                floor === 1
                                                    ? 'bg-opacity-100 text-[#50576F]'
                                                    : 'bg-opacity-20 '
                                            } h-[70px] rounded-[100px] w-[70px] max-md:px-5`}
                                        >
                                            1
                                        </div>
                                        <div className="mt-3 text-sm text-center">
                                            {translates?.Mərtəbə}
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-20">
                                        <div
                                            onClick={() => setfloor(2)}
                                            className={`overflow-hidden self-center px-2 flex justify-center items-center text-3xl font-semibold bg-white ${
                                                floor === 2
                                                    ? 'bg-opacity-100 text-[#50576F]'
                                                    : 'bg-opacity-20 '
                                            } h-[70px] rounded-[100px] w-[70px] max-md:px-5`}
                                        >
                                            {' '}
                                            2
                                        </div>
                                        <div className="mt-3 text-sm text-center">
                                            {translates?.Mərtəbə}
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-20">
                                        <div
                                            onClick={() => setfloor(3)}
                                            className={`overflow-hidden self-center px-2 flex justify-center items-center text-3xl font-semibold bg-white ${
                                                floor === 3
                                                    ? 'bg-opacity-100 text-[#50576F]'
                                                    : 'bg-opacity-20 '
                                            } h-[70px] rounded-[100px] w-[70px] max-md:px-5`}
                                        >
                                            {' '}
                                            3
                                        </div>
                                        <div className="mt-3 text-sm text-center">
                                            {translates?.Mərtəbə}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="flex flex-wrap gap-5 justify-between items-center mt-28 w-full max-md:mt-10 max-md:max-w-full">
                                <img
                                    onClick={() => setvariant(2)}
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12d77e2a034eb24f7a27b250efa3512ddc513566abd95dd0feacda9f734fb2a9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square cursor-pointer"
                                />
                                <div className="flex gap-3 items-center self-stretch my-auto">
                                    {' '}
                                    <div className="flex shrink-0 self-stretch my-auto h-3 bg-white rounded-3xl w-[126px]" />
                                    <div className="flex shrink-0 self-stretch my-auto h-3 bg-white rounded-3xl w-[126px]" />
                                    <div className="flex shrink-0 self-stretch my-auto h-3 bg-white rounded-3xl w-[126px]" />
                                </div>
                                <button
                                    className="flex gap-2 items-center self-stretch py-0.5 text-base font-medium text-white"
                                    onClick={() => setvariant(4)}
                                >
                                    <span className="self-stretch my-auto">
                                        {translates?.Davam_et}
                                    </span>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4987a2c171ec79672057382f230f1b518b4480b844b055aefcc9e675e10dde20?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt=""
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                </button>
                            </nav>
                        </section>
                    </main>
                    <Footer />
                </div>
            );
        case 4:
            console.log('chooseProducts', chooseProducts);

            return (
                <div>
                    <Header activeIndex={0} />
                    <main className="w-full flex justify-center mt-[48px] mb-[100px]">
                        <section className="flex flex-col max-w-[985px]">
                            <h2 className="text-5xl font-semibold text-center text-green-950 max-md:max-w-full max-md:text-4xl">
                                {translates?.uyğun_məhsul}
                            </h2>
                            <div className="flex flex-wrap gap-5 items-center mt-12 w-full text-white max-md:mt-10 max-md:max-w-full">
                                {chooseProducts?.map((product, index) => (
                                    <ProductCard key={index} {...product} />
                                ))}
                            </div>
                        </section>
                    </main>

                    <Footer />
                </div>
            );
    }
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

        return {
            props: {
                translates: Translates,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
