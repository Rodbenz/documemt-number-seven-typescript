import { useridSlice } from './feature/userid';
import { dataUser } from "./feature/datauser";
import { loadingScreenSlice } from './feature/loadingscreen';
import { configureStore } from '@reduxjs/toolkit';

const store: any = configureStore({
    reducer: {
        userid: useridSlice.reducer,
        dataUserpersonnel: dataUser.reducer,
        loadingScreen: loadingScreenSlice.reducer
    }
})

export default store
