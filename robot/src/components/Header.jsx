import React from 'react';
import phone from '../../public/svg/phone_white.svg';
import loc from '../../public/svg/location.svg';
import globus from '../../public/svg/globus.svg';
import strelka from '../../public/svg/optionStrelka.svg';
import person from '../../public/svg/person.svg';
import heart from '../../public/svg/heart.svg';
import karzina from '../../public/svg/karzina.svg';
import lupa from '../../public/svg/lupa.svg';
import ph from '../../public/svg/ph.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProductNavigation from './ProductNavication';
import ProductNav from './ProductNavication';
// import WhyNav from './whyNavication';
import OfferNav from './offersNavication';
import WhyNav from './whyNavication';
const Header = ({ activeIndex, productIndex, whyindex, offerindex }) => {
    const router = useRouter();
    return (
        <header className="border-b border-[#EFEFEF]">
            {/* Top section */}
            <div className="flex justify-center bg-blue_gray-400 text-[14px] text-white font-normal ">
                <div className=" px-[60px] flex w-full  justify-between gap-5 items-center md:flex-row lg:flex-row flex-col md:px-5 bg-[#87A28E] min-h-[52px] h-fit">
                    <div className="lg:w-[32%] w-full flex lg:justify-between  justify-center  items-center  gap-5 md:w-full lg:flex-row flex-col">
                        {/* Contact info */}
                        <div className="flex gap-2">
                            <Image
                                src={phone}
                                width={20}
                                height={20}
                                alt="Linear Call"
                                className="w-[20px] h-[20px]"
                            />

                            <p className="text-[14px] font-normal !text-white-a700 text-nowrap">
                                +994 00 000 00 00
                            </p>
                        </div>
                        {/* Address */}
                        <div className="flex flex-1  gap-3 w-fit">
                            <Image
                                src={loc}
                                width={20}
                                height={20}
                                alt="Linear Call"
                                className="w-[20px] h-[20px]"
                            />

                            <p className="text-[14px] font-normal !text-white-a700 text-nowrap">
                                Yasamal rayon, Ə.Əhmədov 21 B
                            </p>
                        </div>
                    </div>
                    {/* Location and Account */}
                    <div className="lg:w-[22%] lg:flex-row md:flex-row flex-row w-full flex items-center lg:justify-end md:jutify-end  justify-center gap-5 md:w-full">
                        <div className="flex w-fit justify-center gap-1">
                            <Image
                                src={globus}
                                width={20}
                                height={20}
                                alt="Linear Map Location"
                                className="w-[20px] h-[20px]"
                            />

                            <div className="flex gap-1 w-fit">
                                <p className="text-[14px] font-normal !text-white-a700 text-nowrap">
                                    Azərbaycan
                                </p>
                                <Image
                                    src={strelka}
                                    width={20}
                                    height={20}
                                    alt="Arrow Down"
                                    className="w-[20px] h-[20px]"
                                />
                            </div>
                        </div>
                        <div className="flex w-fit items-center justify-center gap-2">
                            <div className="w-[36px] h-[36px] bg-[#F9F9F933] bg-opacity-20 flex justify-center items-center rounded-full">
                                <Image
                                    src={person}
                                    alt="Account"
                                    width={20}
                                    height={20}
                                    className="w-[20px] h-[20px]"
                                />
                            </div>

                            <p className="text-[14px] font-normal !text-white-a700 text-nowrap">
                                Şəxsi kabinet
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section with navigation */}
            <div className="py-[18px] flex justify-center border-b border-solid border-gray-200 bg-[#ffffff] text-black">
                <div className="px-[60px] mx-auto flex w-full items-center justify-between gap-5 lg:flex-row flex-col-reverse md:px-5">
                    <ul className="flex gap-5 flex-row text-nowrap flex-wrap">
                        <ProductNav
                            activeIndex={activeIndex}
                            productIndex={productIndex}
                        />
                        <li>
                            <p
                                className={`text-[14px] font-normal cursor-pointer ${
                                    activeIndex === 2
                                        ? 'text-[#447355]'
                                        : 'text-black'
                                }`}
                            >
                                Aksesuarlar
                            </p>
                        </li>
                        <OfferNav
                            activeIndex={activeIndex}
                            offerindex={offerindex}
                        />
                        <WhyNav activeIndex={activeIndex} whyindex={whyindex} />
                        {/* <li>
                            <p
                                className={`text-[14px] font-normal cursor-pointer ${
                                    activeIndex === 3
                                        ? 'text-[#447355]'
                                        : 'text-black'
                                }`}
                            >
                                Niyə İrobot?
                            </p>
                        </li> */}
                        {/* <li>
                            <p
                                className={`text-[14px] font-normal cursor-pointer ${
                                    activeIndex === 4
                                        ? 'text-[#447355]'
                                        : 'text-black'
                                }`}
                            >
                                Fürsətlər və təkliflər
                            </p>
                        </li> */}
                    </ul>
                    <div className="w-[160px] h-[40px]">
                        <Image
                            onClick={() => {
                                router.push('/');
                            }}
                            src={ph}
                            alt="Header Logo"
                            width={160}
                            height={40}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    </div>

                    <div className=" flex justify-center gap-5 w-fit flex-row flex-wrap">
                        <label className=" rounded-[22px] flex flex-grow items-center justify-center gap-4  w-fit bg-[#F6F6F6]">
                            <input
                                className="bg-[#F6F6F6] rounded-[22px] h-full p-3 focus:outline-none"
                                name="Frame 1000005024"
                                placeholder="Axtar"
                                type="text"
                            />
                            <div className="rounded-[50%] h-[36px] w-[36px] flex items-center justify-center bg-[#69BE56]">
                                <Image
                                    src={lupa}
                                    alt="Search Icon"
                                    width={20}
                                    height={20}
                                    className=" w-[20px] h-[20px] "
                                />
                            </div>
                        </label>

                        <div className="rounded-[50%] h-[36px] w-[36px] flex items-center justify-center bg-[#F6F6F6]">
                            <Image
                                src={heart}
                                alt="Search Icon"
                                width={20}
                                height={20}
                                className=" w-[20px] h-[20px] "
                            />
                        </div>

                        <div className="rounded-[50%] h-[36px] w-[36px] flex items-center justify-center bg-[#F6F6F6]">
                            <Image
                                src={karzina}
                                alt="Search Icon"
                                width={20}
                                height={20}
                                className=" w-[20px] h-[20px] "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
