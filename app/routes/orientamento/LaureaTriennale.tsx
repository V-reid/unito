import { MapPin, MapPinned, Mouse, MousePointer } from "lucide-react";
import React, { type JSX, type PropsWithChildren } from "react";
import ComingSoon from "~/components/ComingSoon";
import { ExternalA } from "~/components/ExternalA";
import PageIntro from "~/components/PageIntro";
import { Title } from "~/components/Title";
import { Button } from "~/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/ui/card";
import { Input } from "~/ui/input";
import { Label } from "~/ui/label";

export default function LaureaTriennale() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
			<PageIntro title="Laurea Triennale">
				<div className="flex gap-y-48 items-center gap-8">
					<div className="w-full flex-1">
						Il Corso di Laurea in Informatica fornisce le conoscenze
						e le competenze necessarie per lavorare nel mondo delle
						tecnologie dell’informazione e della comunicazione e per
						consentire di seguire la rapida evoluzione scientifica e
						tecnologica in questi settori, inserendosi facilmente in
						ambiti lavorativi rivolti alla progettazione,
						organizzazione e gestione di sistemi informatici, sia
						software che hardware.
					</div>
					<img
						src="/triennale.jpeg"
						alt="ragazzo che segue la lezione"
						className="flex-1 min-w-[50%] rounded-xl border-[1px] border-gray-300"
					/>
				</div>
			</PageIntro>

			{/* <div className="  border-[1px]  border-gray-400 p-2 rounded-lg">
				<div className="font-semibold mb-5 text-xl  ">
					<div>Navigazione</div>
				</div>
				<div className="flex gap-8 items-center justify-between px-1 ">
					{items.map((x) => (
						<div className="underline text-blue-600 border-slate-500  text-center">
							{x.nav}
						</div>
					))}{" "}
				</div>
			</div> */}
			<div className="flex flex-col gap-5">
				{items.map((x) => (
					<CardInfo title={x.title} content={x.content} />
				))}
			</div>
		</div>
	);
}

const items = [
	{
		nav: "Il corso in breve",
		title: (
			<Title className="flex justify-between w-full">
				<div>Il corso in breve</div>
				<div className="flex items-center font-normal text-base gap-2">
					<MapPin className="size-5 " />
					Torino
				</div>
			</Title>
		),
		content: (
			<>
				<TitleDescr title="Tipo di accesso">
					Accesso libero con test di accertamento dei requisiti minimi
				</TitleDescr>
				<TitleDescr title="Scuola di riferimento">
					Scuola di Scienze della Natura
				</TitleDescr>
				<TitleDescr title="Altre strutture di riferimento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Biblioteca di Informatica
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Laurea Magistrale in Informatica
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Strumenti e servizi utili">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">Info e servizi</ExternalA>
						</li>
						<li>
							<ExternalA href="">FAQ</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Apertura account @educ.di.unito.it
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Organizzazione">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">Presidente</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								{" "}
								Rappresentanza Studentesca
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">Management didattico</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Segreteria studentesse e studenti
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
		nav: "Incontri",
		title: (
			<Title className="flex justify-between w-full">
				<div>Incontri</div>
				<div className="flex items-center font-normal text-base gap-2">
					<MapPin className="size-5 " />
					<ExternalA href="">
						Corso Svizzera 185 - 10149 Torino
					</ExternalA>
				</div>
			</Title>
		),
		content: (
			<>
				<TitleDescr title="Incontri per matricole">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								15 settembre 2025 alle 14
							</ExternalA>
						</li>

						<li>
							<ExternalA href="">
								Slide del 17 settembre 2024 e supporto
								compilazione piano carriera
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Porte Aperte">
					È un incontro in cui vengono presentati il corso di laurea
					in Informatica e le strutture/laboratori del corso di studi
					presso il Dipartimento di Informatica. La partecipazione
					delle lezioni è gratuita, ma si richiede l’iscrizione
					tramite sistema di prenotazione che sarà comunicato circa un
					mese prima dell'evento. Le iscrizioni di ciascuna edizione
					dell'incontro si chiudono 7 giorni prima dell’inizio
					dell'evento.
					<div className="italic mt-2">
						Appuntamenti in programma nel 2026:
					</div>
					<ul className="list-disc pl-10 ">
						<li>in programmazione nel mese di gennaio</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Altre iniziative di orientamento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Giornate per l'Orientamento
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
		nav: "Contatti",
		title: <Title className="flex justify-between w-full">Contatti</Title>,
		content: (
			<>
				<TitleDescr
					title="Sportello per l'Orientamento del corso di laurea in
						Informatica"
				>
					{" "}
					gli incontri si tengono in presenza e/o a distanza secondo
					il <ExternalA href="">calendario.</ExternalA> Per prenotare
					scrivi a{" "}
					<ExternalA href="">
						sportello_orientamento@di.unito.it
					</ExternalA>
				</TitleDescr>
				<TitleDescr
					title="Servizi Orientamento e Tutorato della Scuola di Scienze
						della Natura"
				>
					Per un appuntamento in presenza o a distanza scrivi a{" "}
					<ExternalA href="">
						orientamento.scienzedellanatura@unito.it
					</ExternalA>{" "}
					<br />
					Per maggiori informazioni:{" "}
					<ExternalA href="">
						Orientamento e Tutorato della Scuola di Scienze della
						Natura
					</ExternalA>
				</TitleDescr>
			</>
		),
	},
	{
		nav: "Risorse",
		title: <Title className="flex justify-between w-full">Risorse</Title>,
		content: (
			<>
				<TitleDescr title="Link utili">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Informazioni Matricole
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">Brochure informativa</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Mappa degli insegnamenti del corso di laurea
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Pagina di approfondimento del corso di laurea
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Introduzione al corso di Laurea">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Benvenuto della Vicedirettrice alla Didattica
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Presentazione del corso di laurea">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								{" "}
								Slide delle presentazioni
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Informatica - una scienza
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Informatica nel lavoro
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">Offerta formativa</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				Materiale didattico online: il documento "Materiale multimediale
				su principi di programmazione e algoritmi" raccoglie risorse
				multimediali che illustrano concetti di base dell'informatica e
				propongono semplici esercizi, fruibili in modo autonomo.
				<TitleDescr
					title="Sportello per l'Orientamento del corso di laurea in
						Informatica"
				>
					{" "}
					gli incontri si tengono in presenza e/o a distanza secondo
					il <ExternalA href="">calendario.</ExternalA> Per prenotare
					scrivi a{" "}
					<ExternalA href="">
						sportello_orientamento@di.unito.it
					</ExternalA>
				</TitleDescr>
				<TitleDescr
					title="Servizi Orientamento e Tutorato della Scuola di Scienze
						della Natura"
				>
					Per un appuntamento in presenza o a distanza scrivi a{" "}
					<ExternalA href="">
						orientamento.scienzedellanatura@unito.it
					</ExternalA>{" "}
					<br />
					Per maggiori informazioni:{" "}
					<ExternalA href="">
						Orientamento e Tutorato della Scuola di Scienze della
						Natura
					</ExternalA>
				</TitleDescr>
			</>
		),
	},
	{
		nav: "Orientamento",
		title: (
			<Title className="flex justify-between w-full">
				Orientamento per studenti con disabilità e DSA
			</Title>
		),
		content: (
			<>
				<TitleDescr title="Hai una disabilità e vuoi studiare in UNITO">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								scopri cosa possiamo fare, insieme
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Contatti">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">ufficio.dsa@unito.it</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								ufficio.disabili@unito.it
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Delegato di Dipartimento per la disabilità e i
								disturbi specifici dell'apprendimento (DSA)
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Approfondamenti">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Servizi per la disabilità
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Consulta la guida pratica{" "}
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Servizi per i disturbi specifici di
								apprendimento (DSA)
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Consulta la guida pratica{" "}
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
		nav: "Strumenti",
		title: (
			<Title className="flex justify-between w-full">
				Strumenti per l'orientamento
			</Title>
		),
		content: (
			<>
				<div>
					L'Università di Torino mette a disposizione quiz e verifiche
					con valutazione automatica per prepararti ai test:{" "}
					<ExternalA href="">
						scopri gli strumenti UniTO per l'orientamento
					</ExternalA>
				</div>
			</>
		),
	},
];

function TitleDescr({
	title,
	children,
}: { title: JSX.Element | string } & PropsWithChildren) {
	return (
		<div className="flex flex-col">
			<strong>{title}</strong>
			<div>{children}</div>
		</div>
	);
}

function CardInfo({
	title,
	content,
}: {
	title: JSX.Element;
	content: JSX.Element;
}) {
	return (
		<Card className="w-full  border-slate-400">
			<CardHeader>
				<CardTitle className="text-2xl font-bold ">{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">{content}</CardContent>
			{/* <CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full">
					Login
				</Button>
				<Button variant="outline" className="w-full">
					Login with Google
				</Button>
			</CardFooter> */}
		</Card>
	);
}
