import { useState } from 'react'

import { AxiosError } from 'axios'

import createForecastQuery, {
	ForecastBody,
	ForecastError,
	ForecastResponse,
} from '../services/createForecast'

const useCreateForecast = () => {
	const [newForecast, setNewForecast] = useState<ForecastResponse>()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState({
		message: '',
		isDisplay: false,
	})

	const createForecast = async (params: ForecastBody) => {
		setIsLoading(true)

		try {
			setNewForecast(await createForecastQuery(params))

			setError({
				message: '',
				isDisplay: false,
			})
		} catch (err) {
			const axiosError = err as AxiosError<ForecastError>

			let message = axiosError.message

			if (axiosError.response?.data.message) {
				message = axiosError.response.data.message
			}

			setError({
				message,
				isDisplay: true,
			})
		}

		setIsLoading(false)
	}

	return {
		createForecast: (params: ForecastBody) => createForecast(params),
		newForecast,
		isLoading,
		error,
	}
}

export default useCreateForecast
