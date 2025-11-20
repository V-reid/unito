import React, { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "~/ui/input";

export default function SearchBar() {
	const [searchQuery, setSearchQuery] = useState("");
	return (
		<div className="relative   flex items-center">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
			<Input
				type="text"
				placeholder="Cerca..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className="pl-10 bg-white rounded-xl"
			/>
		</div>
	);
}
