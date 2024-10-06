import React from 'react';

function NavigationBar() {
    return (
        <div className="flex flex-row gap-5">
            <div className="w-16 h-16 rounded-full border border-black flex justify-center items-center">
                <img src="/svg/bird_black.svg" />
            </div>
            <div className="w-16 h-16 rounded-full border border-[#69BE56] text-[#69BE56] flex justify-center items-center  text-[18px] font-extrabold">
                1
            </div>
            <div className="w-16 h-16 rounded-full flex justify-center items-center  text-[18px] font-extrabold">
                ...
            </div>
            <div className="w-16 h-16 rounded-full flex justify-center items-center text-[18px] font-extrabold">
                32
            </div>
            <div className="w-16 h-16 rounded-full border border-black flex justify-center items-center rotate-180">
                <img src="/svg/bird_black.svg" />
            </div>
        </div>
    );
}

export default NavigationBar;
