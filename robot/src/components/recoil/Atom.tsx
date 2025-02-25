import { atom } from 'recoil';

export const MenuState = atom({
    key: 'menustatekey',
    default: {
        prodctbar: false,
        aksesuaresbar: false,
        offerbar: false,
        whybar: false,
    },
});
export const languageState = atom({
    key: 'languagestatekey',
    default: 'az',
});
export const deliveryTypeState = atom({
    key: 'deliveryTypeState',
    default: {
        delivery: true,
        city: '',
        shop: '',
        address: '',
        message: '',
        peymantType: 'cash',
    },
});
// export const MenuStateTwo = atom({
//     key: 'menustatekeytwo',
//     default: [],
// });
