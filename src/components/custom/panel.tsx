import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "@/lib/utils.ts";

const panelVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "",
                auth: "w-full lg:w-[600px] lg:min-w-[600px] h-full bg-base-300 overflow-y-auto",
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelVariants> {}

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
    ({className, variant, ...props}, ref) => {
        return (
            <div className={cn(panelVariants({ variant, className }))}
                 ref={ref}
                 {...props}
            >
            </div>
        )
    }
)
Panel.displayName = "Panel"

export { Panel, panelVariants }
