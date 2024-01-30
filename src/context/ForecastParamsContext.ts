import { Dispatch, createContext } from 'react'

import moment from 'moment'

import { ForecastParamsReducerAction } from '../reducers/forecast/forecast-params/types'
import { ForecastBody } from '../services/forecast/types'

export type ForecastParamsContextType = {
	params: ForecastBody
	setParams: Dispatch<ForecastParamsReducerAction>
}

export const initialForecastParamsContext: ForecastParamsContextType = {
	params: {
		model_id: 0,
		options: {
			temperature: 1.9,
			atmospheric_pressure: 752.4,
			humidity: 96,
			wind_speed: 2,
			cloudiness: 1.0,
			hour: moment().hour(),
			season_winter: 1,
			season_spring: 0,
			season_summer: 0,
			season_autumn: 0,
		},
	},
	setParams: () => {},
}

const ForecastParamsContext = createContext(initialForecastParamsContext)

export default ForecastParamsContext
