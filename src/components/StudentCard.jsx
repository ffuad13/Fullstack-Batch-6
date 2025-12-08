import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'

export default function StudentCard({nama, role, statusAktif, score}) {
	return (
		<Card className='p-4 m-4 shadow-lg border border-gray-200'>
			<h2 className='text-xl font-bold text-blue-500'>{nama}</h2>
			<p className='text-gray-500 text-sm uppercase tracking-wide'>{role}</p>

			<Chip label={statusAktif ? "Aktif" : "Nonaktif"} color={statusAktif ? "success" : "warning"}/>
			{score !== undefined && (
				<div>
					<p>Score: {score}</p>
				</div>
			)}
		</Card>
	)
}