import { createContext } from 'react'

import THEMES from '@shared/themes/themes'

export type ThemeContextType = {
	activeTheme: THEMES
	switchTheme: () => void
}

const initialContext: ThemeContextType = {
	activeTheme: THEMES.LIGHT,
	switchTheme: () => {},
}

const ThemeContext = createContext(initialContext)

export default ThemeContext
