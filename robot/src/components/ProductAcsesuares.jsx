import * as React from 'react';

const products = [
    {
        id: 1,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8232af5f0af11362cdcd78f884f2720f8aace83ca57d8d89e6c7de52cc0e9101?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        productName: 'Məhsulun adı',
    },
    {
        id: 2,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8232af5f0af11362cdcd78f884f2720f8aace83ca57d8d89e6c7de52cc0e9101?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        productName: 'Aksessuarın adı',
    },
    {
        id: 3,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8232af5f0af11362cdcd78f884f2720f8aace83ca57d8d89e6c7de52cc0e9101?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        productName: 'Təmizliy mayesinin adı',
    },
    {
        id: 4,
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8232af5f0af11362cdcd78f884f2720f8aace83ca57d8d89e6c7de52cc0e9101?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        productName: 'Təmizliy mayesinin adı',
    },
];

export default function Productacsesuares() {
    return (
        <section className="pb-[100px]">
            <h4 className="text-[40px] font-semibold mt-[100px] px-[60px]">
                Məhsul setinə daxildir:
            </h4>
            <div
                className="flex flex-wrap gap-5 items-center  max-md:max-w-full justify-center w-full mt-[20px]"
                aria-label="Product Grid"
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col self-stretch my-auto min-w-[240px] w-[315px]"
                    >
                        <div className="flex overflow-hidden flex-col w-full rounded-3xl bg-zinc-100">
                            <img
                                loading="lazy"
                                src={product.imageSrc}
                                alt={product.productName}
                                className="object-contain w-full aspect-[1.28]"
                            />
                        </div>
                        <h2 className="mt-3 w-full text-base font-medium text-black">
                            {product.productName}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    );
}