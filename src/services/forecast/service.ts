import { AxiosResponse } from 'axios'

import axios from '@shared/axios'

import { ForecastBody, ForecastResponse } from './types'

const createForecast = async (params: ForecastBody) => {
	const { data } = await axios.post<ForecastResponse, AxiosResponse<ForecastResponse>, ForecastBody>(
		'/forecast',
		params,
	)

	return data
}
export default createForecast
