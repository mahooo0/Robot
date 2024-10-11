import React from 'react';

function OrderDetails() {
    const statusSteps = [
        { label: 'Sifariş verildi', date: '05.02.2024', status: 'completed' },
        {
            label: 'Sifariş hazırlanır',
            date: '05.02.2024',
            status: 'completed',
        },
        { label: 'Kuryerə verildi', date: '05.02.2024', status: 'current' },
        { label: 'Çatdırıldı', date: '05.02.2024', status: 'pending' },
    ];

    const products = [
        {
            id: 1,
            name: 'Roomba® j7+',
            price: 300,
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14cdd3abb6d139c9b2383f07363293b7137b81992924730e917ff8dc525040c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 2,
            name: 'Roomba® j7+',
            price: 300,
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14cdd3abb6d139c9b2383f07363293b7137b81992924730e917ff8dc525040c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 3,
            name: 'Roomba® j7+',
            price: 300,
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14cdd3abb6d139c9b2383f07363293b7137b81992924730e917ff8dc525040c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 4,
            name: 'Roomba® j7+',
            price: 300,
            image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14cdd3abb6d139c9b2383f07363293b7137b81992924730e917ff8dc525040c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
    ];

    return (
        <main className="flex overflow-hidden flex-col py-16 bg-stone-100 w-full">
            <button className="gap-2.5 self-end px-6 py-3 mr-14 text-sm font-medium text-rose-600 border border-solid border-rose-600 border-opacity-20 rounded-[100px] max-md:px-5 max-md:mr-2.5">
                Sifarişi ləğv et
            </button>
            <div className="flex flex-col items-start px-10 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <section className="w-full flex flex-col items-center">
                    <div className="flex flex-wrap gap-2 items-center">
                        {statusSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full ${
                                        step.status === 'pending'
                                            ? 'bg-neutral-200'
                                            : 'bg-green-400 fill-green-400'
                                    }`}
                                />
                                {index < statusSteps.length - 1 && (
                                    <div
                                        className={`flex shrink-0 self-stretch my-auto h-[3px] min-w-[240px] rounded-[100px] w-[280px] ${
                                            step.status === 'pending'
                                                ? 'bg-neutral-200'
                                                : 'bg-neutral-400'
                                        }`}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-5 justify-between mt-3 w-full max-w-[1000px] max-md:max-w-full">
                        {statusSteps.map((step, index) => (
                            <div key={index} className="flex flex-col">
                                <div
                                    className={`text-sm ${
                                        step.status === 'pending'
                                            ? 'text-black text-opacity-60'
                                            : 'text-green-950'
                                    }`}
                                >
                                    {step.label}
                                </div>
                                <div className="mt-1 text-xs leading-none text-black text-opacity-60">
                                    {step.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="flex overflow-hidden flex-wrap gap-5 justify-between self-stretch px-6 py-5 mt-16 w-full rounded-3xl bg-white bg-opacity-80 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
                        <div className="flex gap-3 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4104ec407054e47cf814b2854d2ea20f423f169bef0ed24a87e120e368d957fb?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt="Order icon"
                                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                            />
                            <div className="flex flex-col self-stretch my-auto">
                                <div className="text-sm text-black text-opacity-60">
                                    Sifariş nömrəsi:
                                </div>
                                <div className="mt-1 text-base text-green-950">
                                    23232323
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch my-auto w-0 h-11 border border-solid border-zinc-300" />
                        <div className="flex flex-col self-stretch my-auto">
                            <div className="text-sm text-black text-opacity-60">
                                Sifariş tarixi:
                            </div>
                            <div className="mt-1 text-base text-green-950">
                                12.07.2024
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch my-auto w-0 h-11 border border-solid border-zinc-300" />
                        <div className="flex flex-col self-stretch my-auto">
                            <div className="text-sm text-black text-opacity-60">
                                Məhsul sayı
                            </div>
                            <div className="mt-1 text-base text-green-950">
                                3 məhsul
                            </div>
                        </div>
                    </div>
                    <button className="flex gap-2.5 justify-center items-center px-7 py-3.5 my-auto text-base font-medium text-center text-white rounded-xl border border-solid bg-neutral-400 border-neutral-100 max-md:px-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f94626f29baa40253df5d994693071ebb35e01a27694c2109f8aa983ec4265d5?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <span className="self-stretch my-auto">
                            Faktura yüklə
                        </span>
                    </button>
                </section>
                <section className="flex flex-col mt-16 w-full  max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-xl font-semibold text-green-950 max-md:max-w-full">
                        Sifariş edilən məhsullar
                    </h2>
                    <div className="flex flex-wrap gap-5 items-center mt-7 w-full ">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex gap-3 items-center self-stretch p-5 my-auto rounded-3xl bg-white bg-opacity-40 min-w-[240px]"
                            >
                                <img
                                    loading="lazy"
                                    src={product.image}
                                    alt={product.name}
                                    className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.19] w-[167px]"
                                />
                                <div className="flex flex-col self-stretch my-auto w-[184px]">
                                    <div className="flex flex-col w-full font-semibold">
                                        <div className="text-base text-green-950">
                                            {product.name}
                                        </div>
                                        <div className="flex gap-1 items-center self-start mt-2 text-lg text-center text-gray-600 whitespace-nowrap">
                                            <div className="self-stretch my-auto">
                                                {product.price}
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc3d5367708995c96502109073139877c94cecd6d609b088e7ffe892aea4c362?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                                alt="Currency symbol"
                                                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                            />
                                        </div>
                                    </div>
                                    <button className="gap-2.5 self-stretch px-5 py-3 mt-6 text-sm font-medium text-white bg-green-400 border border-green-400 border-solid rounded-[100px]">
                                        Məhsulu dəyərləndir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex overflow-hidden gap-5 justify-between items-center px-5 py-4 w-full text-base text-center text-black bg-white max-md:max-w-full">
                        <div className="self-stretch my-auto">
                            Çatdırılma məlumatları:
                        </div>
                        <div className="self-stretch my-auto">
                            Ödəmə məlumatları:
                        </div>
                        <div className="flex gap-1 items-center self-stretch whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a07f267a6fd5f8d48c027bfb63f0ec6dab59a4583a3c2df27c3872ee29ab3cf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                alt=""
                                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                            />
                            <div className="self-stretch my-auto">****0000</div>
                        </div>
                    </div>
                    <div className="overflow-hidden px-5 pt-5 pb-10 mt-1 w-full bg-white max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col w-full max-md:mt-10">
                                    <div className="flex flex-col">
                                        <div className="text-sm text-black text-opacity-60">
                                            Ünvan:
                                        </div>
                                        <div className="mt-2 text-base text-black">
                                            Bakı şəhər, Yasamal, Ə.Əhmədov 24 A.
                                            mənzi 45
                                        </div>
                                    </div>
                                    <button className="flex gap-2 items-center self-start py-0.5 mt-5 text-sm font-medium text-green-400 border-b border-solid border-b-green-400">
                                        <span className="self-stretch my-auto">
                                            Ünvan məlumatların dəyiş
                                        </span>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13bd06d53a503dd58916d47ed095da20e9c5546adccb3bfd38fbd8e61c56cfca?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                            alt=""
                                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                                    <div className="flex gap-10 justify-between items-center w-full max-md:max-w-full">
                                        <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                            Məhsul məbləği:
                                        </div>
                                        <div className="self-stretch my-auto text-base text-center text-black">
                                            400 AZN
                                        </div>
                                    </div>
                                    <div className="mt-3 w-full border border-solid border-zinc-300 min-h-[1px] max-md:max-w-full" />
                                    <div className="flex gap-10 justify-between items-center mt-3 w-full max-md:max-w-full">
                                        <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                            Çatdırılma məbləği:
                                        </div>
                                        <div className="self-stretch my-auto text-base text-center text-black">
                                            10 AZN
                                        </div>
                                    </div>
                                    <div className="mt-3 w-full border border-solid border-zinc-300 min-h-[1px] max-md:max-w-full" />
                                    <div className="flex gap-10 justify-between items-center mt-3 w-full max-md:max-w-full">
                                        <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                            Ümumi məbləğ:
                                        </div>
                                        <div className="self-stretch my-auto text-lg font-semibold text-center text-green-400">
                                            410 AZN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default OrderDetails;
