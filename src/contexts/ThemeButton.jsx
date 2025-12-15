"use client"

import {useTheme} from '@/contexts/ThemeContext'
import { Button } from '@mui/material'

export default function ThemeButton() {
	const {theme, toggleTheme} = useTheme()

	return (
		<Button onClick={toggleTheme} className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700'>
			Ubah tema menjadi {theme === "light" ? "Dark" : "Light"} Mode
		</Button>
	)
}