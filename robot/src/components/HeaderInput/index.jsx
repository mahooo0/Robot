import GETRequest from '@/services/QueryREq';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function HeaderInput() {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const [serchvalue, setserchvalue] = useState('');

    const { data: products, isLoading: ProductLoading } = GETRequest(
        `/products${serchvalue ? `?title=${serchvalue}` : ''}`,
        'products',
        [lang, serchvalue]
    );
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    return (
        <div className="rounded-[22px] flex flex-grow items-center justify-center gap-4 w-fit bg-[#F6F6F6] relative">
            <input
                className="bg-[#F6F6F6] rounded-[22px] h-full p-3 focus:outline-none"
                name="Frame 1000005024"
                placeholder={translates?.Axtar}
                type="text"
                onChange={(e) => setserchvalue(e.target.value)}
            />
            <div className="rounded-[50%] h-[36px] w-[36px] flex items-center justify-center bg-[#69BE56]">
                <Image
                    src={'/svg/lupa.svg'}
                    alt="Search Icon"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                />
            </div>
            {serchvalue && (
                <div
                    className="bg-white rounded-lg shadow-inner border border-black border-opacity-20 flex flex-col absolute top-[110%] h-[200px] w-full overflow-hidden overflow-y-scroll scrollbar-thin"
                    style={{
                        scrollbarWidth: 'thin', // For Firefox
                        scrollbarColor: '#888 #f1f1f1', // Scrollbar thumb and track colors
                    }}
                >
                    {ProductLoading ? (
                        <div className="flex flex-col items-center justify-center h-full px-3">
                            <div className="w-full h-[40px] bg-gray-200 animate-pulse mb-2"></div>
                            <div className="w-full h-[40px] bg-gray-200 animate-pulse mb-2"></div>
                            <div className="w-full h-[40px] bg-gray-200 animate-pulse mb-2"></div>
                            <div className="w-full h-[40px] bg-gray-200 animate-pulse mb-2"></div>
                        </div>
                    ) : products?.data.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            Not Found
                        </div>
                    ) : (
                        products?.data.map((item) => (
                            <Link
                                onClick={() => {
                                    localStorage.setItem(
                                        'Productslug',
                                        JSON.stringify(item.slug)
                                    );
                                    // router.push(`/${lang}/products/${item.slug[lang]}`);
                                }}
                                href={`/${lang}/products/${item.slug[lang]}`}
                                className="w-full hover:bg-black hover:bg-opacity-20 bg-white min-h-[40px] text-base flex items-center p-3 line-clamp-1"
                            >
                                {item.title}
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
