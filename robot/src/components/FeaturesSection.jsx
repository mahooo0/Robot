import React from 'react';

const FeatureItem = ({ iconSrc, text }) => (
    <div className="flex gap-2 items-center">
        <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[68px]"
        />
        <div className="self-stretch my-auto">{text}</div>
    </div>
);

const FeatureList = ({ features }) => (
    <div className="flex flex-col grow shrink items-start self-stretch my-auto min-w-[240px] w-[363px] max-md:max-w-full">
        {features.map((feature, index) => (
            <div key={index} className={index > 0 ? 'mt-6' : ''}>
                <FeatureItem iconSrc={feature.iconSrc} text={feature.text} />
            </div>
        ))}
    </div>
);

const FeaturesSection = ({ product }) => {
    const featureGroups = [
        [
            {
                iconSrc:
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/b7512752751a1a087058c2e7862647978f277d95615a185f3eee9832298da7b3?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                text: 'Control with app or voice assistant¹',
            },
            {
                iconSrc:
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/a6ac43e1c4c1b7bca37c2dcb4ad0ebb8d749bb0beb8ae64b68a9f20738e6bc49?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                text: '4 stage cleaning',
            },
        ],
        [
            {
                iconSrc:
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/dbca728cb57631ca98fed5d7c9ac37dcad3941cef7b6139957897a97368821c9?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                text: '3 levels of suction power/3 levels of water',
            },
            {
                iconSrc:
                    'https://cdn.builder.io/api/v1/image/assets/TEMP/0dbfd1192049064602968e4703b277cc704088a4bb54143ea7d77b61456a049b?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
                text: 'Vacuums, or vac/mop',
            },
        ],
    ];

    return (
        <section className="flex overflow-hidden flex-col justify-center items-center self-center lg:px-20 md:px-[60px] px-[30px] py-16 mt-24 w-full text-[#447355] bg-[#ECF1EA] rounded-3xl  max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[972px]">
                <h2 className="text-3xl font-semibold text-center max-md:max-w-full">
                    Əsas xüsusiyyətləri
                </h2>
                <div className="flex flex-wrap gap-10 items-center mt-10 w-full text-lg font-medium max-md:max-w-full">
                    {product?.product_features.map((group, index) => (
                        // <FeatureList key={index} features={group} />
                        <FeatureItem iconSrc={group.image} text={group.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
