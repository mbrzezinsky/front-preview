"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import {cn} from "@/lib/utils"
import {cva, VariantProps} from "class-variance-authority";

const checkboxVariants = cva(
    "peer rounded-md",
    {
        variants: {
            variant: {
                default: "checkbox",
                primary: "checkbox checkbox-primary",
                secondary: "checkbox checkbox-secondary",
                accent: "checkbox checkbox-accent",
                success: "checkbox checkbox-success",
                warning: "checkbox checkbox-warning",
                info: "checkbox checkbox-info",
                error: "checkbox checkbox-error",
            },
            size: {
                default: "h-5 w-5",
                xs: "h-4 w-4",
                sm: "h-5 w-5",
                md: "h-6 w-6",
                lg: "h-7 w-7",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({className, variant, size, ...props}, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(checkboxVariants({variant, size, className}))}
        {...props}
    >
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox}
