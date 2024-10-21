import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react';

export default function _() {
    const router = useRouter();
    return (
        <div>
            <Header activeIndex={0} />
            <main className="w-full flex justify-center">
                <div className="flex flex-col self-center mt-10 mb-10 max-w-full w-[532px] max-md:mt-10">
                    <div className="flex flex-wrap gap-1 items-center self-end font-bold text-center whitespace-nowrap text-[200px] text-neutral-600 max-md:max-w-full max-md:text-4xl">
                        <img src="/svg/404.svg" />
                    </div>
                    <section className="flex flex-col mt-5 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full text-center max-md:max-w-full">
                            <h1 className="text-xl font-semibold text-green-950 max-md:max-w-full">
                                OPPS! Səhifə tapılmadı
                            </h1>
                            <p className="self-center mt-2 text-sm text-black text-opacity-80 max-md:max-w-full">
                                Axtardığınız səhfə tapılmadı və ya error baş
                                verdi.
                            </p>
                        </div>
                        <div className="flex gap-3 justify-center items-center self-center mt-10 w-60 max-w-full text-base font-medium text-green-950">
                            <button
                                onClick={() => router.push('/')}
                                className="flex gap-2.5 justify-center items-center self-stretch px-7 py-3.5 my-auto w-60 border border-solid border-gray-600 border-opacity-40 rounded-[100px] max-md:px-5"
                            >
                                <span className="self-stretch my-auto">
                                    Ana səhifəyə qayıt
                                </span>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aeea7760b4d6d15a1fcb6e680e5c21d4e66e4942ba25bfcdc02db6d571b36b8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
