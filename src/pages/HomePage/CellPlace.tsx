import React from 'react'
import { useTranslation } from 'react-i18next'

import { StyledCell } from './styles'

const CellPlace: React.FC = () => {
	const { t } = useTranslation(['homePage'])

	return (
		<StyledCell className="cell--place">
			<ul>
				<li>
					<b> {t('cells.place.city.text')}: </b>
					{t('cells.place.city.value')}
				</li>
				<li>
					<b> {t('cells.place.region.text')}: </b>
					{t('cells.place.region.value')}
				</li>
			</ul>
		</StyledCell>
	)
}

export default CellPlace
