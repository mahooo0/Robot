import BuyAcsesuares from '@/components/buyAcsesuares';
import BuyProduct from '@/components/buyProduct';
import CommentsSection from '@/components/Comments';
import CustomerReviews from '@/components/CustomerReviews';
import FAQSection from '@/components/Faq';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Productacsesuares from '@/components/ProductAcsesuares';
import ProductDetails from '@/components/ProductDetails';
import ProductImages from '@/components/ProductImages';
import SalesSwipper from '@/components/sales.swipper.jsx';
import { get_Products_By_Param, getProductSinle } from '@/services/Requests';
import { useRouter } from 'next/router';
import React from 'react';

export default function ProductSingle({ product, MostSimularProducts }) {
    console.log('{product}', { product, MostSimularProducts });

    const router = useRouter();

    return (
        <div>
            {' '}
            <Header activeIndex={0} />
            <main>
                <section className="px-[60px] pt-[40px] flex lg:flex-row flex-col gap-10">
                    <ProductImages product={product} />
                    <BuyAcsesuares product={product} />
                </section>

                <section className="mb-[100px]">
                    <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap gap-4 mb-">
                        <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                            məhsullar
                        </h3>
                        <button className="flex flex-row gap-2 text-[#447355] border-b border-[#447355]">
                            <p onClick={() => router.push(`/products`)}>
                                Bütün məhsullar{' '}
                            </p>
                            <img src="/svg/Strelka_green.svg" />
                        </button>
                    </div>
                    <SalesSwipper data={MostSimularProducts.data} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang, slug } = context.params;
    console.log('lang:', lang);
    console.log('slug:', slug);

    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch both product and similar products in parallel
        const [product, MostSimularProducts] = await Promise.all([
            fetch(`${baseUrl}/accessorySingle/${slug}`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),

            fetch(`${baseUrl}/accessories`, {
                headers: { 'Accept-Language': lang },
            }).then((res) => res.json()),
        ]);

        return {
            props: {
                product,
                MostSimularProducts,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
