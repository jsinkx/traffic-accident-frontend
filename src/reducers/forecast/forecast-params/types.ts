import { ForecastBody } from '../../../services/forecast/types'

import ForecastParamsActions from './actions'

export type ForecastParamsReducerState = ForecastBody
export type ForecastParamsReducerAction =
	| {
			type: ForecastParamsActions
			payload: number
	  }
	| {
			type: ForecastParamsActions.SET_SEASON
			payload: string
	  }
