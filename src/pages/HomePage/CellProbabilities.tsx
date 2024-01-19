import React from 'react'
import { useTranslation } from 'react-i18next'

import Piechart from './Piechart'
import { StyledCell } from './styles'

type CellProbabilitiesProps = {
	isLoading: boolean
	probabilities: [number, number]
}

const CellProbabilities: React.FC<CellProbabilitiesProps> = ({ isLoading, probabilities }) => {
	const { t } = useTranslation(['homePage'])

	return (
		<StyledCell className="cell--probabilities" width="330px" height="450px" isLoading={isLoading}>
			<h2> {t('cells.probabilities.title')}</h2>
			<Piechart probabilities={probabilities} />
		</StyledCell>
	)
}

export default CellProbabilities
