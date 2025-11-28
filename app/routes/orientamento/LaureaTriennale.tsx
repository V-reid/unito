import { MapPin, MapPinned } from "lucide-react";
import React, { type JSX } from "react";
import ComingSoon from "~/components/ComingSoon";
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
				<>
					<div className="mb-5">
						Il corso di laurea in Informatica fornisce le conoscenze
						e le competenze necessarie per lavorare nel mondo delle
						tecnologie dell’informazione e della comunicazione e per
						consentire di seguire la rapida evoluzione scientifica e
						tecnologica in questi settori, inserendosi facilmente in
						ambiti lavorativi rivolti alla progettazione,
						organizzazione e gestione di sistemi informatici, sia
						software che hardware.
					</div>
				</>
			</PageIntro>
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
				<div className="flex flex-col">
					{" "}
					<strong>Tipo di accesso</strong>Accesso libero con test di
					accertamento dei requisiti minimi
				</div>

				<div className="flex flex-col">
					{" "}
					<strong>Scuola di riferimento</strong>Scuola di Scienze
					della Natura
				</div>
				<div className="flex flex-col">
					{" "}
					<strong>Altre strutture di riferimento</strong>
					<ul className="list-disc pl-10">
						<li>
							<a className="underline text-blue-500">
								Biblioteca di Informatica
							</a>
						</li>
						<li>
							<a className="underline text-blue-500">
								Laurea Magistrale in Informatica
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col">
					{" "}
					<strong>Strumenti e servizi utili</strong>
					<ul className="list-disc pl-10">
						<li>
							<a className="underline text-blue-500">
								Info e servizi
							</a>
						</li>
						<li>
							<a className="underline text-blue-500">FAQ</a>
						</li>
						<li>
							<a className="underline text-blue-500">
								Apertura account @educ.di.unito.it
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<strong>Organizzazione</strong>
					<ul className="list-disc pl-10">
						<li>
							<a className="underline text-blue-500">
								Presidente
							</a>
						</li>
						<li>
							<a className="underline text-blue-500">
								{" "}
								Rappresentanza Studentesca
							</a>
						</li>
						<li>
							<a className="underline text-blue-500">
								Management didattico
							</a>
						</li>
						<li>
							<a className="underline text-blue-500">
								Segreteria studentesse e studenti
							</a>
						</li>
					</ul>
				</div>
			</>
		),
	},
	{
		title: (
			<Title className="flex justify-between w-full">
				<div>Incontri</div>
				<div className="flex items-center font-normal text-base gap-2">
					<MapPin className="size-5 " />
					<a className="underline text-blue-500">
						Corso Svizzera 185 - 10149 Torino
					</a>
				</div>
			</Title>
		),
		content: (
			<>
				<div className="flex flex-col">
					{" "}
					<strong>Incontri per matricole:</strong>
					<ul className="list-disc pl-10">
						<li>
							<a className="underline text-blue-500">
								15 settembre 2025 alle 14
							</a>
						</li>

						<li>
							<a className="underline text-blue-500">
								Slide del 17 settembre 2024 e supporto
								compilazione piano carriera
							</a>
						</li>
					</ul>
				</div>

				<div className="flex flex-col">
					{" "}
					<strong>Porte Aperte</strong>È un incontro in cui vengono
					presentati il corso di laurea in Informatica e le
					strutture/laboratori del corso di studi presso il
					Dipartimento di Informatica. La partecipazione delle lezioni
					è gratuita, ma si richiede l’iscrizione tramite sistema di
					prenotazione che sarà comunicato circa un mese prima
					dell'evento. Le iscrizioni di ciascuna edizione
					dell'incontro si chiudono 7 giorni prima dell’inizio
					dell'evento.
					<div className="italic mt-2">
						Appuntamenti in programma nel 2026:
					</div>
					<ul className="list-disc pl-10 ">
						<li>in programmazione nel mese di gennaio</li>
					</ul>
				</div>

				<div className="flex flex-col">
					{" "}
					<strong>Altre iniziative di orientamento</strong>
					<a className="underline text-blue-500">
						Giornate per l'Orientamento
					</a>
				</div>
			</>
		),
	},
	{
		title: (
			<Title className="flex justify-between w-full">
				<div>Contatti</div>
				{/* <div className="flex items-center font-normal text-base gap-2">
					<MapPin className="size-5 " />
					<a className="underline text-blue-500">
						Corso Svizzera 185 - 10149 Torino
					</a>
				</div> */}
			</Title>
		),
		content: (
			<>
				<div className="flex flex-col">
					{" "}
					<strong>
						Sportello per l'Orientamento del corso di laurea in
						Informatica
					</strong>
					<div>
						gli incontri si tengono in presenza e/o a distanza
						secondo il{" "}
						<a className="underline text-blue-500">calendario.</a>{" "}
						Per prenotare scrivi a{" "}
						<a className="underline text-blue-500">
							sportello_orientamento@di.unito.it
						</a>
					</div>
				</div>
				<div className="flex flex-col">
					<strong>
						Servizi Orientamento e Tutorato della Scuola di Scienze
						della Natura
					</strong>
					<div>
						Per un appuntamento in presenza o a distanza scrivi a{" "}
						<a className="underline text-blue-500">
							orientamento.scienzedellanatura@unito.it
						</a>{" "}
						<br />
						Per maggiori informazioni:{" "}
						<a className="underline text-blue-500">
							Orientamento e Tutorato della Scuola di Scienze
							della Natura
						</a>
					</div>
				</div>
			</>
		),
	},
];

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
