import { createContext } from 'react'

import { THEMES } from '../shared/themes'

const initialContext = {
	activeTheme: THEMES.LIGHT,
	switchTheme: () => {},
}

const ThemeContext = createContext(initialContext)

export default ThemeContext
