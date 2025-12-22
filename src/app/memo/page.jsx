"use client";

import { useState, useMemo, memo, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function expensiveFibonacci(n) {
  if (n <= 1) return n;

  return expensiveFibonacci(n - 1) + expensiveFibonacci(n - 2);
}

const ExpensiveComponent = memo(function ExpensiveComponent({ num }) {
  const result = useMemo(() => expensiveFibonacci(num), [num]);
	// const result = expensiveFibonacci(num)

  return (
    <div className="mt-4 p-4 border rounded bg-white shadow">
      <p className="text-lg font-semibold">Fibonacci dari {num} is:</p>
      <p className="text-2xl text-blue-600">{result}</p>
    </div>
  );
});

export default function MemoPage() {
  const [number, setNumber] = useState(35);
  const [inputValue, setInputValue] = useState(35);

	const handleCalculate = useCallback(() => {
		setNumber(inputValue)
	}, [inputValue])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Memoization Demo</h1>
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <TextField
          label="Fibonacci Number"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          inputProps={{ min: 1, max: 40 }}
          className="w-full"
        />
        <Button variant="contained" color="primary" onClick={handleCalculate} className="w-full">
          Kalkulasi
        </Button>

        <ExpensiveComponent num={number} />
      </div>
    </main>
  );
}
