import FilterAcsesuares from '@/components/Filteracsesuares';
import FilterComponent from '@/components/FilterCategory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/Navication_bar';
import ProductPagination from '@/components/Pagination';
import ProductBundle from '@/components/Product_bundle';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCardSm from '@/components/ProductCards/productCarrSm';
import { AcsesuaresFilters } from '@/components/recoil/Atom';
import Acsesuares_Categories from '@/components/sections/Acsesuares/Categories';
import GETRequest from '@/services/QueryREq';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Aksesuares({
    Translates,
    AccessorySeries,
    accessoryCategories,
    accessoryTypes,
}) {
    const [searchQuery, setSearchQuery] = useState('');
    console.log('Translates', Translates);
    // console.log('Acsesuares', Acsesuares);
    const [page, setpage] = useState(1);
    const [Filters, setFilter] = useRecoilState(AcsesuaresFilters);

    const { data: Acsesuares, isLoading: AcsesuaresLoading } = GETRequest(
        `/accessories?page=${page}${
            Filters.series ? `&accessory_serie_id=${Filters.series}` : ''
        }${Filters.minPrice ? `&min_price=${Filters.minPrice}` : ''}${
            Filters.catgory ? `&accessory_category_id=${Filters.catgory}` : ''
        }${Filters.type ? `&accessory_type_id=${Filters.type}` : ''}`,
        'accessories',
        [page, Filters]
    );
    useEffect(() => {
        console.log('Filters', Filters);
    }, [Filters]);
    const chunkedProducts = chunkArray(Acsesuares?.data || []);
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
    return (
        <div>
            <Header activeIndex={2} productIndex={2} />
            <Acsesuares_Categories
                AccessorySeries={AccessorySeries}
                Translates={Translates}
            />
            <FilterAcsesuares
                accessoryCategories={accessoryCategories}
                accessoryTypes={accessoryTypes}
                Translates={Translates}
            />
            <div className="px-[60px]">
                {' '}
                {!AcsesuaresLoading ? (
                    chunkedProducts.map((chunk, index) => (
                        <div
                            key={index}
                            className="flex flex-row flex-wrap justify-between gap-5 mt-7"
                        >
                            {chunk.map((prod) => (
                                <Product_Card_aute key={prod.id} data={prod} />
                            ))}
                        </div>
                    ))
                ) : (
                    <>
                        <div className=" grid grid-cols-3 flex-wrap justify-between gap-5 mt-7">
                            {Array.from({ length: 10 }).map(() => (
                                <div className="flex flex-col grow shrink self-stretch pb-3 my-auto min-w-[240px] w-full relative">
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
            </div>
            <div className=" flex justify-center items-center mt-[60px] mb-[100px]">
                <ProductPagination
                    currentPage={page}
                    onPageChange={(i) => setpage(i)}
                    totalPages={Acsesuares?.meta?.last_page}
                />
            </div>

            <Footer />
        </div>
    );
}
export async function getServerSideProps(context) {
    const { lang } = context.params;
    const baseUrl = 'https://irobot.avtoicare.az/api';

    try {
        // Fetch data sequentially

        const TranslatesResponse = await fetch(`${baseUrl}/translates`, {
            headers: { 'Accept-Language': lang },
        });
        const Translates = await TranslatesResponse.json();

        const AccessorySeriesResponse = await fetch(
            `${baseUrl}/accessorySeries`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const AccessorySeries = await AccessorySeriesResponse.json();

        const accessoryCategoriesResponse = await fetch(
            `${baseUrl}/accessoryCategories`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const accessoryCategories = await accessoryCategoriesResponse.json();
        const accessoryTypesResponse = await fetch(
            `${baseUrl}/accessoryTypes`,
            {
                headers: { 'Accept-Language': lang },
            }
        );
        const accessoryTypes = await accessoryTypesResponse.json();
        return {
            props: {
                Translates,
                AccessorySeries,
                accessoryCategories,
                accessoryTypes,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: null, error: error.message } };
    }
}
