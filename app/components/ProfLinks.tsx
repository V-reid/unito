import React from "react";
import { Link } from "react-router";
import type { ProfType } from "~/lib/constant";

export default function ProfLinks({ prof }: { prof: ProfType[] }) {
	return (
		<div className="flex gap-2 pt-2">
			{prof.map((x) => (
				<Link
					to={"/professore/" + x.id}
					className="hover:scale-105 shadow-sm border-[1px] border-gray-300 transition-all flex items-center gap-1 rounded-full  justify-between bg-slate-200  w-fit"
				>
					<img
						src={
							x.img ??
							"https://cdn-icons-png.flaticon.com/512/149/149071.png"
						}
						alt={`immagine ${x.title} ${x.name}`}
						className="size-12 rounded-full object-cover border-[1px] border-gray-300"
					/>
					<div className="mx-1  text-xs px-2 mr-3">
						<div className="">{x.title}</div>
						<div className="font-semibold">{x.name}</div>
					</div>
				</Link>
			))}
		</div>
	);
}
