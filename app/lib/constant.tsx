import type { JSX } from "react";

export type LinkType = {
	to: string;
	title: string;
	description?: string | JSX.Element;
};
export type MenuLink = {
	title: string;
	description?: string | JSX.Element;
	to?: string;
	items: LinkType[];
};

export const menuContent: {
	[k: string]: LinkType | MenuLink;
} = {
	events: {
		title: "Eventi",
		to: "/eventi",
		items: [
			{
				title: "Eventi per Docenti",
				to: "/eventi-perDocenti",
				description:
					"Spazio dedicato agli eventi formativi per docenti",
			},
			{
				title: "Divulgazione Scientifica",
				to: "/eventi-divulgazioneScientifica",
				description:
					"Eventi dedicati a scoprire e comprendere l'informatica",
			},
			{
				title: "Eventi di Formazione",
				to: "/eventi-diFormazione",
				description: "Formazione e competizioni informatiche",
			},
			{
				title: "Catalogo Eventi",
				to: "/eventi-catalogo",
				description:
					"Archivio completo di eventi formativi e divulgativi",
			},
		],
	},
	orientation: {
		title: "Orientamento",
		description: "",
		to: "/orientamento",
		items: [
			{
				title: "Laurea Triennale in Informatica",
				to: "/orientamento-laureaTriennale",
				description: "Track your business metrics",
			},
			{
				title: "Laurea Magistrale in Informatica",
				to: "/orientamento-laureaMagistrale",
				description: "Manage customer relationships",
			},
			{
				title: "Orientamento Scienze della Natura",
				to: "/orientamento-scienzeDellaNatura",
				description: "Automate your campaigns",
			},
			{
				title: "Catalogo Iniziative",
				to: "/orientamento-CatalogoIniziative",
				description: "Sell online with ease",
			},
			{
				title: "Materiale Commissione Orientamento",
				to: "/orientamento-MaterialeCommissione",
				description: "Sell online with ease",
			},
		],
	},
	material: {
		title: "Materiale Didattico",
		description: "",
		items: [
			{
				title: "Iniziative di Orientamento",
				to: "",
				description: "Guides and tutorials",
			},
			{
				title: "Progetti",
				to: "",
				description: "Latest news and insights",
			},
			{
				title: "Prodotti della Ricerca",
				to: "",
				description: "Join our community",
			},
			{
				title: "Attività",
				to: "",
				description: "Get help from our team",
			},
		],
	},
	contacts: { title: "Contatti", to: "/contatti" },
};

export const logos = [
	{
		src: "./logo_unito.svg",
		alt: "logo unito",
		href: "https://www.unito.it/",
	},
	{
		src: "./atlante.png",
		alt: "logo Atlante delle professioni",
		href: "https://atlantedelleprofessioni.it/",
	},
	{
		src: "./idem.png",
		alt: "logo Idem Garrai",
		href: "https://www.unito.it/servizi/servizi-online/unito-idem",
	},
	{
		src: "./easyReading.png",
		alt: "logo Easy Reading",
		href: "https://www.easyreading.eu/",
	},
];

export const news = [
	{
		id: "nw001",
		title: "Nuovo Laboratorio di Ricerca su Intelligenza Artificiale e Sostenibilità",
		date: "2025-11-18",
		category: "Ricerca",
		summary:
			"Inaugurato il centro inter-dipartimentale focalizzato sull'applicazione di modelli IA per l'efficienza energetica e le smart-cities.",
		image_url:
			"https://www.polimi.it/fileadmin/_processed_/b/d/csm_026-Hero_corsi_Laurea_vs3_1920_7b11df0148.jpg",
		tags: ["IA", "Sostenibilità", "Ricerca", "Laboratorio"],
	},
	{
		id: "nw002",
		title: "Call for Papers: International Conference on Quantum Computing (ICQC 2026)",
		date: "2025-11-15",
		category: "Eventi",
		summary:
			"Il Dipartimento ospiterà la prossima edizione di ICQC. Scadenza per la sottomissione degli abstract il 15 gennaio 2026.",
		image_url:
			"https://www.polimi.it/fileadmin/_processed_/e/a/csm_030-Hero_i_corsi_Versione3_1920_46ee7253c6.jpg",
		tags: ["Quantum Computing", "Conferenza", "Call for Papers"],
	},
	{
		id: "nw003",
		title: "Successo per gli Studenti di UniTO alle Olimpiadi Italiane di Programmazione",
		date: "2025-11-10",
		category: "Didattica",
		summary:
			"La squadra 'UniTo_Coders' si classifica tra i primi 5, dimostrando le eccellenti competenze acquisite durante il corso di Algoritmi e Strutture Dati.",
		image_url:
			"https://www.polimi.it/fileadmin/_processed_/8/b/csm_034-Hero-dottorato_vs3_1920_3d106bbaab.jpg",
		tags: ["Studenti", "Programmazione", "Competizioni", "Didattica"],
	},
	{
		id: "nw004",
		title: "Progetto ERASMUS+ in Partnership con l'Università di Helsinki: Bando Aperto",
		date: "2025-11-05",
		category: "Internazionale",
		summary:
			"Opportunità di mobilità per studenti della Laurea Magistrale nel settore della Cybersecurity. Scadenza bando: 30 novembre 2025.",
		image_url:
			"https://www.polimi.it/fileadmin/_processed_/a/f/csm_036-Hero_alta-formaz_1920_62ef168a26.jpg",
		tags: ["Erasmus", "Cybersecurity", "Bando", "Internazionale"],
	},
];
