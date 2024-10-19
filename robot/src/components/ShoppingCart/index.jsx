import React from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const cartItems = [
    {
        id: 1,
        name: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
        price: 300,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14cdd3abb6d139c9b2383f07363293b7137b81992924730e917ff8dc525040c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        quantity: 1,
    },
    {
        id: 2,
        name: 'Roomba Combo® 10 Max Saug- und Wischroboter + AutoWash',
        price: 300,
        image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14cdd3abb6d139c9b2383f07363293b7137b81992924730e917ff8dc525040c8?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        quantity: 1,
    },
];

function ShoppingCart() {
    return (
        <main className="flex  gap-5 justify-between items-start mt-10 lg:flex-row  flex-col ">
            <section className="flex flex-col max-md:max-w-full lg:w-[75%] w-full border-r-2 pr-[40px] border-black border-opacity-10 ">
                {cartItems.map((item) => (
                    <React.Fragment key={item.id}>
                        <CartItem item={item} />
                        <hr className="shrink-0 mt-7 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
                    </React.Fragment>
                ))}
            </section>
            {/* <div className="shrink-0 self-stretch w-px border border-solid border-black border-opacity-10 h-[480px]" /> */}
            <OrderSummary />
        </main>
    );
}

export default ShoppingCart;
