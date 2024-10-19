import React from 'react';

function OrderSummary() {
    return (
        <section className="flex flex-col justify-center px-6 py-7 rounded-3xl bg-stone-50 max-md:px-5 lg:w-[25%] w-full h-fit">
            <div className="flex flex-col">
                <h2 className="text-lg font-medium text-black">
                    Ümumi sifariş
                </h2>
                <div className="flex flex-col mt-5 w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col w-full text-sm">
                            <div className="flex gap-10 items-center">
                                <div className="self-stretch my-auto text-black text-opacity-60">
                                    Məbləğ:
                                </div>
                                <div className="self-stretch my-auto font-medium text-green-950">
                                    250 AZN
                                </div>
                            </div>
                            <div className="flex gap-10 items-center mt-4 w-full">
                                <div className="self-stretch my-auto text-black text-opacity-60">
                                    Çatdırılma:
                                </div>
                                <div className="self-stretch my-auto font-medium text-green-950">
                                    5 AZN
                                </div>
                            </div>
                            <div className="flex gap-10 items-center mt-4">
                                <div className="self-stretch my-auto text-black text-opacity-60">
                                    Endirim
                                </div>
                                <div className="self-stretch my-auto font-semibold text-rose-600">
                                    5 AZN
                                </div>
                            </div>
                        </div>
                        <hr className="mt-3 w-full border border-solid border-zinc-300" />
                        <div className="flex gap-10 items-center mt-3 text-base">
                            <div className="self-stretch my-auto font-medium text-black text-opacity-80">
                                Cəmi məbləğ:
                            </div>
                            <div className="self-stretch my-auto font-semibold text-green-400">
                                260 AZN
                            </div>
                        </div>
                    </div>
                    <button className="gap-2.5 self-stretch px-7 py-3.5 mt-7 w-full text-base font-medium text-white bg-green-400 rounded-[100px] max-md:px-5">
                        Sifariş et
                    </button>
                </div>
            </div>
        </section>
    );
}

export default OrderSummary;
