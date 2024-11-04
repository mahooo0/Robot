import { useRouter } from 'next/router';
import React from 'react';

const ProductCategory = ({ imageSrc, altText, categoryName, page }) => {
    const router = useRouter();
    return (
        <div
            className="flex flex-col items-center self-stretch my-auto w-[175px]"
            onClick={() => router.push(page)}
        >
            <img
                loading="lazy"
                src={imageSrc}
                alt={altText}
                className="object-contain max-w-full aspect-square rounded-[1000px] w-[120px]"
            />
            <p className="mt-3 text-[16px] font-medium text-[#132A1B]">
                {categoryName}
            </p>
        </div>
    );
};

export default ProductCategory;
