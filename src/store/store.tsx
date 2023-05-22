import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer/userSlice';
import diskRouter from './FolderAPI/FolderAPI';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
