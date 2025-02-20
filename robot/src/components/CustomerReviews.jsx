import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-0.5 items-center self-stretch my-auto">
            {[1, 2, 3, 4, 5].map((star) => (
                <img
                    key={star}
                    loading="lazy"
                    src={`/svg/Black_star.svg`}
                    alt={star <= rating ? 'Filled star' : 'Empty star'}
                    className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                />
            ))}
        </div>
    );
};

const RatingBar = ({ rating, reviewCount, maxWidth }) => {
    return (
        <div className="flex gap-3 items-center w-full">
            <div className="flex gap-2 items-center self-stretch my-auto">
                <div className="self-stretch my-auto text-sm font-medium text-center text-black">
                    {rating}
                </div>
                <div className="flex gap-3 items-center self-stretch my-auto">
                    <div className="flex gap-0.5 items-center self-stretch my-auto">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <img
                                key={star}
                                loading="lazy"
                                src={`/svg/star.svg`}
                                alt={
                                    star <= rating
                                        ? 'Filled star'
                                        : 'Empty star'
                                }
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-col items-start self-stretch my-auto bg-white rounded-[100px] w-[200px]">
                <div
                    className="flex shrink-0 h-2.5 bg-amber-400 rounded-[100px]"
                    style={{ width: `${maxWidth}px` }}
                />
            </div>
            <div className="self-stretch my-auto text-sm font-medium leading-loose text-center text-black text-opacity-60">
                {reviewCount} rəy
            </div>
        </div>
    );
};

const CustomerReviews = ({ product }) => {
    const ratingData = [
        { rating: 5, reviewCount: 4, maxWidth: 137 },
        { rating: 4, reviewCount: 3, maxWidth: 109 },
        { rating: 3, reviewCount: 1, maxWidth: 14 },
        { rating: 2, reviewCount: 0, maxWidth: 0 },
        { rating: 1, reviewCount: 0, maxWidth: 0 },
    ];

    const images = [
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ab1fdad68dc4f9569cb9f1afe76cf05b9dfe7dc29c4e97184551f9e1c368bf0?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Customer review image 1',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/428e2d4ed3b0413e8b01e11e0711cbeab81869fab7dc319789f18209eeeab85f?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Customer review image 2',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8958078d2c81f8c13013ee2888c2317e0cf5cc6b4bafa1b8724033df198e7730?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Customer review image 3',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e7fcf4f085e0d4d24b3aede199c308b3ccc2d24e4531fa709def4e14f7816b59?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Customer review image 4',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbbc5fece4a9a7e2047dfa51fa048e9462293a38485615d1f3dfde134f621ba7?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Customer review image 5',
        },
        {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6a8e1df0f945952e97f1240ac598d1df4465efa906ad17d3f38ec1489badb060?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            alt: 'Customer review image 6',
        },
    ];
    function parsePercentage(input) {
        const match = input.match(/(\d+)% \((\d+)\)/);
        return match ? [parseInt(match[1]), parseInt(match[2])] : null;
    }

    return (
        <section className="flex flex-col self-center max-w-full w-[630px]">
            <h2 className="text-4xl font-semibold text-center text-green-950 max-md:max-w-full">
                Müştəri rəyləri
            </h2>
            <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="flex flex-col self-center w-96 max-w-full">
                    <div className="flex gap-3 items-center self-center">
                        <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
                            <div className="flex gap-3 items-center self-stretch my-auto">
                                <StarRating rating={product?.avg_star} />
                            </div>
                            <div className="self-stretch my-auto text-base font-medium text-black text-opacity-60">
                                {product?.avg_star}{' '}
                                <span className="text-black">
                                    ({product?.comments.length} rəy)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 items-start mt-7 w-full">
                        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                            {product?.rating_summary.map((data, index) => (
                                <RatingBar
                                    key={index}
                                    rating={parsePercentage(data)[0]}
                                    reviewCount={parsePercentage(data)[1]}
                                    maxWidth={`${parsePercentage(data)[1]}%`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
