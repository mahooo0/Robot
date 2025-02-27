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

export default function ProductSingle({
    product,
    MostSimularProducts,
    translates,
}) {
    console.log('product', product);

    const router = useRouter();

    return (
        <div>
            {' '}
            <Header activeIndex={0} />
            <main>
                <section className="px-[60px] pt-[40px] flex lg:flex-row flex-col gap-10">
                    <ProductImages product={product} />
                    <BuyProduct product={product} translates={translates} />
                </section>
                <section className="w-full flex justify-center lg:px-[60px] px-[30px] ">
                    <FeaturesSection
                        product={product}
                        translates={translates}
                    />
                </section>
                <ProductDetails product={product} translates={translates} />
                <Productacsesuares
                    translates={translates}
                    acsesuares={product.accessories}
                />
                <FAQSection
                    Title={translates.Məhsul_haqqında}
                    data={product?.product_faqs}
                />
                <section className="flex justify-center w-full pt-[100px] flex-col items-center bg-[#F5F5F5]">
                    <CustomerReviews product={product} />
                    <CommentsSection product={product} />
                </section>
                <section className="mb-[100px]">
                    <div className="flex justify-between items-center lg:px-[60px] px-[30px] mt-[104px] flex-wrap gap-4 mb-">
                        <h3 className="lg:text-[40px] md:text-[32px] text-[28px] font-semibold">
                            {translates.məhsullar}
                        </h3>
                        <button className="flex flex-row gap-2 text-[#447355] border-b border-[#447355]">
                            <p onClick={() => router.push(`/${lang}/products`)}>
                                {translates.Bütün_məhsullar}
                            </p>
                            <img src="/svg/Strelka_green.svg" />
                        </button>
                    </div>
                    <SalesSwipper data={MostSimularProducts?.data} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang, slug } = context.params;

    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch product
        const productRes = await fetch(`${baseUrl}/productSingle/${slug}`, {
            headers: { 'Accept-Language': lang },
        });
        const product = await productRes.json();

        // Fetch similar products
        const mostSimularProductsRes = await fetch(`${baseUrl}/products`, {
            headers: { 'Accept-Language': lang },
        });
        const MostSimularProducts = await mostSimularProductsRes.json();

        // Fetch translates
        const translatesRes = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const translates = await translatesRes.json();

        return {
            props: {
                product,
                MostSimularProducts,
                translates,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
