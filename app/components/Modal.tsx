import { useState, type JSX } from "react";
import { Button } from "~/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
} from "../ui/dialog";
import { ExternalLink, X } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { cn } from "~/utils";
import { useSearchParams } from "react-router";

export type ModalType = {
	open: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title: string | JSX.Element;
	description?: string | JSX.Element;
	img?: string;
	content: string | JSX.Element;
	linkText?: string;
	linkHref?: string;
	alt?: string;
	imgClassName?: string;
};

export default function Modal({
	open,
	setIsOpen,
	title,
	description,
	img,
	alt,
	content,
	linkText,
	linkHref,
	imgClassName,
}: ModalType) {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		// <div className="min-h-screen flex items-center justify-center bg-slate-200 p-4">
		<Dialog open={open} onOpenChange={setIsOpen}>
			<DialogContent className={cn("max-w-6xl bg-slate-100 ")}>
				<DialogHeader>
					<div className="flex justify-between items-center">
						<DialogTitle>{title}</DialogTitle>
					</div>

					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<div className="space-y-4 ">
					<div className="rounded-lg overflow-hidden">
						<ImageWithFallback
							src={img}
							alt={alt}
							className={cn(
								"w-full h-64 object-cover flex-1",
								imgClassName ?? ""
							)}
						/>
					</div>

					<div className="text-slate-600 flex-2">{content}</div>
				</div>

				{linkHref ? (
					<DialogFooter className="flex-col sm:flex-row gap-2">
						{/* <DialogClose asChild className="cursor-pointer">
							<Button variant="outline">Cancel</Button>
						</DialogClose> */}
						<a
							href={linkHref}
							// onClick={() =>
							// 	window.location.(linkHref as string)
							// }

							className="flex gap-2 py-1 hover:brightness-110 active:scale-95 px-2 rounded-lg items-center w-full sm:w-auto bg-primary text-white"
						>
							{linkText ?? "Scopri di più"}
							<ExternalLink className=" h-4 w-4" />
						</a>
					</DialogFooter>
				) : null}
			</DialogContent>
		</Dialog>
		// </div>
	);
}
