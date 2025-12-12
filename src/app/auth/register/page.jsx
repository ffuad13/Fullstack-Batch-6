"use client";

//controlled form component
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function RegisterPage() {
  // state form
	let formInitialState = {
    nama: "",
    username: "",
    email: "",
    password: "",
  };
	
  const [form, setForm] = useState(formInitialState);

  // fungsi handle input
  function handleChange(event) {
		// console.info(event.target.name, event.target.value)
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  // fungsi submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <TextField label="Nama" name="nama" value={form.nama} onChange={handleChange} fullWidth />
      <TextField label="Username" name="username" value={form.username} onChange={handleChange} fullWidth />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} type="email" fullWidth />
      <TextField
        label="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
        type="password"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" className="w-full">
        Daftar Sekarang
      </Button>
    </form>
  );
}
