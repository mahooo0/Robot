import React, { useEffect } from 'react';
import KreditCard from './ProductCard';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';

export default function KreditMain({ translates }) {
    const router = useRouter();
    const { lang } = router.query;
    const { data: credits, isLoading: loading } = GETRequest(
        `/credits`,
        'credits',
        [lang]
    );
    useEffect(() => {
        console.log('credits', credits);
    }, [credits]);
    return (
        <div className="flex overflow-hidden flex-col px-10 pt-10 mx-auto w-full bg-[#F1F5F0] pb-[100px] max-md:px-5 max-md:pb-24 max-md:mt-3 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-center text-green-950">
                    {translates?.Kreditlərim}
                </h1>
            </div>
            <div className="flex flex-col gap-3 mt-4 ">
                {loading
                    ? Array.from({ length: 5 }).map(() => (
                          <div className="w-full overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md animate-pulse">
                              <div className="flex items-center justify-between gap-4">
                                  {/* Product Image Skeleton */}
                                  <div className="h-24 w-24 flex-shrink-0 bg-gray-200 rounded-md" />

                                  {/* Product Info Skeleton */}
                                  <div className="flex-1 min-w-0 space-y-2">
                                      <div className="h-4 w-20 bg-gray-200 rounded-md" />
                                      <div className="h-5 w-2/3 bg-gray-300 rounded-md" />
                                      <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
                                  </div>

                                  {/* Details Link Skeleton */}
                                  <div className="flex items-center gap-2">
                                      <div className="h-5 w-16 bg-gray-200 rounded-md" />
                                      <div className="h-5 w-5 bg-gray-300 rounded-full" />
                                  </div>
                              </div>
                          </div>
                      ))
                    : credits.map((item) => (
                          <KreditCard
                              image={item.product.image}
                              date={item.date}
                              title={item.product.title}
                              duration={item.month}
                              price={item.price}
                              href={`/${lang}/user/kredits/${item.id}`}
                              detailsText={translates.Ətraflı}
                          />
                      ))}
            </div>
        </div>
    );
}
