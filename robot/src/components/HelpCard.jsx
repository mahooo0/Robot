import Link from 'next/link';
import React, { useState } from 'react';

export default function HelpCard({
    imageSrc,
    title,
    description,
    linkText,
    page,
}) {
    return (
        <div className="flex flex-col grow shrink min-w-[240px] w-[316px]">
            <div className="flex flex-col w-full">
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt=""
                    className="object-contain max-w-full aspect-square rounded-[100px] w-[100px]"
                />
                <div className="flex flex-col mt-5 w-full">
                    <h3 className="text-lg font-semibold text-[#447355]">
                        {title}
                    </h3>
                    <p className="mt-3 text-sm text-black text-opacity-80">
                        {description}
                    </p>
                </div>
            </div>
            {linkText && (
                <Link href={page}>
                    <div className="flex gap-2 items-center self-start py-0.5 mt-7 text-base font-medium text-[#69BE56]">
                        <span className="self-stretch my-auto">{linkText}</span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bffd042953c0b348ec826c1c44fc15573c3034c0a45a6501cadda84ed6f06fd8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                    </div>
                </Link>
            )}
        </div>
    );
}
