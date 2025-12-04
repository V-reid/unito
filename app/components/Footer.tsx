import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";

const navigation = {
	solutions: [
		{ name: "Marketing", href: "#" },
		{ name: "Analytics", href: "#" },
		{ name: "Automation", href: "#" },
		{ name: "Commerce", href: "#" },
		{ name: "Insights", href: "#" },
	],

	amministrazione: [
		{ name: "Accessibilità", href: "#" },
		{ name: "Segreteria Didattica", href: "#" },
		{ name: "Helpdesk Studenti", href: "#" },
		{ name: "Webmaster", href: "#" },
	],
	legale: [
		{ name: "Privacy e Cookie Policy", href: "#" },
		{ name: "Note Legali", href: "#" },
	],
	social: [
		{
			name: "Facebook",
			href: "#",
			icon: () => <Facebook />,
		},
		{
			name: "Instagram",
			href: "#",
			icon: () => <Instagram />,
		},
		{
			name: "X",
			href: "#",
			icon: () => <Twitter />,
		},
		{
			name: "YouTube",
			href: "#",
			icon: () => <Youtube />,
		},
		{
			name: "Linkedin",
			href: "#",
			icon: () => <Linkedin />,
		},
	],
};

export default function Example() {
	return (
		<footer className=" bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 ">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
					<div className="space-y-8">
						<Logo white />

						<div className="flex gap-x-6 mt-10">
							{navigation.social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className=" text-gray-300 hover:text-gray-200"
								>
									<span className="sr-only">{item.name}</span>
									<item.icon
										aria-hidden="true"
										className="size-6"
									/>
								</a>
							))}
						</div>
					</div>
					<div className="mt-16 grid grid-cols-1 gap-8 col-span-2 xl:mt-0">
						<div className="grid grid-cols-3 gap-8">
							<div>
								<h3 className="text-sm/6 font-semibold  text-white">
									Sezione Amministrativa
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.amministrazione.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm/6  text-gray-300 hover:text-gray-200 underline"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm/6 font-semibold text-white">
									Sezione Legale
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.legale.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm/6  text-gray-300 hover:text-gray-200 underline"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="text-sm/6 font-semibold  text-white">
									Informazioni Università di Torino
								</h3>
								<ul
									role="list"
									className="mt-6 space-y-4 text-sm/6  text-gray-300 "
								>
									<li>
										<div>Sede legale</div>
										<div className="-mt-2">
											Via Verdi, 8 - 10124 Torino
										</div>
									</li>
									<li>
										<div>Numero centralino</div>
										<div className="-mt-2">
											+39 011 6706111
										</div>
									</li>
									<li>
										<div>Partita IVA</div>
										<div className="-mt-2">02099550010</div>
									</li>
									<li>
										<div>Codice Fiscale</div>
										<div className="-mt-2">80088230018</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16 border-t  pt-8 sm:mt-20 lg:mt-24 border-white/10">
					<p className="text-sm/6  text-gray-300">
						&copy; 2024 Unito, Tutti i diritti riservati
					</p>
				</div>
			</div>
		</footer>
	);
}
