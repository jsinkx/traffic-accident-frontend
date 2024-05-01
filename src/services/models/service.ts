import { AxiosResponse } from 'axios'

import axios from '@shared/axios'

import { ModelsResponse } from './types'

const getModels = async () => {
	const { data } = await axios.get<ModelsResponse, AxiosResponse<ModelsResponse>>('/forecast')

	return data
}
export default getModels
