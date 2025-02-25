import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
export default function Sucses() {
    useEffect(() => {
        const duration = 6 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
        };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: {
                    x: randomInRange(0.1, 0.3),
                    y: Math.random() - 0.2,
                },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: {
                    x: randomInRange(0.7, 0.9),
                    y: Math.random() - 0.2,
                },
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Header />
            <main className="flex flex-col items-center justify-center mb-[100px]">
                <img
                    src="/svg/sucses.svg"
                    className="w-[34%] h-auto mt-[-50px]"
                    alt=""
                />
                <div c>
                    <h1 className="text-[20px] font-semibold text-center mt-[-50px]">
                        Məhsulunuz uğurla sifariş edildi!
                    </h1>
                    <p className="text-[14px] font-normal  text-center mt-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </div>
                <div className="flex felx-row gap-4 mt-[40px] justify-center">
                    <button className="px-[71px] py-[14px] bg-[#69BE56] text-white flex justify-between rounded-[100px]">
                        Sifarişini izlə
                    </button>
                    <button className="px-[71px] py-[14px] border bg-[#ffffff] text-black flex justify-center items-center flex-row gap-2 rounded-[100px]">
                        Ana səhifəyə qayıt{' '}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_504_10979)">
                                <path
                                    d="M9 14L5 10L9 6"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5 10H16C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18H15"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_504_10979">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
