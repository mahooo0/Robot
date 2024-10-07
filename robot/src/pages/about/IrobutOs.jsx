import FAQSection from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IRobotOSAdvantage from '@/components/OsADvanteges';
import IROSComponent from '@/components/OsHero';
import IRobotOSInfo from '@/components/osInfoSection';
import ProductFeatures from '@/components/oSproductBunner';
import React from 'react';

export default function IrobutOs() {
    return (
        <div>
            {' '}
            <Header activeIndex={0} />
            <main>
                <section className="w-full flex justify-center">
                    <IROSComponent />
                </section>
                <section className="w-full flex justify-center">
                    <IRobotOSAdvantage />
                </section>
                <IRobotOSInfo />
                <section className="w-full flex justify-center">
                    <ProductFeatures />
                </section>
                <FAQSection
                    Title={'İRobot OS haqqında tez-tez verilən suallar'}
                />
                <section
                    style={{
                        backgroundImage:
                            'url(https://s3-alpha-sig.figma.com/img/e3c4/8633/0fd2d30d582a678cbce7a5913b6f244a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IlvuH38fDfP1x4k-tuzNcos-quIosoMq~sdeYwYwL0bS946hq0cgxgSOEL9kU3nf2ED0bhJ88GGbcCZxiKbmlOpzcYXxir791R~gVHP6kjsbex-6dEfZPwq0cuWpoYwbaXB2A9DO5BzWWNZBz39gq6l52Z~PdgGemJb5IdhfmNdjV~Kzh3zK2YrP9g6bV8v5sWZBogFRCCqODhfOEQq5EoDatF~l7JtQHmgVQKFoupkzifJht5jExMmyssq820mSw~7LrV1XvnMmFjOGHSFa4q0q-vWY-o~~ON6ckcQkqxtXeJyr8gapRWtby~ZHN27tHJl5GgYgD5RdIplkNIn1Gg__)',
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
                            Nə qədər çox öyrənsən, bir o qədər az təmizlərsən.
                        </h2>
                        <p className="mt-5 text-base max-md:max-w-full">
                            iRobot OS yalnızca iyi bilgilendirilmiş olmakla
                            kalmıyor; sizin için özelleştirilmiş bir temizlik
                            deneyimi sunmak için sürekli olarak öğreniyor.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
