import React from 'react';

export default function White_to_green({ children, classNAME = '', action }) {
    return (
        <button
            onClick={action}
            className={`px-[28px] py-[14px] bg-[#FFFFFF] text-[#132A1B] hover:bg-[#69BE56] hover:text-white transition-colors duration-300 rounded-[100px] ${classNAME}`}
        >
            {children}
        </button>
    );
}
