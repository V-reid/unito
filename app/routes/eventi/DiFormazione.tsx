import React from "react";
import ComingSoon from "~/components/ComingSoon";
import type { ModalType } from "~/components/Modal";
import ModalCard from "~/components/ModalCard";

const items: Omit<ModalType, "open" | "setIsOpen">[] = [
	{
		title: "CyberChallenge.IT",
		img: "./cyberchallenge.webp",
		alt: "cyberchallenge",
		content:
			"CyberChallenge.IT è un programma di formazione in ambito cybersecurity rivolto a ragazzi e ragazze dai 16 ai 24 anni, consistente di una gara sia individuale che a squadre, e preceduto da un corso organizzato dal Dipartimento.",
		linkText: "Sito ufficiale",
		linkHref: "https://cyberchallenge.it/",
	},
];

export default function DiFormazione() {
	return (
		<div className="min-h-[90vh] grid place-items-center ">
			<div className="grid grid-cols-2 gap-10">
				{items.map((x) => (
					<div className="h-80 aspect-square">
						<ModalCard
							{...{
								title: x.title,
								content: x.content,
								description: x.description,
								linkText: x.linkText,
								img: x.img,
								linkHref: x.linkHref,
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
