import React, { useContext } from 'react'

import DarkModeIcon from '@mui/icons-material/NightlightRound'
import LightModeIcon from '@mui/icons-material/WbSunny'
import { IconButton } from '@mui/material'

import ThemeContext from '../../context/ThemeContext'

import THEMES from '../../shared/themes/themes'

type ThemeSwitcherProps = {
	className?: string
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
	const { activeTheme, switchTheme } = useContext(ThemeContext)

	return (
		<IconButton onClick={switchTheme} aria-label="theme switcher">
			{activeTheme === THEMES.LIGHT ? (
				<LightModeIcon className={className} />
			) : (
				<DarkModeIcon className={className} />
			)}
		</IconButton>
	)
}

export default ThemeSwitcher
