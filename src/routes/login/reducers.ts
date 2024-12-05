import { createReducer } from '@reduxjs/toolkit';
import { LoginRequestDto } from '@/dtos/user/User.ts';
import { changeEmail, changePassword, submitLogin } from './actions';
import { post, get } from '@/lib/api';

const initialState: LoginRequestDto = {
    email: '',
    password: ''
};

const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeEmail, (state, action) => {
            state.email = action.payload;
        })
        .addCase(changePassword, (state, action) => {
            state.password = action.payload;
        })
        .addCase(submitLogin, (state) => {
            const dto: LoginRequestDto = state;
            post('/user/login', dto).then((response) => {
                // TODO: Handle redirection to dashboard
                console.log('Login response:', response);
                get("/user/session").then((response) => {
                    console.log('Session response:', response);
                });
            });
        });
});

export default loginReducer;
