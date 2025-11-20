import { logos, news } from "~/lib/constant";
import type { Route } from "./+types/home";
import { cn } from "~/utils";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<News />
			<Logos />
		</>
	);
}

function News() {
	return (
		<div className="py-10 px-20 flex flex-col gap-4">
			<div className="border-primary text-md w-fit  border-l-2 px-2 font-bold">
				Notizie
			</div>
			<div className="flex gap-4   mx-auto ">
				{news.map((x) => (
					<SingleNews news={x} />
				))}
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
			to="/"
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
				<div className="text-sm ">{news.date}</div>
			</div>
		</Link>
	);
}

function Logos() {
	const navigate = useNavigate();
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
