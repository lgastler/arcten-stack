import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

const miscRoutes = [
	route("/robots.txt", "./routes/misc/robots-txt.ts"),
	route("/sitemap-index.xml", "./routes/misc/sitemap-index.ts"),
	route("/sitemap/:lang.xml", "./routes/misc/sitemap-lang.ts"),
]

const resourcesRoutes = [
	route("/resource/locales", "./routes/resources/locales.ts"),
]

export default [
	...miscRoutes,
	...resourcesRoutes,
	route("/", "./routes/index/index.tsx"),
] satisfies RouteConfig
