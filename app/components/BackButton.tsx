import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function BackButton() {
	const navigate = useNavigate();
	return (
		<ArrowLeft
			tabIndex={0}
			onKeyDown={(v) => {
				if (v.key == " " || v.key == "Enter") navigate(-1);
			}}
			onClick={() => navigate(-1)}
			className="absolute rounded-full ring-1 ring-gray-300 cursor-pointer p-2 size-10 hover:bg-gray-100 -left-30"
		/>
	);
}
