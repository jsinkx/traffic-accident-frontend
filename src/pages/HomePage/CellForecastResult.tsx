import React from 'react'
import { MoonLoader } from 'react-spinners'

import Colors from '../../shared/colors'

import { ForecastResponse } from '../../services/createForecast'

import ForecastAccidentResult from './ForecastAccidentResult'
import { StyledCell } from './styles'

type CellForecastResultProps = {
	isLoading: boolean
	lastForecast: ForecastResponse
}

const CellForecastResult: React.FC<CellForecastResultProps> = ({ isLoading, lastForecast }) => {
	return (
		<StyledCell className="cell--forecast__result" width="330px" isLoading={isLoading}>
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
					<h2> Результат прогноза </h2>
					<span className="forecast_result">
						<ForecastAccidentResult isAccident={lastForecast.predicted_class === 1} />
					</span>
					<span className="forecast_probabilities">
						<code>{(lastForecast.predicted_probabilities[lastForecast.predicted_class]! * 100).toFixed(3)}%</code>
					</span>
				</>
			)}
		</StyledCell>
	)
}

export default CellForecastResult
