"use client";

import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeButton from "@/contexts/ThemeButton";

export default function NavBar() {
  return (
    <AppBar position="static" className="bg-blue-600">
      <Toolbar className="flex gap-4">
        <Link href="/" passHref>
          <Button color="inherit" className="text-white">
            Home
          </Button>
        </Link>
        <Link href="/counter" passHref>
          <Button color="inherit" className="text-white">
            Counter App
          </Button>
        </Link>
        <Link href="/reducer" passHref>
          <Button color="inherit" className="text-white">
            Reducer
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button color="inherit" className="text-white">
            About
          </Button>
        </Link>
        <div className="items-end">
          <ThemeButton />
        </div>
      </Toolbar>
    </AppBar>
  );
}
