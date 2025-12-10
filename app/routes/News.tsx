import { useParams } from "react-router";
import { news } from "~/lib/constant";
import { SingleNews } from "./home";
import BackButton from "~/components/BackButton";
import SectionTitle from "~/components/SectionTitle";

export default function News() {
	const { id } = useParams();
	const notizia = news.find((x) => x.id == id);

	if (notizia == undefined || notizia == null)
		return (
			<div className="grid place-items-center text-3xl font-bold w-full h-[80vh]">
				<div>
					<div className="text-6xl italic">404</div>
					<div>Notizia Inesistente</div>
				</div>
			</div>
		);
	const { title, tags, image_url, date, full_article_content } = notizia;
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
			{/* <BackButton /> */}
			<div className="flex flex-col gap-3">
				<SectionTitle>
					{new Date(date).toLocaleDateString("it-IT")}
					<div className="text-xl font-bold">{notizia.title}</div>
				</SectionTitle>
				<div className="flex gap-2 items-center flex-wrap">
					{tags.map((tag: string) => (
						<div
							key={tag + id + "single News"}
							className="rounded-full bg-primary-700  text-white w-fit px-2 py-0.5 text-xs font-bold grid"
						>
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
			<div className="flex flex-col gap-3">
				<SectionTitle>Altre notizie</SectionTitle>
				<div className="grid grid-cols-3 gap-4   mx-auto ">
					{news
						.filter((x) => x.id != id)
						.map((x) => (
							<SingleNews news={x} key={x.title + "_news"} />
						))}
				</div>
			</div>
		</div>
	);
}
