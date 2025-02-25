import React, { useState } from 'react';

const CommentsSection = ({ product }) => {
    const [sortOrder, setSortOrder] = useState('newest');

    const reviewData = [
        {
            id: 1,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 2,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 3,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 4,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
    ];

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const sortedReviews = [...reviewData].sort((a, b) => {
        if (sortOrder === 'newest') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    return (
        <section className="flex flex-col w-full max-md:max-w-full mt-10 px-[60px]">
            <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <p className="gap-3 self-stretch my-auto text-sm text-black">
                    {product?.comments.length} rəy
                </p>
                <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] flex-wrap">
                    <label
                        htmlFor="sortDropdown"
                        className="self-stretch my-auto text-sm text-black text-opacity-60"
                    >
                        Sırala
                    </label>
                    <div className="flex overflow-hidden gap-10 self-stretch p-3 my-auto text-base bg-white rounded-xl min-w-[240px] text-black text-opacity-90 w-[283px]">
                        <select
                            id="sortDropdown"
                            className="flex-grow bg-transparent border-none outline-none"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="newest">Yenidən köhnəyə</option>
                            <option value="oldest">Köhnədən yeniyə</option>
                        </select>
                    </div>
                </div>
            </header>
            <main className="flex flex-col mt-7 w-full max-md:max-w-full pb-[100px]">
                {product?.comments.map((review) => (
                    <article
                        key={review.id}
                        className="flex overflow-hidden flex-col justify-center p-7 mt-3 max-w-full bg-white rounded-3xl w-full max-md:px-5"
                    >
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <article className="flex gap-3 items-center self-start text-sm text-black">
                                <img
                                    loading="lazy"
                                    src={
                                        'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2'
                                    }
                                    alt={`${review.name}'s avatar`}
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[60px]"
                                />
                                <div className="flex flex-col justify-center self-stretch my-auto w-[120px]">
                                    <div className="flex flex-row gap-1">
                                        {Array.from({
                                            length: review.star,
                                        }).map(() => (
                                            <svg
                                                width="20"
                                                height="19"
                                                viewBox="0 0 20 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.55011 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z"
                                                    fill="#FABD21"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    {/* <img
                                        loading="lazy"
                                        src={review.ratingSrc}
                                        alt="User rating"
                                        className="object-contain max-w-full aspect-[5] w-[120px]"
                                    /> */}
                                    <p className="self-start mt-1">
                                        {review.customer?.name}
                                    </p>
                                </div>
                            </article>
                            <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                                <time className="text-sm text-black text-opacity-60 max-md:max-w-full">
                                    {review.date}
                                </time>
                                <p className="mt-2 text-base text-black text-opacity-80 max-md:max-w-full">
                                    {review.comment}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>
        </section>
    );
};

export default CommentsSection;
