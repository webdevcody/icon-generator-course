import clsx from "clsx";

export function Button(
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
  }
) {
  const color =
    (props.variant ?? "primary") === "primary"
      ? "bg-blue-400 hover:bg-blue-500"
      : "bg-gray-400 hover:bg-gray-500";

  return (
    <button {...props} className={clsx("rounded px-4 py-2", color)}>
      {props.children}
    </button>
  );
}
