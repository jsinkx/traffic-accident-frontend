import React, { useContext } from 'react'

import ThemeContext from '@context/ThemeContext'

import THEMES from '@shared/themes/themes'

import DarkModeIcon from '@mui/icons-material/NightlightRound'
import LightModeIcon from '@mui/icons-material/WbSunny'
import { IconButton, IconButtonOwnProps } from '@mui/material'

type ThemeSwitcherProps = IconButtonOwnProps & {
	className?: string
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '', ...props }) => {
	const { activeTheme, switchTheme } = useContext(ThemeContext)

	return (
		<IconButton onClick={switchTheme} aria-label="theme switcher" {...props}>
			{activeTheme === THEMES.LIGHT ? (
				<LightModeIcon className={className} />
			) : (
				<DarkModeIcon className={className} />
			)}
		</IconButton>
	)
}

export default ThemeSwitcher
