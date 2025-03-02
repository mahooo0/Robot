'use client';

import { useState, useRef, useEffect } from 'react';

export default function OTP({
    email = 'example@gmail.com',
    length = 4,
    onComplete,
    Translates,
}) {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    // Initialize refs array
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, length);
    }, [length]);

    const handleChange = (index, value) => {
        // Allow only numbers
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }

        // Check if OTP is complete
        const otpCode = newOtp.join('');
        if (otpCode.length === length && onComplete) {
            onComplete(otpCode);
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');
        if (!/^\d*$/.test(pastedData)) return;

        const otpArray = pastedData.slice(0, length).split('');
        const newOtp = [...otp];

        otpArray.forEach((value, index) => {
            newOtp[index] = value;
            if (inputRefs.current[index]) {
                if (inputRefs.current[index]) {
                    inputRefs.current[index].value = value;
                }
            }
        });

        setOtp(newOtp);
        inputRefs.current[Math.min(otpArray.length, length - 1)]?.focus();
    };

    return (
        <div className="w-1/2 h-full flex items-center flex-col  justify-center rounded-3xl bg-[#f3f6f4] p-8">
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                    {Translates?.OTP_kod_təsdiqi}
                </h2>
                <p className="mt-3 text-gray-600  max-w-[440px] ">
                    <span>{email}</span>{' '}
                    {Translates?.ünvanına_göndərilən_OTP_kodu_daxil}
                    <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                        i
                    </span>
                </p>
            </div>

            {/* OTP Input Fields */}
            <div className="mt-8">
                <div className="flex justify-center gap-3">
                    {otp.map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={otp[index]}
                            onChange={(e) =>
                                handleChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className="h-14 w-14 rounded-xl border-2 border-gray-200 bg-white text-center text-2xl font-semibold text-gray-900 focus:border-green-500 focus:outline-none"
                            aria-label={`Digit ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={() => onComplete?.(otp.join(''))}
                className="mt-8 w-full max-w-[440px] rounded-full bg-green-500 py-4 text-center text-lg font-medium text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                {Translates?.Təsdiq_et}
            </button>
        </div>
    );
}
