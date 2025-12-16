import React, { type JSX, type PropsWithChildren } from "react";
import { Link } from "react-router";
import ComingSoon from "~/components/ComingSoon";
import { ExternalA } from "~/components/ExternalA";
import type { ModalType } from "~/components/Modal";
import ModalCard from "~/components/ModalCard";
import PageIntro from "~/components/PageIntro";
import { baseUrl } from "~/lib/constant";
import { cn } from "~/utils";

const items: Omit<ModalType, "open" | "setIsOpen">[] = [
	{
		title: "CyberChallenge.IT",
		img: baseUrl + "/cyberchallenge.webp",
		alt: "cyberchallenge",
		content:
			"CyberChallenge.IT è un programma di formazione in ambito cybersecurity rivolto a ragazzi e ragazze dai 16 ai 24 anni, consistente di una gara sia individuale che a squadre, e preceduto da un corso organizzato dal Dipartimento.",
		linkText: "Sito ufficiale",
		linkHref: "https://cyberchallenge.it/",
	},
];

export default function DiFormazione() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<PageIntro title="Competizioni Informatiche">
				Questa sezione raccoglie le competizioni Informatiche a cui il
				Dipartimento di Informatica partecipa. Qui trovi attività e
				percorsi pensati per migliorare le tue competenze, lavorare in
				squadra e metterti alla prova con sfide pratiche.
			</PageIntro>
			<div className="flex  pb-10">
				<Link
					to="cyberchallenge"
					className={cn(
						`relative border-2 w-[50%] rounded-l-2xl overflow-hidden bg-center h-[40vh] bg-[url(${baseUrl}/formazione/cyberchallenge.jpeg)] bg-cover text-white  border-gray-300  p-10 shadow-md hover:bg-gray-100 transition-all  flex items-center justify-center text-2xl font-semibold	`
					)}
				>
					<h3 className="z-10 text-4xl font-bold">
						CyberChallenge.IT
					</h3>
					<div className="bg-black opacity-50 absolute w-full h-full hover:opacity-30 transition-all"></div>
				</Link>
				<Link
					to="swerc"
					className={cn(
						`relative border-2 max-w-[50%] rounded-r-2xl overflow-hidden   flex-1 h-[40vh]  bg-[url(${baseUrl}/formazione/swerc.jpeg)] bg-cover bg-center text-white  border-gray-300  p-10 shadow-md hover:bg-gray-100 transition-all  flex items-center justify-center text-2xl font-semibold	`
					)}
				>
					<h3 className="z-10 text-4xl font-bold">SWERC</h3>
					<div className="bg-black opacity-50 absolute w-full h-full hover:opacity-30 transition-all"></div>
				</Link>
			</div>

			{/* {items.map((x) => (
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
				))} */}
		</div>
	);
}
