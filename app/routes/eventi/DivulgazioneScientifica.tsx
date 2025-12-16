import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import type { ModalType } from "~/components/Modal";
import Modal from "~/components/Modal";
import ModalCard from "~/components/ModalCard";
import PageIntro from "~/components/PageIntro";
import { Title } from "~/components/Title";
import { baseUrl } from "~/lib/constant";
import { cn } from "~/utils";

const items: {
	[k: string]: {
		title: string;
		items: Omit<ModalType, "open" | "setIsOpen">[];
	};
} = {
	incontri: {
		title: "Incontri",
		items: [
			{
				title: "Scienza Migrante",
				img: baseUrl + "/divulgazione/scienza-migrante.jpg",
				alt: "Locandina Scienza migrante",
				content:
					"Scienza Migrante è un progetto dell’Università di Torino in collaborazione con altri enti, creato attorno a scienziati e ricercatori che lavorano all’estero e con un focus su temi culturali, linguistici e scientifici. Rientrano in questo progetto varie attività e piattaforme: il portale con le storie degli scienziati migranti, l’aperitivo migrante e il cineforum.",
				linkText: "Appuntamento del " + new Date().getFullYear(),
				linkHref: "https://scienzamigrante.unito.it/",
			},
			{
				title: "Salone Internazionale del Libro",
				img: baseUrl + "/divulgazione/salon.jpeg",
				alt: "Scaffale cilindrico di libri",
				content:
					"Lo spazio UniTo allo stand L139 del Padiglione 2 di Lingotto Fiere - ha ospitato gli #UniToTalks, un cartellone di incontri per dar voce alle diverse anime dell'Ateneo e presentare progetti e iniziative che coinvolgono in modo più ampio il territorio e le istituzioni su tematiche trasversali - dalla sostenibilità agli spazi urbani, dalla tutela della salute alle proposte culturali.",
			},
			{
				title: "La notte dei ricercatori e delle ricercatrici ",
				img: "./divulgazione/notte.png",
				alt: "La notte dei ricercatori e delle ricercatrici",
				imgClassName: "h-[300px]",
				content:
					"La notte dei ricercatori e delle ricercatrici è un’iniziativa che ha l’obiettivo di avvicinare il grande pubblico al mondo della ricerca e, nello specifico, ai ricercatori e alle ricercatrici, aumentando la consapevolezza dell’importanza della ricerca scientifica nello sviluppo culturale, sociale ed economico della società.",
				linkText: "Edizione " + new Date().getFullYear(),
				linkHref:
					"https://informatica.unito.it/do/avvisi.pl/Show?_id=mcb9",
			},
		],
	},
	rubrica_online: {
		title: "Rubriche Online",
		items: [
			{
				title: "Frida",
				img: "./divulgazione/frida.png",
				alt: "locandina di frida",
				content:
					"Frida è il Forum di Ricerca d’Ateneo, un progetto dell’Università di Torino e del Centro Interuniversitario Agorà Scienza che racconta le attività di ricerca dell’Università in modo accessibile e interessante.",
				linkText: "Storie del dipartimento",
				linkHref:
					"https://frida.unito.it/esplora?search_api_fulltext=&type=racconto&search_terms=&field_cat_princ_articolo_1=All&autore=All&search_terms=&created=All&search_terms=&dipartimento=405&search_terms=",
			},
			{
				title: "#donneinformatiche",
				img: baseUrl + "/divulgazione/donneinformatiche.jpeg",
				alt: "suora che tiene vecchio computer in mano",
				imgClassName: "object-top",
				content:
					"Su Facebook la presentazione delle scienziate che più hanno influenzato la storia dell’informatica.",
				linkText: "Pagina Facebook",
				linkHref:
					"https://www.facebook.com/watch/150032391693082/421879848966845/",
			},
		],
	},
};

export default function divulgazioneScientifica() {
	const [open, setIsOpen] = useState(false);
	const [obj, setObj] = useState<
		Omit<ModalType, "open" | "setIsOpen"> | undefined
	>(undefined);
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<PageIntro title="Divulgazione Scientifica">
				<>
					<div className="mb-5">
						Utilizziamo due canali principali per la divulgazione
						scientifica: eventi dal vivo, per il dibattito diretto e
						l'approfondimento, e i blog online, per la consultazione
						continua.
					</div>
				</>
			</PageIntro>
			{Object.values(items).map((x) => (
				<div className="py-2" key={x.title + "divulgazione"}>
					<Title>{x.title}</Title>
					<div className="grid grid-cols-2 gap-5 place-items-center w-fit  ">
						{x.items.map((x) => (
							<div
								className="h-80 aspect-square"
								key={x.title.toString()}
							>
								<ModalCard
									key={x.title.toString()}
									onClick={() => {
										setObj(x);
										setIsOpen(true);
									}}
									setObj={setObj}
									{...x}
								/>
							</div>
						))}
					</div>
				</div>
			))}

			<Modal {...obj} open={open} setIsOpen={setIsOpen} />
		</div>
	);
}
