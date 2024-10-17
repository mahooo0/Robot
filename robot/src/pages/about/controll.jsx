import FAQSection from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const buttons = [
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e8fd20df3ae33ad2036a6de5c41a3bbcb0d95ebaf928e9297351167e2b90675?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Download on the App Store',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/641bdd3b79c1f185448c206d2f67508cda7070f089d6131a5813bf4b0eb394d3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        alt: 'Get it on Google Play',
    },
];

const Control = () => {
    const renderSection = (title, description, imgSrc) => (
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full">
            <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                {title}
            </h2>
            <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                {description}
            </p>
            <img
                loading="lazy"
                src={imgSrc}
                alt={`${title} illustration`}
                className="object-contain w-full aspect-[0.56] max-md:max-w-full"
            />
        </div>
    );

    return (
        <div>
            <Header activeIndex={4} whyindex={2} />
            <main>
                <section className="flex relative flex-col justify-center items-start px-16 py-20 w-full min-h-[500px] max-md:px-5 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a5fe28f4678356f36a81b7f4486886ed385879db823a15227c95cb257f371d7?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Background"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <section className="flex relative flex-col max-w-full w-[565px]">
                        <div className="flex flex-col w-full text-green-950 max-md:max-w-full">
                            <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                                Komanda mərkəzinizə xoş gəlmisiniz!
                            </h1>
                            <p className="mt-3 text-base max-md:max-w-full">
                                iRobot OS birbaşa iRobot Home Tətbiqindən idarə
                                edə biləcəyiniz fərdi təmizləmə təcrübəsi
                                yaratmaq üçün qabaqcıl texnologiyanı
                                birləşdirir.
                            </p>
                        </div>
                        <div className="flex gap-2.5 items-center self-start mt-12 max-md:mt-10 flex-wrap">
                            {buttons.map((button, index) => (
                                <img
                                    key={index}
                                    loading="lazy"
                                    src={button.src}
                                    alt={button.alt}
                                    className="object-contain shrink-0 self-stretch my-auto aspect-[3.46] w-[204px]"
                                />
                            ))}
                        </div>
                    </section>
                </section>
                <section className="flex justify-center w-full">
                    <div className="flex flex-wrap gap-5 justify-between items-center self-center mt-24 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
                        <div className="flex overflow-hidden flex-col self-stretch px-10 pt-10 pb-44 rounded-3xl bg-[#8E98B8] min-w-[240px] lg:w-[539px] w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
                            <div className="flex flex-col max-md:max-w-full">
                                <h2 className="text-4xl font-semibold text-[#E4E9F8] max-md:max-w-full">
                                    Evinizin nə qədər təmiz və ya çirkli
                                    olduğunu yoxlayın!
                                </h2>
                                <p className="mt-3 text-base text-[#E4E9F8] max-md:max-w-full">
                                    Dirt Detective ilə ətraflı ev təmizliyi
                                    xəritəsi üçün iRobot Home Tətbiqinizi
                                    yoxlayın. iRobot ƏS keçmiş təmizliklər,
                                    çirklənmə hadisələri və döşəmə növləri
                                    əsasında otaqdan-otağa təmizlik vəziyyətini
                                    izləyir, beləliklə j9 robotunuz növbəti
                                    çirkin prioritetin nə olduğunu bilir.
                                </p>
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] lg:w-[761px] w-full max-md:max-w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/492579a8d3015c33456582a3277ffbc53f1796a5c81c09818be7951bb2c52209?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt="Home cleaning robot illustration"
                                className="w-full aspect-[1.52] max-md:max-w-full h-[502px] object-cover"
                            />
                        </div>
                    </div>
                </section>
                {/* Additional sections with renderSection */}
                <section className="flex flex-row flex-wrap gap-10 lg:justify-between justify-center items-center w-full max-md:max-w-full px-[60px] mt-[48px]">
                    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full">
                        <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                            İstədiyiniz şəkildə təmizləyin
                        </h2>
                        <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                            Sizin iRobot Home Tətbiqiniz sizə robotunuzun
                            öyrənməsinə və evinizi xəritələməsinə imkan verir.
                            İstədiyiniz zaman və istədiyiniz yerdə təmizləmək
                            üçün xəritələrinizi fərdiləşdirə bilərsiniz.
                        </p>
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center self-stretch py-6 my-auto rounded-3xl min-w-[240px] w-[538px] max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76796a4ee1629267b6c25c286c4a96d63ad563a3a82d8757f7069f091eb79410?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="iRobot Home App interface showing customizable cleaning map"
                            className="object-contain w-full aspect-[0.56] max-md:max-w-full"
                        />
                    </div>
                </section>
                <section className="flex flex-row-reverse flex-wrap gap-10 lg:justify-between justify-center items-center w-full max-md:max-w-full px-[60px] mt-[48px]">
                    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full">
                        <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                            İstədiyiniz şəkildə təmizləyin
                        </h2>
                        <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                            Sizin iRobot Home Tətbiqiniz sizə robotunuzun
                            öyrənməsinə və evinizi xəritələməsinə imkan verir.
                            İstədiyiniz zaman və istədiyiniz yerdə təmizləmək
                            üçün xəritələrinizi fərdiləşdirə bilərsiniz.
                        </p>
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center self-stretch py-6 my-auto rounded-3xl min-w-[240px] w-[538px] max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76796a4ee1629267b6c25c286c4a96d63ad563a3a82d8757f7069f091eb79410?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="iRobot Home App interface showing customizable cleaning map"
                            className="object-contain w-full aspect-[0.56] max-md:max-w-full"
                        />
                    </div>
                </section>
                <section className="flex flex-row flex-wrap gap-10 lg:justify-between justify-center items-center w-full max-md:max-w-full px-[60px] mt-[48px]">
                    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[571px] max-md:max-w-full">
                        <h2 className="text-5xl font-semibold text-[#447355] max-md:max-w-full max-md:text-4xl">
                            İstədiyiniz şəkildə təmizləyin
                        </h2>
                        <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                            Sizin iRobot Home Tətbiqiniz sizə robotunuzun
                            öyrənməsinə və evinizi xəritələməsinə imkan verir.
                            İstədiyiniz zaman və istədiyiniz yerdə təmizləmək
                            üçün xəritələrinizi fərdiləşdirə bilərsiniz.
                        </p>
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center self-stretch py-6 my-auto rounded-3xl min-w-[240px] w-[538px] max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76796a4ee1629267b6c25c286c4a96d63ad563a3a82d8757f7069f091eb79410?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt="iRobot Home App interface showing customizable cleaning map"
                            className="object-contain w-full aspect-[0.56] max-md:max-w-full"
                        />
                    </div>
                </section>
                <section className="relative flex flex-col justify-center items-start px-16 py-56 w-full min-h-[656px] max-md:px-5 max-md:py-24 max-md:max-w-full mt-[100px] text-white">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa21b64a100a9623a0e67d900319f1f67ba944e575ae337ae8776bb20b472a76?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Background"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col mb-0 max-w-full w-[571px] max-md:mb-2.5">
                        <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                            Sadəcə sehirli sözü deyin!
                        </h1>
                        <p className="mt-3 text-base max-md:max-w-full">
                            iRobot Home Tətbiqində səsli köməkçinizə ¹ qısa
                            yollar əlavə etməklə səs əmri ilə təmizlənməyə
                            nəzarət edin.
                        </p>
                    </div>
                </section>

                <FAQSection Title={'Tez-tez verilən suallar'} />
                <section className="flex relative flex-col justify-center items-start px-16 py-64 w-full min-h-[800px] max-md:px-5 max-md:py-24 max-md:max-w-full mt-[100px] flex-wrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d435b1e2cfba66a9f2118ba0357118d694f66efcdf1dedf77aff001ce578240?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Background"
                        className="object-fit absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col mb-0 max-w-full w-[571px] max-md:mb-2.5">
                        <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
                            Təmizliyinizə kömək etmək üçün buradayıq!
                        </h1>
                        <p className="mt-3 text-base max-md:max-w-full">
                            Evinizin təmizliyini daha da asanlaşdırmaq üçün
                            iRobot ilə bir çox xüsusi xidmətlərdən yararlanın!
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Control;
