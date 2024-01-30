import { Dispatch, createContext } from 'react'

import { ForecastResults, ForecastResultsReducerAction } from '../reducers/forecast/forecast-results/types'

export type ForecastResultsContextType = {
	results: ForecastResults
	setResults: Dispatch<ForecastResultsReducerAction>
}

export const initialForecastResultsContext: ForecastResultsContextType = {
	results: {
		lastForecast: null,
		forecasts: [],
		error: null,
		isLoading: false,
		isLoadedFromCache: true, // Флаг загрузки из кеша (localStorage). Нужен, чтобы не отображать некоторые ячейки, при получении данных из кеша
	},
	setResults: () => {},
}

const ForecastResultsContext = createContext(initialForecastResultsContext)

export default ForecastResultsContext
