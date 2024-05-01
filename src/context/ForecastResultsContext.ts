import { Dispatch, createContext } from 'react'

import { ForecastResults, ForecastResultsReducerAction } from '@reducers/forecast/forecast-results/types'

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
		isLoadedFromCache: true, // The flag for loading from the cache (localStorage). It is necessary not to display some cells when receiving data from the cache
	},
	setResults: () => {},
}

const ForecastResultsContext = createContext(initialForecastResultsContext)

export default ForecastResultsContext
