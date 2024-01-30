import { Reducer } from 'react'

import { ForecastResultsReducerAction, ForecastResultsReducerState } from './types'

import ForecastResultsActions from './actions'

const forecastResultsReducer: Reducer<ForecastResultsReducerState, ForecastResultsReducerAction> = (
	state,
	action,
) => {
	switch (action.type) {
		case ForecastResultsActions.SET_FORECASTS:
			return {
				forecasts: [...state.forecasts, action.payload],
				lastForecast: action.payload,
				isLoadedFromCache: false, // Если ошибки нет, первое отображение прогноза не из кеша будет включено
				isLoading: false,
				error: null,
			}
		case ForecastResultsActions.SET_FORECASTS_RESULT_ERROR:
			return {
				...state,
				isLoadedFromCache: false,
				isLoading: false,
				error: action.payload,
			}
		case ForecastResultsActions.SET_CLEAR_FORECASTS_HISTORY:
			return {
				forecasts: [],
				lastForecast: null,
				isLoadedFromCache: false,
				isLoading: false,
				error: null,
			}
		default:
			return state
	}
}

export default forecastResultsReducer
