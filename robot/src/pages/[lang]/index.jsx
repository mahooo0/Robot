import { useRouter } from 'next/router';
import React from 'react';
import Home from '..';
import {
    get_Products_By_Param,
    getAdvantages,
    getSection,
    getTranslates,
} from '@/services/Requests';

export default function index(props) {
    return <Home {...props} />;
}
export async function getServerSideProps(context) {
    const { lang = 'az' } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch data sequentially
        const Home_acsesuaresResponse = await fetch(
            `${baseUrl}/section?type=Home_acsesuares`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Home_acsesuares = await Home_acsesuaresResponse.json();

        const Home_mobile_sectionResponse = await fetch(
            `${baseUrl}/section?type=Home_mobile_section`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Home_mobile_section = await Home_mobile_sectionResponse.json();

        const Home_Special_OffersResponse = await fetch(
            `${baseUrl}/section?type=Home_Special_Offers`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Home_Special_Offers = await Home_Special_OffersResponse.json();

        const Home_İRobot_evinizinResponse = await fetch(
            `${baseUrl}/section?type=Home_İRobot_evinizin`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const Home_İRobot_evinizin = await Home_İRobot_evinizinResponse.json();

        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const Translates = await TranslatesResponse.json();

        const NewProductsResponse = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const NewProducts = await NewProductsResponse.json();

        const MostSaledProductsResponse = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const MostSaledProducts = await MostSaledProductsResponse.json();

        const VacumusProductsResponse = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const VacumusProducts = await VacumusProductsResponse.json();

        const PaketProductsResponse = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const PaketProducts = await PaketProductsResponse.json();

        const SpecialOfferResponse = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const SpecialOffer = await SpecialOfferResponse.json();

        const CleanersOfferResponse = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const CleanersOffer = await CleanersOfferResponse.json();

        const AdvantagesResponse = await fetch(`${baseUrl}/advantages`, {
            headers: { 'Accept-Language': lang },
        });
        const Advantages = await AdvantagesResponse.json();

        return {
            props: {
                Home_acsesuares,
                Translates,
                Home_mobile_section,
                Home_Special_Offers,
                NewProducts,
                Advantages,
                MostSaledProducts,
                SpecialOffer: SpecialOffer?.data?.[0] || null,
                PaketProducts,
                VacumusProducts,
                Home_İRobot_evinizin,
                CleanersOffer,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
