'use client';

import { axiosInstance } from '@/services/Requests';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ReatingDialogg({ isOpen, setIsOpen, translates }) {
    // const [isOpen, setIsOpen] = useState(true);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        const user = JSON.parse(localStorage.getItem('user-info'));

        try {
            axiosInstance
                .post(
                    '/comment',
                    {
                        product_id: isOpen,
                        star: rating,
                        comment: review,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                )
                .then(() => {
                    toast.success('Rəyiniz uğurla göndərildi');
                })
                .catch(() => {
                    toast.error('Rəyiniz göndərilmədi');
                });
        } catch (error) {
            console.log('error', error);
        }
        e.preventDefault();

        console.log('forun', { rating, review });
        setIsOpen(false);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={handleBackgroundClick}
        >
            <div className="relative w-full max-w-md rounded-[32px] bg-white p-6">
                <div className="absolute -right-3 -top-3">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
                    >
                        <svg
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Title */}
                <h2 className="text-center text-2xl font-semibold text-gray-900">
                    {translates?.Məhsulu_dəyərləndir}
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Star Rating */}
                    <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className="transition-transform hover:scale-110 focus:outline-none"
                            >
                                <svg
                                    className={`h-10 w-10 ${
                                        star <= (hover || rating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-200'
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </button>
                        ))}
                    </div>

                    {/* Review Textarea */}
                    <div className="relative">
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            maxLength={2000}
                            rows={6}
                            className="w-full rounded-[24px] border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:outline-none"
                            placeholder="Rəyiniz"
                            required
                        />
                        <div className="absolute bottom-3 right-4 text-sm text-gray-400">
                            {review.length}/2000 söz
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        {translates?.Göndər}
                    </button>
                </form>
            </div>
        </div>
    );
}
