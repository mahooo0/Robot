'use client';

// import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductPagination({
    currentPage = 1,
    totalPages = 32,
    onPageChange,
}) {
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-12">
            {/* Previous Button */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-300 transition-colors"
                aria-label="Previous page"
            >
                {/* <ChevronLeft className="w-5 h-5" /> */}
                <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.22 6.71985C0.0793075 6.57934 0.000175052 6.3887 0 6.18985V5.80985C0.00230401 5.61144 0.081116 5.42157 0.22 5.27985L5.36 0.149852C5.45388 0.055196 5.58168 0.00195312 5.715 0.00195312C5.84832 0.00195312 5.97612 0.055196 6.07 0.149852L6.78 0.859852C6.87406 0.952016 6.92707 1.07816 6.92707 1.20985C6.92707 1.34154 6.87406 1.46769 6.78 1.55985L2.33 5.99985L6.78 10.4399C6.87466 10.5337 6.9279 10.6615 6.9279 10.7949C6.9279 10.9282 6.87466 11.056 6.78 11.1499L6.07 11.8499C5.97612 11.9445 5.84832 11.9978 5.715 11.9978C5.58168 11.9978 5.45388 11.9445 5.36 11.8499L0.22 6.71985Z"
                        fill="#132A1B"
                    />
                </svg>
            </button>

            {/* First Page */}
            <button
                onClick={() => handlePageChange(1)}
                className={`relative w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors
          ${
              currentPage === 1
                  ? 'border-2 border-green-500 text-green-500'
                  : 'border border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
            >
                1
                {/* {currentPage === 1 && (
                    <div className="absolute -right-[100px] top-1/2 h-[2px] w-[100px]">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 border-t border-dotted border-blue-300"></div>
                    </div>
                )} */}
            </button>

            {/* Ellipsis */}
            {currentPage > 3 && <span className="text-gray-400">...</span>}

            {/* Current Page (if not 1 or last) */}
            {currentPage !== 1 && currentPage !== totalPages && (
                <button
                    onClick={() => handlePageChange(currentPage)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500 text-sm font-medium relative"
                >
                    {currentPage}
                    {/* <div className="absolute -right-[100px] top-1/2 h-[2px] w-[100px]">
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 border-t border-dotted border-blue-300"></div>
                    </div> */}
                </button>
            )}

            {/* Ellipsis */}
            {currentPage < totalPages - 2 && (
                <span className="text-gray-400">...</span>
            )}

            {/* Last Page */}
            <button
                onClick={() => handlePageChange(totalPages)}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors
          ${
              currentPage === totalPages
                  ? 'border-2 border-green-500 text-green-500'
                  : 'border border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
            >
                {totalPages}
            </button>

            {/* Next Button */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-300 transition-colors"
                aria-label="Next page"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.78 12.7199C15.9207 12.5793 15.9998 12.3887 16 12.1899V11.8099C15.9977 11.6114 15.9189 11.4216 15.78 11.2799L10.64 6.14985C10.5461 6.0552 10.4183 6.00195 10.285 6.00195C10.1517 6.00195 10.0239 6.0552 9.93 6.14985L9.22 6.85985C9.12594 6.95202 9.07293 7.07816 9.07293 7.20985C9.07293 7.34154 9.12594 7.46769 9.22 7.55985L13.67 11.9999L9.22 16.4399C9.12534 16.5337 9.0721 16.6615 9.0721 16.7949C9.0721 16.9282 9.12534 17.056 9.22 17.1499L9.93 17.8499C10.0239 17.9445 10.1517 17.9978 10.285 17.9978C10.4183 17.9978 10.5461 17.9445 10.64 17.8499L15.78 12.7199Z"
                        fill="#132A1B"
                    />
                </svg>

                {/* <ChevronRight className="w-5 h-5" /> */}
            </button>
        </div>
    );
}
