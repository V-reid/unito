import React, { type PropsWithChildren } from "react";
import { cn } from "~/utils";

export default function Tag({
	className,
	children,
}: { className?: string } & PropsWithChildren) {
	return (
		<div
			className={cn(
				"rounded-full w-fit bg-primary  text-white  px-2 py-0.5 text-xs font-bold grid",
				className ?? ""
			)}
		>
			{children}
		</div>
	);
}
