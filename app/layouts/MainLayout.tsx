import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "~/components/Header";
import { motion } from "motion/react";
export default function MainLayout() {
	const location = useLocation();
	return (
		<div>
			<Header />
			<main>
				<motion.div
					key={location.pathname}
					initial={{ y: 20, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<Outlet />
				</motion.div>
			</main>
			<header>Footer</header>
		</div>
	);
}
