import { AxiosResponse } from 'axios'

import { ModelsResponse } from './types'

import axios from '../../shared/axios'

const getModels = async () => {
	const { data } = await axios.get<ModelsResponse, AxiosResponse<ModelsResponse>>('/forecast')

	return data
}
export default getModels
