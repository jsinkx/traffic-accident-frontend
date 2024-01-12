import React from 'react'

import Paths from '../../shared/paths'

import AppleBoomEmoji from '../../assets/images/apple-boom.png'
import AppleRainEmoji from '../../assets/images/apple-rain.png'
import AppleRedCarEmoji from '../../assets/images/apple-red-car.png'

import StyledHeader, { StyledIcon, StyledLink } from './styles'

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<StyledLink to={Paths.home}>
				<h1> Прогнозирование ДТП </h1>
			</StyledLink>
			<StyledIcon src={AppleRedCarEmoji} alt="🚘" />
			<StyledIcon src={AppleRainEmoji} alt="🌧" />
			<StyledIcon src={AppleBoomEmoji} alt="💥" />
			<code> v1.2.0 </code>
		</StyledHeader>
	)
}

export default React.memo(Header)
