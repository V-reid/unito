import React from "react";
import { useNavigate, useParams } from "react-router";
import { news } from "~/lib/constant";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/ui/button";

export default function News() {
	const { id } = useParams();
	const notizia = news.find((x) => x.id == id);
	const { title, tags, image_url, date, full_article_content } = notizia;
	const navigate = useNavigate();
	if (!notizia) return <>Not Found</>;
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
			<ArrowLeft
				onClick={() => navigate(-1)}
				className="absolute rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100 -left-30"
			/>
			<div className="flex flex-col gap-3">
				<div className="border-primary text-md w-fit  border-l-2 px-2 font-bold h-fit">
					{new Date(date).toLocaleDateString("it-IT")}
					<h2 className="text-xl font-bold">{notizia.title}</h2>
				</div>
				<div className="flex gap-2 items-center flex-wrap">
					{tags.map((tag: string) => (
						<div className="rounded-full bg-primary  text-white w-fit px-2 py-0.5 text-xs font-bold grid">
							{tag}
						</div>
					))}
				</div>
			</div>
			<img
				src={image_url}
				alt={title}
				className="aspect-square object-cover max-h-[70vh] rounded-md flex-1"
			/>
			{/* 
			<div className="flex flex-col gap-1 flex-1 max-w-2xl">
				<div className="text-sm ">
					{new Date(date).toLocaleDateString("it-IT")}
				</div>
				*/}
			<div className=" ">{full_article_content}</div>
		</div>
	);
}
