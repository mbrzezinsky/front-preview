import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/lib/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../reducer.tickets";

export default function PaginationSection() {
    const dispatch = useDispatch<AppDispatch>();
    const { dto } = useSelector((state: RootState) => state.tickets);

    return (
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4 text-sm">
                <span>
                    Showing {dto.data.length} of {dto.total_records} results
                </span>
                <span>
                    Page {dto.page} of {dto.total_pages}
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    size="sm"
                    variant="primary"
                    shape="square"
                    onClick={() => dispatch(changePage(dto.page - 1))}
                    disabled={dto.page === 1}
                >
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                    size="sm"
                    variant="primary"
                    shape="square"
                    className="btn btn-circle"
                    onClick={() => dispatch(changePage(dto.page + 1))}
                    disabled={dto.page === dto.total_pages}
                    // onClick={() =>
                    //     onTableStateChange({ page: tableState.page + 1 })
                    // }
                    // disabled={tableState.page === totalPages}
                >
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}
