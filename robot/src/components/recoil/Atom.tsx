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

// export const MenuStateTwo = atom({
//     key: 'menustatekeytwo',
//     default: [],
// });