import { ForecastResponse } from '../../../services/forecast/types'

import { CreateForecastError } from '../../../hooks/useCreateForecast'

import ForecastResultsActions from './actions'

export type ForecastResults = {
	lastForecast: ForecastResponse | null
	forecasts: ForecastResponse[]
	error: CreateForecastError | null
	isLoading: boolean
	isLoadedFromCache: boolean
}

export type ForecastResultsReducerAction =
	| {
			type: ForecastResultsActions.SET_FORECASTS
			payload: ForecastResponse
	  }
	| {
			type: ForecastResultsActions.SET_CLEAR_FORECASTS_HISTORY
	  }
	| {
			type: ForecastResultsActions.SET_FORECASTS_RESULT_ERROR
			payload: CreateForecastError
	  }

export type ForecastResultsReducerState = ForecastResults
