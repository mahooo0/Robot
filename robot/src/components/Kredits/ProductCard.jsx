export default function KreditCard({
    image = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-swwmpyLuqziuFCxpjm2EsloCQXEg4U.png',
    date = '12.02.2025',
    title = 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
    price = '100',
    duration = '3 ay',
    detailsText = 'Ətraflı',
    href = '#',
}) {
    return (
        <div className="w-full overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between gap-4">
                {/* Product Image */}
                <div className="h-24 w-24 flex-shrink-0">
                    <img
                        src={image || '/placeholder.svg'}
                        alt={title}
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-500">{date}</div>
                    <h3 className="mt-1 truncate text-base font-medium text-gray-900">
                        {title}
                    </h3>
                    <div className="mt-1 text-sm text-gray-600">
                        {duration}/{price} AZN
                    </div>
                </div>

                {/* Details Link */}
                <a
                    href={href}
                    className="flex items-center gap-2 text-[#69BE56] transition-colors hover:text-green-600"
                >
                    <span className="text-sm font-medium">{detailsText}</span>
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}
