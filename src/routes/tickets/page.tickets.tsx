import { AppWrapper } from "@/components/custom/wrapper.tsx";
import { DataTable } from "./data-table";
import { columns } from "@/routes/tickets/columns.tsx";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { filteredTickets, initState } from "./reducer.tickets";
import { FilterTicketDto } from "@/dtos/ticket/Ticket";
import { TableRequest } from "@/dtos/common/DataTable";

export default function Tickets() {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, dto, request } = useSelector(
        (state: RootState) => state.tickets,
    );

    useEffect(() => {
        dispatch(initState());
    }, [dispatch]);

    const debounce = (
        func: (payload: TableRequest<FilterTicketDto>) => void,
        delay: number,
    ) => {
        let timeoutId: NodeJS.Timeout;
        return (payload: TableRequest<FilterTicketDto>) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(payload), delay);
        };
    };

    const debouncedFilteredTickets = useCallback(
        debounce((payload: TableRequest<FilterTicketDto>) => {
            dispatch(filteredTickets(payload));
        }, 400),
        [],
    );

    useEffect(() => {
        debouncedFilteredTickets(request);
    }, [debouncedFilteredTickets, request.filters]);

    useEffect(() => {
        dispatch(filteredTickets(request));
    }, [request.dt_request]);

    return (
        <AppWrapper>
            {dto && (
                <DataTable
                    columns={columns}
                    data={dto.data}
                    isLoading={isLoading}
                />
            )}
        </AppWrapper>
    );
}
