import Image from 'next/image';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Ph from '../../public/svg/ph.svg';
import Hero_Swipper from '@/components/home_product_wsipper';
import { useRef, useState } from 'react';
import FeatureList from '@/components/FeatureList';
import ProductCategories from '@/components/ProductCategorys';
import Green_to_green from '@/components/btns/green_to_green';
import ProductCardNew from '@/components/ProductCards/productNew';
import Green_to_none from '@/components/btns/green_to_none';
// import ProductCardSm from '@/components/ProductCards/productCarrSm';
import { motion } from 'framer-motion';

import SalesSwipper from '@/components/sales.swipper.jsx';
import ProductBundle from '@/components/Product_bundle';
import Footer from '@/components/Footer';
import White_to_green from '@/components/btns/white_to_green';
import { useRouter } from 'next/router';
import AcsesuaresSection from '@/components/sections/Home-acsesuares';
import {
    get_Products_By_Param,
    getAdvantages,
    getSection,
    getTranslates,
} from '@/services/Requests';
import MobileSection from '@/components/sections/Home-mobile';
import Home_Hero from '@/components/sections/home-hero';
import NewProductsSection from '@/components/sections/Home-new-product-section';
import SalesSection from '@/components/sections/Home-most-saled-products-section';
import SpecialOfferSection from '@/components/sections/Home-splecial-Offer';
import Paket_bundle from '@/components/sections/Home-packae-bundle';
import Special_Offer from '@/components/sections/Home-Special-Offer';
import Special_Offer_Login from '@/components/sections/Home-Special-Offer';
import ProductSwipperSection from '@/components/sections/Home-Product-Swipper';
import Home_IRobo_Bunner from '@/components/sections/Home-Bunner-Buttom';
import Head from 'next/head';
// import ProductBundle from '@/components/ProductBundle';
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export default function Home({
    Home_acsesuares,
    Translates,
    Home_mobile_section,
    NewProducts,
    Advantages,
    SpecialOffer,
    PaketProducts,
    Home_Special_Offers,
    VacumusProducts,
    Home_İRobot_evinizin,
    CleanersOffer,
    hero,
    seo,
}) {
    console.log('seo:', seo);

    const router = useRouter();
    return (
        <>
            <Head>
                <title>{seo.meta_title}</title>
                <meta name="description" content={seo.meta_description} />
                <meta name="keywords" content={seo.meta_keywords} />
            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3 }}
                className="text-[#132A1B]"
            >
                <Header activeIndex={0} />
                <Home_Hero hero={hero} />
                <section className="px-5 w-full flex justify-center">
                    <FeatureList Advantages={Advantages} />
                </section>
                <ProductCategories />
                <NewProductsSection
                    NewProducts={NewProducts.data}
                    Translates={Translates}
                />
                <SalesSection Translates={Translates} />
                <SpecialOfferSection
                    SpecialOffer={SpecialOffer}
                    Translates={Translates}
                />
                <Paket_bundle
                    Translates={Translates}
                    PaketProducts={PaketProducts.data}
                />
                <Special_Offer_Login
                    Home_Special_Offers={Home_Special_Offers}
                    Translates={Translates}
                />
                <ProductSwipperSection
                    data={VacumusProducts.data}
                    Ttile={Translates.Robot_süpürgələr}
                    Translates={Translates}
                />
                <Home_IRobo_Bunner
                    Home_İRobot_evinizin={Home_İRobot_evinizin}
                />
                <ProductSwipperSection
                    data={CleanersOffer.data}
                    Ttile={Translates.Robot_süpürgələr}
                    Translates={Translates}
                />
                <AcsesuaresSection
                    Home_acsesuares={Home_acsesuares}
                    Translates={Translates}
                />
                <MobileSection Home_mobile_section={Home_mobile_section} />
                <Footer />
            </motion.div>
        </>
    );
}
export async function getServerSideProps(context) {
    const lang = 'az';
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch all data concurrently
        const [
            seo,
            Home_acsesuares,
            Home_mobile_section,
            Home_Special_Offers,
            Home_İRobot_evinizin,
            Translates,
            NewProducts,
            VacumusProducts,
            PaketProducts,
            SpecialOffer,
            CleanersOffer,
            Advantages,
            hero,
        ] = await Promise.all([
            fetch(`${baseUrl}/seo_pages?type=Home`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/section?type=Home_acsesuares`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/section?type=Home_mobile_section`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/section?type=Home_Special_Offers`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/section?type=Home_İRobot_evinizin`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/translates`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/products?is_new=1`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),

            fetch(`${baseUrl}/products`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/products?is_paket=1`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/products`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/products`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/advantages`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
            fetch(`${baseUrl}/hero`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
        ]);

        return {
            props: {
                Home_acsesuares,
                Translates,
                Home_mobile_section,
                Home_Special_Offers,
                NewProducts,
                Advantages,
                SpecialOffer: SpecialOffer?.data?.[0] || null,
                PaketProducts,
                VacumusProducts,
                Home_İRobot_evinizin,
                CleanersOffer,
                hero,
                seo,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
