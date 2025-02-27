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
        // Fetch all data concurrently
        const [
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
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
