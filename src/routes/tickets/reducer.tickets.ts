import { DataTableDto, TableRequest } from "@/dtos/common/DataTable";
import { TicketDto, FilterTicketDto } from "@/dtos/ticket/Ticket";
import api from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

type TicketsState = {
    isLoading: boolean;
    error: string | null;
    dto: DataTableDto<TicketDto>;
    request: TableRequest<FilterTicketDto>;
};

const initialState: TicketsState = {
    isLoading: false,
    error: null,
    dto: {
        data: [],
        page: 1,
        page_size: 25,
        total_pages: 1,
        total_records: 0,
    },
    request: {
        dt_request: {
            page: 1,
            page_size: 25,
            sort: { sort_by: "id", sort_by_direction: "asc" },
        },
        filters: [],
    },
};

export const initState = createAsyncThunk(
    "tickets/init",
    async (_, { rejectWithValue }) => {
        return await api
            .post<DataTableDto<TicketDto>, TableRequest<FilterTicketDto>>(
                "/ticket/table",
                initialState.request,
            )
            .then((res) => res)
            .catch((err) => rejectWithValue(err.resposne?.data || err.message));
    },
);

export const filteredTickets = createAsyncThunk(
    "tickets/filter",
    async (payload: TableRequest<FilterTicketDto>, { rejectWithValue }) => {
        return await api
            .post<DataTableDto<TicketDto>, TableRequest<FilterTicketDto>>(
                "/ticket/table",
                payload,
            )
            .then((res) => res)
            .catch((err) => rejectWithValue(err.resposne?.data || err.message));
    },
);

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.request.dt_request.page = action.payload;
        },
        changePageSize: (state, action) => {
            state.request.dt_request.page_size = action.payload;
        },
        changeSorting: (state, action) => {
            state.request.dt_request.sort = action.payload;
        },
        addFilter: (state) => {
            state.request.filters.push({
                search: "",
                column: undefined,
                assertion: "Like",
            });
        },
        removeFilter: (state, action) => {
            state.request.filters.splice(action.payload, 1);
        },
        modifyFilter: (state, action) => {
            state.request.filters[action.payload.index] = {
                ...state.request.filters[action.payload.index],
                ...action.payload.update,
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(initState.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(initState.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dto = action.payload;
            state.error = null;
        });
        builder.addCase(initState.rejected, (state, action) => {
            state.isLoading = false;
            state.error = (action.payload as string) || "Unable to init";

            toast.error(state.error);
        });
        builder.addCase(filteredTickets.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(filteredTickets.fulfilled, (state, action) => {
            state.isLoading = false;
            state.dto = action.payload;
            state.error = null;
        });
        builder.addCase(filteredTickets.rejected, (state, action) => {
            state.isLoading = false;
            state.error = (action.payload as string) || "Unable to filter";

            toast.error(state.error);
        });
    },
});

export default ticketsSlice;
export const {
    changePage,
    changePageSize,
    changeSorting,
    addFilter,
    removeFilter,
    modifyFilter,
} = ticketsSlice.actions;
