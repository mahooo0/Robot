import React from 'react';

const supportData = [
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/212458d9e1c03a699ccba13d5005beab50f36e569074a42d8362a0ebe318d19d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        title: 'iRobot dəstək mütəxəssisi',
        description:
            'Savadlı Dəstək Mütəxəssislərimiz suallarınıza telefon və ya e-poçt vasitəsilə cavab verməyə hazırdır.',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/20d78477d4b97a69a7f972367d1611d2b1524a736f7730ec42c7f3c739f2d991?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        title: 'Sualının cavabını tap',
        description:
            'Tez-tez verilən suallar ilə lazım olan suallarınızın cavabını və məhsullardan necə istifadə etmək lazım olduğunu tapın.',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/7574b3f56e0be5030ead456d83328e6b5ff08bcde5de7a122c023890f415872e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        title: 'İRobot hesabı yarat',
        description:
            "Daha kolay bir satın alma deneyimi için siparişlerinizi takip etmek ve bilgilerinizi kaydetmek üzere Hesabım'ı kullanın.",
    },
];

function SupportCard({ imageSrc, title, description }) {
    return (
        <article className="flex flex-col self-stretch my-auto min-w-[240px] w-[335px]">
            <img
                loading="lazy"
                src={imageSrc}
                alt=""
                className="object-contain max-w-full aspect-square w-[100px]"
            />
            <div className="flex flex-col mt-5 max-w-full w-[335px]">
                <h3 className="text-lg font-semibold text-green-950">
                    {title}
                </h3>
                <p className="mt-3 text-sm text-black text-opacity-80">
                    {description}
                </p>
            </div>
        </article>
    );
}

function SupportSection({ supports, title, description }) {
    console.log('supports', supports);

    return (
        <section className="flex flex-col items-center">
            <header className="flex flex-col max-w-full text-center w-[395px]">
                <h2 className="text-4xl font-semibold text-green-950">
                    {title}{' '}
                </h2>
                <p className="mt-5 text-sm text-black text-opacity-80">
                    {description}
                </p>
            </header>
            <div className="flex flex-wrap justify-center gap-10 items-center mt-12 max-md:mt-10 max-md:max-w-full">
                {supports.map((item, index) => (
                    <SupportCard
                        key={index}
                        imageSrc={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default SupportSection;
