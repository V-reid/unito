import type { PropsWithChildren } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "~/utils";

export function ExternalA({
	href,
	children,
	className,
}: { href: string; className?: string } & PropsWithChildren) {
	return (
		<a
			className={cn("underline text-blue-600 inline", className ?? "")}
			href={href}
		>
			{/* <div className="flex items-center gap-[2px] text-wrap flex-wrap"> */}
			{children}
			<ExternalLink className=" size-4 inline ml-[1px] mb-[2px]" />
			{/* </div> */}
		</a>
	);
}
