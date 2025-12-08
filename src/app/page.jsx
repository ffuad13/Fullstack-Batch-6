import StudentCard from '@/components/StudentCard'

const dataPeserta = [
  { id: 1, nama: "Faizul", role: "Fullstack Developer", statusAktif: true, score: 85, catatan: "Suka ngoding!" },
  { id: 2, nama: "Mark", role: "Backend Developer", statusAktif: true, score: 85, catatan: "Suka ngoding!" },
  { id: 3, nama: "Angela", role: "Frontend Developer", statusAktif: true, score: 85, catatan: "Suka ngoding!" },
  { id: 4, nama: "Hafzan", role: "Fullstack Developer", statusAktif: false, score: 85, catatan: "Suka ngoding!" },
  { id: 5, nama: "Rino", role: "QA Enginner", statusAktif: true, score: 85, catatan: "Suka ngoding!" },
  { id: 6, nama: "Rani", role: "DevOps Engineer", statusAktif: true, score: 90, catatan: "Suka Ngoprek!" },
]

function TextKomponen({pesan, pesan2}) {
  return (
    <div className='text-center text-black'>Ini text {pesan}</div>
  )
}

function fungsiBiasa() {
  return "Halo juga"
}

export default function HomePage() {
  let resultCard = []

  for (let i = 0; i < dataPeserta.length; i++) {
    const peserta = dataPeserta[i]

    resultCard.push(
      <StudentCard key={peserta.id} nama={peserta.nama} role={peserta.role} statusAktif={peserta.statusAktif} score={peserta.score} />
    )
  }

  return (
    <main className="min-h-screen bg-gray-200 p-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-800">Bootcamp Dashboard</h1>
      {resultCard}
      <TextKomponen pesan={fungsiBiasa()} pesan2={"Halo Bandung"}/>
    </main>
  )
}