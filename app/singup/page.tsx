import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both email and password are required");
    } else {
      setError("");
      // Add your login logic here (e.g., API call)
    }
  };

  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-800 text-dark-900 dark:text-light-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
        <p className="text-center text-light-500 dark:text-light-300 mb-10">
          Login to your account to continue your journey with AloveBond.
        </p>
        <div className="max-w-md mx-auto bg-white dark:bg-dark-700 shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100"
                aria-describedby="emailError"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100"
                aria-describedby="passwordError"
                placeholder="Enter your password"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary-100 text-dark-900 py-2 px-4 rounded-lg hover:bg-primary-200 transition"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-primary-100 hover:text-primary-200">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
