import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { IS_PROD } from '../shared/constants'
import { languageCodes } from '../shared/languages'

// Локали
import HomePageLocaleEN from '../locales/en/pages/HomePage.json'
import NotFoundPageEN from '../locales/en/pages/NotFoundPage.json'
import HomePageLocaleRU from '../locales/ru/pages/HomePage.json'
import NotFoundPageRU from '../locales/ru/pages/NotFoundPage.json'

import HeaderLocaleEN from '../locales/en/components/Header.json'
import HeaderLocaleRU from '../locales/ru/components/Header.json'

const resources = {
	ru: {
		header: HeaderLocaleRU,
		homePage: HomePageLocaleRU,
		notFoundPage: NotFoundPageRU,
	},
	en: {
		header: HeaderLocaleEN,
		homePage: HomePageLocaleEN,
		notFoundPage: NotFoundPageEN,
	},
}

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: languageCodes[0]!,
		supportedLngs: languageCodes,
		debug: !IS_PROD,
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
