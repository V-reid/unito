import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./layouts/MainLayout.tsx", [
		index("routes/home.tsx"),
		//Eventi
		route("eventi-perDocenti", "./routes/eventi/PerDocenti.tsx"),
		route(
			"eventi-divulgazioneScientifica",
			"./routes/eventi/DivulgazioneScientifica.tsx"
		),
		route("eventi-diFormazione", "./routes/eventi/DiFormazione.tsx"),
		route("eventi-catalogo", "./routes/eventi/Catalogo.tsx"),
		//orientamento
		route(
			"orientamento-laureaTriennale",
			"./routes/orientamento/LaureaTriennale.tsx"
		),
		route(
			"orientamento-laureaMagistrale",
			"./routes/orientamento/LaureaMagistrale.tsx"
		),
		route(
			"orientamento-scienzeDellaNatura",
			"./routes/orientamento/ScienzeDellaNatura.tsx"
		),
		route(
			"orientamento-CatalogoIniziative",
			"./routes/orientamento/CatalogoIniziative.tsx"
		),
		//contatti
		route("contatti", "./routes/Contacts.tsx"),
		...prefix("notizie", [route(":id", "./routes/news.tsx")]),
		...prefix("professore", [route(":id", "./routes/professor.tsx")]),
	]),
] satisfies RouteConfig;
