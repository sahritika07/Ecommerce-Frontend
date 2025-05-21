"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../auth/AuthProvider"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github } from "lucide-react"

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login }: any = useAuth()
  const navigate = useNavigate()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/user/register`, {
        firstName,
        lastName,
        email,
        password,
      })

      login(response.data)
      navigate("/client")
    } catch (error: any) {
      console.error("Signup error:", error.response?.data?.message || error.message)
      alert(error.response?.data?.message || "Signup failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen  bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-600 shadow-xl">
      {/* Left Section */}
 <div className="relative hidden w-1/2 p-8 lg:block">
  <div className="h-full w-full overflow-hidden rounded-3xl ">
    <div className="flex h-full flex-col items-center justify-center px-8 text-center text-white">
      <div className="mb-6">
        <h1 className="text-6xl font-serif font-extrabold tracking-tight">Fashnova</h1>
        
      <h2 className="mb-6 text-3xl font-bold tracking-tight">Join Us. Discover Endless Style.</h2>
      </div>

      <img
  src="https://images.stockcake.com/public/f/c/6/fc617b96-8232-43fd-9387-25c69c87ae71_large/autumn-fashion-editorial-stockcake.jpg"
  alt="Women clothing fashion"
  className="mb-6 h-64 w-auto rounded-xl shadow-lg object-cover"
/>

    </div>
  </div>
</div>



      {/* Right Section */}
      <div className="flex w-full items-center justify-center bg-white/80 backdrop-blur-sm p-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-lg">
          <div className="mx-auto max-w-sm">
            <h2 className="mb-2 text-3xl font-bold text-teal-800">Sign Up </h2>
            <p className="mb-8 text-teal-600">Enter your personal data to create your account.</p>

            <form className="space-y-6" onSubmit={handleSignUp}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Input
                    className="h-12 border-teal-200 bg-teal-50/30 text-teal-900 placeholder:text-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Input
  className="h-12 border-teal-200 bg-teal-50/30 text-teal-900 placeholder:text-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 hover:border-teal-200 hover:ring-0 transition-all duration-300"
  placeholder="Last Name"
  type="text"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
/>

                </div>
              </div>

              <div className="space-y-2">
                <Input
                  className="h-12 border-teal-200 bg-teal-50/30 text-teal-900 placeholder:text-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                  placeholder="abc@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Input
                  className="h-12 border-teal-200 bg-teal-50/30 text-teal-900 placeholder:text-teal-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm text-teal-500">Must be at least 8 characters.</p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>

              <p className="text-center text-sm text-teal-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-teal-800 font-medium hover:text-emerald-700 hover:underline transition-all duration-300"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
