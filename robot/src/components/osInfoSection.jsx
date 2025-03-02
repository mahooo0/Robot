import React from 'react';
import Green_to_green from './btns/green_to_green';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
const SectionTitle = ({ title }) => (
    <h2 className="text-4xl font-semibold text-center text-[#447355] max-md:max-w-full">
        {title}
    </h2>
);

const FeatureCard = ({ id, title, description }) => (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[488px] max-md:max-w-full">
        <div className="text-4xl font-semibold text-[#E7F0E4] max-md:max-w-full">
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
}) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };
    const router = useRouter();
    const { lang } = router.query;
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full"
            viewport={{ once: true }}
        >
            <div className="flex gap-5 lg:justify-between justify-center items-center w-full max-md:max-w-full lg:h-[502px] h-fit">
                <motion.div
                    variants={fadeInUp}
                    className="flex overflow-hidden flex-col justify-center px-10 pt-10 rounded-3xl bg-[#132A1B] min-w-[240px] lg:w-[60%] w-full max-md:px-5 pb-4 !h-full"
                >
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
                            <Green_to_green
                                action={() => router.push(`/${lang}/products`)}
                            >
                                {buttonText}
                            </Green_to_green>
                        </div>
                    </div>
                </motion.div>
                <motion.img
                    loading="lazy"
                    src={imageSrc}
                    alt={imageAlt}
                    className="self-stretch object-cover rounded-3xl aspect-[1.52] min-w-[240px] max-sm:hidden w-full max-md:max-w-full h-[100%]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                />
            </div>
        </motion.div>
    );
};

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

function IRobotOSInfo({
    haqqında_Section,
    təmizlik_hero,
    təmizlik_section2,
    id,
    Translates,
}) {
    console.log('haqqında_Section', haqqında_Section);

    return (
        <section
            id={id}
            className="flex overflow-hidden flex-col px-16 py-24 mt-24 w-full bg-[#F1F5F0] max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
            <h1 className="self-center text-4xl font-semibold text-center text-black max-md:max-w-full">
                {Translates.iRobot_OS_haqqında_məlumat}
            </h1>
            <section className="flex flex-col mt-12 max-md:mt-10 max-md:max-w-full">
                <SectionTitle title={Translates.İstədiyiniz_yerdə_təmizlik} />
                <HeroSection
                    title={haqqında_Section.title}
                    description={haqqında_Section.description}
                    buttonText={Translates.Məhsular}
                    imageSrc={haqqında_Section.image}
                    imageAlt="iRobot cleaning demonstration"
                />
                <FeatureList features={featureData} />
            </section>
            <section className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
                <SectionTitle title={Translates.İstədiyiniz_zaman_təmizlik} />
                <HeroSection
                    title={təmizlik_hero.title}
                    description={təmizlik_hero.description}
                    buttonText={Translates.Məhsular}
                    imageSrc={təmizlik_hero.image}
                    imageAlt="iRobot cleaning demonstration"
                />
                <FeatureList features={featureData} />
            </section>
            <section className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
                <SectionTitle title={Translates.İstədiyiniz_kimi_təmizlik} />
                <HeroSection
                    title={təmizlik_section2.title}
                    description={təmizlik_section2.description}
                    buttonText={Translates.Məhsular}
                    imageSrc={təmizlik_section2.image}
                    imageAlt="iRobot cleaning demonstration"
                />
                <FeatureList features={featureData} />
            </section>
        </section>
    );
}

export default IRobotOSInfo;
