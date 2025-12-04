import React from "react";
import { useNavigate, useParams } from "react-router";
import { professors } from "~/lib/constant";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import BackButton from "~/components/BackButton";

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
	const { img, name, title, mail, tel } = professor;
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
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
								<Mail className="size-4" />
								<div>{mail}</div>
							</a>
							<a
								className="flex gap-2 items-center underline text-blue-600"
								href={`tel:${tel}`}
							>
								<Phone className="size-4 " />
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
