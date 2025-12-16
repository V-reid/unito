import React, { type JSX, type PropsWithChildren } from "react";
import ComingSoon from "~/components/ComingSoon";
import { Dot, ExternalLink } from "lucide-react";
import { cn } from "~/utils";
import { ExternalA } from "~/components/ExternalA";
import { Title } from "~/components/Title";
import PageIntro from "~/components/PageIntro";
import { Link } from "react-router";
import { baseUrl } from "~/lib/constant";

export default function PerLeScuole() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-10">
			<PageIntro title="Per le Scuole">
				<div className="font-[Helvetica]">
					Questa sezione raccoglie le iniziative, le attività e i
					materiali dedicati alle scuole con l’obiettivo di supportare
					e valorizzare l’insegnamento dell’informatica. Attraverso la
					collaborazione tra il Dipartimento e il mondo della scuola,
					vengono promosse attività di orientamento, percorsi
					didattici e risorse sviluppate da ricercatori e
					ricercatrici, per accompagnare studenti e insegnanti nello
					sviluppo delle competenze digitali e nel passaggio verso i
					percorsi universitari.
				</div>
			</PageIntro>
			<div className="flex  pb-10">
				<Link
					to="iniziative"
					className={cn(
						`relative border-2 w-[50%] rounded-l-2xl overflow-hidden bg-center h-[40vh]  bg-cover text-white  border-gray-300  p-10 shadow-md hover:bg-gray-100 transition-all  flex items-center justify-center text-2xl font-semibold	`
					)}
					style={{
						backgroundImage: "url(" + baseUrl + "/iniziative.jpg)",
					}}
				>
					<h3 className="z-10 text-4xl font-bold">Iniziative</h3>
					<div className="bg-black opacity-50 absolute w-full h-full hover:opacity-30 transition-all"></div>
				</Link>
				<Link
					to="attivita"
					className={cn(
						`relative border-2 max-w-[50%] rounded-r-2xl overflow-hidden   flex-1 h-[40vh]  bg-cover text-white  border-gray-300  p-10 shadow-md hover:bg-gray-100 transition-all  flex items-center justify-center text-2xl font-semibold	`
					)}
					style={{
						backgroundImage: "url(" + baseUrl + "/attivita.jpg)",
					}}
				>
					<h3 className="z-10 text-4xl font-bold">Attività</h3>
					<div className="bg-black opacity-50 absolute w-full h-full hover:opacity-30 transition-all"></div>
				</Link>
			</div>
		</div>
	);
}
