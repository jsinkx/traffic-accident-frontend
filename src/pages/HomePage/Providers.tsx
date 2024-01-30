import React from 'react'

import { ForecastResponse } from '../../services/forecast/types'

import ForecastParamsContext, { initialForecastParamsContext } from '../../context/ForecastParamsContext'
import ForecastResultsContext, { initialForecastResultsContext } from '../../context/ForecastResultsContext'

import useLocalStorage from '../../hooks/useLocalStorage'

import forecastReducer from '../../reducers/forecast/forecast-params/reducer'
import forecastResultsReducer from '../../reducers/forecast/forecast-results/reducer'

type ProvidersProps = {
	children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
	const { item: forecastsCached } = useLocalStorage<ForecastResponse[]>('forecasts', [])

	// Params
	const [forecastParamsState, forecastParamsDispatch] = React.useReducer(
		forecastReducer,
		initialForecastParamsContext.params,
	)

	const forecastParamsValue = React.useMemo(
		() => ({ params: forecastParamsState, setParams: forecastParamsDispatch }),
		[forecastParamsState],
	)

	// Results
	const [forecastResultsState, forecastResultsDispatch] = React.useReducer(forecastResultsReducer, {
		...initialForecastResultsContext.results,
		forecasts: forecastsCached,
	})

	const forecastResultsValue = React.useMemo(
		() => ({
			results: forecastResultsState,
			setResults: forecastResultsDispatch,
		}),
		[forecastResultsState],
	)

	return (
		<ForecastParamsContext.Provider value={forecastParamsValue}>
			<ForecastResultsContext.Provider value={forecastResultsValue}>{children}</ForecastResultsContext.Provider>
		</ForecastParamsContext.Provider>
	)
}

export default Providers