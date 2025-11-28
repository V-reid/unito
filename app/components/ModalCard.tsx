import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import type { ModalType } from "./Modal";
import Modal from "./Modal";
import { cn } from "~/utils";
import { useNavigate, useSearchParams } from "react-router";
import { DialogDemo } from "./Dialog2";

export default function ModalCard({
	setObj,
	onClick,
	...rest
}: Omit<ModalType, "open" | "setIsOpen"> & {
	setObj: React.Dispatch<
		React.SetStateAction<Omit<ModalType, "open" | "setIsOpen"> | undefined>
	>;
	onClick: () => void;
}) {
	// const [searchParams, setSearchParams] = useSearchParams();
	// const defaultOpen = searchParams.get("modal") == rest.title;
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();

	

	return (
		<div
			className="relative rounded-xl overflow-hidden cursor-pointer group h-80 shadow-2xl border-2 border-gray-500"
			onClick={() => {
				// setIsHovered(false);
				onClick();

				// const newParams = new URLSearchParams(searchParams);
				// newParams.set("modal", rest.title as string);
				// setSearchParams(newParams);
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={cn(
					"bg-linear-to-b from-transparent to-primary-400/50  h-full w-full absolute z-2 transition-all from-40%",
					isHovered ? "opacity-100" : "opacity-0"
				)}
			></div>
			<ImageWithFallback
				src={rest.img}
				alt={rest.alt}
				className="w-full h-full object-cover"
			/>

			<div
				className={cn(
					"absolute inset-0 bg-black/60 transition-colors duration-300"
					// isHovered ? "bg-black/60" : ""
				)}
			/>

			<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
				<div className="flex items-center gap-2 justify-center">
					<h2 className=" text-center text-xl font-bold">
						{rest.title}
					</h2>
					<motion.div
						animate={{ x: isHovered ? 5 : 0 }}
						transition={{ duration: 0.3 }}
					>
						<ArrowRight className="size-6" />
					</motion.div>
				</div>
			</div>
			{/* <DialogDemo title="gino" open={open} setIsOpen={setIsOpen} /> */}
			{/* <Modal {...rest} {...{ open }} setIsOpen={setIsOpen} /> */}
		</div>
	);
}
