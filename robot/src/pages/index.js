import Image from 'next/image';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Ph from '../../public/svg/ph.svg';
import Hero_Swipper from '@/components/home_product_wsipper';
import { useRef, useState } from 'react';
import FeatureList from '@/components/FeatureList';
import ProductCategories from '@/components/ProductCategorys';
import Green_to_green from '@/components/btns/green_to_green';
import ProductCardNew from '@/components/ProductCards/productNew';
import Green_to_none from '@/components/btns/green_to_none';
// import ProductCardSm from '@/components/ProductCards/productCarrSm';

import SalesSwipper from '@/components/sales.swipper.jsx';
import ProductBundle from '@/components/Product_bundle';
import Footer from '@/components/Footer';
import White_to_green from '@/components/btns/white_to_green';
import { useRouter } from 'next/router';
// import ProductBundle from '@/components/ProductBundle';
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function Home({}) {
    const router = useRouter();
    return (
        <div className="text-[#132A1B]">
            <Header activeIndex={0} />
            <section className="flex lg:flex-row flex-col p-5 gap-5 h-fit">
                <video
                    className="lg:w-[60%] w-full rounded-[20px] lg:h-[540px] object-cover"
                    playsInline
                    controls={false}
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload"
                    width="600"
                    src="https://s3-figma-videos-production-sig.figma.com/video/1213020028553192391/TEAM/24fe/37d5/-68ca-4f7c-b9c4-18adc1ca0a2f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gux79KNOZQAc7Igptv2EWVkRux3S676SxERu6OBjQbqpYkjL9e9G-SEFw~QlOxRKVsGixbKxkluSVcKpOcELoJw-5XEtCEZfiIAsrYAHLcoUYTyel65EX-AycZYAUihBTOdj5QdHjTFv6HCJ-MDlmBoDRoBY-KrKFo8RYhBHMPPmWaf~EbZHZXVhLNmV94fck2~GzBN3SLaAz~zGIfjfJnmtrPXlP0JuuEOfNtGh4TqS59clV~cBJhLtvkFu5lasdtbgVOCS69YRXRIZ4xYYyVGn4WbKJJbMkIi2bnPG6k-qDf1P2WGcGRpG6UuZVCK4iGQtR6Jyaz6RBRKXxH7kMA__"
                ></video>
                <Hero_Swipper />
            </section>
            <section className="px-5 w-full flex justify-center">
                <FeatureList />
            </section>
            <ProductCategories />
            <section>
                <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap">
                    <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                        Yeni Məhsullar
                    </h3>
                    <Green_to_green action={() => router.push('/products')}>
                        Yeni məhsullar
                    </Green_to_green>
                </div>
                <div className="flex lg:flex-row flex-col gap-5 lg:px-[60px] px-[30px] mt-10">
                    <ProductCardNew />
                    <ProductCardNew />
                </div>
            </section>
            <section>
                <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap gap-4">
                    <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                        Ən çox satılanlar{' '}
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                        <Green_to_none isactive={false}>
                            Robot Tozsoranlar
                        </Green_to_none>
                        <Green_to_none isactive={true}>
                            Robot Tozsoranlar
                        </Green_to_none>
                        <Green_to_none isactive={false}>
                            Robot Tozsoranlar
                        </Green_to_none>
                    </div>
                </div>
                <SalesSwipper />
            </section>
            <section className="lg:px-[60px] px-[30px]">
                <div
                    style={{
                        backgroundImage:
                            'url("https://s3-alpha-sig.figma.com/img/ea8c/d6bf/9c48576ee287164253abe4ca60f991ee?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmaOSlLaUsADOm3QC5g2bn0OH4JFEuEQgwg-Cr7YPsPqmQE7g9rGGDRvKOWe27jnbM0v0VY~~pQVTYa0QT0E9geziNMnDwLmqNl-GvDSayUhZKqeDbwIXc4uC2GAp23HFHpMqc4oqx2m5HXWpvXmkD1D10VpyNV9cJn6BxuNOL4MU1NWto28PICPimr1pqxoAx8gBYk4jwDDMMINlRIbjZfn-M5RrIVKzXoSPSNxzSPtw2Ww-itawBLnHpl2HPzP0AlYeqllM-~bGte-4g5DcbUhGwJYvXZYU1qFDnWiv2OKuBScQNZ2k5p9RrOJl9zoP1v1ZpYg9a2R9HdnRVeBxw__")',
                    }}
                    className="flex overflow-hidden flex-col items-start pt-10 pr-20 pb-28 pl-10 mt-24 max-w-full rounded-3xl w-full  max-md:px-5 max-md:pb-24 max-md:mt-10"
                >
                    <div className="gap-1 self-stretch px-3 py-1.5 text-sm text-center w-fit text-white rounded bg-white bg-opacity-10">
                        Xüsusi təklif
                    </div>
                    <div className="flex flex-col mt-11 mb-0 max-w-full w-[495px] max-md:mt-10 max-md:mb-2.5">
                        <div className="flex flex-col w-full font-semibold text-white max-md:max-w-full">
                            <div className="flex gap-1 items-center self-start px-3 py-1.5 text-xl text-center whitespace-nowrap bg-[#69BE56] rounded">
                                <div className="flex gap-1 items-center self-stretch my-auto">
                                    <div className="self-stretch my-auto">
                                        300
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="/svg/manat.svg"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                        alt=""
                                    />{' '}
                                </div>
                            </div>
                            <h2 className="mt-3 text-4xl max-md:max-w-full">
                                Roomba Combo® 10 Max Saug- und Wischroboter +
                                AutoWash Dock
                            </h2>
                        </div>
                        <div className="mt-[28px]">
                            <White_to_green
                                action={() => router.push('products/id')}
                            >
                                Məhsula bax
                            </White_to_green>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[60px] px-[30px]">
                <div className="flex justify-between items-center  mt-[104px] flex-wrap">
                    <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                        Paket məhsullar{' '}
                    </h3>
                    <Green_to_green
                        action={() => router.push('/products/paket')}
                    >
                        Bütün məhsullar
                    </Green_to_green>
                </div>
                <ProductBundle />
            </section>
            <section className="overflow-hidden self-stretch pt-10 mt-24 w-full bg-neutral-950 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full items-center">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/062a/6c94/e9387bfd561c7718aeb38d6d402d3173?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0RyGo8EKjkOurF5BZo~tcdPdKpcDy7OSbRtBz2QlDNDO50Hqtsdmzjq8Pa4j8ZvUCyXK2bbEzgkqcnV6q08pECi83cWjNhQI04IQomJlKAjTh1I7cfosI~SUJuNtVQj6jIUDo33wIr30JPaGSI-a~rtNjhuOJrnI8YcRI6Z7ys~QXkNdcxDY55HmwOQhC6kS0FEkWeVSXji-iJN9Vz64Lar4BGsSe9eQLEJpVxcHL~aDJkOruTsYNj3fI2u8DUt~hkai1geh8q680w07uZWSWOlwS28az70qiYvJ0c3p~sKr1AUkVLeu0jQjflkLx~cTHcUgAwuNdYIUcBDNCa~0Q__"
                            alt="Special offer illustration"
                            className="object-contain grow shrink-0 max-w-full aspect-[1.06] w-[343px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col justify-center items-center self-stretch my-auto w-full text-white max-md:mt-10">
                            <div className="flex flex-col items-center max-w-full text-center w-[376px]">
                                <h2 className="text-4xl font-semibold">
                                    Xüsusi təkliflər üçün qeydiyyatdan keç!
                                </h2>
                                <p className="mt-2 text-base">
                                    Qeydiyyatdan keç, xüsusi təkliflər və
                                    endirimli məhsullardan ilk sən yararlan.
                                </p>
                            </div>
                            <Green_to_green
                                classNAME="mt-[32px]"
                                action={() =>
                                    router.push('/user/login_register')
                                }
                            >
                                Qeydiyyatdan keç
                            </Green_to_green>
                            {/* <button
                                    className="gap-2.5 self-stretch px-7 py-3.5 mt-8 text-base font-medium bg-green-400 rounded-[100px] max-md:px-5"
                                    aria-label="Qeydiyyatdan keç"
                                >
                                    Qeydiyyatdan keç
                                </button> */}
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full justify-center items-center">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/8f06/bda5/d6bb2e0cbb668f78f4572a4272c6d283?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NR4fBS0LYA2zb-FuV16A58E~JOj5ZCzOi8wvr6pSAJv~RLSFzAbeFojywLTUq5F17nTAYo3AClosB4yoaBY3X64ib0uRdCjc71OMXyldfBBvmk-J1lgCGpkV-r77j6sZUo5lRweQ2dF4xtLL2co0wapY0tf3-ER9pAQm1fcfBLBhRN5BNPw-zSfyDnpvQHE9Iq7-Hd-JTcD~a8cL77PM9j8Kr9Me~a~Siit1PCrxrVRKKWLBDtiBt8YaN6xseyCcfpqMCRZ9mm-LBSt-nGrg-kgTJvjm-PZ07ofltA9I2Bst9V6aZCfTfeA5cqbZMSrdmH87x61LLKflhhvq8r3yGQ__"
                            alt="Special offer promotion"
                            className="object-contain grow shrink-0 mt-2 max-w-full aspect-[0.97] w-[303px] max-md:mt-10"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap gap-4">
                    <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                        Robot süpürgələr{' '}
                    </h3>
                    <button
                        className="flex flex-row gap-2 text-[#447355] border-b border-[#447355]"
                        onClick={() => router.push('/products')}
                    >
                        <p>Bütün məhsullar </p>
                        <img src="/svg/Strelka_green.svg" />
                    </button>
                </div>
                <SalesSwipper />
            </section>
            <section className="flex overflow-hidden flex-col justify-center self-stretch px-16 py-24 mt-24 w-full bg-[#E7F0E4] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                    <dic className="flex flex-col items-center self-center max-w-full text-center w-[922px]">
                        <h1 className="text-4xl font-semibold text-[] max-md:max-w-full">
                            İRobot-evinizin robotu!
                        </h1>
                        <p className="mt-4 text-base text-black text-opacity-60 max-md:max-w-full">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type
                        </p>
                    </dic>
                    <dic className="flex overflow-hidden flex-col justify-center p-5 mt-10 w-full bg-white rounded-3xl max-md:max-w-full">
                        {/* <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f3c62213788502f2516f14445f711bb35539b458490ed78ae06e81c53cf347b?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="iRobot product showcase"
                            className="object-contain w-full rounded-3xl aspect-[2.62] max-md:max-w-full"
                        /> */}
                        <video
                            className="w-full rounded-[20px] lg:h-[540px] object-cover"
                            playsInline
                            controls={false}
                            autoPlay
                            muted
                            loop
                            controlsList="nodownload"
                            width="600"
                            src="https://s3-figma-videos-production-sig.figma.com/video/1213020028553192391/TEAM/16c4/4039/-50d9-45aa-a451-9f953bc0289c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtZgK8gWmKO7G5aUq0t-NrB4qU~jaaHGpRIddJWhIQvE3or1yd2CdnUoVRn3mU9iN8zhPy~DLs4HX6~rtC4wy~LrQi9NfJHb~qfZXxS-ZJswTsq4XajWXcAQSsizwEKaF9qyi6psbElxOucq0kuV1wiIl1K1nsiQR6cuJN6R0k~tpfHWUBFtlJOscVEgRAyGw0sjdT4HZYPXgm~VK7SOEck~YGeofjIQLCV4MODcX1~cMmccJqGqHybJTcSOYQcNKq685T5DQN-spfq-TzjYweHXKqIQky0o3nxztXEKixlN0C6rTD8xdJpuixRdeCHnNSZqPLcaeJOE86HGeE-qbw__"
                        ></video>
                    </dic>
                </div>
            </section>
            <section>
                <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap gap-4">
                    <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                        Robot tozsoranlar{' '}
                    </h3>
                    <button
                        className="flex flex-row gap-2 text-[#447355] border-b border-[#447355]"
                        onClick={() => router.push('/products')}
                    >
                        <p>Bütün məhsullar </p>
                        <img src="/svg/Strelka_green.svg" />
                    </button>
                </div>
                <SalesSwipper />
            </section>
            <section
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/b00d/4a63/56b9a3f4d4b1da6394cc94353b1189ab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=na0P27kZjClw-c7dZ~53jkiOiBn1P9F~xPxinhPehqyFP--h7PBGEsXKTeaPBO27pyXjNe4gQfm7oCPdCDZ4XYjG~PEMnrOh6osKELIZSkYxP3wYZy4kZfQQDO4XKgKoEZ7r7100XQubK8mDTLpdFDJ2NNAQffQ99dSiLgms-sOrvLtVD20mPLbpa6mPlnrqXYkEo9CAHFlt3ApILAgl-EFRggHQGAb0gPeviswocQaq5k~ACvwJnECqlw6mG0eajor6jH4aAXw4wqi2z0TSHNLR9vYbZXlq~PkCIS-nlDh195YcUwXTuyPDJUE2lKCl-QUdBnZuRzG1eBPY6GHHVA__")',
                    backgroundSize: 'cover', // This makes the image cover the entire div
                    backgroundPosition: 'center', // Centers the image
                    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                    width: '100%', // Sets the width to fill the parent container
                    height: '100%', // Sets the height to fill the parent container
                }}
                className=" mb-[100px] flex overflow-hidden flex-col justify-center items-end self-stretch px-20 py-28 mt-24 w-full max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full"
            >
                <div className="flex flex-col mb-0 max-w-full w-[393px] max-md:mb-2.5">
                    <div className="flex flex-col w-full">
                        <h1 className="text-4xl font-semibold text-green-950">
                            Robotun üçün bütün aksesuarlar
                        </h1>
                        <p className="mt-5 text-base text-black text-opacity-80 text-[16px] font-medium">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                    <div className="mt-7">
                        <Green_to_green
                            action={() => router.push('/aksesuares')}
                        >
                            Aksesuarlara bax
                        </Green_to_green>
                    </div>
                </div>
            </section>
            <section className="flex relative flex-col justify-center items-start px-16 py-64 w-full min-h-[800px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d435b1e2cfba66a9f2118ba0357118d694f66efcdf1dedf77aff001ce578240?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    alt=""
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mb-0 max-w-full w-[713px] max-md:mb-2.5">
                    <h1 className="text-4xl font-semibold text-green-950 max-md:max-w-full">
                        Robotlarınızın təmizliyinə nəzarət etmək üçün iRobot
                        Home Proqramını yükləyin
                    </h1>
                    <div className="flex gap-2.5 items-center self-start mt-12 max-md:mt-10">
                        <a href="#">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e332e583c02e31964a20847a93183f06e9f16265b972557cea88db62cb3282?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt="Download on the App Store"
                                className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                            />
                        </a>
                        <a href="#">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/384dec7c977891ca12aeeebc9eb14692b16aec493d138ec6c029edf172bc44db?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt="Download on the App Store"
                                className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
