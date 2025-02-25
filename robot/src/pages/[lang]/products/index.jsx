import FilterComponent from '@/components/FilterCategory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/Navication_bar';
import ProductPagination from '@/components/Pagination';
import ProductBundle from '@/components/Product_bundle';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCardSm from '@/components/ProductCards/productCarrSm';
import { ProductFilters } from '@/components/recoil/Atom';
import ProductHero from '@/components/sections/Product-hero';
import GETRequest from '@/services/QueryREq';
import { getSection, getTranslates } from '@/services/Requests';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

// Chunk Array Function
function chunkArray(arr) {
    const result = [];
    let index = 0;

    // Pattern for chunk sizes: [3, 3, 2, 2, 3, 3, 2]
    const chunkSizes = [3, 3, 2, 2, 3, 3, 2];

    for (const size of chunkSizes) {
        if (index >= arr?.length) break; // Stop if we've processed all elements
        result.push(arr?.slice(index, index + size)); // Add a chunk of the specified size
        index += size; // Move the index forward
    }

    return result;
}

export default function Product({
    Product_Hero,
    Translates,
    productCategories,
    accessorySeries,
    productTypes,
}) {
    const router = useRouter();
    const [page, setpage] = useState(1);
    const { lang = 'az' } = router.query;
    const [Filters, setFilters] = useRecoilState(ProductFilters);

    const { data: products, isLoading: ProductLoading } = GETRequest(
        `/products?page=${page}${
            Filters.minPrice ? `&min_price=${Filters.minPrice}` : ''
        }${Filters.maxPrice ? `&max_price=${Filters.maxPrice}` : ''}${
            Filters.category ? `&category_id=${Filters.category}` : ''
        }${Filters.series ? `&product_serie_id=${Filters.series}` : ''}${
            Filters.type ? `&type=${Filters.type}` : ''
        }${Filters.minArea ? `&min_area=${Filters.minArea}` : ''}${
            Filters.maxArea ? `&max_area=${Filters.maxArea}` : ''
        }${Filters.title ? `&title=${Filters.title}` : ''}`,
        'products',
        [lang, page, Filters]
    );
    useEffect(() => {
        console.log('Filters', Filters);
    }, [Filters]);
    console.log('productCategories', productCategories);

    // Chunk the products array
    const chunkedProducts = chunkArray(products?.data || []);

    return (
        <div>
            <Header activeIndex={1} productIndex={2} />
            <ProductHero Product_Hero={Product_Hero} Translates={Translates} />
            <div className="w-full flex lg:flex-row md:flex-row flex-col mb-[128px] lg:items-start md:items-start items-center">
                <FilterComponent
                    productCategories={productCategories}
                    accessorySeries={accessorySeries}
                    productTypes={productTypes}
                />
                <section className="lg:pr-[60px] pr-[30px] mt-[60px] w-[100%]">
                    <div className="w-full flex justify-between items-center flex-wrap">
                        <p className="text-[16px] font-normal text-opacity-60">
                            200 Məhsul
                        </p>
                        <div className="flex flex-row gap-3 items-center flex-wrap">
                            <p className="text-[16px] font-normal text-opacity-60">
                                Sırala{' '}
                            </p>
                            <div className="p-3 bg-[#ECF1EA] w-[283px] h-[48px] rounded-[10px]">
                                <select
                                    name=""
                                    id=""
                                    className="bg-[#ECF1EA] w-full"
                                >
                                    <option value="">option1</option>
                                    <option value="">option2</option>
                                    <option value="">option3</option>
                                    <option value="">option4</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Render chunked products */}
                    {!ProductLoading ? (
                        chunkedProducts.map((chunk, index) => (
                            <div
                                key={index}
                                className="flex flex-row flex-wrap justify-between gap-5 mt-7"
                            >
                                {chunk.map((prod) => (
                                    <Product_Card_aute
                                        key={prod.id}
                                        data={prod}
                                    />
                                ))}
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="flex flex-row flex-wrap justify-between gap-5 mt-7">
                                {Array.from({ length: 10 }).map(() => (
                                    <div className="flex flex-col grow shrink self-stretch pb-3 my-auto min-w-[240px] w-[252px] relative">
                                        <div className="relative rounded-2xl bg-gray-200 animate-pulse">
                                            <div className="w-full rounded-3xl aspect-[1.24] bg-gray-300"></div>
                                        </div>

                                        <div className="flex flex-col mt-3 w-full">
                                            <div className="flex flex-col w-full">
                                                <div className="w-full h-6 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="mt-2 h-4 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                            <div className="flex justify-between items-center mt-3 w-full">
                                                <div className="flex gap-1 items-center self-stretch my-auto">
                                                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                                                    <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-[44px] h-[44px] rounded-full bg-gray-200 flex justify-center items-center absolute top-3 right-3 animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <ProductPagination
                        currentPage={page}
                        onPageChange={(i) => setpage(i)}
                        totalPages={products?.meta?.total}
                    />
                </section>
            </div>

            <Footer />
        </div>
    );
}
export async function getServerSideProps(context) {
    // Fetch data from an API or perform other server-side operations
    const { lang = 'az' } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        const Product_Hero = await fetch(
            `${baseUrl}/section?type=Product_Hero`,
            {
                headers: { 'Accept-Language': lang },
            }
        ).then((response) => response.json());

        const Translates = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        }).then((response) => response.json());

        const productCategories = await fetch(`${baseUrl}/productCategories`, {
            headers: { 'Accept-Language': lang },
        }).then((response) => response.json());

        const accessorySeries = await fetch(`${baseUrl}/productSeries`, {
            headers: { 'Accept-Language': lang },
        }).then((response) => response.json());
        const productTypes = await fetch(`${baseUrl}/productTypes`, {
            headers: { 'Accept-Language': lang },
        }).then((response) => response.json());
        return {
            props: {
                Translates,
                Product_Hero,
                productCategories,
                accessorySeries,
                productTypes,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }

    // Pass data to the page via props
}
