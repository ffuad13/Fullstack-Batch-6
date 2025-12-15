"use client";

import { useState } from "react";
import Button from '@mui/material/Button'
import LifecycleComponent from "@/components/lifeCycle/LifeCycleComponent";

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
