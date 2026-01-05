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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // fungsi handle input
  function handleChange(event) {
    // console.info(event.target.name, event.target.value)
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  // fungsi submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.nama,
          userName: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registrasi failed");
      }

      setSuccess(data.message);
      setForm(formInitialState);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <TextField label="Fullname" name="nama" value={form.nama} onChange={handleChange} fullWidth />
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
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
      <Button type="submit" variant="contained" color="primary" className="w-full" disabled={loading}>
        {loading ? "Sedang mengirim..." : "Daftar Sekarang"}
      </Button>
    </form>
  );
}
