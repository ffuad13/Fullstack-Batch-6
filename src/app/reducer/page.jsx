"use client";

import { useReducer, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import { initialState, reducer } from "@/libs/counterReducer";
import useLocalStorage from "@/utils/useLocalStorage";

export default function ReducerPage() {
	const [savedState, setSavedState] = useLocalStorage("reducerState", initialState)
  const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({type: "setAll", payload: savedState})
	}, [])

	useEffect(() => {
		setSavedState(state)
	}, [state, setSavedState])


  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        state.theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}>
      <Paper elevation={3} className="p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Contoh UseReducer</h1>
        <div className="mb-4 flex items-center gap-2">
          <Button variant="contained" onClick={() => dispatch({ type: "decrement" })}>
            Decrement (-)
          </Button>
          <span className="text-xl">{state.count}</span>
          <Button variant="contained" onClick={() => dispatch({ type: "increment" })}>
            Increment (+)
          </Button>
        </div>
        <TextField
          label="Nama"
          value={state.nama}
          onChange={(event) => dispatch({ type: "setNama", payload: event.target.value })}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Age"
          type="number"
          value={state.age}
          onChange={(event) => dispatch({ type: "setAge", payload: event.target.value })}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Email"
          type="email"
          value={state.email}
          onChange={(event) => dispatch({ type: "setEmail", payload: event.target.value })}
          fullWidth
          className="mb-4"
        />
        <FormControlLabel
          control={<Switch checked={state.isActive} onChange={() => dispatch({ type: "toggleActive" })} />}
          label="Active"
        />
        <div className="mt-4">
          <Button variant="outlined" onClick={() => dispatch({ type: "toggleTheme" })}>
            Ganti Warna ({state.theme})
          </Button>
        </div>
        <div className="mt-6 p-4 rounded bg-gray-200 text-gray-800">
          <div>
            <b>State Preview:</b>
          </div>
          <pre className="text-sm">{JSON.stringify(state, null, 2)}</pre>
        </div>
      </Paper>
    </div>
  );
}
