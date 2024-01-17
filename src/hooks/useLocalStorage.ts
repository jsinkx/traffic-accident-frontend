import { useEffect, useRef, useState } from 'react'

const useLocalStorage = <T = any>(key: string, initialValue: T) => {
	const isMounted = useRef(false)

	const [item, setItem] = useState<T>(initialValue)

	// Выгрузка из localStorage
	useEffect(() => {
		isMounted.current = true

		try {
			const storageValue = window.localStorage.getItem(key)

			if (storageValue) {
				const parsedItem = JSON.parse(storageValue) as unknown as T

				setItem(parsedItem)
			}
		} catch {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Выгрузка в localStorage
	useEffect(() => {
		isMounted.current && window.localStorage.setItem(key, JSON.stringify(item))
	}, [item, key])

	return { item, setItem }
}

export default useLocalStorage
