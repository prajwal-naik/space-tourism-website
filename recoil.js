import { atom } from 'recoil';


const currentPageState = atom({
    key: 'currentPageState',
    default: "home",
});



export {
    currentPageState,
}