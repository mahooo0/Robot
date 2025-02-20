import { ROUTES } from '@/Helpers/Routes';
import ProductSingle from '@/pages/products/[id]';
import { getProductSinle, getQuestions } from '@/services/Requests';
import { useRouter } from 'next/router';
import React from 'react';

export default function index({ data }) {
    const router = useRouter();
    const { lang, page, slug } = router.query;
    if (page === ROUTES.product[lang]) {
        return <ProductSingle {...data} />;
    }

    return (
        <div>
            lang:{lang}
            <br />
            page:{page}
            <br />
            slug:{slug}
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang, page, slug } = context.params;
    if (page === ROUTES.product[lang]) {
        const product = await getProductSinle(lang, slug);
        return {
            props: {
                data: {
                    product,
                }, // Data will be available in the BuyersGuide component as a
            },
        };
    }

    // Simulating fetching data (replace with your actual API request)

    // Log the data to ensure it's returned correctly

    // Pass data to the page via props
    return {
        props: {
            // data, // Data will be available in the BuyersGuide component as a prop
        },
    };
}
