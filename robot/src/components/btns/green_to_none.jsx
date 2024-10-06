import React from 'react';

export default function Green_to_none({ children, isactive }) {
    return (
        <button
            className={`  px-[28px] py-[14px] ${
                isactive
                    ? 'bg-[#69BE56]  text-white '
                    : 'text-black border border-opacity-20 border-black'
            } transition-colors duration-300 rounded-[100px]`}
        >
            {children}
        </button>
    );
}
