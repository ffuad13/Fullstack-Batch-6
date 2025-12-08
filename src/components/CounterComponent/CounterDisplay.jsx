import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

export default function CounterDisplay({count, nama}) {
	return (
		<Paper elevation={3} className='p-10 mb-8 flex flex-col items-center justify-center bg-blue-50 border-2 border-blue-200'>
			<Typography variant='h6' className='text-gray-500 mb-2'>
				Current Count
			</Typography>

			<Typography variant='h1' className='font-bold text-blue-600'>
				{count} || {nama}
			</Typography>
		</Paper>
	)
}