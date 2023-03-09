import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      {...props}
      className="rounded border border-gray-800 px-4 py-2 dark:text-gray-800"
    ></input>
  );
});

Input.displayName = "Input";
