import React from 'react';

export default function Green_to_green({ children, classNAME = '' }) {
    return (
        <button
            className={`px-[28px] py-[14px] bg-[#69BE56] text-white hover:bg-[#447355] transition-colors duration-300 rounded-[100px] ${classNAME}`}
        >
            {children}
        </button>
    );
}
