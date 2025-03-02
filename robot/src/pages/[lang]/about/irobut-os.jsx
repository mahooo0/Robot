import FAQSection from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IRobotOSAdvantage from '@/components/OsADvanteges';
import IROSComponent from '@/components/OsHero';
import IRobotOSInfo from '@/components/osInfoSection';
import ProductFeatures from '@/components/oSproductBunner';
import React from 'react';

export default function IrobutOs({
    Translates,
    Irobot_Os_hero,
    haqqında_Section,
    təmizlik_hero,
    təmizlik_section2,
    Buttom_Section,
}) {
    return (
        <div>
            {' '}
            <Header activeIndex={4} whyindex={0} />
            <main>
                <section className="w-full flex justify-center px-[20px]">
                    <IROSComponent
                        data={Irobot_Os_hero}
                        Translates={Translates}
                    />
                </section>
                <section
                    className="w-full flex justify-center px-[20px]"
                    id="Üstünlüyü"
                >
                    <IRobotOSAdvantage Translates={Translates} />
                </section>
                <IRobotOSInfo
                    Translates={Translates}
                    id="Haqqında"
                    haqqında_Section={haqqında_Section}
                    təmizlik_hero={təmizlik_hero}
                    təmizlik_section2={təmizlik_section2}
                />
                <section
                    className="w-full flex justify-center px-5"
                    id="Detallar"
                >
                    <ProductFeatures Translates={Translates} />
                </section>
                <div></div>
                <FAQSection
                    id="Tez_tez_verilən_suallar"
                    Title={Translates.Tez_tez_verilən_suallar}
                />
                <section
                    style={{
                        backgroundImage: `url(${Buttom_Section.image})`,
                        backgroundSize: 'cover', // This makes the image cover the entire div
                        backgroundPosition: 'center', // Centers the image
                        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                        width: '100%', // Sets the width to fill the parent container
                        height: '100%', // Sets the height to fill the parent container
                    }}
                    className="flex overflow-hidden flex-col justify-center items-end px-20 py-40 w-full text-right text-gray-400 max-md:px-5 max-md:py-24 max-md:max-w-full"
                >
                    <div className="flex flex-col -mb-8 max-w-full w-[533px] max-md:mb-2.5">
                        <h2 className="text-4xl font-semibold max-md:max-w-full">
                            {Buttom_Section.title}{' '}
                        </h2>
                        <p className="mt-5 text-base max-md:max-w-full">
                            {Buttom_Section.description}
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch data sequentially
        const Buttom_Section_Response = await fetch(
            `${baseUrl}/section?type=Nə_qədər_çox_öyrənsən	`,
            {
                headers: { 'Accept-Language': lang },
            }
        );

        const Buttom_Section = await Buttom_Section_Response.json();
        const İstədiyiniz_kimi_təmizlikResponse = await fetch(
            `${baseUrl}/section?type=İstədiyiniz_kimi_təmizlik`,
            {
                headers: { 'Accept-Language': lang },
            }
        );

        const təmizlik_section2 =
            await İstədiyiniz_kimi_təmizlikResponse.json();
        const Irobot_Os_heroResponse = await fetch(
            `${baseUrl}/section?type=Irobot_Os_hero`,
            {
                headers: { 'Accept-Language': lang },
            }
        );

        const Irobot_Os_hero = await Irobot_Os_heroResponse.json();
        const İstədiyiniz_zaman_təmizlikResponse = await fetch(
            `${baseUrl}/section?type=İstədiyiniz_zaman_təmizlik`,
            {
                headers: { 'Accept-Language': lang },
            }
        );

        const təmizlik_hero = await İstədiyiniz_zaman_təmizlikResponse.json();
        const iRobot_OS_haqqında_məlumat_Response = await fetch(
            `${baseUrl}/section?type=iRobot_OS_haqqında_məlumat`,
            {
                headers: { 'Accept-Language': lang },
            }
        );

        const haqqında_Section =
            await iRobot_OS_haqqında_məlumat_Response.json();
        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const Translates = await TranslatesResponse.json();

        return {
            props: {
                Translates,
                Irobot_Os_hero,
                haqqında_Section,
                təmizlik_hero,
                təmizlik_section2,
                Buttom_Section,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
