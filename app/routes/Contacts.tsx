import { Building, Phone, Mail, User } from "lucide-react";
import { useState } from "react";
import { Button } from "~/ui/button";
import { cn } from "~/utils";

const info = [
	{
		icon: Building,
		title: "Sede del dipartimento",
		value: "Corso Svizzera 185 - 10149 Torino",
		href: "https://www.google.com/maps/place/Corso+Svizzera,+185,+10149+Torino+TO/@45.0903052,7.6577545,17z/data=!3m1!4b1!4m6!3m5!1s0x47886db2bc671231:0xff5b84db691e2856!8m2!3d45.0903014!4d7.6603294!16s%2Fg%2F11hf6zd27g?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
	},
	{
		icon: Phone,
		title: "Numero Centralino",
		value: "+39 011 6706711",
		href: "tel:+390116706711",
	},
	{
		icon: Mail,
		title: "Mail direzione",
		value: "direzione.informatica@unito.it",
		href: "mailto:direzione.informatica@unito.it",
	},
];

export default function Example() {
	const [subject, setSubject] = useState<string | undefined>(undefined);
	const [text, setText] = useState<string | undefined>(undefined);
	return (
		<div className="relative isolate bg-gray-900">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-0 pt-12  lg:static lg:px-8 lg:pt-24">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden rounded-br-xl ring-1  lg:w-1/2 bg-white ring-white/10"></div>
						<h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl text-slate-900">
							Contatta il Dipartimento di Informatica
						</h2>
						<p className="mt-6 text-lg/8  text-black">
							Che tu sia un futuro studente, un'azienda o un
							ricercatore, siamo qui per rispondere alle tue
							domande su ammissioni, progetti di ricerca e
							partnership. Ti invitiamo a compilare il modulo per
							la richiesta di informazioni.
						</p>
						<dl className="mt-10 space-y-4 text-base/7 text-slate-800 pb-10">
							{info.map((x) => (
								<a
									className="flex gap-x-4 underline text-blue-600"
									href={x.href}
								>
									<dt className="flex-none">
										<span className="sr-only opacity-0">
											{x.title}
										</span>
										<x.icon
											aria-hidden="true"
											className="h-7 w-6 text-slate-800"
										/>
									</dt>
									<dd>{x.value}</dd>
								</a>
							))}
							<a
								href="/#ricercatori"
								className="flex gap-4 items-center"
							>
								<User />
								<div className="underline text-blue-600">
									Contatta i nostri ricercatori
								</div>
							</a>
						</dl>
					</div>
				</div>
				<form
					action="#"
					method="POST"
					className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
				>
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label
									htmlFor="oggetto"
									className="block text-sm/6 font-semibold  text-white"
								>
									Oggetto
								</label>
								<div className="mt-2.5">
									<input
										id="oggetto"
										name="oggetto"
										type="text"
										onChange={(v) =>
											setSubject(v.target.value)
										}
										className="block w-full rounded-md  px-3.5 py-2 text-base  -outline-offset-1  focus:-outline-offset-2 focus:outline-primary-600 bg-white/5 text-white outline-white/10 placeholder:text-gray-600 focus:outline-primary-500"
									/>
								</div>
							</div>

							<div className="sm:col-span-2">
								<label
									htmlFor="messaggio"
									className="block text-sm/6 font-semibold text-white"
								>
									Messaggio
								</label>
								<div className="mt-2.5">
									<textarea
										id="messaggio"
										name="messaggio"
										rows={4}
										onChange={(v) =>
											setText(v.target.value)
										}
										className="block w-full rounded-md  px-3.5 py-2 text-base -outline-offset-1  focus:-outline-offset-2 focus:outline-primary-600 bg-white/5 text-white outline-white/10 placeholder:text-gray-500 focus:outline-primary-500"
										defaultValue={""}
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<a
								href={`mailto:direzione.informatica@unito.it?subject=${subject}&body=${text}`}
								className={cn(
									text && subject
										? ""
										: "pointer-events-none opacity-50 cursor-not-allowed ",
									"rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary  focus-visible:outline-offset-2 focus-visible:outline-primary-600 bg-primary hover:bg-primary-400 focus-visible:outline-primary-500"
								)}
							>
								Invia
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
