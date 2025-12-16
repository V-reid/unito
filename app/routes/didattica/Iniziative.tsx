import React, { type JSX, type PropsWithChildren } from "react";
import ComingSoon from "~/components/ComingSoon";
import { Dot, ExternalLink } from "lucide-react";
import { cn } from "~/utils";
import { ExternalA } from "~/components/ExternalA";
import { Title } from "~/components/Title";
import PageIntro from "~/components/PageIntro";
import { baseUrl } from "~/lib/constant";

export default function Iniziative() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<PageIntro title="Iniziative">
				Il Dipartimento di Informatica svolge un'intensa attività di
				rapporti con le Scuole (sia primarie che secondarie),
				principalmente attraverso la sua Commissione Orientamento e
				Informatica nelle Scuole che si occupa:
				<ul className="list-disc pl-10 ">
					<li>
						di mettere in relazione, sulle tematiche
						dell’insegnamento dell’informatica, il Dipartimento e le
						scuole dell’obbligo del territorio
					</li>
					<li>
						di coordinare le attività legate al passaggio delle
						studentesse e degli studenti dalla scuola superiore
						verso la scelta dei Corsi di Laurea o Master
						Universitari in cui l'Informatica ha un ruolo primario
					</li>
				</ul>
			</PageIntro>

			<Section
				title="Bambini e bambine all’Università"
				src={baseUrl + "/perScuole/bambini.jpeg"}
			>
				<>
					<div className="pb-3">
						<div>
							<em>Rivolto a</em>: scuole primarie.
						</div>
						<div>
							<em>Periodo</em>: ogni anno nei mesi tra marzo e
							maggio.
						</div>
					</div>
					<p>
						Progetto promosso dalla Città di Torino con l'Università
						di Torino (ed altre istituzioni), in collaborazione con
						Agorà Scienza, per avvicinare le/i piccole/i allieve/i
						delle scuole primarie al mondo della ricerca scientifica
						e tecnologica e per costruire un immaginario di
						accessibilità all'alta formazione in condizioni di pari
						opportunità. <br />
						Il Dipartimento di Informatica ha ospitato gruppi di
						bambini delle scuole elementari e ha offerto attività da{" "}
						<ExternalA href="http://programmailfuturo.it">
							Programma il Futuro
						</ExternalA>
						.
					</p>
				</>
			</Section>

			<Section
				title="Progetto Lauree Scientifiche. Laboratori e attività"
				src={baseUrl + "/perScuole/lauree.jpeg"}
				classNameImg="object-top"
			>
				<>
					<div className="pb-2 object">
						<div>
							<em>Rivolto a</em>: scuole superiori.
						</div>
					</div>
					<p>
						Il progetto si propone di diffondere e incoraggiare la
						conoscenza delle discipline legate al mondo
						dell'informatica per le studentesse e gli studenti in
						vista di un percorso di orientamento universitario
						attraverso laboratori e seminari di divulgazione
						dell’informatica.
					</p>
					<ul className="list-disc pl-10 py-2">
						<li>
							<ExternalA
								href="https://laurea.informatica.unito.it/do/home.pl/View?doc=Orientamento.html"
								className="inline-block"
							>
								Laboratori per le studentesse e gli studenti del
								triennio delle scuole superiori
							</ExternalA>
						</li>
						<li>
							<ExternalA
								href="https://www.facebook.com/150032391693082/videos/180929123979469"
								className="inline-block"
							>
								Parlano le nostre studentesse e i nostri
								studenti Corso di Laurea in Informatica
							</ExternalA>{" "}
							<span>
								(video realizzato con i fondi del Progetto
								Lauree Scientifiche 2019/20).
							</span>
						</li>
					</ul>
				</>
			</Section>

			<Section
				title="Alternanza Scuola-Lavoro"
				src={baseUrl + "/perScuole/alternanza.jpeg"}
			>
				<>
					<div className="pb-2">
						<div>
							<em>Rivolto a</em>: scuole superiori.
						</div>
					</div>
					<p>In questi progetti le studentesse e gli studenti:</p>

					<ul className="list-disc pl-10 py-2">
						<li>
							hanno partecipato a laboratori per imparare a creare
							il proprio sito web
						</li>
						<li>
							sono state/i integrate/i in progetti di ricerca del
							Dipartimento (come{" "}
							<ExternalA
								href={"https://ontomap.eu/"}
								className="inline-block"
							>
								OntoMap
							</ExternalA>{" "}
							un progetto sui social media e l'analisi dei
							sentimenti nel testo)
						</li>
					</ul>
				</>
			</Section>
			<Section title="Convenzioni con Istituzioni e Associazioni">
				<>
					<ul className="list-disc pl-10 ">
						<li>
							<strong>Città di Torino</strong> per il progetto
							Scuola 2.0 per l'informatizzazione strutturata della
							rete scolastica primaria e secondaria di primo grado
							e per l'avvio di metodologie didattiche Innovative.
						</li>
						<li>
							<strong>
								Ufficio Scolastico Regionale per il Piemonte
							</strong>{" "}
							(USR Piemonte) per l'aggiornamento delle competenze
							informatiche degli insegnanti della Scuola Pubblica
						</li>
						<li>
							<strong>
								Associazione Magistrale Nicolò Tommaseo
							</strong>
						</li>
					</ul>
				</>
			</Section>
		</div>
	);
}

function Section({
	title,
	src,
	classNameImg,
	children,
}: {
	title: string | JSX.Element;
	src?: string;
	classNameImg?: string;
} & PropsWithChildren) {
	return (
		<div className="flex flex-col gap-4 py-10">
			<div>
				<Title>{title}</Title>

				<div className="pt-2">{children}</div>
			</div>
			{src ? (
				<img
					src={src}
					alt={"immagine sezione " + title}
					className={cn(
						"rounded-xl w-full mx-auto h-80 object-cover border-2 border-gray-300",
						classNameImg ?? ""
					)}
				/>
			) : null}
		</div>
	);
}
