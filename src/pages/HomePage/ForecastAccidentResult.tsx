import React from 'react'
import { useTranslation } from 'react-i18next'

import AppleBoomEmoji from '../../assets/images/apple-boom.png'
import AppleLikeEmoji from '../../assets/images/apple-like.png'

import { StyledIcon } from './styles'

type ForecastAccidentResultProps = {
	isAccident: boolean
}

const ForecastAccidentResult: React.FC<ForecastAccidentResultProps> = ({ isAccident }) => {
	const { t } = useTranslation(['homePage'])

	return isAccident ? (
		<span className="forecast__result--text">
			<StyledIcon size="20px" src={AppleBoomEmoji} alt="💥" /> {t('accidentWillBe')}
		</span>
	) : (
		<span className="forecast__result--text">
			<StyledIcon size="20px" src={AppleLikeEmoji} alt="👍" />
			{t('noAccident')}
		</span>
	)
}

export default ForecastAccidentResult
