"use client"

import {useTheme} from '@/contexts/ThemeContext'
import { Button } from '@mui/material'

export default function ThemeButton() {
	const {theme, toggleTheme} = useTheme()

	return (
		<Button variant="contained" onClick={toggleTheme} className='py-2 px-4 rounded'>
			{theme === "light" ? "Dark" : "Light"} Mode
		</Button>
	)
}