import GETRequest from '@/services/QueryREq';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Orders = ({ Translates }) => {
    const [status, setActiveFilter] = useState('');
    const router = useRouter();
    const filterOptions = [
        Translates?.Hamısı,
        Translates?.Aktiv,
        Translates.Bitmiş,
        Translates.Ləğv_edilən,
    ];
    const { lang = 'az' } = router.query;
    const { data: Order, isLoading } = GETRequest(
        `getOrders${status === '' ? '' : `?status=${status}`}`,
        'getOrders',
        [lang, status]
    );
    console.log('Order', Order);

    return (
        <div className="flex w-full  flex-col px-10 py-12 bg-stone-100 min-h-[100vh] max-md:px-5 h-fit">
            <div className="flex flex-wrap gap-5 justify-between w-full text-green-950 max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-center">
                    {Translates?.Sifarişlərim}
                </h1>
                <nav className="flex gap-3 items-center text-sm font-medium max-md:max-w-full flex-wrap">
                    <button
                        onClick={() => setActiveFilter('')}
                        className={`gap-2.5 self-stretch px-6 py-3 my-auto whitespace-nowrap rounded-[100px] max-md:px-5 ${
                            status === ''
                                ? 'text-white bg-[#69BE56] border border-[#69BE56]'
                                : 'border border-solid border-black border-opacity-20'
                        }`}
                    >
                        {Translates?.Hamısı}
                    </button>
                    <button
                        onClick={() => setActiveFilter('ordered')}
                        className={`gap-2.5 self-stretch px-6 py-3 my-auto whitespace-nowrap rounded-[100px] max-md:px-5 ${
                            status === 'ordered'
                                ? 'text-white bg-[#69BE56] border border-[#69BE56]'
                                : 'border border-solid border-black border-opacity-20'
                        }`}
                    >
                        {Translates?.Aktiv}
                    </button>
                    <button
                        onClick={() => setActiveFilter('delivered')}
                        className={`gap-2.5 self-stretch px-6 py-3 my-auto whitespace-nowrap rounded-[100px] max-md:px-5 ${
                            status === 'delivered'
                                ? 'text-white bg-[#69BE56] border border-[#69BE56]'
                                : 'border border-solid border-black border-opacity-20'
                        }`}
                    >
                        {Translates?.Bitmiş}
                    </button>
                    <button
                        onClick={() => setActiveFilter('cancelled')}
                        className={`gap-2.5 self-stretch px-6 py-3 my-auto whitespace-nowrap rounded-[100px] max-md:px-5 ${
                            status === 'cancelled'
                                ? 'text-white bg-[#69BE56] border border-[#69BE56]'
                                : 'border border-solid border-black border-opacity-20'
                        }`}
                    >
                        {Translates?.Ləğv_edilən}
                    </button>
                </nav>
            </div>
            <section className="flex mt-10 max-md:pr-5">
                <div className="flex z-10 flex-col mr-0 w-full text-sm max-md:max-w-full">
                    {isLoading
                        ? Array.from({ length: 5 }).map((_, index) => (
                              <React.Fragment key={index}>
                                  <div className="flex flex-wrap gap-5 justify-between items-center px-px mt-5 w-full max-md:max-w-full animate-pulse">
                                      <div className="flex gap-3 items-center self-stretch flex-wrap">
                                          {/* Product Image Skeleton */}
                                          <div className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px] bg-gray-200" />

                                          {/* Order Details Skeleton */}
                                          <div className="flex flex-col self-stretch my-auto max-w-56 space-y-2">
                                              <div className="h-4 w-24 bg-gray-200 rounded-md" />
                                              <div className="h-5 w-32 bg-gray-300 rounded-md" />
                                              <div className="h-4 w-20 bg-gray-200 rounded-md" />
                                          </div>
                                      </div>

                                      {/* Status Skeleton */}
                                      <div className="self-stretch my-auto font-medium h-5 w-24 bg-gray-300 rounded-md" />

                                      {/* Button Skeleton */}
                                      <div className="flex gap-2 items-center self-stretch py-0.5 my-auto">
                                          <div className="h-5 w-16 bg-gray-200 rounded-md" />
                                          <div className="h-5 w-5 bg-gray-300 rounded-full" />
                                      </div>
                                  </div>

                                  {/* Divider Skeleton */}

                                  <div className="mt-5 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                              </React.Fragment>
                          ))
                        : Order?.map((order, index) => (
                              <React.Fragment key={index}>
                                  <div className="flex flex-wrap gap-5 justify-between items-center px-px mt-5 w-full max-md:max-w-full">
                                      <div className="flex gap-3 items-center self-stretch flex-wrap">
                                          <img
                                              loading="lazy"
                                              src={
                                                  order.order_items[0].product
                                                      .image
                                              }
                                              alt="Product"
                                              className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                          />
                                          <div className="flex flex-col self-stretch my-auto max-w-56">
                                              <div className="flex flex-col w-full">
                                                  <time className="text-black text-opacity-60">
                                                      {order.order_date}{' '}
                                                  </time>
                                                  <h2 className="mt-2 font-medium text-green-950">
                                                      {order.order_number}{' '}
                                                  </h2>
                                                  {order.status ===
                                                      'Sifariş edildi' && (
                                                      <p className="mt-2 text-xs text-[#87A28E]">
                                                          3 məhsul
                                                      </p>
                                                  )}
                                              </div>
                                          </div>
                                      </div>
                                      <div
                                          className={`self-stretch my-auto font-medium ${order.statusColor}`}
                                      >
                                          {order.status}
                                      </div>
                                      <button
                                          onClick={() =>
                                              router.push(
                                                  `/${lang}/user/orders/${order.id}`
                                              )
                                          }
                                          className="flex gap-2 items-center self-stretch py-0.5 my-auto font-medium text-[#69BE56] border-b border-solid border-b-green-400"
                                      >
                                          <span className="self-stretch my-auto">
                                              {Translates.Ətraflı}
                                          </span>
                                          <img
                                              loading="lazy"
                                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e6a7ffe16661986780a86df5852d9c4b486b1d98292e12200f77fbe1d86621?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                              alt=""
                                              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                          />
                                      </button>
                                  </div>
                                  {index < Order.length - 1 && (
                                      <div className="mt-5 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                                  )}
                              </React.Fragment>
                          ))}
                    {}
                </div>
            </section>
        </div>
    );
};

export default Orders;
