import { AppWrapper } from "@/components/custom/wrapper.tsx";
import { DataTable } from "./data-table";
import { columns } from "@/routes/tickets/columns.tsx";

const data = [
    {
        title: "title 1",
        status: "Success",
        assigned_to: "Mateusz Brzeziński",
        created_by: "Mateusz Brzeziński",
    },
    {
        title: "title 2",
        status: "To Do",
        assigned_to: "Mateusz Brzeziński",
        created_by: "Mateusz Brzeziński",
    },
    {
        title: "bez title 3",
        status: "To Do",
        assigned_to: "Mateusz Brzeziński",
        created_by: "Oskar Wiszowaty",
    },
    {
        title: "aoooo 4",
        status: "Done",
        assigned_to: "Mateusz Brzeziński",
        created_by: "Mateusz Brzeziński",
    },
    {
        title: "eee 5",
        status: "To Do",
        assigned_to: "Oskar Wiszowaty",
        created_by: "Mateusz Brzeziński",
    },
];

export default function Tickets() {
    return (
        <AppWrapper>
            <DataTable columns={columns} data={data} />
        </AppWrapper>
    );
}

