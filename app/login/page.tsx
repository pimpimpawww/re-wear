'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Temporary: Skip authentication for now
      setTimeout(() => {
        router.push('/');
      }, 500);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main Container - Centered with max width */}
      <div className="w-full max-w-md lg:max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left side - Illustration (Desktop only) */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/30 to-primary/10 p-12 items-center justify-center">
            <div className="max-w-sm text-center">
              <div className="relative w-72 h-72 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=800&fit=crop"
                  alt="Welcome Back"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h2>
              <p className="text-gray-600">Sign in to continue your sustainable fashion journey</p>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">LOG IN</h1>
                <p className="text-gray-600">Enter your credentials to continue</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Username / Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                    />
                    <span className="ml-2 text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-accent hover:text-accent/80 font-medium transition-colors">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent text-white py-3.5 rounded-full font-medium hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {loading ? 'Signing in...' : 'Log In'}
                </button>

                <div className="text-center text-sm">
                  <span className="text-gray-600">Don't have an account? </span>
                  <Link href="/register" className="text-accent font-medium hover:text-accent/80 transition-colors">
                    Sign up here
                  </Link>
                </div>

                {/* Social login */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl">🔵</span>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl">🔴</span>
                    <span className="text-sm font-medium">Google</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
