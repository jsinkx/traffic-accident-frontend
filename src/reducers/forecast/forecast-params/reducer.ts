import { Reducer } from 'react'

import { ForecastParamsReducerAction, ForecastParamsReducerState } from './types'

import ForecastParamsActions from './actions'

const forecastParamsReducer: Reducer<ForecastParamsReducerState, ForecastParamsReducerAction> = (
	state,
	action,
) => {
	switch (action.type) {
		case ForecastParamsActions.SET_MODEL_ID:
			return { ...state, model_id: action.payload }
		case ForecastParamsActions.SET_TEMPERATURE:
			return {
				...state,
				options: {
					...state.options,
					temperature: action.payload,
				},
			}
		case ForecastParamsActions.SET_ATMOSPHERIC_PRESSURE:
			return {
				...state,
				options: {
					...state.options,
					atmospheric_pressure: action.payload,
				},
			}
		case ForecastParamsActions.SET_HUMIDITY:
			return {
				...state,
				options: {
					...state.options,
					humidity: action.payload,
				},
			}
		case ForecastParamsActions.SET_WIND_SPEED:
			return {
				...state,
				options: {
					...state.options,
					wind_speed: action.payload,
				},
			}
		case ForecastParamsActions.SET_CLOUDINESS:
			return {
				...state,
				options: {
					...state.options,
					cloudiness: action.payload,
				},
			}
		case ForecastParamsActions.SET_HOUR:
			return {
				...state,
				options: {
					...state.options,
					hour: action.payload,
				},
			}
		case ForecastParamsActions.SET_SEASON:
			return {
				...state,
				options: {
					...state.options,
					season_winter: Number(action.payload === 'winter'),
					season_spring: Number(action.payload === 'spring'),
					season_summer: Number(action.payload === 'summer'),
					season_autumn: Number(action.payload === 'autumn'),
				},
			}
		default:
			return state
	}
}

export default forecastParamsReducer
