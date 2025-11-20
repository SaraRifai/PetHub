import React, { useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    }
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Validation successful! Logging in with:', { email, password });
      alert('Login functionality to be implemented!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-10 md:p-12">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back! <span className="text-4xl">🐾</span></h2>
          <p className="text-gray-500 mt-2">Admin Sign In</p>
        </div>

        <form onSubmit={handleLogin} noValidate>
          {/* حقل البريد الإلكتروني */}
          <div className="mb-6">
            <label className="block text-md font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded-lg py-4 px-12 text-md bg-gray-50 focus:outline-none focus:ring-2 transition ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-cyan-500'
                }`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* حقل كلمة المرور */}
          <div className="mb-6">
            <label className="block text-md font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full border rounded-lg py-4 px-12 text-md bg-gray-50 focus:outline-none focus:ring-2 transition ${
                  errors.password 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-cyan-500'
                }`}
                placeholder="••••••••"
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-md text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-md font-semibold text-cyan-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-bold py-4 text-lg rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
      </div>

      <div className="text-center text-gray-500 mt-8">
        Don't have an account? 
        <a href="#" className="font-semibold text-cyan-600 hover:underline ml-1">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default LoginPage;