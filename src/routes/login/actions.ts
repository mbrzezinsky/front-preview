import { createAction } from '@reduxjs/toolkit';

export const changeEmail = createAction<string>('login/changeEmail');
export const changePassword = createAction<string>('login/changePassword');
export const submitLogin = createAction('login/submitLogin');
