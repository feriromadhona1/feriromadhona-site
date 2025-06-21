
import cn from "@/components/helper/classnameMerge";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button = ({ className, variant = "default", ...props }: ButtonProps) => {
  const base =
    "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400";
  const variants = {
    default: "bg-sky-500 text-white hover:bg-sky-600",
    outline: "border border-sky-500 text-sky-500 hover:bg-sky-50",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
};
