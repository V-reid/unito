import React, { useState } from "react";
import { Link } from "react-router";
import { cn } from "~/utils";

export default function Logo({ white }: { white?: boolean }) {
	const [hover, setHover] = useState(false);
	const text = white ? "text-white" : "text-slate-800";
	return (
		<Link
			to="/"
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<h1 className={cn("text-4xl ", text)}>
				<span
					className={cn(
						"transition-all",
						!hover ? text : "text-primary"
					)}
				>
					di
				</span>
				<span
					className={cn(
						"transition-all",
						hover ? text : "text-primary"
					)}
				>
					.uni
				</span>
				<span
					className={cn(
						"transition-all",
						!hover ? text : "text-primary"
					)}
				>
					to
				</span>

				<span
					className={cn(
						"transition-all",
						hover ? text : "text-primary"
					)}
				>
					.it
				</span>
			</h1>

			<h2 className={cn("-mt-[5px]", text)}>
				Dipartimento di Informatica
			</h2>
		</Link>
	);
}
