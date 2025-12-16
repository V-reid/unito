import React, { type JSX, type PropsWithChildren } from "react";
import { ExternalA } from "~/components/ExternalA";
import PageIntro from "~/components/PageIntro";
import { Title } from "~/components/Title";
import { cn } from "~/utils";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/card";
import { baseUrl } from "~/lib/constant";

export default function Cyberchallenge() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<Section
				title="CyberChallenge.IT"
				src={baseUrl + "/formazione/cyberchallenge.jpeg"}
			>
				<>
					<div className="pb-3">
						<div>
							<em>Pagina ufficiale</em>:{" "}
							<ExternalA href="https://cyberchallenge.it">
								CyberChallenge.IT
							</ExternalA>
						</div>
					</div>
					<p>
						CyberChallenge.IT è un programma di formazione per
						giovani talenti, nato per avvicinare ragazze e ragazzi
						tra i 16 e i 24 anni ai temi della cybersecurity.
						Partecipando a un'emozionante gara, sia individuale che
						a squadre, ragazze e ragazzi seguiranno un percorso di
						formazione di diverse settimane, completamente gratuito,
						dedicato a tematiche relative ai sistemi operativi,
						crittografia, tecnologie web, simulazioni di
						attacco/difesa e tanto altro. L'obiettivo finale è,
						quindi, quello di incoraggiare le/gli studenti a
						diventare i futuri professionisti della cybersecurity.
						L'Università di Torino partecipa per il secondo anno
						consecutivo a CyberChallenge.IT. Un corso di formazione
						viene organizzato per gli/le studenti che intendono
						partecipare alla gara. Le lezioni si svolgeranno presso
						la sede del Dipartimento di Informatica, in via
						Pessinetto 12, a Torino. Per partecipare bisogna
						superare il test di ammissione. Non sono richieste delle
						conoscenze pregresse in sicurezza informatica; gli unici
						requisiti sono eccellenti capacità di logica, problem
						solving e programmazione, oltre a facilità di
						lettura/ascolto in inglese.
					</p>
					<div className="flex flex-col gap-5 pt-10">
						<CardInfo
							title={<div>Iscrizione</div>}
							content={
								<div className="flex flex-col gap-2 -mt-5">
									<TitleDescr title="Scadenza">
										Hai tempo fino al 23 gennaio per
										iscriverti all'edizione 2025 del
										programma.
									</TitleDescr>
									<TitleDescr title="Segui i passaggi">
										<ul className="list-decimal pl-10 flex flex-col gap-2">
											<li>
												<TitleDescr title="Registrazioni online">
													2 dicembre 2024 - 23 gennaio
													2025
												</TitleDescr>
											</li>
											<li>
												<TitleDescr title="Pretest">
													25 gennaio 2025
												</TitleDescr>
											</li>
											<li>
												<TitleDescr title="Test di ammissione">
													28 gennaio 2025
												</TitleDescr>
											</li>
											<li>
												<TitleDescr title="Lezioni e esercitazioni">
													Febbraio - maggio 2025 |{" "}
													<ExternalA href="https://cyberchallenge.it/venues/unito">
														Sede Torino e Calendario
													</ExternalA>
												</TitleDescr>
											</li>
											<li>
												<TitleDescr title="Competizioni locali">
													28 maggio 2025
												</TitleDescr>
											</li>
											<li>
												<TitleDescr title="Competizione nazionale">
													5 luglio - 8 luglio
												</TitleDescr>
											</li>
										</ul>
									</TitleDescr>
								</div>
							}
						/>
					</div>
					<div className="flex flex-col gap-5 pt-10">
						<CardInfo
							title={<div>Riconoscimento CFU</div>}
							content={
								<div className="flex flex-col gap-15">
									<div>
										<div className="-mt-5">
											<div>
												<em>Requisiti base</em>
											</div>
										</div>
										<ul className="list-disc pl-10">
											<li>
												Frequenza obbligatoria al
												percorso di addestramento.
											</li>
											<li>
												Svolgimento di un numero minimo
												di sfide, con possibilità di
												specializzazione in un’area
												tematica.
											</li>
											<li>
												Partecipazione alla gara locale
												e completamento di un numero
												minimo di challenge.
											</li>
										</ul>
									</div>
									<div className="flex flex-col gap-2">
										<div className="-mt-5">
											<div>
												<em>
													Requisiti per Laurea
													Magistrale in Informatica
												</em>
											</div>
										</div>

										<p>
											Gli studenti devono avere in piano
											“Sicurezza delle Reti e dei Sistemi”
											(INF0352/INF0294) e/o “Sicurezza 2”
											(MFN0952). La partecipazione alla
											CyberChallenge dà l’esonero dalla
											prova scritta del primo insegnamento
											e dalla prova di laboratorio del
											secondo. Per ottenere entrambi gli
											esoneri è richiesto affrontare un
											numero maggiore di challenge.
										</p>
									</div>
									<div className="flex flex-col gap-2">
										<div className="-mt-5">
											<div>
												<em>
													Requisiti per Laurea
													Triennale in Informatica
												</em>
											</div>
										</div>

										<p>
											La partecipazione può essere
											riconosciuta come Stage Interno (9
											CFU). Al termine del percorso è
											necessario scegliere un’area
											tematica della CyberChallenge e
											sviluppare una tesi triennale. Sarà
											fornito un elenco di progetti validi
											come tesi.
										</p>
									</div>
								</div>
							}
						/>
					</div>
				</>
			</Section>
		</div>
	);
}

export function CardInfo({
	title,
	content,
}: {
	title: string | JSX.Element;
	content: string | JSX.Element;
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

export function Section({
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
		<div className="flex flex-col gap-4 pb-0">
			<div>
				<PageIntro title={title}></PageIntro>
				{src ? (
					<img
						src={src}
						alt={"immagine sezione " + title}
						className={cn(
							"rounded-xl w-full mx-auto h-90 object-cover border-2 border-gray-300 mt-5",
							classNameImg ?? ""
						)}
					/>
				) : null}

				<div className="pt-2">{children}</div>
			</div>
		</div>
	);
}

export function TitleDescr({
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
