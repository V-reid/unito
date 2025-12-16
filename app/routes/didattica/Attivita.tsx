import { useState } from "react";

import { ExternalA } from "~/components/ExternalA";
import type { ModalType } from "~/components/Modal";
import Modal from "~/components/Modal";
import ModalCard from "~/components/ModalCard";
import PageIntro from "~/components/PageIntro";
import ProfLinks from "~/components/ProfLinks";
import { Title } from "~/components/Title";
import { professors } from "~/lib/constant";

const items = {
	didattica_informatica: {
		title: "Didattica dell'Informatica",
		items: [
			{
				title: "Informaticasenzapc",
				img: "/didattica.jpeg",
				alt: "Informaticasenzapc",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Sara Capecchi"].includes(x.name)
							)}
						/>
					</div>
				),
				content: (
					<p>
						Lo scopo di questo progetto è promuovere l’insegnamento
						di alcuni concetti fondamentali dell’informatica come
						scienza attraverso attività “unplugged”, ovvero senza il
						pc, e svolte con l’ausilio di giochi in scatola o
						autoprodotti. Le nostre attività prendono ispirazione da
						approcci già esistenti e usati con grande successo ed
						efficacia in tutto il mondo. Finanziato da{" "}
						<ExternalA
							href={"https://www.cirda.unito.it/"}
							className="inline-block"
						>
							CIRDA
						</ExternalA>{" "}
						.
					</p>
				),
				linkText: "Sito ufficiale",
				linkHref: "https://informaticasenzapc.di.unito.it/",
			},
			{
				title: "Teachers4Teachers",
				img: "/uni.png",
				alt: "Teacher4Teacher",
				description: (
					<div>
						<em>Responsabili</em>:
						<ProfLinks
							prof={professors.filter((x) =>
								[
									"Barbara Demo",
									"Cristina Bosco",
									"Sara Capecchi",
								].includes(x.name)
							)}
						/>
					</div>
				),
				content: (
					<p>
						{/* <ExternalA href="http://www.di.unito.it/do/home.pl/View?doc=Public_engagement.html">
							Commissione Orientamento e Informatica nelle Scuole.
						</ExternalA> */}
						<span>
							Progetto finanziato da Google PD Educator Award,
							nell'ambito del quale è stato organizzato un
							workshop dal 2012 al 2016 rivolto a insegnanti di
							ogni livello e tipo di scuola. L'evento ha avuto il
							riconoscimento e il sostegno della Direzione
							regionale del Ministero dell'Istruzione,
							dell'Università e della Ricerca.
						</span>
					</p>
				),
				linkText: "Appuntamento del " + new Date().getFullYear(),
				linkHref: "https://scienzamigrante.unito.it/",
			},
		],
	},
	robotica_educativa: {
		title: "Robotica Educativa",
		items: [
			{
				title: "Wolly, il robot educativo del Dipartimento di Informatica",
				img: "/wolly.jpg",
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
				alt: "immagine di Wolly il robot educativo del Dipartimento di Informatica",
				content: (
					<p>
						Il{" "}
						<ExternalA
							href="https://youtu.be/GeqeAl4vIxE"
							className="inline-block"
						>
							robot Wolly
						</ExternalA>{" "}
						è stato progettato e costruito da studenti e borsisti
						dell'Università degli Studi di Torino, seguendo un
						approccio di co-design che ha coinvolto i bambini della
						scuola primaria nella fase di ideazione e progettazione.
						Il progetto è stato poi finanziato dal Google PD
						Educator Award sulla linea delle Sovvenzioni per lo
						sviluppo professionale degli insegnanti EMEA 2019
						(computer science) che riguarda la formazione degli
						insegnanti sull'insegnamento della robotica educativa.
						Il finanziamento ha dato alla luce un{" "}
						<ExternalA
							href="https://wolly.i-learn.unito.it"
							className="inline-block"
						>
							Moodle
						</ExternalA>{" "}
						con dei corsi di informatica, coding e robotica
						educativa per i docenti, ma non solo!
					</p>
				),
				linkText: "Incontra Wolly",
				linkHref: "https://wolly.di.unito.it/",
			},
		],
	},
	ia: {
		title: "Didattica dell’Intelligenza Artificiale",
		items: [
			{
				title: "EmpAI",
				img: "/didatticaAI.avif",
				description: (
					<div>
						<em>Responsabile</em>:{" "}
						<ProfLinks
							prof={professors.filter((x) =>
								["Matteo Baldoni"].includes(x.name)
							)}
						/>
					</div>
				),
				imgClassName: "object-top h-[350px]",
				alt: "ragazza che segue un corso al pc",
				content:
					"Il progetto si concentra sulla definizione di una metodologia di insegnamento efficace ed efficiente grazie all’implementazione di una piattaforma educativa online che possa aiutare gli studenti a sviluppare competenze nell’ambito dell’IA e grazie ad una serie di attività ludiche e d'intrattenimento.",
				linkText: "Potenzia le tue conoscenze",
				linkHref: "https://www.smaile.it/emp-ai",
			},
		],
	},
	consapevolezza: {
		title: "Consapevolezza digitale",
		items: [
			{
				title: "Social4School",
				img: "/social4school.jpg",
				description: (
					<div>
						<em>Responsabili</em>:
						<ProfLinks
							prof={professors.filter((x) =>
								["Sara Capecchi", "Ruggero Pensa"].includes(
									x.name
								)
							)}
						/>
					</div>
				),
				alt: "bambini a scuola",
				imgClassName: "object-top h-[350px]",
				content:
					"Social4School permette a alunne e alunni delle scuole primarie e secondarie di sperimentare dinamiche sociali tipiche di un social network attraverso una simulazione interattiva realistica. Lo scopo è sensibilizzare i bambini e i ragazzi all’importanza di un uso consapevole della rete mostrando come ogni singola azione, anche piccola, rischia di avere una diffusione inaspettata nel Web.",
				linkText: "Scarica l'applicazione",
				linkHref: "https://www.social4school.net/#/home",
			},
		],
	},
};

export default function Attivita() {
	const [obj, setObj] = useState<
		Omit<ModalType, "open" | "setIsOpen"> | undefined
	>(undefined);

	const [open, setIsOpen] = useState(false);

	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<PageIntro title="Attività">
				<p className="font-[Helvetica]">
					Come parte delle loro ricerche, i nostri ricercatori e
					ricercatrici hanno ideato delle attività didattiche rivolte
					a studenti e insegnanti delle scuole primarie e secondarie.
					In questa sezione si possono trovare le informazioni e i
					materiali necessari per intraprendere queste attività,
					divise per categorie, in modo da approfondire e migliorare
					l’insegnamento dell’informatica.
				</p>
			</PageIntro>
			{Object.values(items).map((x) => (
				<div className="py-2" key={x.title + "attivita"}>
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
			<Modal
				{...obj}
				open={open}
				setIsOpen={(v) => {
					setIsOpen(v);
				}}
			/>
		</div>
	);
}
