import React, { useEffect, useState } from 'react';
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
import ProductNav from './ProductNavication';
import AksesuaresNav from './AksesuaresNavication';
import OfferNav from './offersNavication';
import WhyNav from './whyNavication';
import { useRecoilState } from 'recoil';
import { MenuState } from './recoil/Atom';
import LikedDrop from './LikedDRopDown';
import ShopDrop from './LshopDRopDown';

const Header = ({ activeIndex, productIndex, whyindex, offerindex }) => {
    const [_, setMenu] = useRecoilState(MenuState);
    const [show_Like_modal, setshow_Like_modal] = useState(false);
    const [show_shop_modal, setshow_shop_modal] = useState(false);
    const router = useRouter();
    const [active, setactive] = useState(activeIndex);

    // Close modal on route change
    useEffect(() => {
        const handleRouteChange = () => {
            setshow_Like_modal(false);
        };

        // Listen for route changes
        router.events.on('routeChangeStart', handleRouteChange);

        // Clean up the event listener on unmount
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    return (
        <header className="border-b border-[#EFEFEF] relative">
            {/* Top section */}
            <div className="flex justify-center bg-blue_gray-400 text-[14px] text-white font-normal">
                <div className="px-[60px] flex w-full justify-between gap-5 items-center md:flex-row lg:flex-row flex-col md:px-5 bg-[#87A28E] min-h-[52px] h-fit">
                    <div className="lg:w-[32%] w-full flex lg:justify-between justify-center items-center gap-5 md:w-full lg:flex-row flex-col">
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
                        <div className="flex flex-1 gap-3 w-fit">
                            <Image
                                src={loc}
                                width={20}
                                height={20}
                                alt="Address Icon"
                                className="w-[20px] h-[20px]"
                            />
                            <p className="text-[14px] font-normal !text-white-a700 text-nowrap">
                                Yasamal rayon, Ə.Əhmədov 21 B
                            </p>
                        </div>
                    </div>
                    {/* Location and Account */}
                    <div className="lg:w-[22%] lg:flex-row md:flex-row flex-row w-full flex items-center lg:justify-end md:jutify-end justify-center gap-5 md:w-full">
                        <div className="flex w-fit justify-center gap-1 items-center">
                            <Image
                                src={globus}
                                width={20}
                                height={20}
                                alt="Linear Map Location"
                                className="w-[20px] h-[20px]"
                            />
                            <select
                                className="text-[14px] font-normal text-white bg-[#87A28E] border-none rounded p-1 w-fit cursor-pointer focus:outline-none"
                                defaultValue="Azərbaycan"
                            >
                                <option value="Azərbaycan">Azərbaycan</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
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
                            <p
                                className="text-[14px] font-normal !text-white-a700 text-nowrap"
                                onClick={() =>
                                    router.push('/user/login_register')
                                }
                            >
                                Şəxsi kabinet
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section with navigation */}
            <div className="py-[18px] flex justify-center border-b border-solid border-gray-200 bg-[#ffffff] text-black relative">
                <div className="px-[60px] mx-auto flex w-full items-center justify-between gap-5 lg:flex-row flex-col-reverse md:px-5">
                    <ul className="flex gap-5 flex-row text-nowrap flex-wrap ">
                        <ProductNav
                            activeIndex={active}
                            productIndex={productIndex}
                            setactive={(par) => setactive(par)}
                        />
                        <AksesuaresNav activeIndex={active} />
                        <OfferNav
                            activeIndex={active}
                            offerindex={offerindex}
                        />
                        <WhyNav activeIndex={active} whyindex={whyindex} />
                    </ul>
                    <div className="w-[160px] h-[40px]">
                        <Image
                            onClick={() => router.push('/')}
                            src={ph}
                            alt="Header Logo"
                            width={160}
                            height={40}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    </div>

                    <div className="flex justify-center gap-5 w-fit flex-row flex-wrap">
                        <label className="rounded-[22px] flex flex-grow items-center justify-center gap-4 w-fit bg-[#F6F6F6]">
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
                                    className="w-[20px] h-[20px]"
                                />
                            </div>
                        </label>

                        <div
                            className="rounded-[50%] h-[36px] w-[36px] flex items-center justify-center bg-[#F6F6F6]"
                            onClick={() => setshow_Like_modal((prev) => !prev)}
                        >
                            <Image
                                src={heart}
                                alt="Like Icon"
                                width={20}
                                height={20}
                                className="w-[20px] h-[20px]"
                            />
                        </div>

                        <div
                            className="rounded-[50%] h-[36px] w-[36px] flex items-center justify-center bg-[#F6F6F6]"
                            onClick={() => setshow_shop_modal((prev) => !prev)}
                        >
                            <Image
                                src={karzina}
                                alt="Cart Icon"
                                width={20}
                                height={20}
                                className="w-[20px] h-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-fit absolute top-[100%] z-[99999999999999999999999999] right-0"
                style={
                    show_Like_modal ? { display: 'block' } : { display: 'none' }
                }
            >
                <LikedDrop show_Like_modal={(par) => setshow_shop_modal(par)} />
            </div>
            <div
                className="w-fit absolute top-[100%] z-[99999999999999999999999999] right-0"
                style={
                    show_shop_modal ? { display: 'block' } : { display: 'none' }
                }
            >
                <ShopDrop
                    setshow_shop_modal={(par) => setshow_shop_modal(par)}
                />
            </div>
        </header>
    );
};

export default Header;
