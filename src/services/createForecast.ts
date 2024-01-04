import { AxiosResponse } from 'axios'

import axios from '../shared/axios'

type ForecastBody = {
	temperature: number
	atmospheric_pressure: number
	humidity: number
	wind_speed: number
	cloudiness: number
	hour: number
	season_autumn: number
	season_spring: number
	season_summer: number
	season_winter: number
}[]

export type ForecastResponse = {
	forecasted_values: number[]
}

const createForecast = async (params: ForecastBody) => {
	try {
		const { data } = await axios.post<ForecastResponse, AxiosResponse<ForecastResponse>, ForecastBody>(
			'/forecast',
			params,
		)

		return data.forecasted_values
	} catch (err) {
		return []
	}
}
export default createForecast
