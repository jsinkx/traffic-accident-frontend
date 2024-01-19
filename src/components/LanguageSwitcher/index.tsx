import React from 'react'
import { useTranslation } from 'react-i18next'

import Check from '@mui/icons-material/Check'
import LanguageIcon from '@mui/icons-material/Language'
import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'

import { languages } from '../../shared/languages'

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation()

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const currentLang = i18n.language

	const isOpen = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleSelectLang = (lang: string) => {
		i18n.changeLanguage(lang)
		handleClose()
	}

	return (
		<div>
			<IconButton onClick={handleClick}>
				<LanguageIcon />
			</IconButton>
			<Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} MenuListProps={{}}>
				{languages.map(({ name, code }) => (
					<MenuItem key={code} onClick={() => handleSelectLang(code)}>
						{currentLang === code && (
							<ListItemIcon>
								<Check />
							</ListItemIcon>
						)}
						{name}
					</MenuItem>
				))}
			</Menu>
		</div>
	)
}

export default LanguageSwitcher
