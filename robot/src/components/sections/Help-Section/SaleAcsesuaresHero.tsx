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
export default function SaleAcsesuaresHero({
    accessoryCategories,
    Translates,
}) {
    return (
        <>
            <h2 className=" text-[48px] font-semibold text-center  mt-[40px] ">
                {Translates?.Endirimli_aksesuarlar}
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
