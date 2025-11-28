import React, { type JSX, type PropsWithChildren } from "react";

export default function PageIntro({
	title,
	children,
}: {
	title: string | JSX.Element;
} & PropsWithChildren) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-4xl font-bold">{title}</h2>
			<p>{children}</p>
		</div>
	);
}
