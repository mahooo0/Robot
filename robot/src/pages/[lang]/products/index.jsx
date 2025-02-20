import Product from '@/pages/products';
import { getSection, getTranslates } from '@/services/Requests';
import React from 'react';

export default function index(props) {
    // console.log('props', props);

    return <Product {...props} />;
}
export async function getServerSideProps(context) {
    const { lang = 'az' } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch data concurrently
        const [Product_Hero, Translates] = await Promise.all([
            fetch(`${baseUrl}/section?type=Product_Hero`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),

            fetch(`${baseUrl}/translates`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
        ]);

        return { props: { Translates, Product_Hero } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
