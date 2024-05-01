import React, { useCallback, useMemo } from 'react'

import moment from 'moment'
import { ThemeProvider } from 'styled-components'

import ThemeContext from '@context/ThemeContext'

import darkTheme from '@shared/themes/dark-theme'
import lightTheme from '@shared/themes/light-theme'
import THEMES from '@shared/themes/themes'

import useLocalStorage from '@hooks/useLocalStorage'

import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material/styles'

type ThemesProps = {
	children: React.ReactNode
}

const currentHour = Number(moment().format('H')) // hour from 0 to 23

const ThemeProviders: React.FC<ThemesProps> = ({ children }) => {
	const themeByTime = currentHour >= 18 || currentHour <= 8 ? THEMES.DARK : THEMES.LIGHT

	const { item: activeTheme, setItem: setActiveTheme } = useLocalStorage('theme', themeByTime)

	// Setting up the current (working) themes

	const themeStyledComponents = activeTheme === THEMES.LIGHT ? lightTheme : darkTheme

	const themeMUI = createTheme({
		palette: {
			mode: activeTheme === THEMES.LIGHT ? 'light' : 'dark',
		},
	})

	// Context
	const switchTheme = useCallback(
		() => setActiveTheme(activeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT),
		[activeTheme, setActiveTheme],
	)

	const themeValue = useMemo(() => ({ activeTheme, switchTheme }), [activeTheme, switchTheme])

	return (
		<ThemeContext.Provider value={themeValue}>
			<ThemeProvider theme={themeStyledComponents}>
				<ThemeProviderMUI theme={themeMUI}>{children}</ThemeProviderMUI>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProviders
