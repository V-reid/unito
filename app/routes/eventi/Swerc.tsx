import React from "react";
import { CardInfo, Section } from "./Cyberchallenge";
import { ExternalA } from "~/components/ExternalA";
import { baseUrl } from "~/lib/constant";

export default function Swerc() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<Section
				title="SWERC"
				src={baseUrl + "/formazione/swerc.jpeg"}
				classNameImg="object-top"
			>
				<>
					<div className="pb-3">
						<div>
							<em>Pagina ufficiale</em>:{" "}
							<ExternalA href="https://swerc.eu/2023/">
								SWERC
							</ExternalA>
						</div>
					</div>
					<p>
						SWERC (Southwestern Europe Regional Contest) è un
						concorso di programmazione informatica della durata di
						cinque ore, rivolto a gruppi di tre studenti, incentrato
						sulla risoluzione di problemi algoritmici e sulla
						codifica pratica. È aperto a squadre provenienti da
						Francia, Israele, Italia, Malta, Portogallo, Spagna,
						Svizzera, nonché da Andorra, Liechtenstein, San Marino e
						Città del Vaticano. Funge da fase di selezione regionale
						per l'International Collegiate Programming Contest (
						<ExternalA href="https://icpc.global/">ICPC</ExternalA>
						): le squadre vincitrici di SWERC si qualificano alle
						finali mondiali ICPC per competere con squadre
						provenienti da tutto il mondo. Con più di 50 anni di
						storia, ICPC è la più importante competizione globale
						dedicata alla programmazione, condotta da e per
						università distribuite in tutto il mondo. Essa promuove
						l'utilizzo di creatività, lavoro in team, e innovazione
						nello sviluppo e nella programmazione di nuovi software,
						e consente agli/alle studenti di mettere alla prova le
						loro capacità anche in situazioni che superano la
						propria zona di comfort. Nel corso delle scorse
						edizioni, la gara, sin dalle sue fasi regionali, ha
						visto la partecipazione di più di 50.000 dei/delle
						migliori studenti in discipline informatiche,
						provenienti da più di 3.000 università nel mondo. Dal
						2021 l'Università di Torino prende parte annualmente a
						SWERC, con impegno e successo. Un corso di preparazione
						e selezione della squadra viene organizzato presso il
						Dipartimento di Informatica, e ad esso possono
						partecipare tutti gli/le studenti interessati/e, anche
						di altri Dipartimenti UNITO. Il corso è al via anche per
						l'edizione di quest'anno.
					</p>
					<div className="flex flex-col gap-5 pt-10">
						<CardInfo
							title={<div>Iscrizione</div>}
							content={
								<div className=" gap-2 -mt-5">
									<span>Accedi al</span>{" "}
									<ExternalA href="https://informatica.i-learn.unito.it/enrol/index.php?id=2764">
										Moodle
									</ExternalA>{" "}
									dedicat, qui puoi trovare tutti i dettagli
									di partecipazione. oppure contatta i
									referenti del corso: Dott.{" "}
									<ExternalA href="https://informatica.unito.it/do/docenti.pl/Show?_id=gaudrito#tab-profilo">
										Giorgio Audrito
									</ExternalA>
									, Dott.{" "}
									<ExternalA href="https://informatica.unito.it/do/docenti.pl/Show?_id=eamparor#tab-profilo">
										Elvio Gilberto Amparore
									</ExternalA>
								</div>
							}
						/>
					</div>
					<div className="flex flex-col gap-5 pt-10 ">
						<CardInfo
							title={<div>Riconoscimento CFU</div>}
							content={
								<div className="-mt-5">
									La procedura di riconoscimento CFU è
									riferita agli/alle studenti iscritti/e ai
									corsi di studio del Dipartimento di
									Informatica. Per i corsi di Laurea in
									Informatica: l'insegnamento non è ancora
									attivo, ma potrà essere inserito nel piano
									di studi a partire dall'A.A. 2024/2025, per
									un ammontare di 3 CFU nella sezione di
									crediti liberi (sia per la laurea triennale
									che per la laurea magistrale).
								</div>
							}
						/>
					</div>
				</>
			</Section>
		</div>
	);
}
