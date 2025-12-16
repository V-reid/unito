import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate, type To } from "react-router";

export default function BackButton({ to }: { to?: string }) {
	const navigate = useNavigate();
	return (
		<ArrowLeft
			tabIndex={-1}
			onKeyDown={(v) => {
				if (v.key == " " || v.key == "Enter") navigate(-1);
			}}
			onClick={() => (to ? navigate(to) : navigate(-1))}
			className="absolute rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100 -left-30"
		/>
	);
}
