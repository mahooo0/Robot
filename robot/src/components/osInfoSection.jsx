import React from 'react';
import Green_to_green from './btns/green_to_green';

const SectionTitle = ({ title }) => (
    <h2 className="text-4xl font-semibold text-center text-gray-600 max-md:max-w-full">
        {title}
    </h2>
);

const FeatureCard = ({ id, title, description }) => (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[488px] max-md:max-w-full">
        <div className="text-4xl font-semibold text-stone-200 max-md:max-w-full">
            {id}
        </div>
        <div className="flex flex-col mt-3 w-full max-md:max-w-full">
            <h3 className="text-lg font-semibold text-black max-md:max-w-full">
                {title}
            </h3>
            <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                {description}
            </p>
        </div>
    </div>
);

const FeatureList = ({ features }) => (
    <div className="flex overflow-hidden flex-col justify-center p-10 mt-5 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
                {features.slice(0, 2).map((feature) => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
            <div className="flex flex-wrap gap-5 items-center mt-7 w-full max-md:max-w-full">
                {features.slice(2).map((feature) => (
                    <FeatureCard key={feature.id} {...feature} />
                ))}
            </div>
        </div>
    </div>
);

const HeroSection = ({
    title,
    description,
    buttonText,
    imageSrc,
    imageAlt,
}) => (
    <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-center items-center w-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center self-stretch px-10 pt-10 pb-48 my-auto rounded-3xl bg-[#132A1B] min-w-[240px] lg:w-[539px] w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <h2 className="text-4xl font-semibold text-[#87A28E] max-md:max-w-full">
                            {title}
                        </h2>
                        <p className="mt-3 text-base text-white max-md:max-w-full">
                            {description}
                        </p>
                    </div>
                    <div className="mt-7">
                        <Green_to_green>{buttonText}</Green_to_green>
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                src={imageSrc}
                alt={imageAlt}
                className="object-contain self-stretch my-auto rounded-3xl aspect-[1.52] min-w-[240px] lg:w-[761px] w-full max-md:max-w-full"
            />
        </div>
    </div>
);

const featureData = [
    {
        id: '01',
        title: 'Obyektləri avtomatik aşkarlayır və onlardan qaçır',
        description:
            "Obstacles like pet waste, charging cords and shoes don't get in the way of j Series robots finishing the whole job, because they use PrecisionVision Navigation to detect & avoid objects.",
    },
    {
        id: '02',
        title: 'Obyektləri avtomatik aşkarlayır və onlardan qaçır',
        description:
            "Obstacles like pet waste, charging cords and shoes don't get in the way of j Series robots finishing the whole job, because they use PrecisionVision Navigation to detect & avoid objects.",
    },
    {
        id: '03',
        title: 'Obyektləri avtomatik aşkarlayır və onlardan qaçır',
        description:
            "Obstacles like pet waste, charging cords and shoes don't get in the way of j Series robots finishing the whole job, because they use PrecisionVision Navigation to detect & avoid objects.",
    },
    {
        id: '04',
        title: 'Obyektləri avtomatik aşkarlayır və onlardan qaçır',
        description:
            "Obstacles like pet waste, charging cords and shoes don't get in the way of j Series robots finishing the whole job, because they use PrecisionVision Navigation to detect & avoid objects.",
    },
];

function IRobotOSInfo() {
    return (
        <main className="flex overflow-hidden flex-col px-16 py-24 mt-24 w-full bg-[#F1F5F0] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h1 className="self-center text-4xl font-semibold text-center text-green-950 max-md:max-w-full">
                iRobot OS haqqında məlumat
            </h1>
            <section className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
                <SectionTitle title="İstədiyiniz yerdə təmizlik" />
                <HeroSection
                    title="Hər otağı bir anda öyrənir və etiketləyir"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                    buttonText="Məhsula adı"
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/02f8fb6a6a9482e4490f0953f2b18d8140761c6f0bec2ec1c370f75e5a020b6d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    imageAlt="iRobot cleaning demonstration"
                />
                <FeatureList features={featureData} />
            </section>
            <section className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
                <SectionTitle title="İstədiyiniz zaman təmizlik" />
                <HeroSection
                    title="Programınız karmaşık. Onu temizlememe izin verin!"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                    buttonText="Müqayisə et"
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/34e39e61d5633c5cd20f1bafb4ba4bb05c99c112900b6f8e62fd255b9376e6af?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    imageAlt="iRobot cleaning schedule demonstration"
                />
                <FeatureList features={featureData} />
            </section>
            <section className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
                <SectionTitle title="İstədiyiniz kimi təmizlik" />
                <HeroSection
                    title="Smart Scrub sabit təzyiqlə irəli-geri hərəkət edir və 2 dəfə dərindən təmizləyir"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                    buttonText="Məhsulun adı"
                    imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d5025352636bf292651cc27f9bb659013aeae1dca8113e6515ea658ae047b723?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                    imageAlt="iRobot Smart Scrub demonstration"
                />
                <FeatureList features={featureData} />
            </section>
        </main>
    );
}

export default IRobotOSInfo;
