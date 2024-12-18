import english from "../../resources/locales/en/common.json"

const languages = ["en"] as const
export const supportedLanguages = [...languages]
export type Language = (typeof languages)[number]

type Resource = {
	common: typeof english
}

export type Namespace = keyof Resource

export const resources: Record<Language, Resource> = {
	en: {
		common: english,
	}
}
