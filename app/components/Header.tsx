import React, { useEffect, useState, type JSX } from "react";
import { Link, useLocation } from "react-router";
import { cn } from "~/utils";
import SearchBar from "./SerachBar";
import { ChevronDown, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "~/ui/button";
import { menuContent, type MenuLink, type LinkType } from "~/lib/constant";
import Logo from "./Logo";

interface HeaderLinkType {
	label: string;
	to: string;
}

type MenuType = "events" | "orientation" | "material" | null;

export default function Header() {
	const [activeMenu, setActiveMenu] = useState<MenuType>(null);
	const [previousMenu, setPreviousMenu] = useState<MenuType>(null);
	const location = useLocation();

	useEffect(() => {
		setActiveMenu(null);
	}, [location.pathname]);

	const menuOrder: MenuType[] = ["events", "orientation", "material"];

	const handleMenuChange = (menu: MenuType) => {
		if (menu !== activeMenu) {
			setPreviousMenu(activeMenu);
			setActiveMenu(menu);
		} else {
			setActiveMenu(null);
			setPreviousMenu(null);
		}
	};
	const getDirection = () => {
		if (!previousMenu || !activeMenu) return 0;
		const prevIndex = menuOrder.indexOf(previousMenu);
		const activeIndex = menuOrder.indexOf(activeMenu);
		return activeIndex > prevIndex ? 1 : -1;
	};

	type NewType = MenuLink;

	return (
		<header className="bg-white border-b border-slate-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-8">
					<Logo />
					<nav className="hidden md:flex items-center gap-6">
						{Object.entries(menuContent).map((x) => (
							<>
								{Object.hasOwn(x[1], "items") ? (
									<HeaderLinkWithMenu
										label={x[1].title}
										onClick={() =>
											handleMenuChange(x[0] as MenuType)
										}
										to={(x[1] as NewType).to ?? ""}
										isActive={activeMenu == x[0]}
									/>
								) : (
									<HeaderLink
										label={(x[1] as LinkType).title}
										to={(x[1] as LinkType).to}
									/>
								)}
							</>
						))}
					</nav>
				</div>

				<SearchBar />
			</div>

			<AnimatePresence mode="wait">
				{activeMenu && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden border-t border-slate-200 bg-white "
					>
						<div className="max-w-7xl mx-auto px-4 py-8 flex gap-4 items-center">
							<div>
								{
									(menuContent[activeMenu] as MenuLink)
										.description
								}
							</div>
							<motion.div
								key={activeMenu}
								initial={{
									x: getDirection() * 100,
									opacity: 0,
								}}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: getDirection() * -100, opacity: 0 }}
								transition={{ duration: 0.3 }}
								className="grid grid-cols-1 md:grid-cols-4 gap-6"
							>
								{(
									menuContent[activeMenu] as MenuLink
								).items.map((item, index) => (
									<Link
										key={index}
										to={item.to}
										className={cn(
											"after:bg-primary relative after:absolute after:bottom-0  after:w-full  after:left-0 after:transition-all group p-4 rounded-lg hover:bg-slate-100  bg-slate-50 transition-colors",
											location.pathname == item.to
												? "after:h-[2px]"
												: "after:h-0"
										)}
									>
										<h3 className="mb-2 group-hover:text-primary-600 transition-colors">
											{item.title}
										</h3>
										<p className="text-slate-600 text-sm">
											{item.description}
										</p>
									</Link>
								))}
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

function HeaderLink({ label, to }: HeaderLinkType) {
	const [hover, setHover] = useState(false);
	const location = useLocation();
	return (
		<Link
			to={to}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={cn(
				" relative after:absolute after:bottom-0  after:w-full  after:left-0 after:transition-all",
				hover || location.pathname == to ? "after:h-px " : "after:h-0",
				location.pathname == to
					? "after:bg-primary font-bold text-slate-900 scale-105"
					: "after:bg-gray-500 text-slate-600 hover:text-slate-900"
			)}
		>
			{label}
		</Link>
	);
}

function HeaderLinkWithMenu({
	label,
	onClick,
	to,
	isActive,
}: HeaderLinkType & { onClick: () => void; isActive: boolean }) {
	const [hover, setHover] = useState(false);
	const location = useLocation();

	return (
		<button
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={cn(
				"	 focus:ring-2	 focus:rounded-sm focus:ring-blue-500	 cursor-pointer transition-all flex items-center gap-1  outline-none relative after:absolute after:bottom-0  after:w-full  after:left-0 after:transition-all",
				isActive
					? "text-slate-900 scale-105"
					: "text-slate-600 hover:text-slate-900",
				hover || location.pathname.split("-")[0] == to
					? "after:h-px"
					: "after:h-0",
				location.pathname.split("-")[0] == to
					? "after:bg-primary font-bold"
					: "after:bg-gray-500"
			)}
		>
			{label}
			<ChevronDown
				className={`h-4 w-4 transition-transform ${isActive ? "rotate-180" : ""}`}
			/>
		</button>
	);
}
