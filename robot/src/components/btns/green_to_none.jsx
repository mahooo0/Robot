import React from 'react';

export default function Green_to_none({ children, isactive, classNAME }) {
    return (
        <button
            className={`px-4 py-2 md:px-[28px] md:py-[14px] ${classNAME} ${
                isactive
                    ? 'bg-[#69BE56] text-white'
                    : 'text-black border border-opacity-20 border-black'
            } transition-colors duration-300 rounded-full text-nowrap`}
        >
            {children}
        </button>
    );
}
