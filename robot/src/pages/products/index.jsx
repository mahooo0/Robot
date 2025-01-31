import FilterComponent from '@/components/FilterCategory';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/Navication_bar';
import ProductPagination from '@/components/Pagination';
import ProductBundle from '@/components/Product_bundle';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import ProductCard_MD from '@/components/ProductCards/Product_lg_card';
import ProductCardSm from '@/components/ProductCards/productCarrSm';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

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

export default function Product() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const [page, setpage] = useState(1);
    const { lang = 'az' } = router.query;
    const { data: products, isLoading: ProductLoading } = GETRequest(
        `/products?page=${page}`,
        'products',
        [lang, page]
    );
    console.log('products', products);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement search functionality here
        console.log('Search submitted:', searchQuery);
    };

    // Chunk the products array
    const chunkedProducts = chunkArray(products?.data || []);

    return (
        <div>
            <Header activeIndex={1} productIndex={2} />
            <section className="w-full lg:px-[60px] px-[30px] py-5">
                <div className="rounded-[20px] overflow-hidden flex relative flex-col justify-center items-center px-20 py-28 mt-5 w-full min-h-[440px] max-md:px-5 max-md:py-24 max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a73b9b37a8a74a1090d1e82286b001915b6d04b87406cc3f6b3dc4ef3916df?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Background"
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col mb-0 max-w-full w-[631px] max-md:mb-2.5">
                        <h1 className="text-5xl font-semibold text-center text-white max-md:max-w-full max-md:text-4xl">
                            Axtardığınız bütün ev robotları!
                        </h1>
                        <form
                            onSubmit={handleSearchSubmit}
                            className="flex overflow-hidden flex-nowrap gap-5 justify-between self-center py-1 pr-1 pl-5 mt-7 max-w-full text-base whitespace-nowrap border border-solid bg-white bg-opacity-80 border-white border-opacity-20 rounded-[100px] text-black text-opacity-60 w-[505px]"
                        >
                            <label htmlFor="searchInput" className="sr-only">
                                Search
                            </label>
                            <input
                                type="text"
                                id="searchInput"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Axtar"
                                className="my-auto bg-transparent w-full border-none outline-none flex-grow"
                            />
                            <button
                                type="submit"
                                aria-label="Search"
                                className="flex items-center justify-center w-12 h-12"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0d99b161e97a7dcc0fb884f8ea9546725030c9eca6eb0e2997a2102e324987?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 w-full h-full"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <div className="w-full flex lg:flex-row md:flex-row flex-col mb-[128px] lg:items-start md:items-start items-center">
                <FilterComponent />
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
