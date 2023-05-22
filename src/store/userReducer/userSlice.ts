import { validateUserValue } from './../../Pages/SignInUp/Pages/SingUp/Components/validateUserValue/validateUserValue';
import axios, { AxiosError } from 'axios';
import { ResponseUserT, UserLoginSliceT } from './../store.conf';

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateT } from '../store.conf';
import { $authHost, $host } from '../../http';

function setDone(state, action: PayloadAction<ResponseUserT>) {
    if (action?.payload?.message == 'Ok') {
        state.user = action.payload.user;
        state.isAuth = true;
    }
}

function loading(state) {
    state.isLoading = !state.isLoading;
}
function loadingTwo(state) {
    state.isLoadingTwo = !state.isLoading;
}

const initialState: UserStateT = {
    user: {},
    isAuth: false,
    isLoading: false,
    isLoadingTwo: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAuth(
            state,
            action: PayloadAction<Pick<UserStateT, 'user'> | object>
        ) {
            state.user = action.payload;
            state.isAuth = false;
        },
    },

    extraReducers: function (builder) {
        builder
            .addCase(fetchGetUser.fulfilled, setDone)
            .addCase(fetchLoginUser.pending, loading)
            .addCase(fetchRegistUser.pending, loadingTwo)
            .addCase(fetchLoginUser.fulfilled, function (state, action) {
                setDone(state, action);
                loading(state);
            })
            .addCase(fetchRegistUser.fulfilled, function (state, action) {
                setDone(state, action);
                loadingTwo(state);
            });
    },
});

export const fetchGetUser = createAsyncThunk<ResponseUserT, undefined>(
    'user/fetchGetUser',
    async function () {
        try {
            const { data } = await $authHost.get('userfile/check');

            if (data.message == 'Ok') {
                localStorage.setItem('tokenFile', JSON.stringify(data.token));
                return data;
            }
        } catch (error) {
            const err = error as AxiosError;
            if (axios.isAxiosError(err) && err.response) {
                const {
                    response: { data },
                } = err;
                return data;
            }
        }
    }
);

export const fetchLoginUser = createAsyncThunk<any, UserLoginSliceT>(
    'user/fetchLoginUser',
    async function (obj) {
        try {
            await $host.get(`userfile/delete`);

            const { data } = await $host.post('userfile/login', {
                ...obj.body,
            });

            if (data.message == 'Ok') {
                localStorage.setItem('tokenFile', JSON.stringify(data.token));
                return data;
            }
        } catch (error) {
            const err = error as AxiosError;
            if (axios.isAxiosError(err) && err.response) {
                const {
                    response: { data },
                } = err;
                validateUserValue(data, obj.setError, true);
                return data;
            }
        }
    }
);

export const fetchRegistUser = createAsyncThunk<any, UserLoginSliceT>(
    'user/fetchRegistUser',
    async function (obj) {
        try {
            await $host.get('userfile/delete');

            const { data } = await $host.post('userfile/registration', {
                ...obj.body,
            });

            if (data.message == 'Ok') {
                localStorage.setItem('tokenFile', JSON.stringify(data.token));
                return data;
            }
        } catch (error) {
            const err = error as AxiosError;
            if (axios.isAxiosError(err) && err.response) {
                const {
                    response: { data },
                } = err;
                validateUserValue(data, obj.setError, true);
                return data;
            }
        }
    }
);

export const { userAuth } = userSlice.actions;

export default userSlice.reducer;
