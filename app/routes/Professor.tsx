import React from "react";
import { useNavigate, useParams } from "react-router";
import { professors } from "~/lib/constant";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export default function Professor() {
	const { id } = useParams();
	const professor = professors.find((x) => x.id == id);
	const { img, name, title } = professor;
	const navigate = useNavigate();

	if (!professor) return <>Not Found</>;
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
			<ArrowLeft
				onClick={() => navigate(-1)}
				className="absolute rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100 -left-30"
			/>
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
						<div className="border-primary text-md w-fit  border-l-2 px-2 font-bold h-fit">
							{title}
							<h2 className="text-xl font-bold">{name}</h2>
						</div>
						<div>
							<div className="flex gap-2 items-center">
								<Mail className="size-4" />
								<div>matteo.baldoni@unito.it</div>
							</div>
							<div className="flex gap-2 items-center">
								<Phone className="size-4 " />
								<div>0116706756</div>
							</div>
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
