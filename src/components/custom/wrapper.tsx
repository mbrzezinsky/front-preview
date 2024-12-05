import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "@/lib/utils.ts";

const wrapperVariants = cva(
    "",
    {
       variants: {
           variant: {
               default: "",
               whFull: "w-full h-full",
               whScreen: "w-screen h-screen",
           }
       },
        defaultVariants: {
            variant: "default",
        }
    }
)

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof wrapperVariants> {}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(
    ({className, variant, ...props}, ref) => {
        return (
            <div className={cn(wrapperVariants({ variant, className }))}
                ref={ref}
                {...props}
            >
            </div>
        )
    }
)
Wrapper.displayName = "Wrapper"

function AppWrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="flex p-4 rounded-md flex-1 flex-col pt-0">
            <div className="min-h-[100vh] p-4 flex-1 rounded-xl bg-base-100 md:min-h-min">
                {children}
            </div>
        </div>
    )
}

export {Wrapper, AppWrapper, wrapperVariants}