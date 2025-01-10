"use client";

import { Plus, Save, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
    addFilter,
    removeFilter,
    modifyFilter,
} from "@/routes/tickets/reducer.tickets";

export function FilterSection() {
    const [viewName, setViewName] = useState("");
    const [showSaveView, setShowSaveView] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const { request } = useSelector((state: RootState) => state.tickets);
    const filters = request.filters;

    const handleSaveView = () => {};

    return (
        <div className="space-y-4 p-4 bg-card rounded-lg border">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <div className="flex gap-2">
                    <Button
                        outline
                        variant="neutral"
                        size="sm"
                        onClick={() => setShowSaveView(!showSaveView)}
                    >
                        <Save className="w-4 h-4 mr-2" />
                        Save View
                    </Button>
                    <Button size="sm" onClick={() => dispatch(addFilter())}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Filter
                    </Button>
                </div>
            </div>

            {showSaveView && (
                <div className="flex gap-2 items-center">
                    <Input
                        placeholder="View name"
                        value={viewName}
                        onChange={(e) => setViewName(e.target.value)}
                    />
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSaveView}
                    >
                        Save
                    </Button>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filters.map((filter, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <Select
                            value={filter.column}
                            onValueChange={(value) =>
                                dispatch(
                                    modifyFilter({
                                        index,
                                        update: { column: value },
                                    }),
                                )
                            }
                        >
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Field" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="title">Title</SelectItem>
                                <SelectItem value="status">Status</SelectItem>
                                <SelectItem value="assigned_to">
                                    Assigned To
                                </SelectItem>
                                <SelectItem value="created_by">
                                    Created By
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            placeholder={`Filter ${filter.column?.toLowerCase()}...`}
                            value={filter.search}
                            onChange={(e) =>
                                dispatch(
                                    modifyFilter({
                                        index,
                                        update: { search: e.target.value },
                                    }),
                                )
                            }
                            className="flex-1"
                        />
                        <Button
                            variant="icon"
                            size="icon"
                            className="text-primaty-content hover:text-error hover:bg-base-100 "
                            onClick={() => dispatch(removeFilter(index))}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
