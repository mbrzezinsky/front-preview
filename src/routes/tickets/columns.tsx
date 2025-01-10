"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button.tsx";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { TicketDto } from "@/dtos/ticket/Ticket";
import { Badge } from "@/components/ui/badge";
import { ChooseOption, ColorChooseOption } from "@/dtos/common/ChooseOption";

export const columns: ColumnDef<TicketDto>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                className={
                    "border-border data-[state=checked]:bg-base-content data-[state=checked]:text-base-100 "
                }
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                className={
                    "border-border data-[state=checked]:bg-base-content data-[state=checked]:text-base-100 "
                }
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size={"sm"}
                    className="group"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Title
                    {column.getIsSorted() === "asc" ? (
                        <ArrowUp
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : column.getIsSorted() === "desc" ? (
                        <ArrowDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : (
                        <ArrowUpDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    )}
                </Button>
            );
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size={"sm"}
                    className="group"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Status
                    {column.getIsSorted() === "asc" ? (
                        <ArrowUp
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : column.getIsSorted() === "desc" ? (
                        <ArrowDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : (
                        <ArrowUpDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    )}
                </Button>
            );
        },
        cell: ({ cell }) => (
            <Badge
                variant={cell.getValue<ColorChooseOption>().color}
                className={"border-border "}
                aria-label="Select row"
            >
                {cell.getValue<ColorChooseOption>().name}
            </Badge>
        ),
    },
    {
        accessorKey: "assigned_to",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size={"sm"}
                    className="group"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Assigned to
                    {column.getIsSorted() === "asc" ? (
                        <ArrowUp
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : column.getIsSorted() === "desc" ? (
                        <ArrowDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : (
                        <ArrowUpDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    )}
                </Button>
            );
        },
        cell: ({ row }) => (
            <div>{(row.getValue("assigned_to") as ChooseOption).name}</div>
        ),
    },
    {
        accessorKey: "created_by",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size={"sm"}
                    className="group"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Created by
                    {column.getIsSorted() === "asc" ? (
                        <ArrowUp
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : column.getIsSorted() === "desc" ? (
                        <ArrowDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    ) : (
                        <ArrowUpDown
                            className={"group-hover:text-primary ml-1 h-4 w-4"}
                        />
                    )}
                </Button>
            );
        },
        cell: ({ row }) => (
            <div>{(row.getValue("created_by") as ChooseOption).name}</div>
        ),
    },
];
