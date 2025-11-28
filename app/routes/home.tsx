import { logos, news, professors } from "~/lib/constant";
import type { Route } from "./+types/home";
import { cn } from "~/utils";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/ui/tooltip";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<People />
			<News />
			<Logos />
		</>
	);
}

function People() {
	return (
		<div className=" p-20 flex flex-col gap-5 ">
			<div className="border-primary text-md w-fit  border-l-2 px-2 font-bold">
				Professori
			</div>
			<div className="  flex ">
				{professors.map((x) => (
					<Person person={x} />
				))}
			</div>
		</div>
	);
}

function Person({
	person: x,
}: {
	person: {
		id: string;
		name: string;
		title: string;
		img: string;
	};
}) {
	const [hover, setHover] = useState(false);
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					to={"/professore/" + x.id}
					className="relative -mr-2 hover:z-10 hover:scale-110 transition-all cursor-pointer"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<img
						src={x.img}
						className=" z-20 rounded-full ring-2 ring-gray-300 size-20 bg-white object-cover"
					/>
				</Link>
			</TooltipTrigger>
			<TooltipContent
				side="bottom"
				className="bg-white flex flex-col items-center mb-5 border-b-2 border-primary"
			>
				<div className="text-lg capitalize">{x.name}</div>
				<div className="text-md capitalize">{x.title}</div>
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
	);
}

function News() {
	return (
		<div className="py-10 px-20 flex flex-col gap-4">
			<div className="border-primary text-md w-fit  border-l-2 px-2 font-bold">
				Ultime Notizie
			</div>
			<div className="flex gap-4   mx-auto ">
				{news.map((x) => (
					<SingleNews news={x} key={x.title + "_news"} />
				))}
			</div>
			<div className="flex gap-2 self-end">
				<ArrowLeft className="rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100" />

				<ArrowRight className="rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100" />
			</div>
		</div>
	);
}

function SingleNews({
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
						<div className="rounded-full bg-primary  text-white w-fit px-2 py-0.5 text-xs font-bold grid">
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
					<h3 className="text-lg font-bold pb-5">{news.title}</h3>
					<div className="text-sm ">{news.summary}</div>
				</div>
				<div className="text-sm ">
					{new Date(news.date).toLocaleDateString("it-IT")}
				</div>
			</div>
		</Link>
	);
}

function Logos() {
	return (
		<div className="bg-white py-24 sm:py-32 ">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto mt-10 flex items-center gap-x-8 gap-y-10  sm:gap-x-10 lg:mx-0 ">
					{logos.map((x) => (
						<a
							href={x.href}
							className="transition-all p-6 sm:p-10 bg-white/5 cursor-pointer ring-1 ring-gray-400 rounded-md aspect-video flex-1 shadow-md hover:rotate-0 hover:scale-105"
						>
							<img
								alt={x.alt}
								src={x.src}
								// width={158}
								// height={48}
								className="h-20 w-full object-contain "
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
