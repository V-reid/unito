import { MapPin, MapPinned } from "lucide-react";
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

export default function LaureaMagistrale() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
			<PageIntro title="Laurea Magistrale">
				<div className="flex gap-y-48 items-center gap-8">
					<div className="mb-5">
						La Laurea Magistrale in Informatica orienta alla
						produzione e all'innovazione della tecnologia, con una
						vocazione più decisa a ruoli manageriali e di ricerca.
					</div>
					<img
						src="/magistrale.jpeg"
						alt="ragazzi intorno ai 28 anni che seguono la lezione"
						className="flex-1 min-w-[50%] rounded-xl border-[1px] border-gray-300"
					/>
				</div>
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
				<TitleDescr title="Tipo di accesso">
					accesso libero con valutazione del possesso requisiti
					curriculari minimi e di adeguata preparazione personale{" "}
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
							<ExternalA href="">Laurea in Informatica</ExternalA>
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
				<TitleDescr
					title="Incontri su temi, tempi e modalità del colloquio di
							ammissione"
				>
					{" "}
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								15 settembre 2025 alle 14
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Presentazione delle Lauree Magistrali in cui il Dipartimento di Informatica partecipa">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								22 maggio 2025, 9.30-12.30 | Porte Aperte:
								presentazione della laurea magistrale in
								Informatica{" "}
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Per informazioni sulle iniziative di orientamento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								orientamento@di.unito.it
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
		title: <Title className="flex justify-between w-full">Contatti</Title>,
		content: (
			<>
				<TitleDescr title="Per informazioni sulle iniziative di orientamento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								sportello_orientamento@di.unito.it
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Disabilità e disturbi specifici dell'apprendimento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								servizi e i contatti
							</ExternalA>{" "}
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Contatti, informazioni sulle ammissioni e supporto alla formazione dei piani di studio">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								ammissione-lm18@educ.di.unito.it{" "}
							</ExternalA>{" "}
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Servizi per l’Orientamento della Scuola di Scienze della Natura">
					<div>
						<span>scrivi a </span>
						<ExternalA href="">
							orientamento.scienzedellanatura@unito.it
						</ExternalA>{" "}
						<span>
							per informazioni o per prenotare un appuntamento in
							presenza o a distanza.
						</span>
					</div>
				</TitleDescr>
				<TitleDescr title="Attività di Orientamento a distanza">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Sportello virtuale Orientamento
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Facebook Scuola di Scienze della Natura
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Youtube Scuola di Scienze della Natura
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Informazioni di carattere generale">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">Orientamento</ExternalA>{" "}
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
		title: (
			<Title className="flex justify-between w-full">
				Materiale informativo
			</Title>
		),
		content: (
			<>
				<TitleDescr title="Perché studiare e iscriversi alla Laurea Magistrale">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Guarda le Slides in Prezi
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
				<TitleDescr title="Strumenti utili">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								{" "}
								Depliant informativo{" "}
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Requisiti di ammissione alla Laurea Magistrale
								in Informatica
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">
								Scadenze: tasse, date, colloqui, etc
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
		title: (
			<Title className="flex justify-between w-full">
				Indirizzi del corso{" "}
			</Title>
		),
		content: (
			<>
				<TitleDescr title="Modalità di ammissione">
					<ul className="list-disc pl-10">
						<li>
							{" "}
							<ExternalA href="">
								Laurea Magistrale in Informatica: Modalità di
								ammissione
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr
					title={`Indirizzo Intelligenza Artificiale e Sistemi Informatici "Pietro Torasso"`}
				>
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Organizzazione dell'indirizzo
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">Sbocchi lavorativi</ExternalA>
						</li>
						<li>
							<ExternalA href="">Mappa mentale</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Indirizzo Immagini, Visione e Realtà Virtuale">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Organizzazione dell'indirizzo
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">Sbocchi lavorativi</ExternalA>
						</li>
						<li>
							<ExternalA href="">Mappa mentale</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Indirizzo Reti e Sistemi Informatici">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="">
								Organizzazione dell'indirizzo
							</ExternalA>
						</li>
						<li>
							<ExternalA href="">Sbocchi lavorativi</ExternalA>
						</li>
						<li>
							<ExternalA href="">Mappa mentale</ExternalA>
						</li>
					</ul>
				</TitleDescr>
			</>
		),
	},
	{
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
