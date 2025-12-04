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
		to: "/orientamento",
		items: [
			{
				title: "Laurea Triennale in Informatica",
				to: "/orientamento-laureaTriennale",
				description:
					"Sezione dedicata alle future matricole della triennale",
			},
			{
				title: "Laurea Magistrale in Informatica",
				to: "/orientamento-laureaMagistrale",
				description:
					"Sezione dedicata alle future matricole della magistrale",
			},
			{
				title: "Scuola di Scienze della Natura",
				to: "/orientamento-scienzeDellaNatura",
				description:
					"Sezione dedicata ai futuri studenti della Scuola di Scienze della Natura",
			},
			{
				title: "Catalogo Iniziative",
				to: "/orientamento-catalogoIniziative",
				description: "Presentazione delle iniziative di orientamento",
			},
			{
				title: "Materiale Commissione Orientamento",
				to: "/orientamento-materialeCommissione",
				description:
					"Documenti, linee guida e strumenti per facilitare l'orientamento",
			},
		],
	},
	material: {
		title: "Materiale Didattico",
		to: "/didattica",
		items: [
			{
				title: "Per le Scuole",
				to: "/didattica-perLeScuole",
				description: "Iniziative per le scuole primarie e secondarie",
			},
			{
				title: "Progetti",
				to: "/didattica-progetti",
				description: "Progetti del gruppo di ricerca",
			},
			{
				title: "Attività",
				to: "/didattica-attivita",
				description: "Proposte educative create dal gruppo di ricerca",
			},
			{
				title: "Prodotti della Ricerca",
				to: "/didattica-ricerca",
				description: "Pubblicazioni dei ricercatori",
			},
		],
	},
	contacts: { title: "Contatti", to: "/contatti" },
};

export const logos = [
	{
		title: "Università di Torino",
		src: "./logo_unito.svg",
		alt: "logo unito",
		href: "https://www.unito.it/",
		classNames: "",
	},
	{
		title: "Atlante delle Professioni",
		src: "./atlante.png",
		alt: "logo Atlante delle professioni",
		href: "https://atlantedelleprofessioni.it/",
		classNames: "",
	},
	{
		title: "Idem Garrai",
		src: "./idem.png",
		alt: "logo Idem Garrai",
		href: "https://www.unito.it/servizi/servizi-online/unito-idem",
		classNames: "",
	},
	{
		title: "Easy Reading",
		src: "./easyReading.png",
		alt: "logo Easy Reading",
		href: "https://www.easyreading.eu/",
		classNames: "",
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
		image_url: "/news/lab_ricerca.jpeg",
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
		image_url: "/news/quant.jpeg",
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
		image_url: "/news/olimpiadi.jpeg",
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
		image_url: "/news/erasmus.jpeg",
		tags: ["Erasmus", "Cybersecurity", "Bando", "Internazionale"],
		full_article_content:
			"È aperto il bando per 5 borse di mobilità ERASMUS+ che permetteranno agli studenti della Laurea Magistrale in Informatica di trascorrere un semestre presso l'Università di Helsinki, specializzandosi in tematiche avanzate di Cybersecurity e Sicurezza dei Dati. La partnership mira a rafforzare la collaborazione internazionale e offrire ai nostri studenti un'esperienza formativa unica in un contesto accademico di alto livello. I requisiti e le modalità di candidatura sono disponibili sul portale studenti.",
	},
];

export type ProfType = {
	id: string;
	name: string;
	title: string;
	img?: string;
	mail?: string;
	tel?: string;
};

export const professors: ProfType[] = [
	{
		id: "p001",
		name: "Sara Capecchi",
		title: "Dott.ssa",
		img: "/professor/capecchi.jpeg",
		mail: "sara.capecchi@unito.it ",
		tel: "0116706747",
	},
	{
		id: "p002",
		name: "Cristina Gena",
		title: "Prof.ssa",
		img: "/professor/gena.jpeg",
		mail: "cgena@di.unito.it",
		tel: "0116706827",
	},
	{
		id: "p003",
		name: "Elisabetta Barberis",
		title: "Prof.ssa, Prorettore",
		img: "/professor/barberis.jpeg",
		mail: "elisabetta.barberis@unito.it",
		tel: "0116702201",
	},
	{
		id: "p004",
		name: "Liliana Ardissono",
		title: "Prof.ssa",
		img: "/professor/ardissono.jpeg",
		mail: "liliana.ardissono@unito.it",
		tel: "0116706716",
	},
	{
		id: "p005",
		name: "Barbara Demo",
		title: "Prof.ssa",
		img: "/professor/demo.jpeg",
		mail: "barbara@di.unito.it",
		tel: "0116706754",
	},
	{
		id: "p006",
		name: "Cristina Bosco",
		title: "Dott.ssa",
		img: "/professor/bosco.jpeg",
		mail: "cristina.bosco@unito.it",
		tel: "0116706845",
	},
	{
		id: "p007",
		name: "Matteo Baldoni",
		title: "Prof",
		img: "/professor/baldoni.jpeg",
		mail: "matteo.baldoni@unito.it",
		tel: "0116706756",
	},
	{
		id: "p008",
		name: "Ruggero Pensa",
		title: "Prof",
		img: "/professor/pensa.jpeg",
		mail: "ruggero.pensa@unito.it",
		tel: "0116706798",
	},
];
