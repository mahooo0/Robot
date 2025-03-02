import * as React from 'react';
import Green_to_green from './btns/green_to_green';
import { useRouter } from 'next/router';
import GETRequest from '@/services/QueryREq';
import { axiosInstance } from '@/services/Requests';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
function MonthlyPaymentBar({ monthOptions, kredit_items, oncange }) {
    const [selectedMonth, setSelectedMonth] = React.useState(0);
    console.log('monthOptions', monthOptions);

    return (
        <div className="overflow-hidden px-5 py-6 mt-3 w-full rounded-3xl bg-neutral-100 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-1 items-center text-center max-md:mt-10">
                        {monthOptions.calculated_prices.map(
                            (option, i, list) => (
                                <div
                                    key={i}
                                    className="flex flex-col self-stretch my-auto w-14"
                                >
                                    <div className="text-xs font-semibold text-rose-600">
                                        {option.percentage}%
                                    </div>
                                    <button
                                        type="button"
                                        onClick={
                                            () => {
                                                oncange([
                                                    ...kredit_items.slice(0, i),
                                                    {
                                                        basket_id:
                                                            monthOptions.id,
                                                        is_credit: true,
                                                        month: option?.month,
                                                        percent:
                                                            option?.percentage,
                                                        monthly_payment:
                                                            option?.calc_price,
                                                    },
                                                ]);
                                                setSelectedMonth(
                                                    option.calc_price
                                                );
                                            }
                                            // handleMonthSelect(option.months)
                                        }
                                        className={`overflow-hidden self-center px-1.5 mt-1 w-14 h-14 text-sm font-medium rounded-2xl ${
                                            selectedMonth === option.calc_price
                                                ? 'border border-[#69BE56] border-solid bg-[#E7F0E4] text-[#447355]'
                                                : 'bg-white text-black text-opacity-80'
                                        }`}
                                        // aria-label={`Select ${option.months} month installment plan`}
                                    >
                                        {option?.month} ay
                                    </button>
                                </div>
                            )
                        )}
                        {/* {monthOptions.map((option, i) => (
                            <div
                                key={option.month}
                                className="flex flex-col self-stretch my-auto w-14"
                            >
                                <div className="text-xs font-semibold text-rose-600">
                                    {option.percentage}%
                                </div>
                                <button
                                    type="button"
                                    onClick={
                                        () =>
                                            setSelectedMonth(option.calc_price)
                                        // handleMonthSelect(option.months)
                                    }
                                    className={`overflow-hidden self-center px-1.5 mt-1 w-14 h-14 text-sm font-medium rounded-2xl ${
                                        selectedMonth === option.month
                                            ? 'border border-[#69BE56] border-solid bg-[#E7F0E4] text-[#447355]'
                                            : 'bg-white text-black text-opacity-80'
                                    }`}
                                    // aria-label={`Select ${option.months} month installment plan`}
                                >
                                    {option.months} ay
                                </button>
                            </div>
                        ))} */}
                    </div>
                </div>

                <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden flex-col grow justify-center px-7 py-3.5 w-full text-center bg-white rounded-3xl max-md:px-5 max-md:mt-10">
                        <div className="flex flex-col items-center">
                            <div className="text-xs text-black text-opacity-60">
                                Aylıq ödəniş:
                            </div>
                            <div className="flex gap-1 justify-center items-center mt-1 text-lg font-semibold text-black whitespace-nowrap">
                                <div className="self-stretch my-auto">
                                    {selectedMonth}
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/41ee295d2723dd925b20909126b8dc609b0271236e635d03cfb6244e30d795a2?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    alt="Currency"
                                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function KreditPOpUP({ show }) {
    const [selectedMonth, setSelectedMonth] = React.useState(3);
    const [Show, setShow] = React.useState(show);
    const [monthlyPayment, setMonthlyPayment] = React.useState(100);
    const [kredit_items, setKredit_item] = React.useState([]);
    React.useEffect(() => {
        setShow(show);
    }, [show]);
    const queruqlient = useQueryClient();
    const monthOptions = [
        { months: 3, interest: 0 },
        { months: 6, interest: 0 },
        { months: 12, interest: 0 },
        { months: 18, interest: 0 },
    ];

    const products = [
        {
            id: 1,
            name: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
            price: 300,
            image: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/78e6d308fa3f8013b90699ebf13ebbf884eea2603d048fde115970309e4dd669?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        },
        {
            id: 2,
            name: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
            price: 300,
            image: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/78e6d308fa3f8013b90699ebf13ebbf884eea2603d048fde115970309e4dd669?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        },
    ];
    const router = useRouter();
    const { lang = 'az' } = router.query;
    const { data: basked } = GETRequest(`/basket_items`, 'basket_items', [
        lang,
    ]);
    console.log('basked', basked);

    return (
        <div
            style={Show ? {} : { display: 'none' }}
            className="w-[100%] h-[100vh] fixed top-0 bg-black bg-opacity-60  flex justify-center items-center left-0 backdrop-blur-sm z-[150]"
        >
            <div className="flex overflow-hidden flex-col  bg-white  rounded-3xl max-w-[520px] max-h-[90vh]  srollbar">
                <div className="flex overflow-y-scroll flex-col pt-3 pb-10 bg-white  rounded-3xl max-w-[520px] max-h-[90vh] !px-[28xp] srollbar">
                    <div className="flex flex-col self-end ml-52 max-w-full text-xl font-medium text-center text-black w-[292px] mr-2.5">
                        <img
                            onClick={() => setShow(false)}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/b8602f625b6b70eede7761937080fd43d0086b2774ecf92a114785cb8200ced6?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt="Calculator icon"
                            className="object-contain self-end w-12 aspect-square"
                        />
                        <div className="self-start mt-1.5">
                            {products.length} Məhsul
                        </div>
                    </div>

                    {basked?.basket_items.map((basket_item, index) => (
                        <div key={basket_item.product.id}>
                            {index > 0 && (
                                <div className="shrink-0 mt-7 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
                            )}
                            <div className="flex gap-3 items-center mt-7 px-[28px]">
                                <img
                                    loading="lazy"
                                    src={basket_item.product.image}
                                    alt={basket_item.product.title}
                                    className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                />
                                <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[318px]">
                                    <div className="flex flex-col max-w-full text-sm font-medium text-green-950 w-[318px]">
                                        <div className="w-full">
                                            {basket_item.product.title}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-3 w-full text-xl font-semibold text-center text-gray-600 whitespace-nowrap max-w-[318px]">
                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                            <div className="self-stretch my-auto">
                                                {basket_item.product.price}
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f9ef8d5eeae25dc69bf0ee34191f6c6535989ab820aad3aaf4b460703e704e0a?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                                alt="Currency"
                                                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-8 w-full max-md:max-w-full px-[28px]">
                                <div className="flex flex-col max-w-full w-[326px]">
                                    <div className="text-base font-medium text-black">
                                        Hissəli alış kalkulyatoru
                                    </div>
                                    <div className="mt-1 text-sm text-black text-opacity-80 max-md:max-w-full">
                                        Şərtlər ilk dəfə olaraq endirimli
                                        qiymətə tətbiq olunur
                                    </div>
                                </div>

                                <MonthlyPaymentBar
                                    kredit_items={kredit_items}
                                    oncange={(par) => setKredit_item(par)}
                                    monthOptions={basket_item}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="w-full px-[28px] mt-[40px]">
                        <Green_to_green
                            classNAME="w-full"
                            action={async () => {
                                const userStr =
                                    localStorage.getItem('user-info');
                                const user = JSON.parse(userStr);
                                console.log('kredit_items', kredit_items);
                                await axiosInstance
                                    .post(
                                        'multipleUpdate',
                                        {
                                            basket_items: kredit_items,
                                        },
                                        {
                                            headers: {
                                                Authorization: `Bearer ${user.token}`,
                                            },
                                        }
                                    )
                                    .then((response) => {
                                        toast.success('sucses');
                                        console.log('response', response);
                                        setShow(false);
                                        queruqlient.invalidateQueries({
                                            queryKey: ['basket_items'],
                                        });
                                    })
                                    .catch((err) => {
                                        toast.error('error');
                                        console.log('err', err);
                                    });
                            }}
                        >
                            Təsdiqlə
                        </Green_to_green>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KreditPOpUP;
