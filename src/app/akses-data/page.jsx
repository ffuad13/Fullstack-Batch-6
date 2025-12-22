"use client"

import ShowPost from "@/components/ShowPostComponent";
import Button from '@mui/material/Button'
import {useRouter} from 'next/navigation'

export default function AksesDataPage() {
	const router = useRouter()
	return (
		<div>
			<Button variant="outlined" color="primary" onClick={() => router.push("/counter")} className="mb-4">
				Back to Counter
			</Button>
			<h1>Selamat Datang</h1>
			<ShowPost/>
		</div>
	)
}