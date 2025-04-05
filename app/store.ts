import { configureStore } from '@reduxjs/toolkit';
import secretKeySlice from './secretKeySlicer';

export const store = configureStore({
    reducer: {
        secretKey: secretKeySlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch