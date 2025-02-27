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

const FeaturesSection = ({ product, translates }) => {
    return (
        <section className="flex overflow-hidden flex-col justify-center items-center self-center lg:px-20 md:px-[60px] px-[30px] py-16 mt-24 w-full text-[#447355] bg-[#ECF1EA] rounded-3xl  max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[972px]">
                <h2 className="text-3xl font-semibold text-center max-md:max-w-full">
                    {translates.Əsas_xüsusiyyətləri}
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
