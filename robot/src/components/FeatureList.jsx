import React from 'react';

const features = [
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/7b2ccc123acece39455e08308c08cf740f5a2c78e18f9ff3c123d1306b8bc57e?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Fast delivery icon',
        description: 'Sürətli çatdırılma',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/63d0581e863ad6057592a13e40c6cca5961899f81b3addc2578b831eed0cbfee?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Return policy icon',
        description: '14 gün ərzində qaytarılma',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/c516e8c72095e0813f82753089372bf4d47c3d9f99105fbc98f4c6c3e3ec409c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Free shipping icon',
        description: 'Ödənişsiz çatdırılma',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/6e026f5eed661b9808b43e1098a97dffd497ac65588470b0b84f15290c81a125?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Warranty icon',
        description: '2 illik zəmanət',
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/fd2bf1df7ccca4d9f1f6000150f7282729527393b6a612aa2ecc64da20e3bde8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Customer support icon',
        description: '24/7 aktiv dəstək',
    },
];

function FeatureList() {
    return (
        <section className="flex overflow-hidden flex-col justify-center self-center px-11 py-7 mt-5 w-full text-base rounded-3xl bg-[#ECF3EA] max-w-[1600px] text-green-950 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center max-md:max-w-full justify-center">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex gap-2 items-center self-stretch my-auto"
                    >
                        <img
                            loading="lazy"
                            src={feature.imageSrc}
                            alt={feature.altText}
                            className="object-contain shrink-0 self-stretch my-auto w-14 aspect-square rounded-[100px]"
                        />
                        <p className="self-stretch my-auto">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeatureList;
