import { axiosInstance } from '@/services/Requests';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

function CartItem({ item }) {
    const queryClient = useQueryClient();

    const updateQuantity = async (id, change) => {
        // setItems((prevItems) =>
        //     prevItems.map((item) =>
        //         item.id === id
        //             ? {
        //                   ...item,
        //                   quantity: Math.max(1, (item.quantity || 1) + change),
        //               }
        //             : item
        //     )
        // );
        const userStr = localStorage.getItem('user-info');
        const user = JSON.parse(userStr);
        await axiosInstance
            .put(
                `/basket_items/${id}`,
                {
                    price: change.price,
                    quantity: change.quantity,
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            )
            .then(() => {
                toast.success('Basket successfully updated');
                queryClient.invalidateQueries({ queryKey: ['basket_items'] });
            })
            .catch((error) => {
                console.log('Basket Error ', error);
            });
    };

    const removeItem = async (id) => {
        // setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        const userStr = localStorage.getItem('user-info');
        const user = JSON.parse(userStr);
        await axiosInstance
            .delete(
                `/basket_items/${id}`,

                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            )
            .then(() => {
                toast.success('Basket item deleted ');
                queryClient.invalidateQueries({ queryKey: ['basket_items'] });
            })
            .catch((error) => {
                console.log('Basket Error ', error);
            });
    };
    return (
        <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full mt-[36px]">
            <div className="flex items-start max-md:max-w-full ">
                <div className="flex flex-wrap gap-3 items-center self-end p-3 mt-2 -mr-6 rounded-3xl bg-stone-50">
                    <img
                        loading="lazy"
                        src={item.product.image}
                        alt={item.product.image}
                        className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-[1.19] max-w-[167px]"
                    />
                    <div className="flex flex-col self-stretch my-auto max-w-[233px]">
                        <div className="flex flex-col w-full">
                            <div className="text-base text-green-950 text-wrap">
                                {item.product.title}
                            </div>
                            <div className="flex gap-1 items-center self-start mt-2 text-lg font-semibold text-center text-gray-600 whitespace-nowrap">
                                <div className="self-stretch my-auto">
                                    {item.product.price}
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4d2a36fd939376c6f41c541f80800f56524eea422457fa07d405f81224a123?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                                    alt=""
                                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    className="bg-transparent border-none cursor-pointer"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c95ab14b213be63ed451383016690f8e222bc0c2107b1ab11e5ed6e66aed41ce?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Remove item"
                        className="object-contain shrink-0 self-start w-8 aspect-square"
                    />
                </button>
            </div>
            <div className="flex gap-1 items-center my-auto text-base font-semibold text-white whitespace-nowrap">
                <button
                    disabled={item.quantity === 1}
                    onClick={() =>
                        updateQuantity(item.id, {
                            price: item.product.discounted_price,
                            quantity: item.quantity - 1,
                        })
                    }
                    aria-label="Decrease quantity"
                    className="bg-transparent border-none cursor-pointer"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f941910c36ace987501060b51929b6df7844ca95f900a48ab8c873a6d6ee99?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Decrease"
                        className="object-contain shrink-0 self-stretch my-auto w-10 rounded-lg aspect-square"
                    />
                </button>
                <div className="overflow-hidden self-stretch px-3 my-auto w-10 h-10 rounded-lg bg-[#A6B9AB] flex justify-center items-center">
                    {item.quantity}
                </div>
                <button
                    onClick={() =>
                        updateQuantity(item.id, {
                            price: item.product.discounted_price,
                            quantity: item.quantity + 1,
                        })
                    }
                    aria-label="Increase quantity"
                    className="bg-transparent border-none cursor-pointer"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/20325bbd4da23a24c11bfdb5cf3f75b602b34f42b82bbd5a532fb2aa1b85f258?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2"
                        alt="Increase"
                        className="object-contain shrink-0 self-stretch my-auto w-10 rounded-lg aspect-square"
                    />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
