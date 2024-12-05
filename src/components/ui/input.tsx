import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva("input w-full rounded-md", {
    variants: {
        variant: {
            default: "",
            primary: "input-primary",
            secondary: "input-secondary",
            accent: "input-accent",
            ghost: "input-ghost",
            info: "input-info",
            success: "input-success",
            warning: "input-warning",
            error: "input-error",
        },
        size: {
            default: "input-sm",
            xs: "input-xs",
            sm: "input-sm",
            md: "input-md",
            lg: "input-lg",
        },
        bordered: {
            true: "input-bordered",
        },
        labeled: {
            true: "flex items-center gap-2",
        },
        icon: {
            true: "flex items-center gap-2",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        bordered: true,
        labeled: false,
        icon: false,
    },
});

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
        VariantProps<typeof inputVariants> {
    label?: string;
    svg?: React.ReactNode;
    htmlsize?: React.InputHTMLAttributes<HTMLInputElement>["size"];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { className, variant, size, bordered, labeled, icon, type, ...props },
        ref,
    ) => {
        return props.svg ? (
            <>
                <div className="label">
                    <span className="label-text">{props.label}</span>
                </div>
                <label
                    className={cn(
                        inputVariants({
                            variant,
                            size,
                            bordered,
                            icon,
                            labeled,
                            className,
                        }),
                    )}
                >
                    {props.svg}
                    <input
                        className={"grow rounded-md"}
                        type={type}
                        ref={ref}
                        {...{
                            ...props,
                            size: props.htmlsize,
                            htmlsize: undefined,
                        }}
                    />
                </label>
            </>
        ) : props.label ? (
            <>
                <div className="label">
                    <span className="label-text">{props.label}</span>
                </div>
                <label
                    className={cn(
                        inputVariants({
                            variant,
                            size,
                            bordered,
                            labeled,
                            className,
                        }),
                    )}
                >
                    <input
                        className={"grow rounded-md"}
                        type={type}
                        ref={ref}
                        {...{
                            ...props,
                            size: props.htmlsize,
                            htmlsize: undefined,
                        }}
                    />
                </label>
            </>
        ) : (
            <input
                type={type}
                className={cn(
                    inputVariants({ variant, size, bordered, className }),
                )}
                ref={ref}
                {...{ ...props, size: props.htmlsize, htmlsize: undefined }}
            />
        );
    },
);

export { Input, inputVariants };
