"use client";

import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import IfElseComponent from "@/components/conditional/IfElseComponent";
import TernaryComponent from "@/components/conditional/TernaryComponent";

export default function Pertemuan14Page() {
  const [score, setScore] = useState(0);
	const [kondisi, setKondisi] = useState(true)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Typography variant="h3" className="text-center mb-2 font-bold text-gray-800">
          Student Grade Calculator
        </Typography>
        <Typography variant="subtitle1" className="text-center mb-8 text-gray-600">
          If-else Conditional Rendering
        </Typography>

        {/* Hasil import component */}
        {kondisi ? <IfElseComponent score={score} /> : <TernaryComponent score={score} />}

        <Box className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button variant="contained" color="info" onClick={() => setScore(95)}>
            Nilai 95
          </Button>
          <Button variant="contained" color="info" onClick={() => setScore(90)}>
            Nilai 90
          </Button>
          <Button variant="contained" color="info" onClick={() => setScore(85)}>
            Nilai 85
          </Button>
          <Button variant="contained" color="info" onClick={() => setScore(80)}>
            Nilai 80
          </Button>
          <Button variant="contained" color="info" onClick={() => setScore(75)}>
            Nilai 75
          </Button>
          <Button variant="contained" color="info" onClick={() => setScore(65)}>
            Nilai 65
          </Button>
          <Button variant="contained" color="info" onClick={() => setScore(50)}>
            Nilai 50
          </Button>
          {score >= 65 && <Button variant="contained" color="info" onClick={() => setKondisi((prev) => !prev)}>
            Ubah Kondisi
          </Button>}
        </Box>
      </div>
    </div>
  );
}
