"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function login(e: FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.token) {
          localStorage.setItem("token", data.data.token);
          window.location.href = "/app";
        }
        else {
          setError(data.message);
        }
      });
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Login
          </h1>
          <form method="post" onSubmit={e => login(e)}>
          <div className="flex flex-col space-y-1 mt-4">
              <label
                htmlFor="username"
                className="text-gray-700 dark:text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onInput={(e) => setUsername(e.currentTarget.value)}
                className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col space-y-1 mt-4">
              <label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onInput={(e) => setPassword(e.currentTarget.value)}
                className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
            <p className="mt-4 text-center">
              Not registered yet ?{" "}
              <Link href="/register">
              Register
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
