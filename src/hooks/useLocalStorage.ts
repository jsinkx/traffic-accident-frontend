import { useEffect, useRef, useState } from 'react'

const serializeItem = <T>(key: string, initialValue: T): T => {
	try {
		const storageValue = window.localStorage.getItem(key)

		if (storageValue) return JSON.parse(storageValue) as unknown as T
		throw Error()
	} catch {
		return initialValue
	}
}

const useLocalStorage = <T = any>(key: string, initialValue: T) => {
	const isMounted = useRef(false)

	const [item, setItem] = useState<T>(initialValue)

	// Выгрузка в localStorage
	useEffect(() => {
		isMounted.current && window.localStorage.setItem(key, JSON.stringify(item))
	}, [item, key])

	// Выгрузка из localStorage
	useEffect(() => {
		isMounted.current = true

		setItem(serializeItem(key, initialValue))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key])

	return { item: !isMounted.current ? serializeItem(key, initialValue) : item, setItem }
}

export default useLocalStorage
