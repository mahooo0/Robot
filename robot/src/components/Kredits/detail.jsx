// interface PaymentScheduleProps {
//     date: string
//     productImage: string
//     productName: string
//     totalAmount: number
//     months: number
//     interestRate: number
//     monthlyPayment: number
//     payments: {
//       date: string
//       amountDue: number
//       amountPaid: number
//       status: string
//       remainingAmount: number
//     }[]
//   }
export default function KreditDetail({
    date = '12 oktyabr 2024',
    productImage = '/placeholder.svg',
    productName = 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
    totalAmount = 300,
    months = 3,
    interestRate = 0,
    monthlyPayment = 100,
    payments = [
        {
            date: 'string',
            amountDue: 1,
            amountPaid: 1,
            status: 'string',
            remainingAmount: 1,
        },
    ],
}) {
    const totalPaid = payments.reduce(
        (sum, payment) => sum + payment.amountPaid,
        0
    );
    const totalRemaining = totalAmount - totalPaid;

    return (
        <div className="w-full space-y-6 rounded-2xl bg-[#F1F5F0] p-6">
            {/* Header Date */}
            <div className="w-full  h-[100px] flex flex-col gap-5">
                <button className="flex flex-row gap-2">
                    <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_117_4347)">
                            <path
                                d="M7.5013 12.1667L4.16797 8.83333L7.5013 5.5"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M4.16797 8.83334H13.3346C14.2187 8.83334 15.0665 9.18453 15.6917 9.80965C16.3168 10.4348 16.668 11.2826 16.668 12.1667C16.668 13.0507 16.3168 13.8986 15.6917 14.5237C15.0665 15.1488 14.2187 15.5 13.3346 15.5H12.5013"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_117_4347">
                                <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Geri</p>
                </button>
                <h1 className="text-[28px] font-semibold">
                    Sifarişimin_detalları
                </h1>
            </div>
            <div className="text-sm text-gray-500">{date}</div>

            {/* Product Info and Status */}
            <div className="flex flex-wrap items-start justify-between gap-4 rounded-2xl bg-white p-4">
                {/* Product Details */}
                <div className="flex items-center gap-4">
                    <img
                        src={productImage || '/placeholder.svg'}
                        alt=""
                        className="h-24 w-24 object-contain"
                    />
                    <div>
                        <h2 className="text-lg font-medium text-gray-900">
                            {productName}
                        </h2>
                        <div className="mt-1 text-lg font-bold text-green-700">
                            {totalAmount} ₼
                        </div>
                    </div>
                </div>

                {/* Status Boxes */}
                <div className="flex flex-wrap gap-4">
                    <div className="rounded-xl bg-[#F5F5F5] text-center px-6 py-3">
                        <div className="text-sm text-gray-500">Ay sayı</div>
                        <div className="mt-1 font-medium">{months} ay</div>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F5] text-center px-6 py-3">
                        <div className="text-sm text-gray-500">
                            İlk faiz dərəcəsi
                        </div>
                        <div className="mt-1 font-medium">{interestRate}%</div>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F5] text-center px-6 py-3">
                        <div className="text-sm text-gray-500">
                            Aylıq ödəniş
                        </div>
                        <div className="mt-1 font-medium">
                            {monthlyPayment} ₼
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Schedule */}
            <div className="space-y-4 bg-white py-[24px] px-[20px] rounded-[20px]">
                <h3 className="text-lg font-medium text-gray-900">
                    Ödəniş qrafiki
                </h3>

                {/* Table Header */}
                <div className="grid grid-cols-5 gap-4 rounded-t-xl bg-gray-50 p-4 text-sm font-medium text-gray-500">
                    <div>Ödəniş tarixi</div>
                    <div>Ödənilməli məbləğ</div>
                    <div>Ödənən məbləğ</div>
                    <div>Status</div>
                    <div>Qalıq məbləğ</div>
                </div>

                {/* Table Rows */}
                {payments.map((payment, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-5 gap-4 border-b border-gray-100 p-4 text-sm"
                    >
                        <div>{payment.date}</div>
                        <div>{payment.amountDue} ₼</div>
                        <div>{payment.amountPaid} ₼</div>
                        <div>
                            <span
                                className={`rounded-full px-2 py-1 text-xs ${
                                    payment.status === 1
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                }`}
                            >
                                {payment.status === 1
                                    ? 'odenilib'
                                    : 'odenilmiyib'}
                            </span>
                        </div>
                        <div>{payment.remainingAmount} ₼</div>
                    </div>
                ))}

                {/* Summary Row */}
                <div className="grid grid-cols-3 gap-4 rounded-b-xl bg-gray-50 p-4 text-sm">
                    <div>
                        <span className="text-gray-500">Cəmi məbləğ: </span>
                        <span className="font-medium">{totalAmount} ₼</span>
                    </div>
                    <div>
                        <span className="text-gray-500">
                            Ödənən cəmi məbləğ:{' '}
                        </span>
                        <span className="font-medium">{totalPaid} ₼</span>
                    </div>
                    <div>
                        <span className="text-gray-500">Cəmi qalıq: </span>
                        <span className="font-medium">{totalRemaining} ₼</span>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <button className="inline-flex items-center gap-2 rounded-full bg-[#96B19C] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7a9180]">
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                </svg>
                Müqaviləni yüklə
            </button>
        </div>
    );
}
