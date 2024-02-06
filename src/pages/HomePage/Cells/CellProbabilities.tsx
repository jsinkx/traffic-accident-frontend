import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import ForecastResultsContext from '../../../context/ForecastResultsContext'

import Piechart from '../Piechart'
import { StyledCell } from '../styles'

const CellProbabilities: React.FC = () => {
	const { t } = useTranslation(['homePage'])

	const {
		results: { lastForecast, forecasts, isLoading, isLoadedFromCache },
	} = useContext(ForecastResultsContext)

	return forecasts.length > 0 && !isLoadedFromCache ? (
		<StyledCell className="cell--probabilities" width="330px" height="450px" isLoading={isLoading}>
			<h2> {t('cells.probabilities.title')}</h2>
			<Piechart probabilities={lastForecast!.predicted_probabilities} />
		</StyledCell>
	) : null
}

export default CellProbabilities
