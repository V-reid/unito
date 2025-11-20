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

export const professors = [
	{
		id: "p001",
		name: "gino Pagliaccio",
		title: "Math professor",
		img: "/people1.png",
		mail: "amon.rapp@unito.it",
		tel: "011.6706827",
	},
	{
		id: "p002",
		name: "Mario Rossi",
		title: "Meth professor",
		img: "/people2.avif",
		mail: "amon.rapp@unito.it",
		tel: "011.6706827",
	},
	{
		id: "p003",
		name: "Alberta Casalinghi",
		title: "Computer science professor",
		img: "/people3.avif",
		mail: "amon.rapp@unito.it",
		tel: "011.6706827",
	},
	{
		id: "p004",
		name: "Francesca Del cedro",
		title: "English professor",
		img: "/people4.avif",
		mail: "amon.rapp@unito.it",
		tel: "011.6706827",
	},
];

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
				title: "Per le scuole",
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
		full_article_content:
			"Il Dipartimento di Informatica ha ufficialmente aperto le porte al nuovo Laboratorio di Ricerca Integrata, un'iniziativa congiunta con il Dipartimento di Ingegneria. Il laboratorio si dedicherà allo studio e allo sviluppo di algoritmi di Machine Learning e Deep Learning applicati direttamente a sfide ambientali e sociali, come l'ottimizzazione dei consumi energetici negli edifici pubblici e la modellazione predittiva per la gestione dei rifiuti urbani. L'obiettivo è posizionare UniTO come polo di eccellenza nella 'Green Computing'. Sono previste collaborazioni con aziende leader del settore e opportunità di tesi per gli studenti magistrali.",
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
		full_article_content:
			"L'International Conference on Quantum Computing (ICQC) farà tappa a Torino nel giugno 2026. La comunità scientifica è invitata a sottomettere i propri lavori di ricerca che coprono aree che vanno dai Qubit e le architetture quantistiche, alla crittografia post-quantistica e agli algoritmi quantistici. La sottomissione degli abstract è aperta fino al 15 gennaio 2026. L'evento rappresenta una vetrina fondamentale per il Dipartimento, confermando la sua crescente rilevanza nel panorama internazionale della ricerca avanzata.",
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
		full_article_content:
			"Grande soddisfazione per il Dipartimento di Informatica dopo gli eccellenti risultati ottenuti dai suoi studenti alle recenti Olimpiadi Nazionali di Programmazione. La squadra 'UniTo_Coders', composta da tre brillanti iscritti al terzo anno, ha dimostrato notevoli capacità di problem solving e velocità di esecuzione. Il Prof. Rossi, tutor della squadra, ha sottolineato come questo successo sia il frutto di un'impegnativa preparazione e dell'alta qualità dei programmi didattici offerti dal Dipartimento.",
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
		full_article_content:
			"È aperto il bando per 5 borse di mobilità ERASMUS+ che permetteranno agli studenti della Laurea Magistrale in Informatica di trascorrere un semestre presso l'Università di Helsinki, specializzandosi in tematiche avanzate di Cybersecurity e Sicurezza dei Dati. La partnership mira a rafforzare la collaborazione internazionale e offrire ai nostri studenti un'esperienza formativa unica in un contesto accademico di alto livello. I requisiti e le modalità di candidatura sono disponibili sul portale studenti.",
	},
];
