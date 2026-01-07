"use client";

import { useState } from "react";
import CounterDisplay from "@/components/CounterComponent/CounterDisplay";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";
import {useRouter} from 'next/navigation'
import useAuthGuard from '@/hooks/useAuthGuard'


export default function CounterPage() {
  useAuthGuard()

	const router = useRouter()
  const { theme } = useTheme();
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("Fulan");

  const handleTambah = () => {
    setCount(count + 1);
    setNama("Amar");
  };

  const handleReset = () => {
    setCount(0);
    setNama("Tony");
  };


  let bgColor = theme === "light" ? `bg-gray-200` : `bg-gray-600`;
  const url = "akses-data";

	if (count === 15) {
		router.push(`${url}`)
	}

  return (
    <main className={`min-h-screen ${bgColor} flex flex-col items-center justify-center`}>
      <Container maxWidth="sm" className="text-center">
        <Typography variant="h3" component="h1" className="mb-6 font-bold text-gray-800">
          My Counter App
        </Typography>

        <CounterDisplay count={count} nama={nama} />

        <div className="flex gap-4 justify-center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="bg-blue-500 hover:bg-blue-700"
            onClick={handleTambah}>
            Tambah
          </Button>

          <Button variant="outlined" color="warning" size="large" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <div className="mt-6">
          <Link href={`/${url}`} passHref>
            <Button>Go to {url}</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
