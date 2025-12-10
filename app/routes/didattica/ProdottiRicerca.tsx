import ComingSoon from "~/components/ComingSoon";
("use client");

import * as React from "react";
import {
	type ColumnDef,
	type ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
	type VisibilityState,
	// VisibilityState,
} from "@tanstack/react-table";
import {
	ArrowDown,
	ArrowUp,
	ArrowUpDown,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	MoreHorizontal,
	Search,
} from "lucide-react";

import { Button } from "~/ui//button";

import { Input } from "~/ui//input";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "~/ui//table";
import { Checkbox } from "~/ui/checkbox";
import { useState } from "react";
import Tag from "~/components/Tag";
import { cn } from "~/utils";
import PageIntro from "~/components/PageIntro";

type TagType =
	| "Robotica Educativa"
	| "Didattica dell'Informatica"
	| "Didattica dell'IA"
	| "Altri Progetti"
	| "Consapevolezza digitale";

export type Progetto = {
	id: string;
	collaboratori: string[];
	title: string;
	href?: string;
	tag: TagType;
	year: number;
};

// const caseInsensitiveFilter = (row, columnId, filterValue) => {
// 	const rowValue = row.getValue(columnId)?.toString().toLowerCase() ?? "";
// 	const filter = filterValue.toString().toLowerCase();

// 	return rowValue.includes(filter);
// };

const multiColumnFilterClean = (row, columnId, filterValue) => {
	const searchableColumnIds = ["title", "collaboratori", "year"];
	const filter = filterValue.toString().toLowerCase();
	const titleFilter = row
		.getValue("title")
		?.toString()
		.toLowerCase()
		.includes(filter);
	const collFilter = row
		.getValue("collaboratori")
		.join(", ")
		?.toString()
		.toLowerCase()
		.includes(filter);
	const yearFilter = row
		.getValue("year")
		?.toString()
		.toLowerCase()
		.includes(filter);

	return titleFilter || collFilter || yearFilter;
};

const data: Progetto[] = [
	{
		id: "di0",
		title: "Teachers for teachers",
		collaboratori: [
			"G Barbara Demo",
			"Lawrence Williams",
			"Alessandro Rabbone",
			"Alberto Barbero",
			"Sara Capecchi",
			"Ruggero Pensa",
			"Flaviano MOnge",
			"Maria Grazia Maffucci",
			"Carlos Bayon Rodriguez",
			"Cristina Bosco",
			"Liliana Ardissono",
		],
		href: "https://iris.unito.it/handle/2318/148587",
		tag: "Didattica dell'Informatica",
		year: 2014,
	},
	{
		id: "dia0",
		title: "Empowering AI competences in children: A training program based on simple playful activities",
		collaboratori: [
			"Matteo Baldoni",
			"Cristina Baroglio",
			"Monica Bucciarelli",
			"Sara Capecchi",
			"Elena Gandolfi",
			"Cristina Gena",
			"Francesco Ianì",
			"Elisa Marengo",
			"Roberto Micalizio",
			"Amon Rapp",
		],
		href: "https://www.psychobit.org/",
		tag: "Didattica dell'IA",
		year: 2021,
	},
	{
		id: "dia1",
		title: "L'intelligenza artificiale imparata in modo naturale",
		collaboratori: [
			"Matteo Baldoni",
			"Cristina Baroglio",
			"Monica Bucciarelli",
			"Sara Capecchi",
			"Elena Gandolfi",
			"Cristina Gena",
			"Francesco Ianì",
			"Elisa Marengo",
			"Roberto Micalizio",
			"Amon Rapp",
		],
		href: "https://www.aicanet.it/documents/10776/3961221/Atti+Didamatica+2021/6aa944d5-62a4-4b91-8fb9-92357ba068e9",
		tag: "Didattica dell'IA",
		year: 2021,
	},
	{
		id: "dia2",
		title: "L'intelligenza artificiale? E' un gioco!",
		collaboratori: ["C Baroglio", " S Capecchi", " C Parola"],
		href: "https://www.aicanet.it/documents/10776/3961221/Atti+Didamatica+2021/6aa944d5-62a4-4b91-8fb9-92357ba068e9",
		tag: "Didattica dell'IA",
		year: 2021,
	},
	{
		id: "ape0",
		title: "4seasons4savings and il Giro D’Europa: Educating on Awareness on financial choices",
		collaboratori: [
			"Liliana Ardissono",
			"Marco Bettini",
			"Gianluca Carlino",
			"Sara Capecchi",
			"Alessandro Chinaglia",
			"Valentina Di Noi",
			"Maria Di Vita",
			"Andrea Foieri",
			"Roberto Traini",
		],
		href: "http://icities2020.unisa.it/index.htmlope",
		tag: "Altri Progetti",
		year: 2020,
	},
	{
		id: "rb0",
		tag: "Robotica Educativa",
		title: "Sugar, Salt & Pepper-Humanoid robotics for autism.",
		collaboratori: [
			"Gena C",
			"Mattutino C",
			"Brighenti S",
			"Meirone A",
			"Petriglia F",
			"Mazzotta L",
			"Liscio F",
			"Nazzario M",
			"Ricci V",
			"Quarato C",
			"Pecone C",
			"Piccinni G",
		],
		year: 2021,
		href: "https://iris.unito.it/handle/2318/1796164",
	},

	{
		id: "rb1",
		tag: "Robotica Educativa",
		title: "Autistic Children's Mental Model of an Humanoid Robot.",
		collaboratori: [
			"Gena C",
			"Mattutino C",
			"Maieli A",
			"Miraglio E",
			"RicciardielloG",
			"Damiano R",
			"Mazzei A",
		],
		year: 2021,
		href: "https://iris.unito.it/handle/2318/1796169",
	},

	{
		id: "rb2",
		tag: "Robotica Educativa",
		title: "Educational robotics for children and their teachers.",
		collaboratori: [
			"Cristina Gena",
			"Claudio Mattutino",
			"Davide Cellie",
			"Enrico Mosca",
		],
		year: 2020,
		href: "https://iris.unito.it/handle/2318/1796021",
	},

	{
		id: "rb3",
		tag: "Robotica Educativa",
		title: "Cloud-based user modeling for social robots: a first attempt.",
		collaboratori: [
			"Cristina Gena",
			"Claudio Mattutino",
			"Marco Botta",
			"Daniele Camilleri",
			"Francesco Di Sario",
			"Giuseppe Ignone",
			"Federica Cena",
		],
		year: 2020,
		href: "https://iris.unito.it/handle/2318/1760970",
	},

	{
		id: "rb4",
		tag: "Robotica Educativa",
		title: "Social Assistive Robotics for Autistic Children.",
		collaboratori: [
			"Cristina Gena",
			"Claudio Mattutino",
			"Stefania Brighenti",
			"Matteo Nazzario",
			"Federico Buratto",
			"Fernando Vito Falcone",
		],
		year: 2020,
		href: "https://iris.unito.it/handle/2318/1761082",
	},

	{
		id: "rb5",
		tag: "Robotica Educativa",
		title: "Design and Development of a Social, Educational and Affective Robot.",
		collaboratori: [
			"C Gena",
			"C Mattutino",
			"G Perosino",
			"M Trainito",
			"C Vaudano",
			"Davide Cellie",
		],
		year: 2020,
		href: "https://iris.unito.it/handle/2318/1742267",
	},

	{
		id: "rb6",
		tag: "Robotica Educativa",
		title: "Workshop on adapted interaction with social robots (cAESAR).",
		collaboratori: [
			"De Carolis B",
			"Gena C",
			"Lieto A",
			"Rossi S",
			"Sciutti A",
		],
		year: 2020,
		href: "https://iris.unito.it/handle/2318/1796163",
	},

	{
		id: "rb7",
		tag: "Robotica Educativa",
		title: "End-User Development for the Wolly Robot.",
		collaboratori: [
			"Bova G",
			"Cellie D",
			"Gioia C",
			"Vernero F",
			"Mattutino C",
			"Gena C",
		],
		year: 2019,
		href: "https://iris.unito.it/handle/2318/1729050",
	},

	{
		id: "rb8",
		tag: "Robotica Educativa",
		title: "Testing web-based solutions for improving reading tasks in dyslexic and neuro-typical users.",
		collaboratori: [
			"Damiano Rossana",
			"Gena Cristina*",
			"Venturini Giulia",
		],
		year: 2019,
		href: "https://iris.unito.it/handle/2318/1694929",
	},

	{
		id: "rb9",
		tag: "Robotica Educativa",
		title: "Co-designing with kids an educational robot.",
		collaboratori: [
			"Cietto Valerio",
			"Gena Cristina",
			"Lombardi Ilaria",
			"Mattutino Claudio",
			"Vaudano Chiara",
		],
		year: 2018,
		href: "https://iris.unito.it/handle/2318/1693472",
	},

	{
		id: "rb10",
		tag: "Robotica Educativa",
		title: "Kids computer interaction with a focus on story telling and educational robotics.",
		collaboratori: ["Gena C"],
		year: 2018,
		href: "https://iris.unito.it/handle/2318/1729053",
	},

	{
		id: "rb11",
		tag: "Robotica Educativa",
		title: "Testing web-based solutions for improving reading tasks in students with dyslexia.",
		collaboratori: ["Giulia Venturini", "Cristina Gena"],
		year: 2017,
		href: "https://iris.unito.it/handle/2318/1661744",
	},

	{
		id: "cd0",
		tag: "Consapevolezza digitale",
		title: "SOCIAL4SCHOOL: EDUCATING ON AWARENESS IN ONLINE SOCIAL NETWORKS",
		collaboratori: [
			"Livio Bioglio",
			"Sara Capecchi",
			"Valentina Di Noi",
			"Gian Manuel Marino",
			"Ruggero G. Pensa",
			"Simona Tirocchi",
			"Giulia Venturini",
		],
		year: 2020,
		href: "https://www.ateespring2020.education/florence/",
	},

	{
		id: "cd1",
		tag: "Consapevolezza digitale",
		title: "Social4School a gamification approach for digital citizenship",
		collaboratori: [
			"Bioglio L.; Capecchi S.; De Lorenzo A.; Di Noi V.; Marchisio M.; Marino G. M.; Pensa R.G.; Rabaglietti E.; Settanni M.; Tirocchi S.; Venturini G.",
		],
		year: 2020,
	},

	{
		id: "cd2",
		tag: "Consapevolezza digitale",
		title: "Social4School: Educating on Awareness in Online Social Networks",
		collaboratori: [
			"Bioglio",
			"Sara Capecchi",
			"Valentina Di Noi",
			"Gian Manuel Marino",
			"Ruggero G. Pensa",
			"Giulia Venturini",
		],
		year: 2019,
		href: "https://www.eventi.garr.it/it/conf19",
	},

	{
		id: "cd3",
		tag: "Consapevolezza digitale",
		title: "Social4School: Educating on Awareness in Online Social Networks",
		collaboratori: [
			"Simona Tirocchi",
			"Livio Bioglio",
			"Sara Capecchi",
			"Valentina Di Noi",
			"Gian Manuel Marino",
			"Ruggero G. Pensa",
			"Giulia Venturini",
		],
		year: 2019,
		href: "http://www.scuolademocratica-conference.net/",
	},

	{
		id: "cd4",
		tag: "Consapevolezza digitale",
		title: '\"Certo che sono connesso!!": nativi digitali e comportamenti a rischio nell’uso dei social media',
		collaboratori: [
			"Davide Marengo",
			"Sara Capecchi",
			"Ruggero G. Pensa",
			"Emanuela Rabaglietti",
		],
		year: 2019,
		href: "https://www.researchgate.net/publication/336892442_Certo_che_sono_connesso_nativi_digitali_e_comportamenti_a_rischio_nell'uso_dei_social_media",
	},

	{
		id: "cd5",
		tag: "Consapevolezza digitale",
		title: "Let’s play the social network game: a gamification approach for digital citizenship",
		collaboratori: [
			"Livio Bioglio",
			"Sara Capecchi",
			"Aurelia De Lorenzo",
			"Valentina Di Noi",
			"Gian Manuel Marino",
			"Ruggero G. Pensa",
			"Michele Settanni",
			"Simona Tirocchi",
			"Giulia Venturini",
		],
		year: 2019,
		href: "http://icities2019.unipi.it/",
	},

	{
		id: "cd6",
		tag: "Consapevolezza digitale",
		title: "Social4School: Educating on Awareness in Online Social Networks",
		collaboratori: [
			"Livio Bioglio",
			"Sara Capecchi",
			"Gian Manuel Marino",
			"Ruggero G. Pensa",
		],
		year: 2018,
		href: "http://icities2018.disim.univaq.it/",
	},
];

export default function ProdottiRicerca() {
	const [sorting, setSorting] = useState<SortingState>([
		{ id: "year", desc: true },
	]);

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter] = useState("");

	const columns: ColumnDef<Progetto>[] = [
		{
			accessorKey: "title",
			header: "Titolo",
			cell: ({
				row: {
					original: { title, href },
				},
			}) => (
				<a
					className="w-[200px] text-wrap underline font-bold text-blue-600"
					href={href}
				>
					{title}
				</a>
			),
			enableSorting: true,
		},
		{
			accessorKey: "year",
			cell: ({
				row: {
					original: { year },
				},
			}) => <div className="text-center">{year}</div>,
			header: ({ column }) => {
				return (
					<Button
						variant="ghost"
						onClick={() =>
							column.toggleSorting(column.getIsSorted() === "asc")
						}
					>
						Pubblicazione
						{column.getIsSorted() == "desc" ? (
							<ArrowDown />
						) : (
							<ArrowUp />
						)}
						{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
					</Button>
				);
			},
			enableSorting: true,
		},
		{
			accessorKey: "tag",
			header: "Categoria",
			cell: ({
				row: {
					original: { tag },
				},
			}) => (
				<div className="w-[170px]">
					<div
						className={cn(
							"text-xs shadow-sm cursor-pointer ",
							"rounded-full w-fit bg-primary-100  text-primary-700 border-[1px] border-primary-600  px-2 py-0.5 text-xs font-bold grid"
						)}
					>
						{tag}
					</div>
				</div>
			),
			enableSorting: true,
		},
		{
			accessorKey: "collaboratori",
			header: "Collaboratori",
			cell: ({
				row: {
					original: { collaboratori },
				},
			}) => (
				<div className="text-wrap w-[450px]">
					{collaboratori.join(", ")}
				</div>
			),
		},
	];

	const table = useReactTable({
		data,
		columns,
		onGlobalFilterChange: setGlobalFilter,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getSortedRowModel: getSortedRowModel(),
		globalFilterFn: multiColumnFilterClean,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
			globalFilter,
		},
	});

	return (
		<div className="w-full max-w-6xl mx-auto py-10">
			<PageIntro title="Pubblicazioni"></PageIntro>
			<div className="flex flex-col items-start py-4 gap-4">
				<div className="flex gap-3 items-center">
					<label
						htmlFor="table_search"
						className="text-sm font-semibold "
					>
						Ricerca testo:
					</label>
					<div className="relative  flex items-center min-w-lg ">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
						<Input
							id="table_search"
							type="text"
							className="pl-10 bg-white rounded-xl "
							placeholder="Ricerca per titolo, collaboratore o anno"
							onChange={(event) => {
								table.setGlobalFilter(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className="flex gap-3">
					<div className="text-sm font-semibold ">
						Ricerca per categoria:
					</div>
					<div className="flex gap-2">
						{[
							"Robotica Educativa",
							"Didattica dell'Informatica",
							"Didattica dell'IA",
							"Consapevolezza digitale",
							"Altri Progetti",
						].map((x) => (
							<div
								key={"prodotti" + x}
								role="button"
								tabIndex={0}
								onKeyDown={(v) => {
									if (v.key == " " || v.key == "Enter") {
										v.preventDefault();
										table
											.getColumn("tag")
											?.setFilterValue(
												table
													.getColumn("tag")
													?.getFilterValue() == x
													? undefined
													: (x as TagType)
											);
									}
								}}
								onClick={() => {
									table
										.getColumn("tag")
										?.setFilterValue(
											table
												.getColumn("tag")
												?.getFilterValue() == x
												? undefined
												: (x as TagType)
										);
								}}
							>
								<div
									className={cn(
										"text-xs shadow-sm cursor-pointer active:scale-95 hover:brightness-110 ",
										"rounded-full w-fit bg-primary-100  text-primary-700 border-[1px] border-primary-600  px-2 py-0.5 text-xs font-bold grid",

										table
											.getColumn("tag")
											?.getFilterValue() &&
											x !=
												table
													.getColumn("tag")
													?.getFilterValue()
											? "opacity-50 "
											: ""
									)}
								>
									{x}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table className="bg-slate-50">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead
											key={header.id}
											className="bg-gray-200"
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table
								.getRowModel()
								.rows // .filter((row) =>
								// 	filter != ""
								// 		? row.original.title
								// 				.toLowerCase()
								// 				.includes(
								// 					filter.toLowerCase()
								// 				) ||
								// 			row.original.collaboratori.filter(
								// 				(x) =>
								// 					x
								// 						.toLowerCase()
								// 						.includes(
								// 							filter.toLowerCase()
								// 						)
								// 			).length > 0
								// 		: true
								// )
								.map((row) => (
									<TableRow
										key={row.id}
										data-state={
											row.getIsSelected() && "selected"
										}
										className="fade"
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									Nessun risultato
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<div className="text-muted-foreground flex-1 text-sm">
					{table.getFilteredRowModel().rows.length} / {data.length}{" "}
					risultati
				</div>
				<div className="space-x-2">
					<label
						htmlFor="prev_button_table"
						className="sr-only opacity-0"
					>
						Precedente
					</label>
					<Button
						id="prev_button_table"
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeft />
					</Button>
					<label
						htmlFor="next_button_table"
						className="sr-only opacity-0"
					>
						Prossimo
					</label>
					<Button
						id="next_button_table"
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	);
}
