import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterNewTenantDto } from "@/dtos/user/User.ts";
import api from "@/lib/api";
import { toast } from "sonner";

type RegisterState = {
    isLoading: boolean;
    error: string | null;
    dto: RegisterNewTenantDto;
};

const initialState: RegisterState = {
    isLoading: false,
    error: null,
    dto: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        tenant: "",
    },
};

export const submitRegister = createAsyncThunk(
    "register/submitRegister",
    async (payload: RegisterNewTenantDto, { rejectWithValue }) => {
        return await api
            .post("/user/register-tenant", payload)
            .then(() => (window.location.href = "/auth"))
            .catch((err) => rejectWithValue(err.response?.data || err.message));
    },
);

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        changeUsername: (state, action) => {
            state.dto.username = action.payload;
        },
        changePassword: (state, action) => {
            state.dto.password = action.payload;
        },
        changeFirstname: (state, action) => {
            state.dto.firstname = action.payload;
        },
        changeLastname: (state, action) => {
            state.dto.lastname = action.payload;
        },
        changeEmail: (state, action) => {
            state.dto.email = action.payload;
        },
        changeTenant: (state, action) => {
            state.dto.tenant = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(submitRegister.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(submitRegister.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            window.location.href = "/";
        });
        builder.addCase(submitRegister.rejected, (state, action) => {
            state.isLoading = false;
            state.error = (action.payload as string) || "Unable to register";

            toast.error(state.error);
        });
    },
});

export const {
    changeUsername,
    changePassword,
    changeFirstname,
    changeLastname,
    changeEmail,
    changeTenant,
} = registerSlice.actions;

export default registerSlice;
