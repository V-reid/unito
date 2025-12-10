import { useLocation } from "react-router";
import {
	Breadcrumb as UiBreadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";

import React from "react";
import {
	menuContent,
	news,
	professors,
	type LinkType,
	type MenuLink,
} from "~/lib/constant";

export default function Breadcrumb() {
	const location = useLocation();
	const level = location.pathname.split("/").filter((x) => x != "").length;

	const path = location.pathname.split("/").filter((x) => x != "")[0];
	if (
		level == 0 ||
		path === "professore" ||
		path === "notizie" ||
		path === "contatti"
	) {
		return null;
	}

	const links = [
		...Object.values(menuContent)
			.flatMap((x) => (x as MenuLink)?.items ?? (x as LinkType))
			.flatMap((x) => ({
				to: x.to,
				title: x.title,
			})),
		{ to: "/didattica-perLeScuole/attivita", title: "Attività" },
		{ to: "/didattica-perLeScuole/iniziative", title: "Iniziative" },
		{ to: "/didattica-ricerca/progetti", title: "Progetti" },
		{ to: "/didattica-ricerca/prodotti", title: "Pubblicazioni" },
	];

	const middle = links.find(
		(x) =>
			x.to.replace("/", "") ===
			location.pathname.split("/").filter((x) => x != "")[0]
	);

	const last = links.find(
		(x) =>
			x.to.split("/")[2] ==
			location.pathname.split("/").filter((x) => x != "")[1]
	);

	// console.log(location.pathname.split("/").filter((x) => x != ""));

	return (
		<div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
			<UiBreadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href={middle?.to}>
							{middle?.title}
						</BreadcrumbLink>
					</BreadcrumbItem>
					{level > 1 ? (
						<>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href={last?.to}>
									{last?.title}
								</BreadcrumbLink>
							</BreadcrumbItem>
						</>
					) : null}
				</BreadcrumbList>
			</UiBreadcrumb>
		</div>
	);
}
