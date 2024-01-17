import React from 'react'

import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material/styles'

import moment from 'moment'
import { ThemeProvider } from 'styled-components'

import ThemeContext from '../../context/ThemeContext'

import { THEMES, darkTheme, lightTheme } from '../../shared/themes'

import useLocalStorage from '../../hooks/useLocalStorage'

type ThemesProps = {
	children: React.ReactNode
}

const currentHour = Number(moment().format('H'))

const Themes: React.FC<ThemesProps> = ({ children }) => {
	const themeByTime = currentHour >= 18 || currentHour <= 8 ? THEMES.DARK : THEMES.LIGHT

	const { item: activeTheme, setItem: setActiveTheme } = useLocalStorage('theme', themeByTime)

	const switchTheme = React.useCallback(
		() => setActiveTheme(activeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT),
		[activeTheme, setActiveTheme],
	)

	// Объекты тем

	const themeStyledComponents = activeTheme === THEMES.LIGHT ? lightTheme : darkTheme

	const themeMUI = createTheme({
		palette: {
			mode: activeTheme === THEMES.LIGHT ? 'light' : 'dark',
		},
	})

	return (
		<ThemeContext.Provider
			value={React.useMemo(() => ({ activeTheme, switchTheme }), [activeTheme, switchTheme])}
		>
			<ThemeProvider theme={themeStyledComponents}>
				<ThemeProviderMUI theme={themeMUI}>{children}</ThemeProviderMUI>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export default Themes