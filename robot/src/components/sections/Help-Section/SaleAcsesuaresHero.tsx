import React from 'react';
function AccessoryCard({ image, title }) {
    return (
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[380px]">
            <div className="flex overflow-hidden flex-col justify-center items-center px-3 w-full rounded-3xl aspect-square bg-zinc-100">
                <img
                    loading="lazy"
                    src={image}
                    alt={`${title} accessory`}
                    className="object-contain w-full rounded-3xl aspect-square"
                />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-center underline text-green-950">
                <span className="underline">{title}</span>
            </h2>
        </div>
    );
}
export default function SaleAcsesuaresHero({ accessoryCategories }) {
    const accessoryData = [
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/0d8f03a61e4345f187388eb23d0f4f97f47976994676c02240e9890a9ac3cd31?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Roomba® Accessories',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/e1b6748103a06a36633e2adb9193144275307484f932a29bb070efb3334caf74?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Braava® Accessories',
        },
        {
            imageSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/e27fff2cdec8d80ff2a97f7eaa489d4a547a7cfd8a4ed6adf95f5eaffc2b0b68?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            title: 'Roomba Combo® Accessories',
        },
    ];
    return (
        <>
            <h2 className=" text-[48px] font-semibold text-center  mt-[40px] ">
                Endirimli aksesuarlar
            </h2>
            <section className="flex flex-wrap gap-5 items-center self-center mt-10 max-md:max-w-full justify-center">
                {accessoryCategories?.map((accessory, index) => (
                    <AccessoryCard
                        key={index}
                        image={accessory.image}
                        title={accessory.title}
                    />
                ))}
            </section>
        </>
    );
}
