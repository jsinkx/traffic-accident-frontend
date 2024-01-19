export type AvailableLanguage = {
	name: 'Русский' | 'English'
	code: 'ru' | 'en'
}

export const languages: AvailableLanguage[] = [
	{
		name: 'Русский',
		code: 'ru',
	},
	{
		name: 'English',
		code: 'en',
	},
]

export const languageCodes = languages.map(({ code }) => code)
