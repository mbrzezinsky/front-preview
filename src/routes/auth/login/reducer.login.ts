import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginRequestDto } from "@/dtos/user/User.ts";
import api from "@/lib/api";
import { toast } from "sonner";

type LoginState = {
    isLoading: boolean;
    error: string | null;
    dto: LoginRequestDto;
};

const initialState: LoginState = {
    isLoading: false,
    error: null,
    dto: {
        email: "",
        password: "",
    },
};

export const submitLogin = createAsyncThunk(
    "login/submitLogin",
    async (payload: LoginRequestDto, { rejectWithValue }) => {
        return await api
            .post("/user/login", payload)
            .then(() => (window.location.href = "/"))
            .catch((err) => rejectWithValue(err.response?.data || err.message));
    },
);

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeEmail: (state, action) => {
            state.dto.email = action.payload;
        },
        changePassword: (state, action) => {
            state.dto.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(submitLogin.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(submitLogin.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            window.location.href = "/";
        });
        builder.addCase(submitLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = (action.payload as string) || "Unable to login";

            toast.error(state.error);
        });
    },
});

export const { changeEmail, changePassword } = loginSlice.actions;
export default loginSlice;
