"use client";

import { useState, useEffect } from "react";
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

function LifecycleComponent() {
  const [count, setCount] = useState(0);
	const [logs, setLogs] = useState([])


  // componentDidMount: runs once after initial render
  useEffect(() => {
		setLogs((prev) => [
      ...prev,
      "Komponen dimount pertama kali (componentDidMount)",
      "Ambil data dari NASA, lalu tampilkan",
    ]);
  }, []);

  useEffect(() => {
    if (count === 0) return;

    setLogs((prev) => [...prev, `Count Updated: ${count} (componentDidUpdate)`]);
  }, [count]);

  useEffect(() => {
    return () => {
			alert("Komponen akan di-unmount")
      console.info("Komponen ditarik (componentWillUnmount)");
    };
  }, []);

  return (
    <div className="bg-white rounded shadow p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-gray-500">Lifecycle Demo Component</h2>
      <p className="mb-4 text-gray-500">
        Count: <span className="font-mono">{count}</span>
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => setCount(count + 1)}>Increment</button>

			<div>
				{logs.map((log, idx) => (
					<Alert key={idx} severity="info" sx={{mb: 1}}>
						{log}
					</Alert>
				))}
			</div>
    </div>
  );
}

export default function LifecycleDemoPage() {
	const [showComponent, setShowComponent] = useState(true) //awalnya false jadi true

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">React lifecycle demo</h1>

			<Button variant="outlined" color="secondary" onClick={() => setShowComponent((prev) => !prev)}>
				{showComponent ? "Lepaskan komponen" : "Pasang komponen kembali"}
			</Button>

			{showComponent && <LifecycleComponent />}
    </div>
  );
}
