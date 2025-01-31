import Header from '@/components/Header';
import Product_Card_aute from '@/components/ProductCards/Product_Card_aoute';
import Settings from '@/components/Setting';
import UserAside from '@/components/UserAside';
import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React from 'react';

export default function Liked() {
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const { data: favorites, isLoading } = GETRequest(
        `/favorites`,
        'favorites',
        [lang]
    );
    const { data: translates } = GETRequest(`/translates`, 'translates', [
        lang,
    ]);
    console.log('favorites', favorites);
    console.log('translates', translates);

    return (
        <div className="h-[100vh] w-full bg-[F1F5F0]   relative">
            <Header activeIndex={0} />
            <div className="flex flex-row h-full">
                <div className="w-[20%] h-[100%] mr-3">
                    <UserAside active={2} />
                </div>
                <div className="w-full h-full bg-[#F1F5F0] flex flex-col">
                    <h3 className="text-[28px] font-semibold m-[40px]">
                        {translates?.Bəyəndiklərim}
                    </h3>
                    <div className="flex flex-row justify-between w-full px-[50px] flex-wrap gap-5 overflow-y-scroll">
                        {isLoading
                            ? Array.from({ length: 10 }).map(() => (
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
                              ))
                            : favorites?.map((item) => (
                                  <Product_Card_aute
                                      bgcolor="#FFFFFF"
                                      data={item.product}
                                  />
                              ))}
                        {/* <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" />
                        <Product_Card_aute bgcolor="#FFFFFF" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
