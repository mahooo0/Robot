import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Orders = () => {
    const [activeFilter, setActiveFilter] = useState('Hamısı');
    const router = useRouter();
    const filterOptions = ['Hamısı', 'Aktiv', 'Bitmiş', 'Ləğv edilən'];

    const orders = [
        { status: 'Sifariş edildi', statusColor: 'text-gray-600' },
        { status: 'Hazırlanır', statusColor: 'text-gray-600' },
        { status: 'Kuryerə verildi', statusColor: 'text-gray-600' },
        { status: 'Çatdırıldı', statusColor: 'text-gray-600' },
        { status: 'Ləğv edildi', statusColor: 'text-rose-600' },
    ];

    return (
        <main className="flex w-full overflow-hidden flex-col px-10 py-12 bg-stone-100 max-md:px-5">
            <header className="flex flex-wrap gap-5 justify-between w-full text-green-950 max-md:max-w-full">
                <h1 className="text-3xl font-semibold text-center">
                    Sifarişlərim
                </h1>
                <nav className="flex gap-3 items-center text-sm font-medium max-md:max-w-full">
                    {filterOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => setActiveFilter(option)}
                            className={`gap-2.5 self-stretch px-6 py-3 my-auto whitespace-nowrap rounded-[100px] max-md:px-5 ${
                                option === activeFilter
                                    ? 'text-white bg-green-400 border border-green-400'
                                    : 'border border-solid border-black border-opacity-20'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </nav>
            </header>
            <section className="flex mt-10 max-md:pr-5">
                <div className="flex z-10 flex-col mr-0 w-full text-sm max-md:max-w-full">
                    {orders.map((order, index) => (
                        <React.Fragment key={index}>
                            <article className="flex flex-wrap gap-5 justify-between items-center px-px mt-5 w-full max-md:max-w-full">
                                <div className="flex gap-3 items-center self-stretch">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/06940f87445837d47f49f1dae8c7427f864ea9511078dcc618dc797f009c6687?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt="Product"
                                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="flex flex-col self-stretch my-auto w-56">
                                        <div className="flex flex-col w-full">
                                            <time className="text-black text-opacity-60">
                                                24 sentyabr 2024
                                            </time>
                                            <h2 className="mt-2 font-medium text-green-950">
                                                Roomba Combo® 10 Max Saug- und
                                                Wischroboter + AutoWash
                                            </h2>
                                            {order.status ===
                                                'Sifariş edildi' && (
                                                <p className="mt-2 text-xs text-gray-600">
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
                                        router.push('/user/orders/id')
                                    }
                                    className="flex gap-2 items-center self-stretch py-0.5 my-auto font-medium text-green-400 border-b border-solid border-b-green-400"
                                >
                                    <span className="self-stretch my-auto">
                                        Ətraflı
                                    </span>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e6a7ffe16661986780a86df5852d9c4b486b1d98292e12200f77fbe1d86621?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                        alt=""
                                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                    />
                                </button>
                            </article>
                            {index < orders.length - 1 && (
                                <div className="mt-5 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Orders;
