"use client"

import {useState, useEffect} from 'react'

export default function useLocalStorage(key, initialValue) {
	const readValue = () => {
		if (typeof window === "undefined") return initialValue

		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			return initialValue
		}
	}

	const [storedValue, setStoredValue] = useState(readValue)

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, JSON.stringify(storedValue))
		}
	}, [key, storedValue])

	return [storedValue, setStoredValue]
}