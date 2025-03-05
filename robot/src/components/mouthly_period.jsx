import * as React from 'react';

const PaymentPeriod = ({ months, percentage, isactive, action }) => {
    return (
        <div
            className="flex flex-col self-stretch my-auto w-[52px] cursor-pointer"
            onClick={action}
        >
            <div className="text-xs font-semibold text-rose-600">
                {percentage}%
            </div>
            <div
                className={`
          overflow-hidden self-center px-1.5 mt-1 text-sm font-medium rounded-2xl
          ${
              isactive
                  ? 'border border-[#69BE56] border-solid bg-[#E7F0E4] text-[#447355]'
                  : 'bg-neutral-100 text-black text-opacity-80 '
          }
          h-[52px] w-[52px] flex justify-center items-center
        `}
            >
                {months} ay
            </div>
        </div>
    );
};

const MonthlyPayment = ({ price }) => {
    return (
        <div className="flex overflow-hidden flex-col justify-center px-7 py-3 rounded-3xl bg-neutral-100 w-[130px] max-md:px-5">
            <div className="flex flex-col items-center">
                <p className="text-xs text-black text-opacity-60">
                    Aylıq ödəniş:
                </p>
                <div className="flex gap-1 justify-center items-center mt-1 text-lg font-semibold text-black whitespace-nowrap">
                    <span className="self-stretch my-auto">{price}</span>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/4f8d775fc3ec646896d974fcbfd5b696f17ea23308742ccae062b7ee28e3232a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt="Currency symbol"
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                </div>
            </div>
        </div>
    );
};

export const InstallmentPayment = ({ product }) => {
    const [currentCalculation, setCurrentCalculation] = React.useState(0);
    return (
        <section
            className="flex flex-wrap gap-10 items-center mt-3 w-full max-md:max-w-full"
            aria-label="Installment payment options"
        >
            <p className="self-stretch my-auto text-sm font-medium text-black">
                Hissə-hissə al:
            </p>
            <div className="flex lg:flex-row flex-col gap-7 ">
                <div className="flex gap-7  flex-wrap items-end self-stretch my-auto text-center min-w-[240px]">
                    {product?.calculated_prices.map((period, i) => (
                        <PaymentPeriod
                            action={() => setCurrentCalculation(i)}
                            isactive={i === currentCalculation}
                            key={period.month}
                            months={period.month}
                            percentage={period.percentage}
                        />
                    ))}
                </div>
                <MonthlyPayment
                    price={
                        product?.calculated_prices[currentCalculation]
                            .calc_price
                    }
                />
            </div>
        </section>
    );
};
