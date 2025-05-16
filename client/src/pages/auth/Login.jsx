import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { axiosInstance } from '../../api/apiConfig'
import useAuth from '../../hooks/useAuth'

export default function Login() {

    const { setAccessToken, setCSRFToken, setIsLoggedIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const fromLocation = location?.state?.from?.pathname || '/'
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function onEmailChange(event) {
        setEmail(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    async function onSubmitForm(event) {
        event.preventDefault()

        setLoading(true)

        try {
            const response = await axiosInstance.post('auth/login', JSON.stringify({
                email,
                password
            }))

            setAccessToken(response?.data?.access_token)
            setCSRFToken(response.headers["x-csrftoken"])
            setIsLoggedIn(true);
            setEmail()
            setPassword()
            setLoading(false)

            navigate(fromLocation, { replace: true })
        } catch (error) {
            setLoading(false)
            // TODO: handle errors
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
                <div className="mb-6">
                <div className="bg-blue-600 w-12 h-12 mx-auto rounded-full"></div>
                </div>
                <h2 className="text-xl font-bold mb-2">Admin Log In</h2>
                <p className="text-gray-500 mb-6">Log in to your account</p>
                <form onSubmit={onSubmitForm}>
                <div className="mb-4">
                    <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="email"
                    onChange={onEmailChange}
                    required
                    />
                </div>
                <div className="mb-4 relative">
                    <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="password"
                    onChange={onPasswordChange}
                    required
                    />
                    <a
                    href="#"
                    className="absolute right-3 top-2 text-sm text-blue-500 hover:underline"
                    >
                    Forgot Password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Log In
                </button>
                </form>
            </div>
            </div>
    )
}
