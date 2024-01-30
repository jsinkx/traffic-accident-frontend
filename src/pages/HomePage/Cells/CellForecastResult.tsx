import React from 'react'
import { useTranslation } from 'react-i18next'
import { MoonLoader } from 'react-spinners'

import ForecastResultsContext from '../../../context/ForecastResultsContext'

import Colors from '../../../shared/colors'

import ForecastAccidentResult from '../ForecastAccidentResult'
import { StyledCell } from '../styles'

const CellForecastResult: React.FC = () => {
	const { t } = useTranslation(['homePage'])

	const {
		results: { lastForecast, forecasts, isLoading, isLoadedFromCache },
	} = React.useContext(ForecastResultsContext)

	return forecasts.length > 0 && !isLoadedFromCache ? (
		<StyledCell
			$isAccident={forecasts.length > 0 ? lastForecast?.predicted_class! : -1}
			className="cell--forecast__result"
			width="330px"
			isLoading={isLoading}
		>
			{isLoading ? (
				<MoonLoader
					color={Colors.BLUE}
					speedMultiplier={0.9}
					size={100}
					cssOverride={{
						marginTop: '30px',
					}}
				/>
			) : (
				<>
					<h2> {t('cells.forecastResult.title')}</h2>
					<span className="forecast_result">
						<ForecastAccidentResult isAccident={lastForecast!.predicted_class === 1} />
					</span>
					<span className="forecast_probabilities">
						<code>{(lastForecast!.predicted_probabilities[lastForecast!.predicted_class]! * 100).toFixed(3)}%</code>
					</span>
				</>
			)}
		</StyledCell>
	) : null
}

export default CellForecastResult
