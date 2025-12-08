"use client"

import {useState} from 'react'
import CounterDisplay from '@/components/CounterComponent/CounterDisplay'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


export default function CounterPage() {
	const [count, setCount] = useState(0)
	const [nama, setNama] = useState("Fulan")

	const handleTambah = () => {
		setCount(count + 1)
		setNama("Amar")
	}

	const handleReset =  () => {
		setCount(0)
		setNama("Tony")
	}

	return (
		<main className='min-h-screen bg-gray-200 flex flex-col items-center justify-center'>
			<Container maxWidth="sm" className='text-center'>
				<Typography variant='h3' component="h1" className='mb-6 font-bold text-gray-800'>
					My Counter App
				</Typography>

			<CounterDisplay count={count} nama={nama}/>

			<div className='flex gap-4 justify-center'>
				<Button variant='contained' color='primary' size='large' className='bg-blue-500 hover:bg-blue-700' onClick={handleTambah}>
					Tambah
				</Button>

				<Button variant='outlined' color='warning' size='large' onClick={handleReset}>
					Reset
				</Button>
			</div>
			</Container>
		</main>
	)
}