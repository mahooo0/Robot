import React from 'react';

const advantages = [
    {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3897c192c5fd06eb469b69ef0a1a1ae50d213a972b374875d2eb21164aa8311c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: 'Sürətli çatdırılma',
    },
    {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/60ce31a5a2215193eb7f40b3b3343114c03cbb6be0edc4f62b51b8a649397dca?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: '14 gün ərzində qaytarılma',
    },
    {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bfe7bac8ac4e1107b84ac4e9fe3fbd501e0d7bdecef659274f18d847cdc719b5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: 'Ödənişsiz çatdırılma',
    },
    {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2e25ba2739d3f955e4101f0d5c3dafde966c3ce0f562323df138b805de381d0e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: '2 illik zəmanət',
    },
    {
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4170104333fde7ba968234f005a8b7390bd47a499f34d02cc2e3af8c813454bd?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        text: '24/7 aktiv dəstək',
    },
];

function AdvantageItem({ image, text }) {
    return (
        <div className="flex gap-2 items-center min-w-[240px]">
            <img
                loading="lazy"
                src={image}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[100px]"
            />
            <div className="self-stretch my-auto">{text}</div>
        </div>
    );
}

function AdvantagesSection({ title, advantages }) {
    return (
        <section className="flex overflow-hidden flex-col justify-center items-center py-[26px]  font-semibold text-white rounded-3xl bg-[#8E98B8] max-md:px-5 lg:h-[556p] h-fit">
            <div className="flex flex-col w-full max-w-[1025px] max-md:max-w-full">
                <h2 className="text-4xl text-center max-md:max-w-full">
                    {title}
                </h2>
                <div className="flex flex-wrap gap-12 justify-center items-start self-center mt-12 w-full text-lg max-w-[1061px] max-md:mt-10 max-md:max-w-full">
                    {advantages.map((advantage, index) => (
                        <AdvantageItem
                            key={index}
                            image={advantage.icon}
                            text={advantage.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AdvantagesSection;
