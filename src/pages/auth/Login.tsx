"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/AuthProvider"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login }: any = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      // Handle success
      login(response.data)
      navigate("/client")
    } catch (error: any) {
      console.error("Login error:", error.response?.data?.message || error.message)
      alert(error.response?.data?.message || "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen  bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-600 shadow-xl flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 text-center">
            <h1 className="text-4xl font-serif font-extrabold tracking-tight text-teal-800 mb-1">Fashnova</h1>
            <h2 className="text-2xl font-bold text-teal-800 mt-4">Welcome Back</h2>
            <p className="text-teal-600">Sign in to continue to your account</p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-teal-800  block">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 h-12 border border-teal-400  bg-teal-50/30 text-teal-900 placeholder:text-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-teal-800 block">
                    Password
                  </label>
                  <a href="#" className="text-sm text-teal-600 hover:text-teal-800 transition">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 h-12 border border-teal-400 bg-teal-50/30 text-teal-900 placeholder:text-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300 rounded-xl"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full h-12 py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center ${isLoading ? "opacity-80" : ""} transform hover:-translate-y-0.5`}
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
                   <p className="text-center text-sm text-teal-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-teal-800 font-medium hover:text-emerald-700 hover:underline transition-all duration-300"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
