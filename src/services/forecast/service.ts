import { AxiosResponse } from 'axios'

import { ForecastBody, ForecastResponse } from './types'

import axios from '../../shared/axios'

const createForecast = async (params: ForecastBody) => {
	const { data } = await axios.post<ForecastResponse, AxiosResponse<ForecastResponse>, ForecastBody>(
		'/forecast',
		params,
	)

	return data
}
export default createForecast
