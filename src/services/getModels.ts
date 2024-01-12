import { AxiosResponse } from 'axios'

import axios from '../shared/axios'

export type Model = {
	id: number
	name: string
	ru_name: string
}

export type ModelsResponse = Model[]

const getModels = async () => {
	const { data } = await axios.get<ModelsResponse, AxiosResponse<ModelsResponse>>('/forecast')

	return data
}
export default getModels
