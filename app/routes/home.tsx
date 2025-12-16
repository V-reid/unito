import { logos, news, professors, type ProfType } from "~/lib/constant";
import type { Route } from "./+types/home";
import { cn } from "~/utils";
import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/ui/tooltip";
import SectionTitle from "~/components/SectionTitle";
import { format } from "date-fns";
import { it } from "date-fns/locale";

export function meta({}: Route.MetaArgs) {
	return [
		{
			title: "Sotto-Sito del Dipartimento di Informatica - Sezione per le Scuole",
		},
		{ name: "description", content: "Terza missione unito" },
	];
}

export default function Home() {
	return (
		<>
			<Hero />

			<NewsSection />

			<People />

			<Logos />
		</>
	);
}

function Hero() {
	return (
		<div className="relative">
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 pt-0 lg:w-full lg:max-w-2xl">
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
						className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block dark:fill-gray-900"
					>
						<polygon points="0,0 90,0 50,100 0,100" />
					</svg>

					<div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-30 lg:pr-0">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
							<h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
								Costruiamo ponti tra{" "}
								<span className="text-primary">Università</span>{" "}
								e <span className="text-primary">Scuole</span>
							</h1>
							<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400">
								Un ambiente che comprende Università, Scuole e
								Istituzioni per lo sviluppo e l'innovazione. Qui
								gli studenti e gli insegnanti possono trovare
								progetti e attività orientati all'Informatica.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] dark:bg-gray-800 ">
				<img
					alt=""
					src="/uni.jpg"
					className=" object-cover   object-left size-[100%]"
				/>
			</div>
		</div>
	);
}

function People() {
	return (
		<div className=" px-20 py-10 flex flex-col gap-5 ">
			<SectionTitle>I nostri ricercatori</SectionTitle>
			<div className="flex flex-col gap-4">
				<p className=" flex-1">
					Tutte le attività proposte dal nostro dipartimento sono
					state ideate dal nostro gruppo di ricerca. <br />
					Scopri di più sui membri:
				</p>

				<div className=" flex flex-1  items-center justify-start">
					{professors.map((x) => (
						<Person key={x.id} person={x} />
					))}

					<Tooltip>
						<TooltipTrigger asChild>
							<a
								aria-label="Contatta tutti i ricercatori"
								href={
									"mailto:" +
									professors.map((x) => x.mail).join(";")
								}
								className="relative -mr-2 hover:z-10 hover:scale-110 active:scale-95 focus:z-10 focus:scale-110 transition-all cursor-pointer"
							>
								<div className="grid place-items-center z-20 rounded-full ring-2 ring-gray-300 size-20 bg-white object-cover">
									<Send />
								</div>
							</a>
						</TooltipTrigger>
						<TooltipContent
							side="bottom"
							className="bg-white flex flex-col items-center mb-5 border-b-2 border-primary"
						>
							<div className="text-lg ">
								Contatta il gruppo di ricerca
							</div>
						</TooltipContent>
						{/* <TooltipContent
				sideOffset={-200}
				className="-bottom-full  bg-white flex flex-col gap-1 text-sm items-start mb-5 border-l-2 border-primary"
			>
				<div className="flex gap-2 items-center">
					<Mail className="size-4" />
					<div>matteo.baldoni@unito.it</div>
				</div>
				<div className="flex gap-2 items-center">
					<Phone className="size-4 " />
					<div>0116706756</div>
				</div>
			</TooltipContent> */}
					</Tooltip>
				</div>
			</div>
		</div>
	);
}

function Person({ person: x }: { person: ProfType }) {
	const [hover, setHover] = useState(false);
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					to={"/professore/" + x.id}
					className="relative -mr-2 hover:z-10 hover:scale-105 rounded-full focus:outline-offset-2 active:scale-95 focus:z-10 focus:scale-110 transition-all cursor-pointer"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<img
						id={x.id}
						src={x.img}
						alt={"immagine di " + x.name}
						className=" z-20 rounded-full ring-2 ring-gray-300 size-20 bg-white object-cover"
					/>
				</Link>
			</TooltipTrigger>
			<TooltipContent
				side="bottom"
				className="bg-white flex flex-col rounded-t-xl  items-center mb-5 mt-1 border-b-2 border-primary"
			>
				<div className="text-lg capitalize">{x.name}</div>
				<div className="text-md capitalize">{x.title}</div>
			</TooltipContent>
		</Tooltip>
	);
}

function NewsSection() {
	return (
		<div className="py-10 px-20 flex flex-col gap-4">
			<SectionTitle>Ultime Notizie</SectionTitle>
			<div className="flex gap-4   mx-auto ">
				{news.map((x) => (
					<SingleNews news={x} key={x.title + "_news"} />
				))}
			</div>
			<div className="flex gap-2 self-end">
				<ArrowLeft className="rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100" />

				<ArrowRight className="rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100" />
			</div>
			<div id="ricercatori"></div>
		</div>
	);
}

export function SingleNews({
	news,
}: {
	news: {
		id: string;
		title: string;
		date: string;
		category: string;
		summary: string;
		image_url: string;
		tags: string[];
	};
}) {
	const [hover, setHover] = useState(false);
	return (
		<Link
			to={"/notizie/" + news.id}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="flex flex-col ring-1 ring-slate-400 rounded-md relative   overflow-hidden flex-1 h-[60vh] focus:ring-offset-3 focus:ring-3 focus:ring-blue-400"
		>
			<div className="z-10 px-2 py-2 h-15">
				<div className="flex gap-2 items-center flex-wrap">
					{news.tags.map((tag) => (
						<div
							key={news.title + tag}
							className="rounded-full bg-primary-700  text-white w-fit px-2 py-0.5 text-xs font-bold grid"
						>
							{tag}
						</div>
					))}
				</div>
			</div>
			<img
				className="flex-1 absolute w-full h-full object-cover brightness-45"
				src={news.image_url}
				alt={news.title}
			/>
			<div
				className={cn(
					"bg-linear-to-b from-transparent to-primary-400/50  h-full w-full absolute z-2 transition-all from-40%",
					hover ? "opacity-100" : "opacity-0"
				)}
			></div>
			<div className="flex-1 flex flex-col gap-2 px-5 py-3 z-1 text-white justify-between">
				<div>
					<h2 className="text-lg font-bold pb-5">{news.title}</h2>
					<div className="text-sm ">{news.summary}</div>
				</div>
				<div className="text-sm text-white">
					{format(new Date(news.date), "dd MMMM yyyy", {
						locale: it,
					})}
				</div>
			</div>
		</Link>
	);
}

function Logos() {
	return (
		<div className=" p-20 flex flex-col gap-5 ">
			<SectionTitle>Affiliazioni</SectionTitle>
			<div className="flex">
				{/* <p className="flex-1 w-full bg-red-400">ciao</p> */}
				<div className="mx-auto  grid grid-cols-4 flex-1 w-full items-center justify-center   ">
					{logos.map((x) => (
						<a
							key={x.title + "logos"}
							href={x.href}
							className={cn(
								"transition-all hover:scale-105 flex bg-white/5 cursor-pointer bg-red-300  w-fit mx-auto justify-center ring-gray-400 rounded-sm flex-1 ",
								x.classNames
							)}
						>
							<img
								alt={x.alt}
								src={x.src}
								// width={158}
								// height={48}
								className="h-20  object-contain"
							/>
							{/* <h3 className="w-fit mx-auto ">{x.title}</h3> */}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
