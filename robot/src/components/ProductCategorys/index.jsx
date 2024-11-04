import React from 'react';
import ProductCategory from './ProductCategory';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';

const categories = [
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/cd246dd94eab99e1db5adaf10efa4700554c945670f23a9b05f9e2d2bea3648c?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Robot vacuum cleaner',
        categoryName: 'Robot tozsoranlar',
        page: `/products/vakumus`,
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/e434cb3881babaee55346cf2d84f48f8ae78bb54ef9d05b660c88eee2a59ad47?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Robot sweeper',
        categoryName: 'Robot süpürgə',
        page: `/products`,
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/365e4077801de9a62cb1fa33d69a89c832dc5ad1c17ffdda81b8744fe0ea53cf?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Package products',
        categoryName: 'Paket məhsullar',
        page: `/products/paket`,
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/11b800b0e2827a14b83af5bfd87559f5773da1d833c332948488153acb3b32f6?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Accessories',
        categoryName: 'Aksesuarlar',
        page: `/aksesuares`,
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/4d8ed3924259ad6c025d58c3f1043687eb55812abe2c7b6e052df6e5e98086ca?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'Discounted products',
        categoryName: 'Endirimli məhsullar',
        page: `/products/SaleProduct`,
    },
    {
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/537bdc1e1ca03ff53799902b724328b9dc5f11a2fc2325f5fef4802620bbb49a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        altText: 'All products',
        categoryName: 'Bütün məhsullar',
        page: `/products`,
    },
];
function ProductCategories() {
    const router = useRouter();

    return (
        <section
            // onClick={() => router.push('/aksesuares')}
            className="flex flex-wrap gap-3 items-center self-center mt-24 text-base font-medium text-center text-green-950 max-md:mt-10 max-md:max-w-full w-full justify-center"
        >
            {categories.map((category, index) => (
                <ProductCategory
                    page={category.page}
                    key={index}
                    imageSrc={category.imageSrc}
                    altText={category.altText}
                    categoryName={category.categoryName}
                />
            ))}
        </section>
    );
}

export default ProductCategories;
