import React, { type PropsWithChildren } from "react";

export default function SectionTitle({ children }: PropsWithChildren) {
	return (
		<h2 className="border-primary text-2xl w-fit  border-l-2 px-2 font-bold">
			{children}
		</h2>
	);
}
