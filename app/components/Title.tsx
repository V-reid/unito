import type { PropsWithChildren } from "react";
import { cn } from "~/utils";

export function Title({
	className,
	children,
}: { className?: string } & PropsWithChildren) {
	return (
		<h3
			className={cn(
				"border-primary text-2xl w-fit  border-l-2 px-2 font-bold  mb-2",
				className ?? ""
			)}
		>
			{children}
		</h3>
	);
}
