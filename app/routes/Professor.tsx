import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { professors, type DidatticaType } from "~/lib/constant";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import BackButton from "~/components/BackButton";
import { Card, CardTitle } from "~/ui/card";
import { cn } from "~/utils";

export default function Professor() {
	const { id } = useParams();
	const professor = professors.find((x) => x.id == id);
	const navigate = useNavigate();

	if (professor == undefined || professor == null)
		return (
			<div className="grid place-items-center text-3xl font-bold w-full h-[80vh]">
				<div>
					<div className="text-6xl italic">404</div>
					<div>Professore Inesistente</div>
				</div>
			</div>
		);
	const { img, name, title, mail, tel, didattica } = professor;
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<BackButton />
			<div className="flex flex-col gap-3 justify-between">
				<div className="flex gap-20">
					<div className="flex items-start justify-start ">
						<img
							src={professor.img}
							alt={title}
							className=" object-cover size-30  rounded-full"
						/>
					</div>
					<div className="flex flex-col gap-5">
						<div className="border-primary text-md w-fit  border-l-2 px-2  h-fit">
							{title}
							<h2 className="text-xl font-bold">{name}</h2>
						</div>
						<div>
							<a
								className="flex gap-2 items-center underline text-blue-600"
								href={`mailto:${mail}`}
							>
								<Mail className="size-5" />
								<div>{mail}</div>
							</a>
							<a
								className="flex gap-2 items-center underline text-blue-600"
								href={`tel:${tel}`}
							>
								<Phone className="size-5 " />
								<div>{tel}</div>
							</a>
						</div>
					</div>
				</div>

				{/* <div className="flex gap-2 items-center flex-wrap">
					{tags.map((tag: string) => (
						<div className="rounded-full bg-primary  text-white w-fit px-2 py-0.5 text-xs font-bold grid">
							{tag}
						</div>
					))}
				</div> */}
			</div>
			<div className="border-primary text-md w-fit  border-l-2 px-2  h-fit">
				<h2 className="text-xl font-bold">Didattica</h2>
			</div>
			<div className="grid grid-cols-1 gap-2">
				{didattica ? (
					didattica?.map((x) => (
						<DidatticaCard key={x.name + x.href} item={x} />
					))
				) : (
					<div>Nessun Insegnamento</div>
				)}
			</div>
			{/* <Link
				key={index}
				to={item.to}
				className={cn(
					"after:bg-primary relative after:absolute after:bottom-0  after:w-full  after:left-0 after:transition-all group p-4 rounded-lg hover:bg-slate-100  bg-slate-50 transition-colors",
					location.pathname == item.to ? "after:h-[2px]" : "after:h-0"
				)}
			>
				
			</Link> */}
			{/* 
			<div className="flex flex-col gap-1 flex-1 max-w-2xl">
				<div className="text-sm ">
					{new Date(date).toLocaleDateString("it-IT")}
				</div>
				*/}
			{/* <div className=" ">{full_article_content}</div> */}
		</div>
	);
}

function DidatticaCard({ item }: { item: DidatticaType }) {
	const [hover, setHover] = useState(false);

	return (
		<a
			href={item.href}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			tabIndex={0}
			onKeyDown={(v) => {
				if (v.key == " " || v.key == "Enter") {
					v.preventDefault();
				}
			}}
			className={cn(
				"after:bg-primary border-2 border-gray-300 cursor-pointer grid place-items-center relative after:absolute after:bottom-0  after:w-full  after:left-0 after:transition-all group p-4 rounded-lg hover:bg-slate-100  bg-slate-50 transition-colors"
			)}
		>
			<div className="flex justify-between w-full items-center">
				<div>
					<h3 className="mb-2 group-hover:text-primary-600 transition-colors max-w-[45vw]">
						{item.name}
					</h3>
					<p className="text-slate-600 text-sm ">{item.course}</p>
				</div>
				<div className="flex gap-2 items-center">
					<div>{item.code}</div>
					<ArrowRight
						className={cn(
							"transition-all w-fit size-4",
							hover ? "scale-100" : "scale-0 -m-4"
						)}
					/>
				</div>
			</div>
		</a>
	);
}
