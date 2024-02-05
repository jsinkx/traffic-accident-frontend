import React from 'react'
import { useTranslation } from 'react-i18next'

import Paths from '../../shared/paths'

import AppleBoomEmoji from '../../assets/images/apple-boom.webp'
import AppleRainEmoji from '../../assets/images/apple-rain.webp'
import AppleRedCarEmoji from '../../assets/images/apple-red-car.webp'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeSwitcher from '../ThemeSwitcher'

import StyledHeader, { StyledIcon, StyledLink } from './styles'

type HeaderProps = React.ComponentPropsWithoutRef<'header'>

const Header: React.FC<HeaderProps> = (props) => {
	const { t } = useTranslation(['header'])

	return (
		<StyledHeader {...props}>
			<div className="header__left">
				<StyledLink to={Paths.home}>
					<h1> {t('title')} </h1>
				</StyledLink>
				<StyledIcon src={AppleRedCarEmoji} alt="🚘" />
				<StyledIcon src={AppleRainEmoji} alt="🌧" />
				<StyledIcon src={AppleBoomEmoji} alt="💥" />
				<code> v1.3.0 </code>
			</div>
			<div className="header__right">
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</StyledHeader>
	)
}

export default React.memo(Header)
