import React from 'react'

import AppleBoomEmoji from '../../assets/images/apple-boom.png'
import AppleLikeEmoji from '../../assets/images/apple-like.png'

import { StyledIcon } from './styles'

type ForecastAccidentResultProps = {
	isAccident: boolean
}

const ForecastAccidentResult: React.FC<ForecastAccidentResultProps> = ({ isAccident }) => {
	return isAccident ? (
		<span className="forecast__result--text">
			<StyledIcon size="20px" src={AppleBoomEmoji} alt="💥" /> ДТП будет
		</span>
	) : (
		<span className="forecast__result--text">
			<StyledIcon size="20px" src={AppleLikeEmoji} alt="👍" /> ДТП не будет
		</span>
	)
}

export default ForecastAccidentResult
