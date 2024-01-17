import React from 'react'

import Paths from '../../shared/paths'

import AppleBoomEmoji from '../../assets/images/apple-boom.png'
import AppleRainEmoji from '../../assets/images/apple-rain.png'
import AppleRedCarEmoji from '../../assets/images/apple-red-car.png'
import ThemeSwitcher from '../ThemeSwitcher.tsx'

import StyledHeader, { StyledIcon, StyledLink } from './styles'

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<div className="header__left">
				<StyledLink to={Paths.home}>
					<h1> Прогнозирование ДТП </h1>
				</StyledLink>
				<StyledIcon src={AppleRedCarEmoji} alt="🚘" />
				<StyledIcon src={AppleRainEmoji} alt="🌧" />
				<StyledIcon src={AppleBoomEmoji} alt="💥" />
				<code> v1.2.2 </code>
			</div>
			<div className="header__right">
				<ThemeSwitcher />
			</div>
		</StyledHeader>
	)
}

export default React.memo(Header)
