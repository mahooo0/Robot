import React from 'react';

const productData = [
    {
        number: '01',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/0752bf37dab24fc1416a43a0a24cbfe7a1063f2444b55f87d80debf2120c3db8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        number: '02',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/d952b01e61a24c7e632f03551ca27d39710bc05a5f7c25d7fd050fba8c2cb0fc?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
    {
        number: '03',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/b8adea2207126dac92c9d65f936214812d9fb2019e947381e53ade53e16e4932?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
    },
];

function ProductDetails({ product, translates }) {
    return (
        <main className="flex overflow-hidden flex-col justify-center px-16 py-24 mt-5 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
            <section className="flex flex-col max-md:max-w-full">
                <h1 className="text-4xl font-semibold text-green-950 max-md:max-w-full">
                    {translates.Məhsulun_detalları}
                </h1>
                <div className="flex overflow-hidden flex-col justify-center p-10 mt-10 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        {product?.product_details.map((product, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-wrap gap-10 justify-between items-center mt-7 w-full max-md:max-w-full">
                                    <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[905px] max-md:max-w-full">
                                        <div className="text-4xl text-gray-600 text-opacity-40">
                                            {index + 1}
                                        </div>
                                        <div className="flex flex-col mt-5 max-w-full w-[905px]">
                                            <h2 className="text-xl font-semibold text-black max-md:max-w-full">
                                                {product.title}
                                            </h2>
                                            <p className="mt-3 text-base text-black text-opacity-80 max-md:max-w-full">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex overflow-hidden flex-col self-stretch my-auto rounded-3xl min-w-[240px] w-[275px]">
                                        <img
                                            loading="lazy"
                                            src={product.image}
                                            alt=""
                                            className="object-cover w-full aspect-[1.24]"
                                        />
                                    </div>
                                </div>
                                {index <
                                    product?.product_details?.length - 1 && (
                                    <div className="mt-7 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProductDetails;
