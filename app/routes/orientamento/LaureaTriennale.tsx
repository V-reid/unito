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
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
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
				{items.map((x, i) => (
					<CardInfo
						i={i}
						title={x.title}
						content={x.content}
						key={x.nav + "triennale"}
					/>
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
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=biblioteca.html">
								Biblioteca di Informatica
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/">
								Laurea Magistrale in Informatica
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Strumenti e servizi utili">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://laurea.informatica.unito.it//do/home.pl/View?doc=info_e_servizi.html">
								Info e servizi
							</ExternalA>{" "}
						</li>
						<li>
							<ExternalA href="https://magistrale.informatica.unito.it/do/home.pl/View?doc=Faq.html">
								FAQ
							</ExternalA>{" "}
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
		nav: "Incontri",
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
				<TitleDescr title="Incontri per matricole">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/do/avvisi.pl/Show?_id=u2ru">
								15 settembre 2025 alle 14:00
							</ExternalA>
						</li>

						<li>
							<ExternalA href="https://laurea.informatica.unito.it/do/home.pl/View?doc=/piani_di_studio/insegnamenti_coorte_2023_2024.html">
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

				<TitleDescr title="Workshop">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/do/avvisi.pl/Show?_id=30wb">
								3°Ed Ottobre:{" "}
								<strong>Python, è tutto un programma!</strong>
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>

				<TitleDescr title="Altre iniziative di orientamento">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/do/avvisi.pl/Show?_id=30wb">
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
					Gli incontri si tengono in presenza e/o a distanza secondo
					il{" "}
					<ExternalA href="https://docs.google.com/document/d/1RekYGd-7NG2rhn2topd1-aPlbjbCJYkoZOmeCGTl-Kw/edit?usp=sharing">
						calendario.
					</ExternalA>{" "}
					Per prenotare scrivi a{" "}
					<ExternalA href="sportello_orientamento@di.unito.it">
						sportello_orientamento@di.unito.it
					</ExternalA>
				</TitleDescr>
				<TitleDescr
					title="Servizi Orientamento e Tutorato della Scuola di Scienze
						della Natura"
				>
					Per un appuntamento in presenza o a distanza scrivi a{" "}
					<ExternalA href="orientamento.scienzedellanatura@unito.it">
						orientamento.scienzedellanatura@unito.it
					</ExternalA>{" "}
					<br />
					Per maggiori informazioni:{" "}
					<ExternalA href="https://www.scienzedellanatura.unito.it/it/orientamento">
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
							<ExternalA href="https://docs.google.com/document/d/1tC5j9fVWOh7MXLpAo42eZPOKpfqume0A/edit">
								Informazioni Matricole
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://drive.google.com/file/d/1xM3CQ-xvkdkqlYlMAEUxIeWKb30zpJbs/view?usp=drive_link">
								Brochure informativa
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/att/Laurea_triennale_FINALE.png">
								Mappa degli insegnamenti del corso di laurea
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://laurea.informatica.unito.it/do/home.pl/View?doc=perche_studiare_con_noi.html">
								Pagina di approfondimento del corso di laurea
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Introduzione al corso di Laurea">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="http://youtube.com/watch?v=TKMI8BxxQWI&feature=youtu.be">
								Benvenuto della Vicedirettrice alla Didattica
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Presentazione del corso di laurea">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://prezi.com/view/maazL9WmbTvZKrlD5t45/">
								{" "}
								Slide delle presentazioni
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://lh4.googleusercontent.com/xEh0ufFW94d0yrxdXUCnDX5d8_jC76ZJwmlakDJSCM9598B2FqicQYGnHcd6Ki2BX3N5WL70En_ZwwHgT7D-W9DmMoYEjx20ru25uJ3lJp2cXUa2T7tOWG4HWgVNl-XrSX3tb71j">
								Informatica - una scienza
							</ExternalA>
						</li>
						<li>
							<ExternalA href="http://youtube.com/watch?v=n2CZVZdawJQ&feature=youtu.be">
								Informatica nel lavoro
							</ExternalA>
						</li>
						<li>
							<ExternalA href="http://youtube.com/watch?v=-bGE_PWmMqY&feature=youtu.be">
								Offerta formativa
							</ExternalA>
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
					Gli incontri si tengono in presenza e/o a distanza secondo
					il{" "}
					<ExternalA href="https://docs.google.com/document/d/1RekYGd-7NG2rhn2topd1-aPlbjbCJYkoZOmeCGTl-Kw/edit?tab=t.0#heading=h.m9zv04t9ja0r">
						calendario.
					</ExternalA>{" "}
					Per prenotare scrivi a{" "}
					<ExternalA href="sportello_orientamento@di.unito.it">
						sportello_orientamento@di.unito.it
					</ExternalA>
				</TitleDescr>
				<TitleDescr
					title="Servizi Orientamento e Tutorato della Scuola di Scienze
						della Natura"
				>
					Per un appuntamento in presenza o a distanza scrivi a{" "}
					<ExternalA href="orientamento.scienzedellanatura@unito.it">
						orientamento.scienzedellanatura@unito.it
					</ExternalA>{" "}
					<br />
					Per maggiori informazioni:{" "}
					<ExternalA href="https://www.scienzedellanatura.unito.it/it/orientamento">
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
				<TitleDescr title="Hai una disabilità e vuoi studiare in UNITO?">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://media.unito.it/?content=7880">
								Scopri cosa possiamo fare, insieme
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Contatti">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="ufficio.dsa@unito.it">
								ufficio.dsa@unito.it
							</ExternalA>
						</li>
						<li>
							<ExternalA href="ufficio.disabili@unito.it">
								ufficio.disabili@unito.it
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://informatica.unito.it/do/home.pl/View?doc=Accoglienza_studenti_con_disabilita_e_DSA.html">
								Delegato di Dipartimento per la disabilità e i
								disturbi specifici dell'apprendimento (DSA)
							</ExternalA>
						</li>
					</ul>
				</TitleDescr>
				<TitleDescr title="Approfondamenti">
					<ul className="list-disc pl-10">
						<li>
							<ExternalA href="https://www.unito.it/servizi/inclusione-ed-esigenze-specifiche/servizi-la-disabilita">
								Servizi per la disabilità
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://www.unito.it/sites/default/files/guida_pratica_studenti_disabilita.pdf">
								Consulta la guida pratica{" "}
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://www.unito.it/servizi/inclusione-ed-esigenze-specifiche/servizi-i-disturbi-specifici-di-apprendimento-dsa">
								Servizi per i disturbi specifici di
								apprendimento (DSA)
							</ExternalA>
						</li>
						<li>
							<ExternalA href="https://www.unito.it/sites/default/files/guida_pratica_studenti_dsa.pdf">
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
