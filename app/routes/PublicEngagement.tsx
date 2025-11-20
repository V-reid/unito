import React from "react";
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
	{
		title: "Scienza Migrante",
		img: "./scienza-migrante.jpg",
		alt: "Locandina Scienza migrante",
		content:
			"Scienza Migrante è un progetto dell’Università di Torino in collaborazione con altri enti, creato attorno a scienziati e ricercatori che lavorano all’estero e con un focus su temi culturali, linguistici e scientifici. Rientrano in questo progetto varie attività e piattaforme: il portale con le storie degli scienziati migranti, l’aperitivo migrante e il cineforum.",
		linkText: "Appuntamento del " + new Date().getFullYear(),
		linkHref: "https://scienzamigrante.unito.it/",
	},
	{
		title: "Frida",
		img: "./frida.png",
		alt: "locandina di frida",
		content:
			"Frida è il Forum di Ricerca d’Ateneo, un progetto dell’Università di Torino e del Centro Interuniversitario Agorà Scienza che racconta le attività di ricerca dell’Università in modo accessibile e interessante.",
		linkText: "Storie del dipartimento",
		linkHref:
			"https://frida.unito.it/esplora?search_api_fulltext=&type=racconto&search_terms=&field_cat_princ_articolo_1=All&autore=All&search_terms=&created=All&search_terms=&dipartimento=405&search_terms=",
	},
	{
		title: "La notte dei ricercatori e delle ricercatrici ",
		img: "./notte.jpg",
		alt: "La notte dei ricercatori e delle ricercatrici",
		content:
			"La notte dei ricercatori e delle ricercatrici è un’iniziativa che ha l’obiettivo di avvicinare il grande pubblico al mondo della ricerca e, nello specifico, ai ricercatori e alle ricercatrici, aumentando la consapevolezza dell’importanza della ricerca scientifica nello sviluppo culturale, sociale ed economico della società.",
		linkText: "Storie del dipartimento",
	},
];

export default function PublicEngagement() {
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
