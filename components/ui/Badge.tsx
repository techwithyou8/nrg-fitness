import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "badge",
  {
    variants: {
      variant: {
        primary: "badge-primary",
        secondary: "badge-secondary",
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        info: "bg-blue-100 text-blue-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode;
}

export function Badge({ children, variant, className, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
}
