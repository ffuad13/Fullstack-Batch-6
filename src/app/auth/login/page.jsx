"use client";

//uncontrolled form component
import { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || "Login Gagal")
      }

      localStorage.setItem('token', data.token)
      setSuccess(`${data.message}. Selamat datang ${data.data.fullname}`)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <TextField label="Email" inputRef={emailRef} name="email" type="email" fullWidth />
      <TextField label="Password" inputRef={passwordRef} name="password" type="password" fullWidth />

      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}

      <Button type="submit" variant="contained" color="primary" className="w-full" disabled={loading}>
        {loading ? "Loggiing in..." : "Login"}
      </Button>
    </form>
  );
}
