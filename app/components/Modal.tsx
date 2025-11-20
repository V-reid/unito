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
}: ModalType) {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		// <div className="min-h-screen flex items-center justify-center bg-slate-200 p-4">
		<Dialog
			open={open}
			onOpenChange={(change: boolean) => {
				setIsOpen(change);
			}}
		>
			<DialogContent className={cn("max-w-2xl bg-slate-100")}>
				<DialogHeader>
					<div className="flex justify-between items-center">
						<DialogTitle>{title}</DialogTitle>
					</div>

					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<div className="space-y-4">
					<div className="rounded-lg overflow-hidden">
						<ImageWithFallback
							src={img}
							alt={alt}
							className="w-full h-64 object-cover"
						/>
					</div>

					<p className="text-slate-600">{content}</p>
				</div>

				{linkHref ? (
					<DialogFooter className="flex-col sm:flex-row gap-2">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button
							onClick={() =>
								window.location.replace(linkHref as string)
							}
							variant="default"
							className="w-full sm:w-auto bg-primary text-white"
						>
							{linkText ?? "Scopri di più"}
							<ExternalLink className="ml-2 h-4 w-4" />
						</Button>
					</DialogFooter>
				) : null}
			</DialogContent>
		</Dialog>
		// </div>
	);
}
