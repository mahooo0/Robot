'use client';

import { useState } from 'react';
const cn = (...classes) => classes.filter(Boolean).join(' ');

// interface ToggleSwitchProps {
//   defaultChecked?: boolean
//   onChange?: (checked: boolean) => void
//   className?: string
//   disabled?: boolean
// }

export default function ToggleSwitch({
    defaultChecked = false,
    onChange,
    className,
    disabled = false,
}) {
    const [checked, setChecked] = useState(defaultChecked);

    const handleToggle = () => {
        if (disabled) return;
        const newState = !checked;
        setChecked(newState);
        onChange?.(newState);
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            className={cn(
                'relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                checked ? 'bg-green-700' : 'bg-gray-200',
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
            onClick={handleToggle}
        >
            <span
                className={cn(
                    'pointer-events-none block h-full aspect-square rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out',
                    checked ? 'translate-x-full' : 'translate-x-0'
                )}
            />
        </button>
    );
}
