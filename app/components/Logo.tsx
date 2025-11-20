import React from "react";
import { Link } from "react-router";
import { cn } from "~/utils";

export default function Logo({ white }: { white: boolean }) {
	return (
		<Link to="/">
			<h1 className={cn("text-4xl ", white ? "text-white" : "")}>
				di<span className="text-primary">.uni</span>to
				<span className="text-primary">.it</span>
			</h1>

			<h2 className={cn("-mt-[5px]", white ? "text-white" : "")}>
				Dipartimento di Informatica
			</h2>
		</Link>
	);
}
