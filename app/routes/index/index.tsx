import { useTranslation } from "react-i18next"
import type { MetaFunction } from "react-router"

export const meta: MetaFunction = () => {
	return [{ title: "arcten" }]
}

export default function Index() {
	const { t } = useTranslation()
	return (
		<div>
			<h1>{t("hi")}</h1>
		</div>
	)
}
