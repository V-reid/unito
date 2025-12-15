import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import ComingSoon from "~/components/ComingSoon";
import { DialogDemo } from "~/components/Dialog2";
import { ExternalA } from "~/components/ExternalA";
import type { ModalType } from "~/components/Modal";
import Modal from "~/components/Modal";
import ModalCard from "~/components/ModalCard";
import PageIntro from "~/components/PageIntro";
import ProfLinks from "~/components/ProfLinks";
import { Title } from "~/components/Title";
import { professors } from "~/lib/constant";
import { Button } from "~/ui/button";
import { cn } from "~/utils";

const items: {
	[k: string]: {
		title: string;
		items: Omit<ModalType, "open" | "setIsOpen">[];
	};
} = {
	didattica_informatica: {
		title: "Didattica dell'Informatica",
		items: [
			{
				title: "Convenzione Quercetti - Dipartimento di Informatica",
				img: "/progetti/pallino1.jpeg",
				alt: "bambino che compone parole con blochhi di lettere",
				description: (
					<div>
						<em>Responsabili</em>:
						<ProfLinks
							prof={professors.filter((x) =>
								["Sara Capecchi", "Cristina Gena"].includes(
									x.name
								)
							)}
						/>
					</div>
				),
				imgClassName: "h-[400px] object-top",
				content: (
					<div>
						Lo scopo della collaborazione è di realizzare dei
						giocattoli che aiutino a stimolare e consolidare il
						pensiero computazionale. Questo approccio trae spunto da
						approcci già consolidati in letteratura. Alcuni dei
						giochi nati dalla collaborazione sono{" "}
						<ExternalA
							href={
								"https://www.quercettistore.com/it/products/pallino-coding-gioco-palline-colorate"
							}
							className="inline-block"
						>
							Pallino Coding
						</ExternalA>{" "}
						e Peg Code.
					</div>
				),
				// linkText: "Sito ufficiale",
				// linkHref: "https://informaticasenzapc.di.unito.it/",
			},
		],
	},
	robotica_educativa: {
		title: "Robotica Educativa",
		items: [
			{
				title: "Sugar, Salt & Pepper - La robotica umanoide per l’autismo",
				img: "/progetti/pepper.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				alt: "immagine del robot Pepper",
				imgClassName: "object-top",
				content: (
					<div>
						Sperimentazione che si è svolta da gennaio ad aprile
						2021 nei locali della fondazione Paideia, ha visto
						l'utilizzo del robot Pepper in un laboratorio
						terapeutico sulle autonomie al fine di promuovere le
						acquisizioni funzionali in bambini con diagnosi di
						autismo ad alto funzionamento/sindrome di Asperger.
						<br /> Il laboratorio ha avuto la direzione scientifica
						della professoressa Cristina Gena e ha coinvolto altri
						prestigiosi partners, quali{" "}
						<ExternalA
							href="https://fondazionepaideia.it/"
							// className="inline-block"
						>
							Fondazione Paideia
						</ExternalA>{" "}
						e{" "}
						<ExternalA
							href="https://www.intesasanpaoloinnovationcenter.com/it"
							// className="inline-block"
						>
							Intesa SanPaolo Innovation Center
						</ExternalA>
						.<br /> Finanziato da Banca Intesa Sanpaolo – Divisione
						Banca dei territori.
					</div>
				),
				linkText: "Incontra Pepper",
				linkHref: "https://sugar-salt-pepper.di.unito.it/",
			},
			{
				title: "Social Assistive Robotics for Autistic Childrens",
				img: "/progetti/neo.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				imgClassName: "object-top",
				alt: "immagine del robot Neo",
				content:
					"Accordo attuativo per collaborazione scientifica tra l’Università degli Studi di Torino (Dipartimento di Informatica) e Intesa Sanpaolo Innovation Center S.p.A. Relativo all’utilizzo della terapia robotica (con i robot NAO e Pepper) per l’autismo, mirato a progettare e testare gli scambi e le interazioni del bambino con autismo in contesti riabilitativi (lavoro sul linguaggio/comunicazione, sulle emozioni, social skills training ecc..).",
			},
		],
	},
	altri: {
		title: "Altri progetti in ambito educativo",
		items: [
			{
				title: "Convenzione tra il Comune di Torino e l’Università di Torino",
				img: "/progetti/convenzione.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				alt: "immagine della Mole Antonelliana",
				content:
					"Nell’ambito dell’Accordo quadro tra il Comune di Torino (Dipartimento Politiche Istruzione) e l’Università degli Studi di Torino (Dipartimento di Informatica), per attività di collaborazione nell’ambito del progetto “Torino Città Universitaria”. L'attività ha visto la riprogettazione del sito web StudyInTorino, secondo un approccio user-centered design che ha coinvolto gli utenti finali in ogni passo, con l'obiettivo di rivedere gli aspetti di usabilità, accessibilità, e l’architettura dell’informazione e le tipologie di servizi offerti (2013).",
			},
			{
				title: "Studio e Analisi di usabilità per il progetto ”RightTVforKids”",
				img: "/progetti/tvForKids.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				alt: "bambino che guarda la tv",
				content:
					"Il Dipartimento di Informatica dell’Università degli Studi di torino, la Società per la gestione dell'Incubatore di Imprese e per il Trasferimento Tecnologico dell'Università degli Studi di Torino Scarl - 2i3T e SwingIdeas hanno eseguito lo “Studio e Analisi di usabilità per il progetto RightTVforKids”.",
			},
			{
				title: "Pensiero Computazionale e Creatività Digitale",
				img: "/progetti/computazionale.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				alt: "dati che passano da un pc al un cervello stilizzato",
				content:
					"Per l’attuazione del progetto “Pensiero Computazionale e Creatività Digitale” piano nazionale scuola digitale, il Dipartimento di Informatica dell’Università degli Studi di Torino ha stretto una convenzione con l’istituzione scolastica “Scuola Primaria Michele Coppino”, con sede a Torino. Il progetto si è sviluppato attraverso diversi cicli di lezioni di coding presso il plesso Falletti (scuola primaria) del Circolo Coppino dal maggio 2017 al maggio 2019.",
			},
			{
				title: "Passport.Unito",
				img: "/progetti/passport.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				alt: "ingranaggi che rappresentano le soft skill",
				content: (
					<div>
						Progettazione di una{" "}
						<ExternalA
							href="https://www.passport.unito.it/"
							className="inline-block"
						>
							piattaforma web
						</ExternalA>{" "}
						per lo sviluppo delle soft skills nell'Università degli
						Studi di Torino.
						<br /> Finanziato da fondi provenienti dall’Ateneo
						nell’ambito della Convenzione 2013-2015 fra l’università
						degli Studi Di Torino e la Compagnia di San Paolo.
					</div>
				),
			},
			{
				title: "Collaborazione Banca d'Italia - Dipartimento di Informatica",
				img: "/progetti/banca.jpeg",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Cristina Gena"].includes(x.name)
							)}
						/>
					</div>
				),
				alt: "logo della banca d'Italia ",
				imgClassName: "h-[350px]",
				content: (
					<div>
						Progettazione di una{" "}
						<ExternalA
							href="https://www.passport.unito.it/"
							className="inline-block"
						>
							piattaforma web
						</ExternalA>{" "}
						per lo sviluppo delle soft skills nell'Università degli
						Studi di Torino.
						<br /> Finanziato da fondi provenienti dall’Ateneo
						nell’ambito della Convenzione 2013-2015 fra l’università
						degli Studi Di Torino e la Compagnia di San Paolo.
					</div>
				),
			},
		],
	},
};
export default function Progetti() {
	const [open, setIsOpen] = useState(false);
	const [obj, setObj] = useState<
		Omit<ModalType, "open" | "setIsOpen"> | undefined
	>(undefined);

	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<PageIntro title="Progetti">
				<>
					<div className="mb-5">
						Il Dipartimento di Informatica coinvolge docenti,
						ricercatori e studenti nello sviluppo di nuovi progetti
						rivolti all’innovazione tecnologica, anche in
						collaborazioni con enti pubblici e caratterizzati da un
						significativo impatto sociale.
					</div>
					<span>
						Il Dipartimento di Informatica di Torino è nodo del
					</span>{" "}
					<a
						className={cn("underline text-blue-600 inline")}
						href={
							"https://www.consorzio-cini.it/index.php/it/lab-informatica-e-scuola"
						}
					>
						Laboratorio Informatica e Scuola del Consorzio
						Interuniversitario Nazionale per l'Informatica
						<ExternalLink className=" size-4 inline ml-[1px] mb-[2px]" />
					</a>
					<span> (CINI) e afferisce al </span>
					<a
						className={cn("underline text-blue-600 inline")}
						href={"https://www.cirda.unito.it/"}
					>
						Centro Interdipartimentale per la Ricerca Didattica e
						l'Aggiornamento degli Insegnamenti
						<ExternalLink className=" size-4 inline ml-[1px] mb-[2px]" />
					</a>
					.
				</>
			</PageIntro>
			{Object.values(items).map((x, i) => (
				<div className="py-2" key={i + "progetti"}>
					<Title>{x.title}</Title>
					<div className="grid grid-cols-2 gap-5 place-items-center w-fit  ">
						{x.items.map((item, j) => (
							<div
								className="h-80 aspect-square "
								key={i + "progetti" + j}
							>
								<ModalCard
									key={item.title.toString()}
									onClick={() => {
										setObj(item);
										setIsOpen(true);
									}}
									setObj={setObj}
									{...item}
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
