import { generateSitemapIndex } from "@forge42/seo-tools/sitemap"
import { createDomain } from "~/utils/http"
import type { Route } from "./+types/sitemap-index"

export const loader = async ({ request }: Route.LoaderArgs) => {
	const domain = createDomain(request)
	const sitemaps = generateSitemapIndex([
		{
			url: `${domain}/sitemap/en.xml`,
			lastmod: "2024-07-17",
		}
	])

	return new Response(sitemaps, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	})
}
