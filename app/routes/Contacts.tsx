import { Building, Phone, Mail } from "lucide-react";
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
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden  ring-1  lg:w-1/2 bg-gray-900 ring-white/10">
							{/* <svg
								aria-hidden="true"
								className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-white/10"
							>
								<defs>
									<pattern
										x="100%"
										y={-1}
										id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
										width={200}
										height={200}
										patternUnits="userSpaceOnUse"
									>
										<path
											d="M130 200V.5M.5 .5H200"
											fill="none"
										/>
									</pattern>
								</defs>
								<rect
									width="100%"
									height="100%"
									strokeWidth={0}
									className="fill-white dark:fill-gray-900"
								/>
								<svg
									x="100%"
									y={-1}
									className="overflow-visible fill-gray-50 dark:fill-gray-800/20"
								>
									<path
										d="M-470.5 0h201v201h-201Z"
										strokeWidth={0}
									/>
								</svg>
								<rect
									fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
									width="100%"
									height="100%"
									strokeWidth={0}
								/>
							</svg> */}
							{/* <div
								aria-hidden="true"
								className="absolute -left-56 top-[calc(100%-13rem)] hidden transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)] dark:block"
							>
								<div
									style={{
										clipPath:
											"polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
									}}
									className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-10 dark:opacity-20"
								/>
							</div> */}
						</div>
						<h2 className="text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl text-white">
							Contatta il Dipartimento di Informatica
						</h2>
						<p className="mt-6 text-lg/8  text-gray-400">
							Che tu sia un futuro studente, un'azienda o un
							ricercatore, siamo qui per rispondere alle tue
							domande su ammissioni, progetti di ricerca e
							partnership. Ti invitiamo a compilare il modulo per
							la richiesta di informazioni.
						</p>
						<dl className="mt-10 space-y-4 text-base/7 text-gray-300">
							{info.map((x) => (
								<a
									className="flex gap-x-4 underline"
									href={x.href}
								>
									<dt className="flex-none">
										<span className="sr-only">
											{x.title}
										</span>
										<x.icon
											aria-hidden="true"
											className="h-7 w-6 text-gray-400"
										/>
									</dt>
									<dd>{x.value}</dd>
								</a>
							))}
						</dl>
					</div>
				</div>
				<form
					action="#"
					method="POST"
					className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
				>
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div className="sm:col-span-2">
								<label
									htmlFor="first-name"
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
										className="block w-full rounded-md  px-3.5 py-2 text-base  -outline-offset-1  focus:-outline-offset-2 focus:outline-primary-600 bg-white/5 text-white outline-white/10 placeholder:text-gray-500 focus:outline-primary-500"
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
										: "pointer-events-none opacity-50 ",
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
