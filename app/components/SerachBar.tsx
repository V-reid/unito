import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "~/ui/input";
import { cn } from "~/utils";

export default function SearchBar({
	className,
	type,
	...props
}: React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>) {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<div className="relative   flex items-center">
			<label htmlFor="global_search" className="sr-only opacity-0">
				barra di ricerca
			</label>
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
			<Input
				id="global_search"
				type="text"
				placeholder="Cerca..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className={cn(
					"pl-10 bg-white rounded-xl border-gray-300",
					className ?? ""
				)}
				{...props}
			/>
		</div>
	);
}
