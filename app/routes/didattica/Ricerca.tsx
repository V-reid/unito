import React, { type JSX, type PropsWithChildren } from "react";
import ComingSoon from "~/components/ComingSoon";
import { Dot, ExternalLink } from "lucide-react";
import { cn } from "~/utils";
import { ExternalA } from "~/components/ExternalA";
import { Title } from "~/components/Title";
import PageIntro from "~/components/PageIntro";
import { Link } from "react-router";

export default function Ricerca() {
	return (
		<div className="p-10 relative flex flex-col gap-10 max-w-4xl mx-auto pt-20">
			<PageIntro title="Ricerca">
				<div className="font-[Helvetica]">
					Questa sezione raccoglie le attività di ricerca del nostro
					gruppo di ricercatori attivo nell’ambito della Didattica
					dell’Informatica. Qui si possono trovare dettagli sui
					progetti da loro intrapresi, sui risultati raggiunti e sulle
					pubblicazioni prodotte.
				</div>
			</PageIntro>
			<div className="flex  pb-10">
				<Link
					to="progetti"
					className="relative border-2 w-[50%] rounded-l-2xl overflow-hidden bg-center h-[40vh] bg-[url(https://www.roboticaeducativa.pe/wp-content/uploads/2017/07/definicion-de-robotica.jpg)] bg-cover text-white  border-gray-300  p-10 shadow-md hover:bg-gray-100 transition-all  flex items-center justify-center text-2xl font-semibold	"
				>
					<h3 className="z-10 text-4xl font-bold">Progetti</h3>
					<div className="bg-black opacity-50 absolute w-full h-full hover:opacity-30 transition-all"></div>
				</Link>
				<Link
					to="prodotti"
					className="relative border-2 max-w-[50%] rounded-r-2xl overflow-hidden   flex-1 h-[40vh]  bg-[url(/progetti/prodotti-ricerca.jpeg)] bg-cover text-white  border-gray-300  p-10 shadow-md hover:bg-gray-100 transition-all  flex items-center justify-center text-2xl font-semibold	"
				>
					<h3 className="z-10 text-4xl font-bold text-center">
						Pubblicazioni
					</h3>
					<div className="bg-black opacity-50 absolute w-full h-full hover:opacity-30 transition-all"></div>
				</Link>
			</div>
		</div>
	);
}
