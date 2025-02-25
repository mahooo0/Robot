'use client';

import { axiosInstance } from '@/services/Requests';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RemuveOrder({ translates, isOpen, setIsOpen }) {
    const [selectedReason, setSelectedReason] = useState('');
    const [otherReason, setOtherReason] = useState('');

    const router = useRouter();
    const { id } = router.query;
    const reasons = [
        'Səhv məhsul seçimi',
        'Çatdırılma müddəti çox uzundur',
        'Qiymət çox bahalıdır',
        'Digər',
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            reason: selectedReason,
            otherReason: selectedReason === 'Digər' ? otherReason : null,
        });
        const user = JSON.parse(localStorage.getItem('user-info'));
        try {
            axiosInstance
                .post(
                    '/cancelOrder',
                    {
                        order_id: id,
                        cancel_reason: selectedReason,
                        cancel_note:
                            selectedReason === 'Digər' ? otherReason : null,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                )
                .then((res) => {
                    toast.success('Sifariş ləğv edildi');
                    console.log(res);
                })
                .catch((err) => {
                    toast.error('Sifariş ləğv edilə bilmədi');
                    console.log(err);
                });
        } catch (error) {}
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setIsOpen(false)} // Close on background click
        >
            <div
                className="relative w-full max-w-md rounded-lg bg-white p-6"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
            >
                {/* Close Button (Top-Left) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                    <svg
                        className="h-6 w-6"
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

                {/* Title */}
                <h2 className="text-center text-xl font-semibold text-gray-900">
                    {translates?.Sifarişin_ləğvi}
                </h2>

                {/* Subtitle */}
                <p className="mt-2 text-center text-sm text-gray-600">
                    {translates?.Sifarişi_ləğv_desc}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Reason Select */}
                    <div className="relative">
                        <select
                            value={selectedReason}
                            onChange={(e) => setSelectedReason(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-gray-900 focus:border-red-500 focus:outline-none"
                            required
                        >
                            <option value="">{translates?.Ləğv_etmə}</option>
                            {reasons.map((reason) => (
                                <option key={reason} value={reason}>
                                    {reason}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Other Reason Textarea */}
                    {selectedReason === 'Digər' && (
                        <div className="relative">
                            <textarea
                                value={otherReason}
                                onChange={(e) => setOtherReason(e.target.value)}
                                maxLength={2000}
                                rows={4}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-red-500 focus:outline-none"
                                placeholder="Qeydniz"
                                required
                            />
                            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                                {otherReason.length}/2000 söz
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-red-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        {translates?.Sifarişi_ləğv_et}
                    </button>
                </form>
            </div>
        </div>
    );
}
