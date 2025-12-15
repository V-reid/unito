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
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
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
				{items.map((x, i) => (
					<CardInfo
						i={i}
						title={x.title}
						content={x.content}
						key={i + "laurea magistrale"}
					/>
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
					Accesso libero con valutazione del possesso requisiti
					curriculari minimi e di adeguata preparazione
					personale.{" "}
				</TitleDescr>
				<TitleDescr title="Scuola di riferimento">
					Scuola di Scienze della Natura.
				</TitleDescr>
				<TitleDescr title="Altre strutture di riferimento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=biblioteca.html">
								Biblioteca di Informatica
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/">
								Laurea in Informatica
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Strumenti e servizi utili">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://laurea.informatica.unito.it//do/home.pl/View?doc=info_e_servizi.html">
								Info e servizi
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=Faq.html">
								FAQ
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/do/home.pl/View?doc=apertura_login.html">
								Apertura account @educ.di.unito.it
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Organizzazione">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=Presidente.html">
								Presidente
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=Rappresentanti_degli_Studenti.html">
								{" "}
								Rappresentanza Studentesca
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=management_didattico.html">
								Management didattico
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=segreteria_studenti.html">
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
					<ExternalA href="https://www.google.it/maps/place/Corso+Svizzera,+185,+10149+Torino+TO/@45.0916674,7.6596037,17z/data=!3m1!4b1!4m6!3m5!1s0x47886db2fe53c3bf:0xef4969ed9ca05d2d!8m2!3d45.0916636!4d7.6621786!16s%2Fg%2F11k1c_lh4_?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D">
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
							<ExternalA href="https://magistrale.informatica.unito.it/do/avvisi.pl/Show?_id=xy5o">
								8 aprile 2025
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Presentazione delle Lauree Magistrali in cui il Dipartimento di Informatica partecipa">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/avvisi.pl/Show?_id=ca3c">
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
							<ExternalA href="orientamento@di.unito.it">
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
							<ExternalA href="sportello_orientamento@di.unito.it">
								sportello_orientamento@di.unito.it
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Disabilità e disturbi specifici dell'apprendimento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=studenti_dsa.html">
								servizi e i contatti
							</ExternalA>{" "}
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Contatti, informazioni sulle ammissioni e supporto alla formazione dei piani di studio">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="ammissione-lm18@educ.di.unito.it">
								ammissione-lm18@educ.di.unito.it{" "}
							</ExternalA>{" "}
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Servizi per l’Orientamento della Scuola di Scienze della Natura">
					<div>
						<span>Scrivi a </span>
						<ExternalA href="orientamento.scienzedellanatura@unito.it">
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
							<ExternalA href="https://www.scienzedellanatura.unito.it/it/orientamento">
								Sportello virtuale Orientamento
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://www.facebook.com/pages/Scienze-Informa/188130977904650">
								Facebook Scuola di Scienze della Natura
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://www.youtube.com/channel/UCY1pK9OiBNtzoZX7uEUJDIw?view_as=subscriber">
								Youtube Scuola di Scienze della Natura
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Informazioni di carattere generale">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://www.unito.it/didattica/orientamento">
								Orientamento
							</ExternalA>{" "}
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
							<ExternalA href="http://prezi.com/w6ikdmdl3t9y/?utm_campaign=share&utm_medium=copy&rc=ex0share">
								Guarda le Slides in Prezi
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Introduzione al corso di Laurea">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://youtu.be/TKMI8BxxQWI">
								Benvenuto della Vicedirettrice alla Didattica
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Strumenti utili">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://drive.google.com/file/d/1xM3CQ-xvkdkqlYlMAEUxIeWKb30zpJbs/view?usp=drive_link">
								{" "}
								Depliant informativo{" "}
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=Requisiti_di_ammissione.html">
								Requisiti di ammissione alla Laurea Magistrale
								in Informatica
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://docs.google.com/document/d/12wFKLg22NPi6J4u1lw4_zPfIyrPs9_pPESE8BSY7J0I/edit?usp=sharing">
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
							<ExternalA href="https://youtu.be/gZZvUAKnbOY">
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
							<ExternalA href="https://youtu.be/hQUJzLD9mxg">
								Organizzazione dell'indirizzo
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://youtu.be/izUlw_CVU08">
								Sbocchi lavorativi
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://drive.google.com/file/d/1jI4Ae9mxz482TRYZfyfHzv6PpVr54CQ3/view?usp=sharing">
								Mappa mentale
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Indirizzo Immagini, Visione e Realtà Virtuale">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://youtu.be/H8IwsS3WTRE">
								Organizzazione dell'indirizzo
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://youtu.be/n3S-t3fWjUk">
								Sbocchi lavorativi
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://drive.google.com/file/d/1O0uF3OFsxZE6sht9H-osy8SbtHtiFkrR/view?usp=drive_link">
								Mappa mentale
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Indirizzo Reti e Sistemi Informatici">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://youtu.be/fnJRMgWz5gQ">
								Organizzazione dell'indirizzo
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://youtu.be/p8Hs67RrSYY">
								Sbocchi lavorativi
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/images/mappa_indirizzi/Indirizzo_Reti_e_Sistemi_Informatici-con-loghi.png">
								Mappa mentale
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
				Strumenti per l'orientamento
			</Title>
		),
		content: (
			<>
				<div>
					L'Università di Torino mette a disposizione quiz e verifiche
					con valutazione automatica per prepararti ai test:{" "}
					<ExternalA href="https://www.unito.it/didattica/orientamento/strumenti-e-servizi-di-orientamento">
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
	i,
}: {
	i: number;
	title: JSX.Element;
	content: JSX.Element;
}) {
	return (
		<Card className="w-full  border-slate-400" id={"section_" + i}>
			<a href={"#section_" + (i + 1)} className="sr-only">
				Salta alla prossima sezione
			</a>
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
