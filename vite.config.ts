import { reactRouter } from "@react-router/dev/vite"
import { reactRouterDevTools } from "react-router-devtools"
import { reactRouterHonoServer } from "react-router-hono-server/dev"
import { defineConfig } from "vite"
import babel from "vite-plugin-babel"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [
		babel({
			filter: /\.tsx?$/,
			babelConfig: {
				presets: ["@babel/preset-typescript"],
				plugins: ["babel-plugin-react-compiler"],
			},
		}),
		reactRouterDevTools(),
		reactRouter(),
		reactRouterHonoServer({
			dev: {
				exclude: [/^\/(resources)\/.+/],
			},
		}),
		tsconfigPaths(),
	],
	server: {
		// biome-ignore lint/nursery/noProcessEnv: Its ok to use process.env here
		port: Number(process.env.PORT || 4280),
	},
})
