import { useEffect, useState } from 'react'

import getModels from '@services/models/service'
import { Model } from '@services/models/types'

const useGetModels = () => {
	const [models, setModels] = useState<Model[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState({
		message: '',
		isDisplay: false,
	})

	useEffect(() => {
		const fetchModels = async () => {
			setIsLoading(true)

			try {
				setModels(await getModels())
				setError({
					message: '',
					isDisplay: false,
				})
			} catch (err) {
				setError({
					message: 'Произошла ошибка при получении списка моделей!',
					isDisplay: true,
				})
			}

			setIsLoading(false)
		}

		fetchModels()
	}, [])

	return {
		models,
		isLoading,
		error,
	}
}

export default useGetModels
