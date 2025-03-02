import React from 'react';

const features = [
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/c2bdefbad6e3e21734d0da716af49e8da5cb545de13b3f4d2ab37da0fd67ac1e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        title: 'Hər otağın nə qədər təmiz və ya çirkli olduğuna baxın',
        description:
            'Ətraflı ev təmizləmə xəritəsi üçün iRobot Home Tətbiqinizi yoxlayın. iRobot OS keçmiş təmizliklər, çirklənmə hadisələri və döşəmə növləri əsasında otaqlar üzrə təmizlik vəziyyətini izləyir, beləliklə robotunuz növbəti qarışıqlıq prioritetinin nə olduğunu bilir.',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1e890829c372280f61640127082c5f8e798b108ff62f791de04196e424243538?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        title: 'Əvvəlcə ən çirkli otaqları həll edir',
        description:
            'O, intuitiv olaraq hansı otaqların təmizləndiyini və növbəti kompleks prioritetin nə olduğunu bilir. Artıq təmiz olan yataq otağından əvvəl çirkli mətbəxinizi tozsoranla təmizləyir.',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/049df2e59d42fe77c1caabc2bb091d64402a75b0e4761a5e0e944b81225f7891?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        title: 'Hər otağı təmizləmək üçün avtomatik tənzimlənir',
        description:
            'Dirt Detective ən yaxşısını bilir. Robotunuz qonaq otağınızda xalça olduğunu xatırlayır, avtomatik olaraq təmizləmə keçidlərinin sayını tənzimləyir və optimal təmizləmə üçün udma səviyyəsini tənzimləyir.',
    },
];

function FeatureCard({ imageSrc, title, description }) {
    return (
        <article className="flex flex-col grow shrink min-w-[240px] w-[344px] max-md:max-w-full">
            <div className="flex overflow-hidden flex-col w-full bg-gray-600 rounded-3xl max-md:max-w-full">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt=""
                    className="object-contain w-full aspect-[1.22] max-md:max-w-full"
                />
            </div>
            <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                <h2 className="text-lg font-medium text-black max-md:max-w-full">
                    {title}
                </h2>
                <p className="mt-3 text-base font-normal text-black text-opacity-80 max-md:max-w-full">
                    {description}
                </p>
            </div>
        </article>
    );
}

function IRobotOSAdvantage({ Translates }) {
    return (
        <main className="flex flex-col self-center mt-24 w-full max-w-[1323px] max-md:mt-10 max-md:max-w-full">
            <h1 className="text-4xl font-semibold text-center text-green-950 max-md:max-w-full">
                {Translates.iRobot_OS_üstünlüyü}
            </h1>
            <section className="flex flex-wrap gap-5 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </section>
        </main>
    );
}

export default IRobotOSAdvantage;
