import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	base: `/unito-deploy/`,
	// server: { allowedHosts: ["94b286d5afb0.ngrok-free.app"] },
	// server: {
	// 	host: true,
	// },
});
