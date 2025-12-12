"use client";

//uncontrolled form component
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.info({ username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
				<TextField label="Username" inputRef={usernameRef} name="username" fullWidth/>
				<TextField label="Password" inputRef={passwordRef} name="password" type="password" fullWidth/>

				<Button type="submit" variant="contained" color="primary" className="w-full">
					Login
				</Button>
		</form>
  );
}
